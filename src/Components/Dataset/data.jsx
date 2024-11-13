import React, { useState, useEffect, useMemo } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import axios from 'axios';
import DatasetDetailsModal from '../DatasetDetailModal';

// Add this before the DatasetCatalog component
const filterOptions = {
  type: ['Audio', 'Text', 'Image', 'Video'],
  useCase: ['Speech Recognition', 'Translation', 'Classification', 'Object Detection'],
  language: ['English', 'Swahili', 'Yoruba', 'Amharic', 'Zulu'],
  units: ['Hours', 'Samples', 'Images', 'Videos']
};

const DatasetCatalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState({
    type: [],
    useCase: [],
    language: [],
    units: []
  });
  const [openFilter, setOpenFilter] = useState(null);
  const [datasets, setDatasets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDataset, setSelectedDataset] = useState(null);
  const [apiKey, setApiKey] = useState("your_api_key_here"); // You'll get this from your auth context/state

  // Add some dummy data for testing
  const dummyData = [
    {
      id: "kiswahili_common_voice",
      type: 'Audio',
      title: 'Kiswahili Common Voice',
      description: 'A collection of Swahili voice recordings for speech recognition.',
      languages: ['Swahili'],
      samples: 10000,
      units: 'Hours',
      version: "1.0",
      formats: ["wav", "mp3"],
      license: "CC-BY-4.0",
      lastUpdated: "2024-03-15",
      totalSize: "50GB",
      versions: [
        {
          version: "1.0",
          stats: {
            trainSamples: 8000,
            testSamples: 1000,
            validateSamples: 1000
          }
        }
      ]
    }
  ];

  useEffect(() => {
    const fetchDatasets = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/api/datasets', {
          params: {
            type: activeFilters.type.join(','),
            language: activeFilters.language.join(','),
            useCase: activeFilters.useCase.join(','),
            units: activeFilters.units.join(','),
            search: searchQuery
          }
        });
        setDatasets(response.data || []); // Ensure it's always an array
      } catch (err) {
        setError('Error fetching datasets');
        console.error(err);
        setDatasets([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };

    // For testing, use dummy data instead of API call
    setDatasets(dummyData);
    setLoading(false);

    // Uncomment this when your API is ready
    // fetchDatasets();
  }, [searchQuery, activeFilters]);

  // Add loading and error states
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-white">Loading datasets...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  const handleFilterChange = (category, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter(item => item !== value)
        : [...prev[category], value]
    }));
  };

  const toggleFilter = (category) => {
    setOpenFilter(openFilter === category ? null : category);
  };

  const handleViewDetails = (dataset) => {
    setSelectedDataset(dataset);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Pre-Labeled Datasets
        </h2>
        <p className="text-xl sm:text-2xl bg-gradient-to-r from-orange-200 to-red-300 text-transparent bg-clip-text font-bold mb-4">
          Accelerate your AI projects with licensable datasets
        </p>
        <p className="text-base sm:text-lg text-lime-200 max-w-4xl mx-auto mb-8">
          Browse our extensive catalog of over 270 audio, image, video and text datasets in over 80 languages. 
          Our pre-labeled datasets are available immediately so you can get started right away.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative max-w-2xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search datasets..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-3 pl-12 rounded-lg bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:border-orange-500"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400" size={20} />
      </div>

      {/* Mobile Filters (Dropdown Style) */}
      <div className="md:hidden space-y-4 mb-8">
        {Object.entries(filterOptions).map(([category, options]) => (
          <div key={category} className="bg-neutral-900 rounded-lg">
            <button
              onClick={() => toggleFilter(category)}
              className="w-full px-4 py-3 flex justify-between items-center text-white border-b border-neutral-800"
            >
              <span className="text-red-300 font-semibold capitalize">{category}</span>
              {openFilter === category ? 
                <ChevronUp className="w-5 h-5" /> : 
                <ChevronDown className="w-5 h-5" />
              }
            </button>
            {openFilter === category && (
              <div className="p-4 space-y-2 border-t border-neutral-800">
                {options.map((option) => (
                  <label key={option} className="flex items-center space-x-2 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={activeFilters[category].includes(option)}
                      onChange={() => handleFilterChange(category, option)}
                      className="rounded border-neutral-700 text-orange-500 focus:ring-orange-500"
                    />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Filters */}
      <div className="hidden md:grid md:grid-cols-4 gap-6 mb-8">
        {Object.entries(filterOptions).map(([category, options]) => (
          <div key={category} className="bg-neutral-900 rounded-lg p-4">
            <h3 className="text-red-300 font-semibold mb-3 capitalize">{category}</h3>
            <div className="space-y-2">
              {options.map((option) => (
                <label key={option} className="flex items-center space-x-2 text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={activeFilters[category].includes(option)}
                    onChange={() => handleFilterChange(category, option)}
                    className="rounded border-neutral-700 text-orange-500 focus:ring-orange-500"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Dataset Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.isArray(datasets) && datasets.length > 0 ? (
          datasets.map(dataset => (
            <div key={dataset.id} className="bg-neutral-900 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-4">
                <span className="inline-block bg-red-500/10 text-red-300 text-sm px-2 py-1 rounded mb-2">
                  {dataset.type}
                </span>
                <h3 className="text-white text-lg font-semibold mb-2">{dataset.title}</h3>
                <p className="text-neutral-400 text-sm mb-4">
                  {dataset.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {dataset.languages.map(language => (
                    <span key={language} className="text-xs bg-neutral-800 text-neutral-300 px-2 py-1 rounded">
                      {language}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-orange-300">{dataset.samples.toLocaleString()} {dataset.units}</span>
                  <button 
                    onClick={() => handleViewDetails(dataset)}
                    className="bg-gradient-to-r from-red-500 to-orange-300 px-4 py-2 rounded-md text-white text-sm hover:opacity-90"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-neutral-400">No datasets found</p>
          </div>
        )}
      </div>

      {selectedDataset && (
        <DatasetDetailsModal
          dataset={selectedDataset}
          apiKey={apiKey}
          onClose={() => setSelectedDataset(null)}
        />
      )}
    </div>
  );
};

export default DatasetCatalog;