import React from 'react';
import { Database, BrainCircuit, FileCheck, BarChart4, Building2, ShieldCheck } from 'lucide-react'; // Fixed icon imports

const AboutCompany = () => {
  const healthcareColor = "from-[#1E4EEB] to-[#1EACEB]"; // Healthcare blue gradient
  const agricultureColor = "from-[#4BBC30] to-[#1EACEB]"; // Agriculture green-blue gradient

  const features = [
    {
      icon: <Database className="w-8 h-8 text-[#1EACEB]" />,
      title: "Healthcare Datasets",
      description: "Comprehensive patient data, medical imaging collections, and diagnostic information tailored for African healthcare solutions."
    },
    {
      icon: <FileCheck className="w-8 h-8 text-[#4BBC30]" />,
      title: "Agriculture Datasets",
      description: "Extensive crop data, soil analytics, and climate information specific to regional farming challenges and opportunities."
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-[#1EACEB]" />,
      title: "AI-Ready Models",
      description: "Pre-trained models like TIBA for healthcare diagnostics and specialized agriculture prediction tools ready for implementation."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#4BBC30]" />,
      title: "Secure Licensing",
      description: "Flexible, compliant data licensing frameworks that protect privacy while enabling innovation."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 bg-white/10 pt-24 mt-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        {/* <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#191D3A]">
          Empowering Innovation
          <span className="block mt-2 bg-gradient-to-r from-[#1E4EEB] to-[#1EACEB] text-transparent bg-clip-text">
            Through Quality Data & Models
          </span>
        </h1> */}
        
        <p className="text-lg sm:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
          Accelerating AI development across Africa by providing accessible, high-quality datasets and models in healthcare and agriculture
        </p>
      </div>

      {/* Mission Statement */}
      <div className="bg-gray-50 rounded-xl p-8 mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#191D3A] mb-4">Our Mission</h2>
        <div className="gradient-line w-20 h-1 bg-gradient-to-r from-[#1E4EEB] to-[#4BBC30] mb-8"></div>
        <p className="text-slate-700 leading-relaxed">
          AI innovation across Africa faces significant challenges in accessing reliable, high-quality local data. Savannah AI addresses this gap by providing specialized datasets and models for healthcare and agriculture, enabling organizations to build solutions that address local challenges while meeting global standards.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-white rounded-lg p-3 shadow-sm">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#191D3A] mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Industry Focus */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-gradient-to-r from-[#1E4EEB]/5 to-[#1EACEB]/5 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-[#191D3A] mb-4">Healthcare Focus</h3>
          <div className="gradient-line w-20 h-1 bg-gradient-to-r from-[#1E4EEB] to-[#1EACEB] mb-8"></div>
          <p className="text-slate-700 leading-relaxed">
            Our TIBA platform combines advanced machine learning with real-world patient data, enhancing clinical decision-making and reducing misdiagnosis. By providing AI-ready healthcare datasets, we enable organizations to develop solutions that address local healthcare challenges with precision.
          </p>
        </div>
        <div className="bg-gradient-to-r from-[#4BBC30]/5 to-[#1EACEB]/5 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-[#191D3A] mb-4">Agriculture Innovation</h3>
          <div className="gradient-line w-20 h-1 bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] mb-8"></div>
          <p className="text-slate-700 leading-relaxed">
            Through our agricultural datasets and AI models, researchers and organizations can monitor crop health, predict disease outbreaks, and optimize yields. Our solutions provide insights tailored to local farming conditions, enabling climate-smart practices and food security advancement.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center max-w-3xl mx-auto py-12 bg-gradient-to-r from-[#1E4EEB]/5 to-[#4BBC30]/5 rounded-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#191D3A] mb-6">
          Ready to Transform Your AI Development?
        </h2>
        <p className="text-slate-700 mb-8">
          Discover how our datasets and models can accelerate your organization's innovation in healthcare and agriculture.
        </p>
        <button className="bg-gradient-to-r from-[#1E4EEB] to-[#1EACEB] px-8 py-4 rounded-md text-white font-medium hover:opacity-90 transition-opacity">
          Request Access
        </button>
      </div>
    </div>
  );
};

export default AboutCompany;