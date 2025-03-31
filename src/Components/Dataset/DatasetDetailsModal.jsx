import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Info } from 'lucide-react';
import axios from 'axios';

const DatasetDetailsModal = ({ dataset, onClose }) => {
  const [activeTab, setActiveTab] = useState('details');
  const [subscription, setSubscription] = useState(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSubscription = async () => {
      try {
        const response = await axios.get(`/api/subscriptions/${dataset.id}`);
        setSubscription(response.data);
      } catch (error) {
        setSubscription(null);
      } finally {
        setLoading(false);
      }
    };

    checkSubscription();
  }, [dataset.id]);

  const copyApiKey = () => {
    if (subscription?.apiKeys[0]?.key) {
      navigator.clipboard.writeText(subscription.apiKeys[0].key);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSelectPlan = async (plan) => {
    try {
      const response = await axios.post('/api/subscriptions/create', {
        planId: plan.id,
        datasetId: dataset.id
      });
      window.location.href = response.data.checkoutUrl;
    } catch (error) {
      console.error('Error creating subscription:', error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-neutral-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="sticky top-0 bg-neutral-900 p-4 border-b border-neutral-800 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">{dataset.title}</h2>
          <button onClick={onClose} className="text-neutral-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-8">
          {/* Dataset Type and Stats */}
          <div className="flex flex-wrap gap-4 items-center">
            <span className="bg-red-500/10 text-red-300 px-3 py-1 rounded-full text-sm">
              {dataset.type}
            </span>
            <span className="text-orange-300">
              {dataset.samples.toLocaleString()} {dataset.units}
            </span>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-white font-semibold mb-2">Description</h3>
            <p className="text-neutral-400">{dataset.description}</p>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-white font-semibold mb-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {dataset.languages.map(language => (
                <span key={language} className="bg-neutral-800 text-neutral-300 px-2 py-1 rounded text-sm">
                  {language}
                </span>
              ))}
            </div>
          </div>

          {/* Dataset Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-white font-semibold mb-3">Dataset Details</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-neutral-400">Version</span>
                  <span className="text-white">{dataset.version}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-neutral-400">Format</span>
                  <span className="text-white">{dataset.formats?.join(', ')}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-neutral-400">License</span>
                  <span className="text-white">{dataset.license}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-neutral-400">Last Updated</span>
                  <span className="text-white">{dataset.lastUpdated}</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-3">Dataset Stats</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-neutral-400">Total Size</span>
                  <span className="text-white">{dataset.totalSize}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-neutral-400">Train Samples</span>
                  <span className="text-white">{dataset.versions?.[0]?.stats?.trainSamples?.toLocaleString()}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-neutral-400">Test Samples</span>
                  <span className="text-white">{dataset.versions?.[0]?.stats?.testSamples?.toLocaleString()}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-neutral-400">Validation Samples</span>
                  <span className="text-white">{dataset.versions?.[0]?.stats?.validateSamples?.toLocaleString()}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Pricing Plans */}
          <div className="border-t border-neutral-800 pt-8">
            <h3 className="text-white font-semibold mb-6">Access Plans</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.values(dataset.pricing).map((plan) => (
                <div
                  key={plan.id}
                  className="bg-neutral-900/50 rounded-xl p-6 flex flex-col border border-neutral-800 hover:border-orange-500 transition-colors"
                >
                  <div className="text-center pb-4 border-b border-neutral-800">
                    <h4 className="text-lg font-bold text-white mb-2">{plan.name}</h4>
                    <div className="mb-2">
                      <span className="text-2xl font-bold text-orange-300">
                        ${plan.price}
                      </span>
                      <span className="text-neutral-400">/month</span>
                    </div>
                    <p className="text-sm text-neutral-400">
                      {plan.apiCalls ? `${plan.apiCalls.toLocaleString()} API calls/month` : 'Unlimited API calls'}
                    </p>
                  </div>

                  <ul className="space-y-3 my-4 flex-grow text-sm">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-neutral-300">
                        <Check size={16} className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {subscription?.plan === plan.name ? (
                    <button
                      disabled
                      className="w-full py-2 px-4 rounded-lg bg-green-500/20 text-green-300 font-medium cursor-not-allowed"
                    >
                      Current Plan
                    </button>
                  ) : (
                    <button
                      onClick={() => handleSelectPlan(plan)}
                      className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-red-500 to-orange-300 text-white font-medium hover:opacity-90 transition-opacity"
                    >
                      Select Plan
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* API Access - Only shown for subscribed users */}
          {subscription && (
            <div className="border-t border-neutral-800 pt-8">
              <div className="bg-black/30 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-4">API Access</h3>
                <div className="space-y-4">
                  <div className="bg-black rounded p-3 flex justify-between items-center">
                    <code className="text-orange-300 text-sm">
                      {subscription.apiKeys[0].key}
                    </code>
                    <button
                      onClick={copyApiKey}
                      className="text-neutral-400 hover:text-white ml-2"
                    >
                      {copied ? <Check size={20} /> : <Copy size={20} />}
                    </button>
                  </div>
                  
                  <div>
                    <h4 className="text-white text-sm font-medium mb-2">Python Example</h4>
                    <pre className="bg-black rounded p-3 overflow-x-auto">
                      <code className="text-sm text-neutral-300">
                        {`import requests\n\nAPI_KEY = "${subscription.apiKeys[0].key}"\ndataset_id = "${dataset.id}"\n\nheaders = {\n    "Authorization": f"Bearer {API_KEY}",\n    "Content-Type": "application/json"\n}\n\n# Download dataset\nresponse = requests.get(\n    f"https://api.savannahai.com/v1/datasets/{dataset.id}/download",\n    headers=headers\n)\n\nwith open("dataset.zip", "wb") as f:\n    f.write(response.content)`}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DatasetDetailsModal; 