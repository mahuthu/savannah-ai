import React, { useState } from 'react';
import { Check, Copy, Terminal, Code2, Database, PlayCircle, Key } from 'lucide-react';

const ApiReference = () => {
  const [copiedCode, setCopiedCode] = useState(null);
  const [activeTab, setActiveTab] = useState('python');

  const copyToClipboard = (code, index) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(index);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const codeExamples = {
    python: {
      authentication: `import requests

API_KEY = "your_api_key_here"
BASE_URL = "https://api.genbioai.com/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}`,
      listDatasets: `# List available datasets
response = requests.get(
    f"{BASE_URL}/datasets",
    headers=headers
)

datasets = response.json()
print(datasets)`,
      downloadData: `# Download specific dataset version
dataset_id = "protein_sequences"
version = "1.0"
split = "train"  # or "test" or "validate"

response = requests.get(
    f"{BASE_URL}/datasets/{dataset_id}/versions/{version}/{split}",
    headers=headers
)

with open(f"{split}.zip", "wb") as f:
    f.write(response.content)`,
      trainModel: `# Example using transformers library
from transformers import AutoModelForSequenceClassification, Trainer

# Load the dataset
dataset = load_dataset("path/to/downloaded/data")

# Initialize model
model = AutoModelForSequenceClassification.from_pretrained("genbio-ai/aido-protein")

# Training configuration
training_args = TrainingArguments(
    output_dir="./results",
    num_train_epochs=3,
    per_device_train_batch_size=16,
    save_steps=500,
    eval_steps=100,
)

# Train
trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=dataset["train"],
    eval_dataset=dataset["validation"],
)`
    },
    javascript: {
      authentication: `const API_KEY = 'your_api_key_here';
const BASE_URL = 'https://api.genbioai.com/v1';

const headers = {
  'Authorization': \`Bearer \${API_KEY}\`,
  'Content-Type': 'application/json'
};`,
      listDatasets: `// List available datasets
const getDatasets = async () => {
  const response = await fetch(\`\${BASE_URL}/datasets\`, {
    headers
  });
  
  const datasets = await response.json();
  console.log(datasets);
};`,
      downloadData: `// Download specific dataset version
const downloadDataset = async () => {
  const datasetId = 'protein_sequences';
  const version = '1.0';
  const split = 'train'; // or 'test' or 'validate'

  const response = await fetch(
    \`\${BASE_URL}/datasets/\${datasetId}/versions/\${version}/\${split}\`,
    { headers }
  );

  const blob = await response.blob();
  // Handle the downloaded data
};`,
      trainModel: `// Example using TensorFlow.js
import * as tf from '@tensorflow/tfjs';

const trainModel = async () => {
  // Load the dataset
  const dataset = await tf.data.Dataset.load('path/to/downloaded/data');

  // Define model architecture
  const model = tf.sequential({
    layers: [
      // Add your layers here
    ]
  });

  // Compile model
  model.compile({
    optimizer: 'adam',
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy']
  });

  // Train model
  await model.fit(dataset, {
    epochs: 3,
    batchSize: 16,
    validationSplit: 0.2
  });
};`
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#191D3A]">
          API Documentation
        </h1>
        <p className="text-xl bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] text-transparent bg-clip-text font-semibold mb-2">
          Get Started with GenBio AI API
        </p>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Learn how to access and utilize our models for your research and applications.
        </p>
      </div>

      {/* API Key Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2 text-[#191D3A]">
          <Key className="text-[#1EACEB]" />
          Authentication
        </h2>
        <p className="text-slate-600 mb-4">
          All API requests require authentication using your API key. You can find your API key in your dashboard.
        </p>
      </div>

      {/* Code Examples */}
      <div className="space-y-8">
        {/* Language Tabs */}
        <div className="flex space-x-4 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('python')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'python'
                ? 'text-[#1EACEB] border-b-2 border-[#1EACEB]'
                : 'text-slate-500 hover:text-[#1EACEB]'
            }`}
          >
            Python
          </button>
          <button
            onClick={() => setActiveTab('javascript')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'javascript'
                ? 'text-[#1EACEB] border-b-2 border-[#1EACEB]'
                : 'text-slate-500 hover:text-[#1EACEB]'
            }`}
          >
            JavaScript
          </button>
        </div>

        {/* Code Blocks */}
        {Object.entries(codeExamples[activeTab]).map(([section, code], index) => (
          <div key={section} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold capitalize text-[#191D3A]">
                {section.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <button
                onClick={() => copyToClipboard(code, index)}
                className="text-slate-500 hover:text-[#1EACEB] transition-colors"
              >
                {copiedCode === index ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>
            <pre className="bg-white p-4 rounded-lg overflow-x-auto border border-gray-200">
              <code className="text-slate-800 text-sm">{code}</code>
            </pre>
          </div>
        ))}
      </div>

      {/* Additional Resources */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <a href="#" className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#1EACEB] transition-colors">
          <Terminal className="w-8 h-8 text-[#4BBC30] mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-[#191D3A]">CLI Tool</h3>
          <p className="text-slate-600 text-sm">
            Download our command-line tool for easier dataset management.
          </p>
        </a>
        <a href="#" className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#1EACEB] transition-colors">
          <Code2 className="w-8 h-8 text-[#4BBC30] mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-[#191D3A]">SDK Reference</h3>
          <p className="text-slate-600 text-sm">
            Explore our SDK documentation for your preferred language.
          </p>
        </a>
        <a href="#" className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-[#1EACEB] transition-colors">
          <PlayCircle className="w-8 h-8 text-[#4BBC30] mb-4" />
          <h3 className="text-lg font-semibold mb-2 text-[#191D3A]">Tutorials</h3>
          <p className="text-slate-600 text-sm">
            Watch video tutorials on how to use our API effectively.
          </p>
        </a>
      </div>
    </div>
  );
};

export default ApiReference;