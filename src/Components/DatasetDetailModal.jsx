import React, { useState, useEffect } from 'react';
import { X, Copy, Check } from 'lucide-react';
import DatasetPricing from './DatasetPricing';
import axios from 'axios';

const DatasetDetailsModal = ({ dataset, onClose }) => {
  const [copied, setCopied] = React.useState(false);
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPricing, setShowPricing] = useState(true); // Show pricing by default

  // Fetch subscription status when modal opens
  useEffect(() => {
    const checkSubscription = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/subscriptions/${dataset.id}`);
        setSubscription(response.data);
        setShowPricing(false); // Hide pricing if subscribed
      } catch (error) {
        // If 404 or other error, user is not subscribed
        setSubscription(null);
        setShowPricing(true);
      } finally {
        setLoading(false);
      }
    };

    checkSubscription();
  }, [dataset.id]);

  const handleSelectPlan = async (plan) => {
    try {
      const response = await axios.post('http://localhost:5000/api/subscriptions/create', {
        datasetId: dataset.id,
        planId: plan.id
      });
      
      // Redirect to Stripe checkout
      window.location.href = response.data.checkoutUrl;
    } catch (error) {
      console.error('Error creating subscription:', error);
      // Handle error (show error message to user)
    }
  };

  const copyApiKey = () => {
    navigator.clipboard.writeText(subscription?.apiKeys[0]?.key);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-neutral-900 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-neutral-900 p-4 border-b border-neutral-800 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-white">{dataset.title}</h2>
          <button onClick={onClose} className="text-neutral-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
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

          {/* Show either Pricing or API Access */}
          {loading ? (
            <div className="text-center py-4">
              <p className="text-neutral-400">Loading...</p>
            </div>
          ) : showPricing ? (
            <DatasetPricing 
              dataset={dataset} 
              onSelectPlan={handleSelectPlan} 
            />
          ) : (
            /* API Access - Only shown if subscribed */
            <div className="bg-black/30 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-4">API Access</h3>
              <div className="space-y-4">
                <div className="bg-black rounded p-3 flex justify-between items-center">
                  <code className="text-orange-300 text-sm">
                    {subscription?.apiKeys[0]?.key}
                  </code>
                  <button
                    onClick={copyApiKey}
                    className="text-neutral-400 hover:text-white ml-2"
                  >
                    {copied ? <Check size={20} /> : <Copy size={20} />}
                  </button>
                </div>
                
                {/* Python Example */}
                <div>
                  <h4 className="text-white text-sm font-medium mb-2">Python Example</h4>
                  <pre className="bg-black rounded p-3 overflow-x-auto">
                    <code className="text-sm text-neutral-300">
{`import requests

API_KEY = "${subscription?.apiKeys[0]?.key}"
dataset_id = "${dataset.id}"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

# Download dataset
response = requests.get(
    f"https://api.savannahai.com/v1/datasets/{dataset_id}/download",
    headers=headers
)

with open("dataset.zip", "wb") as f:
    f.write(response.content)`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* Additional Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-white font-semibold mb-2">Dataset Details</h3>
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
              <h3 className="text-white font-semibold mb-2">Dataset Stats</h3>
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
        </div>
      </div>
    </div>
  );
};

export default DatasetDetailsModal;