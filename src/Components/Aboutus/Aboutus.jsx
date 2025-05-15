import React from 'react';
import image1 from "../../assets/afroprompts3.png";
import image2 from "../../assets/nairobi2.jpg";
import { ArrowRight, Globe, Database, Brain, Users } from 'lucide-react';

const AboutUs = () => {
  const features = [
    {
      icon: <Globe className="w-8 h-8 text-[#4BBC30]" />,
      title: "African Focus",
      description: "Specialized in providing data solutions tailored for African markets and use cases."
    },
    {
      icon: <Database className="w-8 h-8 text-[#1EACEB]" />,
      title: "Quality Data",
      description: "High-quality, curated datasets that power effective AI models."
    },
    {
      icon: <Brain className="w-8 h-8 text-[#4BBC30]" />,
      title: "AI Innovation",
      description: "Enabling AI development across African enterprises and institutions."
    },
    {
      icon: <Users className="w-8 h-8 text-[#1EACEB]" />,
      title: "Local Expertise",
      description: "Deep understanding of local contexts and requirements."
    }
  ];

  return (
    <div className="relative py-20 overflow-hidden bg-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#4BBC30]/10 text-[#4BBC30] rounded-full px-4 py-2 text-sm font-medium uppercase tracking-wider mb-6">
            About Us
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] text-transparent bg-clip-text">
              Savannah AI
            </span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed mb-8">
              Make the best models with the best data. Savannah AI powers the development of AI across African enterprises and institutions with the most relevant, high-quality data.
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:transform hover:-translate-y-1 transition-all duration-300 border border-gray-100"
            >
              <div className="bg-gray-50 rounded-lg p-3 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1E4EEB] mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-white to-gray-50 shadow-lg rounded-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#1E4EEB] mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              We bridge the gap in AI development across Africa by providing secure, affordable, and easily accessible datasets tailored to the African context—empowering organizations to build impactful solutions.
            </p>
            <button className="bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 mx-auto group">
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
