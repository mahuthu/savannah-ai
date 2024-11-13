import React from 'react';
import { Building2, Shield, Users, Database, Coins } from 'lucide-react'; // Import icons

const AboutCompany = () => {
  const features = [
    {
      icon: <Database className="w-8 h-8 text-red-300" />,
      title: "Local Data Access",
      description: "Bridging the gap by providing secure, affordable, and easily accessible datasets tailored to the African context."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-300" />,
      title: "Secure Platform",
      description: "Offering a secure platform for data storage that adheres to local and international compliance standards."
    },
    {
      icon: <Users className="w-8 h-8 text-red-300" />,
      title: "Seamless Collaboration",
      description: "Integrated tools for efficient team collaboration, perfect for remote teams working with annotated datasets."
    },
    {
      icon: <Coins className="w-8 h-8 text-red-300" />,
      title: "Data Monetization",
      description: "Platform for organizations to monetize their datasets through secure licensing agreements."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Empowering African AI
          <span className="block mt-2 bg-gradient-to-r from-orange-200 to-red-300 text-transparent bg-clip-text">
            Through Quality Data
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
          Revolutionizing AI development across Africa by providing accessible, high-quality datasets
        </p>
      </div>

      {/* Mission Statement */}
      <div className="bg-neutral-900/50 rounded-xl p-8 mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-red-300 mb-4">Our Mission</h2>
        <p className="text-white/90 leading-relaxed">
          AI startups across Africa face significant challenges in accessing reliable, high-quality local data to train and deploy effective models. With limited data infrastructure and high costs associated with sourcing and storing data, innovation is often slowed, and opportunities are missed.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-neutral-900 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-neutral-800/50 rounded-lg p-3">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-300 mb-2">
                  {feature.title}
                </h3>
                <p className="text-neutral-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Value Proposition */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-neutral-900/50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-red-300 mb-4">Local Context</h3>
          <p className="text-white/90 leading-relaxed">
            By offering datasets specifically curated to reflect local contexts, Savannah AI enables startups to build AI models that are more relevant and effective in their markets.
          </p>
        </div>
        <div className="bg-neutral-900/50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-red-300 mb-4">Data Security</h3>
          <p className="text-white/90 leading-relaxed">
            Savannah AI offers a secure platform for data storage that adheres to local and international compliance standards, alleviating startups' concerns about data breaches and regulatory issues.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Ready to Transform Your AI Development?
        </h2>
        <button className="bg-gradient-to-r from-red-500 to-orange-300 px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity">
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default AboutCompany;