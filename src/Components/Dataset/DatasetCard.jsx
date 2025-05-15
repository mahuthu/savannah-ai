import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const DatasetCard = ({ dataset }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Top Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="inline-block bg-[#1EACEB]/10 text-[#1EACEB] text-xs px-2 py-1 rounded-full mb-2">
              {dataset.type}
            </span>
            <h3 className="text-[#191D3A] font-semibold text-lg">{dataset.name}</h3>
          </div>
          {dataset.featured && (
            <span className="bg-[#4BBC30]/10 text-[#4BBC30] text-xs px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
        
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {dataset.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-2">
          {dataset.languages.slice(0, 3).map((language) => (
            <span 
              key={language} 
              className="text-xs bg-gray-100 text-slate-600 px-2 py-1 rounded"
            >
              {language}
            </span>
          ))}
          {dataset.languages.length > 3 && (
            <span className="text-xs bg-gray-100 text-slate-500 px-2 py-1 rounded">
              +{dataset.languages.length - 3} more
            </span>
          )}
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="p-4 bg-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-xs text-slate-500 mb-1">Size</p>
            <p className="text-sm text-[#191D3A] font-medium">{dataset.size} GB</p>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1">Samples</p>
            <p className="text-sm text-[#191D3A] font-medium">{dataset.samples.toLocaleString()}</p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <a 
            href={`/datasets/${dataset.id}/download`} 
            className="p-2 rounded bg-[#1EACEB]/10 text-[#1EACEB] hover:bg-[#1EACEB]/20 transition-colors"
            title="Download Dataset"
          >
            <Download size={18} />
          </a>
          <Link 
            to={`/datasets/${dataset.id}`} 
            className="p-2 rounded bg-[#1EACEB]/10 text-[#1EACEB] hover:bg-[#1EACEB]/20 transition-colors"
            title="View Details"
          >
            <ExternalLink size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DatasetCard; 