import React, { useState, useEffect } from 'react';
import { X, Copy, Check, ExternalLink, Download, FileLock2, FileBarChart, FileBox } from 'lucide-react';
import axios from 'axios';

const TabItem = ({ active, title, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 font-medium transition-colors ${
      active
        ? 'text-[#1EACEB] border-b-2 border-[#1EACEB]'
        : 'text-slate-500 hover:text-[#1EACEB]'
    }`}
  >
    {title}
  </button>
);

const DatasetDetailsModal = ({ dataset, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [subscription, setSubscription] = useState(null);
  const [copyStatus, setCopyStatus] = useState({});
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

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopyStatus({ [key]: true });
    setTimeout(() => setCopyStatus({}), 2000);
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

  const tabContent = {
    overview: (
      <div className="space-y-6 p-6">
        <div>
          <h3 className="text-[#191D3A] font-semibold mb-2">Description</h3>
          <p className="text-slate-600">{dataset.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-[#191D3A] font-semibold mb-2">Dataset Details</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-slate-500">Type:</span>
                <span className="text-[#191D3A]">{dataset.type}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-500">Size:</span>
                <span className="text-[#191D3A]">{dataset.size} GB</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-500">Samples:</span>
                <span className="text-[#191D3A]">{dataset.samples.toLocaleString()} {dataset.units}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-500">License:</span>
                <span className="text-[#191D3A]">{dataset.license}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-slate-500">Date Added:</span>
                <span className="text-[#191D3A]">{dataset.dateAdded}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#191D3A] font-semibold mb-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {dataset.languages.map(language => (
                <span 
                  key={language} 
                  className="bg-gray-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                  {language}
                </span>
              ))}
            </div>
          </div>
            </div>
            
            <div>
          <h3 className="text-[#191D3A] font-semibold mb-2">Use Cases</h3>
          <ul className="list-disc pl-5 text-slate-600">
            {dataset.useCases.map((useCase, index) => (
              <li key={index}>{useCase}</li>
            ))}
              </ul>
            </div>
          </div>
    ),
    
    schema: (
      <div className="p-6">
        <h3 className="text-[#191D3A] font-semibold mb-4">Dataset Schema</h3>
        
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-mono text-sm text-[#191D3A]">JSON Schema</span>
            <button 
              onClick={() => handleCopy(JSON.stringify(dataset.schema, null, 2), 'schema')}
              className="text-slate-500 hover:text-[#1EACEB]"
            >
              {copyStatus['schema'] ? <Check size={18} /> : <Copy size={18} />}
            </button>
                    </div>
          <pre className="bg-white p-4 rounded border border-gray-200 overflow-x-auto text-sm text-slate-800">
            {JSON.stringify(dataset.schema, null, 2)}
          </pre>
                  </div>

        <div>
          <h4 className="text-[#191D3A] font-semibold mb-2">Sample Entry</h4>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <span className="font-mono text-sm text-[#191D3A]">JSON Sample</span>
                    <button
                onClick={() => handleCopy(JSON.stringify(dataset.sampleEntry, null, 2), 'sample')}
                className="text-slate-500 hover:text-[#1EACEB]"
              >
                {copyStatus['sample'] ? <Check size={18} /> : <Copy size={18} />}
                    </button>
            </div>
            <pre className="bg-white p-4 rounded border border-gray-200 overflow-x-auto text-sm text-slate-800">
              {JSON.stringify(dataset.sampleEntry, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    ),
    
    download: (
      <div className="p-6 space-y-6">
        <div>
          <h3 className="text-[#191D3A] font-semibold mb-4">Download Options</h3>
          <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
            <p className="text-slate-600 mb-4">
              This dataset is available in multiple formats. Choose the one that suits your needs best.
            </p>
            
                <div className="space-y-4">
              <div className="flex justify-between items-center p-3 border border-gray-200 rounded bg-gray-50">
                <div className="flex items-center gap-3">
                  <FileBox className="text-[#1EACEB]" />
                  <div>
                    <p className="font-medium text-[#191D3A]">Complete Dataset</p>
                    <p className="text-sm text-slate-500">{dataset.size} GB</p>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] px-4 py-2 rounded text-white flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <Download size={16} />
                  Download
                    </button>
                  </div>
                  
              <div className="flex justify-between items-center p-3 border border-gray-200 rounded bg-gray-50">
                <div className="flex items-center gap-3">
                  <FileLock2 className="text-[#1EACEB]" />
                  <div>
                    <p className="font-medium text-[#191D3A]">Training Split</p>
                    <p className="text-sm text-slate-500">{Math.round(dataset.size * 0.8 * 10) / 10} GB</p>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] px-4 py-2 rounded text-white flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <Download size={16} />
                  Download
                </button>
              </div>
              
              <div className="flex justify-between items-center p-3 border border-gray-200 rounded bg-gray-50">
                <div className="flex items-center gap-3">
                  <FileBarChart className="text-[#1EACEB]" />
                  <div>
                    <p className="font-medium text-[#191D3A]">Validation Split</p>
                    <p className="text-sm text-slate-500">{Math.round(dataset.size * 0.2 * 10) / 10} GB</p>
                  </div>
                </div>
                <button className="bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] px-4 py-2 rounded text-white flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <Download size={16} />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-[#191D3A] font-semibold mb-4">API Access</h3>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="text-slate-600 mb-4">
              You can also access this dataset via our API. Here's an example:
            </p>
            
            <div className="bg-white p-4 rounded border border-gray-200 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-mono text-sm text-[#191D3A]">Python</span>
                <button 
                  onClick={() => handleCopy(`import requests
API_KEY = "your_api_key_here"
response = requests.get(
    "https://api.genbioai.com/v1/datasets/${dataset.id}/download",
    headers={"Authorization": f"Bearer {API_KEY}"}
)`, 'python')}
                  className="text-slate-500 hover:text-[#1EACEB]"
                >
                  {copyStatus['python'] ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
              <pre className="overflow-x-auto text-sm text-slate-800">
{`import requests
API_KEY = "your_api_key_here"
response = requests.get(
    "https://api.genbioai.com/v1/datasets/${dataset.id}/download",
    headers={"Authorization": f"Bearer {API_KEY}"}
)`}
              </pre>
            </div>
            
            <a 
              href="#" 
              className="text-[#1E4EEB] hover:text-[#4BBC30] flex items-center gap-1 transition-colors"
            >
              View complete API documentation
              <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-200 p-4">
          <div>
            <h2 className="text-xl font-bold text-[#191D3A]">{dataset.title}</h2>
            <p className="text-slate-500 text-sm">{dataset.samples.toLocaleString()} {dataset.units}</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-slate-500 hover:text-[#1EACEB] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <div className="flex space-x-4 px-4">
            <TabItem 
              active={activeTab === 'overview'} 
              title="Overview" 
              onClick={() => setActiveTab('overview')} 
            />
            <TabItem 
              active={activeTab === 'schema'} 
              title="Schema" 
              onClick={() => setActiveTab('schema')} 
            />
            <TabItem 
              active={activeTab === 'download'} 
              title="Download" 
              onClick={() => setActiveTab('download')} 
            />
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-130px)]">
          {tabContent[activeTab]}
        </div>
      </div>
    </div>
  );
};

export default DatasetDetailsModal; 