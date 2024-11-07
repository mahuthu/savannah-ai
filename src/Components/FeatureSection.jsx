import React from 'react';
import { Database, Brain, BarChart3, Rocket, LightbulbIcon, GraduationCap } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      text: "Data Collection and Annotation",
      description:
        "Leverage high-quality data collection and annotation services to train AI models that truly understand African contexts.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      text: "Custom Model Training",
      description:
        "Create and fine-tune AI models specifically for industries across Africa, utilizing relevant data to ensure optimal performance.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      text: "AI-Driven Insights & Analytics",
      description:
        "Transform raw data into actionable insights using advanced AI analytics tailored to regional market needs and trends.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      text: "AI Product Development",
      description:
        "Develop AI-powered products that address unique business needs and drive innovation across African sectors.",
    },
    {
      icon: <LightbulbIcon className="w-6 h-6" />,
      text: "AI Strategy & Consulting",
      description:
        "Gain strategic guidance on implementing AI solutions effectively, from planning to execution, for maximum impact.",
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      text: "AI Training & Education",
      description:
        "Equip teams with the knowledge and skills needed to integrate AI technologies successfully, fostering local AI expertise.",
    },
  ];

  return (
    <div className="relative py-20 ">
      {/* Background with gradient */}
      <div className="absolute inset-0 "></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-500/10 text-red-300 rounded-full px-4 py-2 text-sm font-medium uppercase tracking-wider mb-6">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-bold mb-6">
            The future of your industry
            <span className="block mt-2 bg-gradient-to-r from-orange-200 to-red-300 text-transparent bg-clip-text">
              starts here
            </span>
          </h2>
          <p className="text-neutral-300 max-w-2xl mx-auto text-lg">
            Empowering African businesses with cutting-edge AI solutions and quality data
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 
                         border border-neutral-800 hover:border-red-500/20 
                         transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 
                            rounded-lg p-3 inline-block mb-4">
                <div className="text-red-300">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 
                           transition-colors">
                {feature.text}
              </h3>
              
              <p className="text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-red-500 to-orange-300 
                           px-8 py-3 rounded-lg text-white font-semibold 
                           hover:opacity-90 transition-opacity">
            Learn More About Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
