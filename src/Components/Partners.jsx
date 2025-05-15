import React from 'react';
import image1 from "../assets/openai.jpg";
import image2 from "../assets/langchain2.png";
import image4 from "../assets/llama2.png";
import image5 from "../assets/gemini2.png";
import image6 from "../assets/claude.png";

const PartnersSection = () => {
  // Partner logos
  const logos = [
    { id: 1, name: "OpenAI", src: image1 },
    { id: 2, name: "LangChain", src: image2 },
    { id: 3, name: "Meta (LLaMA)", src: image4 },
    { id: 4, name: "Google (Gemini)", src: image5 },
    { id: 5, name: "Anthropic", src: image6 },
    { id: 6, name: "National Hospital", src: image1 }, // Replace with actual hospital logo
    { id: 7, name: "Regional Medical Center", src: image2 }, // Replace with actual hospital logo
    { id: 8, name: "EcoFarms Kenya", src: image4 }, // Replace with actual agriculture partner logo
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
              className="flex items-center justify-center py-8"
            >
              <img 
                src={logo.src} 
                alt={logo.name} 
                className="max-h-24 max-w-full object-contain transition-all hover:scale-110" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
