import React from 'react';
import { 
  Database, 
  Brain, 
  BarChart3, 
  Rocket, 
  LightbulbIcon, 
  GraduationCap,
  ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Database className="w-12 h-12" />,
      title: "Data Collection and Annotation",
      description: "Leverage high-quality data collection and annotation services to train AI models that truly understand African contexts.",
      features: [
        "Local context data collection",
        "Professional annotation services",
        "Quality assurance processes",
        "Multilingual support"
      ]
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "Custom Model Training",
      description: "Create and fine-tune AI models specifically for industries across Africa, utilizing relevant data to ensure optimal performance.",
      features: [
        "Model customization",
        "Performance optimization",
        "Continuous monitoring",
        "Model deployment support"
      ]
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "AI-Driven Insights & Analytics",
      description: "Transform raw data into actionable insights using advanced AI analytics tailored to regional market needs and trends.",
      features: [
        "Market trend analysis",
        "Predictive analytics",
        "Custom reporting",
        "Real-time dashboards"
      ]
    },
    {
      icon: <Rocket className="w-12 h-12" />,
      title: "AI Product Development",
      description: "Build specialized AI agents that revolutionize operations across various sectors with tailored solutions for African businesses.",
      features: [
        "Customer support AI agents",
        "Content creation assistants",
        "Automated invoicing systems",
        "Sales optimization agents"
      ]
    },
    {
      icon: <LightbulbIcon className="w-12 h-12" />,
      title: "AI Strategy & Consulting",
      description: "Gain strategic guidance on implementing AI solutions effectively, from planning to execution, for maximum impact.",
      features: [
        "Strategic planning",
        "Implementation roadmap",
        "Risk assessment",
        "ROI optimization"
      ]
    },
    {
      icon: <GraduationCap className="w-12 h-12" />,
      title: "AI Training & Education",
      description: "Equip teams with the knowledge and skills needed to integrate AI technologies successfully, fostering local AI expertise.",
      features: [
        "Custom training programs",
        "Hands-on workshops",
        "Certification courses",
        "Ongoing support"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Our Services
          <span className="block mt-2 bg-gradient-to-r from-orange-200 to-red-300 text-transparent bg-clip-text">
            Empowering African AI Innovation
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-neutral-300 max-w-4xl mx-auto leading-relaxed">
          Comprehensive AI solutions tailored for the African market, from data collection to deployment
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-xl p-8 hover:shadow-2xl transition-all duration-300 hover:transform hover:-translate-y-2 border border-neutral-700/30 hover:border-red-500/20 backdrop-blur-sm"
          >
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-2xl p-5 inline-block mb-6">
              <div className="text-red-300">
                {service.icon}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-300 transition-colors">
              {service.title}
            </h3>
            
            <p className="text-neutral-300 mb-6 leading-relaxed">
              {service.description}
            </p>
            
            <ul className="space-y-3 mb-8">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-neutral-400">
                  <ArrowRight className="w-4 h-4 text-orange-300 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="mt-auto w-full bg-gradient-to-r from-red-500 to-orange-300 px-5 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-all flex items-center justify-center group hover:shadow-lg">
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20 bg-gradient-to-br from-neutral-900 to-neutral-800/80 rounded-xl p-10 border border-neutral-700/30 shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Ready to Transform Your Business with AI?
        </h2>
        <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
          Let's discuss how our services can help you leverage AI for growth and innovation
        </p>
        <button className="bg-gradient-to-r from-red-500 to-orange-300 px-8 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-all hover:shadow-lg">
          Schedule a Consultation
        </button>
      </div>
    </div>
  );
};

export default Services;