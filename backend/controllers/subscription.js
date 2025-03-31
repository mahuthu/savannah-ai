const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Subscription = require('../models/Subscription');
const crypto = require('crypto');

const generateApiKey = () => {
  return `sav_${crypto.randomBytes(32).toString('hex')}`;
};

// Create subscription - as a callback function
exports.createSubscription = function(req, res) {
  console.log('Creating subscription...'); // Debug log
  return async (req, res) => {
    try {
      const { planId, datasetId } = req.body;
      
      // Check if user already has a subscription for this dataset
      const existingSubscription = await Subscription.findOne({
        userId: req.user.id,
        datasetId,
        status: 'active'
      });

      if (existingSubscription) {
        return res.status(400).json({
          error: 'You already have an active subscription for this dataset'
        });
      }

      // Create or retrieve Stripe customer
      let customer = await stripe.customers.create({
        email: req.user.email,
        metadata: {
          userId: req.user.id
        }
      });

      // Create checkout session
      const session = await stripe.checkout.sessions.create({
        customer: customer.id,
        payment_method_types: ['card'],
        line_items: [{
          price: planId,
          quantity: 1,
        }],
        mode: 'subscription',
        success_url: `${process.env.FRONTEND_URL}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.FRONTEND_URL}/datasets`,
        metadata: {
          datasetId,
          userId: req.user.id
        }
      });

      res.json({ checkoutUrl: session.url });
    } catch (error) {
      console.error('Subscription error:', error);
      res.status(500).json({ error: 'Error creating subscription' });
    }
  };
};

// Get subscription - as a callback function
exports.getSubscription = function(req, res) {
  console.log('Getting subscription...'); // Debug log
  return async (req, res) => {
    try {
      const subscription = await Subscription.findOne({
        userId: req.user.id,
        datasetId: req.params.datasetId,
        status: 'active'
      });

      if (!subscription) {
        return res.status(404).json({ error: 'No active subscription found' });
      }

      res.json(subscription);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching subscription' });
    }
  };
};

// Handle webhook - as a callback function
exports.handleWebhook = function(req, res) {
  console.log('Handling webhook...'); // Debug log
  return async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    switch (event.type) {
      case 'checkout.session.completed':
        await handleCheckoutComplete(event.data.object);
        break;
      case 'customer.subscription.deleted':
        await handleSubscriptionCanceled(event.data.object);
        break;
    }

    res.json({ received: true });
  };
};

// Helper functions remain the same
async function handleCheckoutComplete(session) {
  try {
    const { datasetId, userId } = session.metadata;
    const subscriptionId = session.subscription;

    // Get subscription details from Stripe
    const stripeSubscription = await stripe.subscriptions.retrieve(subscriptionId);

    // Create API key
    const apiKey = generateApiKey();

    // Create subscription record
    await Subscription.create({
      userId,
      datasetId,
      stripeCustomerId: session.customer,
      stripeSubscriptionId: subscriptionId,
      plan: stripeSubscription.items.data[0].price.nickname,
      status: 'active',
      currentPeriodStart: new Date(stripeSubscription.current_period_start * 1000),
      currentPeriodEnd: new Date(stripeSubscription.current_period_end * 1000),
      apiKeys: [{
        key: apiKey,
        name: 'Default Key',
        createdAt: new Date(),
        calls: 0
      }]
    });
  } catch (error) {
    console.error('Error handling checkout completion:', error);
  }
}

async function handleSubscriptionCanceled(subscription) {
  try {
    await Subscription.findOneAndUpdate(
      { stripeSubscriptionId: subscription.id },
      { 
        status: 'canceled',
        canceledAt: new Date()
      }
    );
  } catch (error) {
    console.error('Error handling subscription cancellation:', error);
  }
}