import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import hospitalImage from '../assets/hosp1.jpeg'; // Replace with your actual image path
import agricultureImage from '../assets/agriculture.jpg'; // Replace with your actual image path

const CustomerStories = () => {
  const [activeStory, setActiveStory] = useState('healthcare');

  const customerStories = {
    healthcare: {
      logo: "Hopkins Hospital Bungoma", // Replace with actual client logo/image path
      title: "Digitizing Medical Records to Prevent Misdiagnosis",
      description: "In partnership with Hopkins Hospital in Bungoma, Savannah AI deployed the TIBA HIMS platform to digitize handwritten and paper-based medical records using AI-driven OCR and NER. This streamlined access to patient history, improved operational efficiency, and significantly lowered misdiagnosis rates by enabling real-time decision support for clinicians.",
      image: hospitalImage,
      stats: [
        { value: "20%", label: "Reduction in Misdiagnosis" },
        { value: "1K+", label: "Patient Records Digitized" }
      ],
      link: "/case-studies/hopkins"
    },
    agriculture: {
      logo: "Gosheco Kenya", // Replace with actual client logo/name
      title: "Optimizing Crop Yields with Predictive Climate Analytics",
      description: "Savannah AI provided real-time crop monitoring and climate prediction models for a large-scale agricultural cooperative, resulting in 32% yield improvements across staple crops. By analyzing soil conditions, historical weather patterns, and plant health indicators, our AI models delivered actionable insights that supported precision farming and resource optimization.",
      image: agricultureImage,
      stats: [
        { value: "32%", label: "Yield Increase" },
        { value: "40%", label: "Water Savings" }
      ],
      link: "/case-studies/gosheco"
    }
  };

  const activeContent = customerStories[activeStory];

  return (
    <div className="bg-white/10">
      <div className="container mx-auto px-4 ">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-[#191D3A]">
            Real-world Impact
          </h2>
          <p className="text-xl sm:text-2xl bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] text-transparent bg-clip-text font-bold mb-4">
            How organizations leverage Savannah AI's data infrastructure
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-10 justify-center max-w-2xl mx-auto">
          <button 
            onClick={() => setActiveStory('healthcare')}
            className={`py-3 px-6 font-medium text-lg ${
              activeStory === 'healthcare'
                ? 'border-b-2 border-[#1EACEB] text-[#1EACEB]'
                : 'text-slate-500 hover:text-[#1E4EEB]'
            } transition-colors`}
          >
            Healthcare
          </button>
          <button 
            onClick={() => setActiveStory('agriculture')}
            className={`py-3 px-6 font-medium text-lg ${
              activeStory === 'agriculture'
                ? 'border-b-2 border-[#4BBC30] text-[#4BBC30]'
                : 'text-slate-500 hover:text-[#4BBC30]'
            } transition-colors`}
          >
            Agriculture
          </button>
        </div>

        {/* Case Study Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Left Column - Case Details */}
          <div className="order-2 md:order-1">
            <div className="mb-6">
              <span className="text-xl font-semibold text-[#191D3A]">
                {activeContent.logo}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#191D3A] mb-6">
              {activeContent.title}
            </h3>

            <p className="text-slate-700 leading-relaxed mb-8">
              {activeContent.description}
            </p>

            {/* Stats */}
            <div className="flex space-x-10 mb-8">
              {activeContent.stats.map((stat, index) => (
                <div key={index}>
                  <div className={`text-3xl font-bold ${
                    activeStory === 'healthcare' ? 'text-[#1EACEB]' : 'text-[#4BBC30]'
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-500 text-sm">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <a 
              href={activeContent.link}
              className={`inline-flex items-center space-x-2 font-medium ${
                activeStory === 'healthcare' ? 'text-[#1EACEB]' : 'text-[#4BBC30]'
              } hover:opacity-80 transition-opacity`}
            >
              <span>Read Full Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 md:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-xl h-64 md:h-80 lg:h-96">
              <img 
                src={activeContent.image} 
                alt={activeContent.title} 
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${
                activeStory === 'healthcare' 
                  ? 'from-[#1E4EEB]/20 to-[#1EACEB]/40' 
                  : 'from-[#4BBC30]/20 to-[#1EACEB]/40'
              }`}>
              </div>
            </div>
          </div>
        </div>

        {/* View All Cases Link */}
        <div className="text-center mt-16">
          <a 
            href="/case-studies" 
            className="inline-flex items-center space-x-2 text-[#191D3A] hover:text-[#1EACEB] font-medium transition-colors"
          >
            <span>View all case studies</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CustomerStories; 