const crypto = require('crypto');
const Subscription = require('../models/Subscription');

class ApiKeyService {
  generateApiKey() {
    return `sav_${crypto.randomBytes(32).toString('hex')}`;
  }

  async createApiKey(subscriptionId, name) {
    const key = this.generateApiKey();
    
    await Subscription.findByIdAndUpdate(subscriptionId, {
      $push: {
        apiKeys: {
          key,
          name,
          createdAt: new Date(),
          calls: 0
        }
      }
    });

    return key;
  }

  async incrementApiCalls(apiKey) {
    await Subscription.findOneAndUpdate(
      { 'apiKeys.key': apiKey },
      { 
        $inc: { 'apiKeys.$.calls': 1 },
        $set: { 'apiKeys.$.lastUsed': new Date() }
      }
    );
  }
}

module.exports = new ApiKeyService();