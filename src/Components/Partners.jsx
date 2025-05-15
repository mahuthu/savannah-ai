import React from 'react';
import image1 from "../assets/johnsnow.webp";
import image2 from "../assets/cds.png";
import image4 from "../assets/karlo.webp";
import image5 from "../assets/tahmo.jpeg";

const PartnersSection = () => {
  // Partner logos
  const logos = [
    { id: 1, name: "OpenAI", src: image1 },
    { id: 2, name: "LangChain", src: image2 },
    { id: 3, name: "Meta (LLaMA)", src: image4 },
    { id: 4, name: "Google (Gemini)", src: image5 },
   
  ];
  
  return (
    <div className="bg-white/10 mt-16 pt-10">
      <div className="container mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-[#191D3A]">
            Our Partners
          </h2>
          <p className="text-xl sm:text-2xl bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] text-transparent bg-clip-text font-bold mb-8">
            Collaborative innovation across industries
          </p>
        </div>
        
        {/* Logo Grid - 4 per row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16 max-w-5xl mx-auto">
          {logos.map((logo) => (
            <div 
              key={logo.id}
              className="flex items-center justify-center py-10"
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="max-h-32 max-w-full object-contain transition-all hover:scale-110" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
