import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Copy, Check, ArrowLeft } from 'lucide-react';
import axios from 'axios';
import DatasetPricing from '../Components/DatasetPricing';

const DatasetDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dataset, setDataset] = useState(null);
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const [showPricing, setShowPricing] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch dataset details
        const datasetResponse = await axios.get(`http://localhost:5000/api/datasets/${id}`);
        setDataset(datasetResponse.data);

        // Check subscription status
        try {
          const subscriptionResponse = await axios.get(`http://localhost:5000/api/subscriptions/${id}`);
          setSubscription(subscriptionResponse.data);
          setShowPricing(false);
        } catch (error) {
          // If 404 or other error, user is not subscribed
          setSubscription(null);
          setShowPricing(true);
        }
      } catch (error) {
        console.error('Error fetching dataset:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

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
    }
  };

  const copyApiKey = () => {
    navigator.clipboard.writeText(subscription?.apiKeys[0]?.key);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white p-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-center">Loading dataset details...</p>
        </div>
      </div>
    );
  }

  if (!dataset) {
    return (
      <div className="min-h-screen bg-neutral-950 text-white p-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-center">Dataset not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Header */}
      <div className="border-b border-neutral-800">
        <div className="max-w-7xl mx-auto p-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-neutral-400 hover:text-white mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Datasets
          </button>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{dataset.title}</h1>
              <div className="flex flex-wrap gap-4 items-center">
                <span className="bg-red-500/10 text-red-300 px-3 py-1 rounded-full text-sm">
                  {dataset.type}
                </span>
                <span className="text-orange-300">
                  {dataset.samples.toLocaleString()} {dataset.units}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-8">
        <div className="space-y-12">
          {/* Top Section: Description and Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Description */}
            <section>
              <h2 className="text-xl font-semibold mb-4">About this Dataset</h2>
              <p className="text-neutral-400 leading-relaxed">{dataset.description}</p>
            </section>

            {/* Languages */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Supported Languages</h2>
              <div className="flex flex-wrap gap-2">
                {dataset.languages.map(language => (
                  <span key={language} className="bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full text-sm">
                    {language}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Dataset Stats */}
          <section>
            <h2 className="text-xl font-semibold mb-6">Dataset Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-neutral-900 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">General Info</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-neutral-400">Version</span>
                    <span>{dataset.version}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-400">Format</span>
                    <span>{dataset.formats?.join(', ')}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-400">License</span>
                    <span>{dataset.license}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-400">Last Updated</span>
                    <span>{dataset.lastUpdated}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-900 rounded-lg p-6">
                <h3 className="text-lg font-medium mb-4">Sample Distribution</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-neutral-400">Total Size</span>
                    <span>{dataset.totalSize}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-400">Train Samples</span>
                    <span>{dataset.versions?.[0]?.stats?.trainSamples?.toLocaleString()}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-400">Test Samples</span>
                    <span>{dataset.versions?.[0]?.stats?.testSamples?.toLocaleString()}</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-400">Validation Samples</span>
                    <span>{dataset.versions?.[0]?.stats?.validateSamples?.toLocaleString()}</span>
                  </li>
                </ul>
              </div>

              {!showPricing && subscription && (
                <div className="bg-neutral-900 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">Subscription Status</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between">
                      <span className="text-neutral-400">Plan</span>
                      <span className="text-orange-300 font-medium">{subscription?.plan}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-neutral-400">Status</span>
                      <span className="text-green-500">{subscription?.status}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-neutral-400">API Calls</span>
                      <span>{subscription?.apiKeys[0]?.calls} / {subscription?.apiCallLimit}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-neutral-400">Renewal</span>
                      <span>{new Date(subscription?.currentPeriodEnd).toLocaleDateString()}</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </section>

          {/* API Access Section - Only shown if subscribed */}
          {!showPricing && subscription && (
            <section className="bg-neutral-900 rounded-lg p-8">
              <h2 className="text-xl font-semibold mb-6">API Access</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Your API Key</h3>
                  <div className="bg-black rounded p-4 flex justify-between items-center">
                    <code className="text-orange-300 text-sm">
                      {subscription?.apiKeys[0]?.key}
                    </code>
                    <button
                      onClick={copyApiKey}
                      className="text-neutral-400 hover:text-white ml-4"
                    >
                      {copied ? <Check size={20} /> : <Copy size={20} />}
                    </button>
                  </div>
                </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-4">Python Example</h3>
                  <pre className="bg-black rounded p-4 overflow-x-auto">
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
            </section>
          )}

          {/* Pricing Section */}
          {showPricing && (
            <section className="bg-neutral-900/50 rounded-lg p-8">
              <DatasetPricing 
                dataset={dataset} 
                onSelectPlan={handleSelectPlan} 
              />
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default DatasetDetails;