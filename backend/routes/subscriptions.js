const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const { createSubscription, getSubscription, handleWebhook } = require('../controllers/subscription');

// Test route
router.get('/test', (req, res) => {
  res.json({ message: 'Subscription routes working' });
});

console.log("passed")
// Create subscription
router.post('/create', protect, createSubscription);

// Get subscription
router.get('/:datasetId', protect, getSubscription);

// Webhook
router.post(
  '/webhook',
  express.raw({ type: 'application/json' }),
  handleWebhook
);

module.exports = router;