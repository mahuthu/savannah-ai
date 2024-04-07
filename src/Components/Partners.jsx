import React from 'react';
import image1 from "../assets/openai.jpg";
import image2 from "../assets/openai.png";

const PartnersSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[600px]" style={{ backgroundColor: 'rgba(0,0,0, 0.4)' }}>
      <div className="text-center">
        <span className="bg-neutral-900 text-red-700 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Our Partners
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-red-200">
          Microsoft Azure & OpenAI
        </h2>
        <div className="flex justify-center mt-10">
          <div className="flex items-center justify-center w-88 h-64 bg-white shadow-lg mx-10 sm:w-64 sm:h-48 md:w-80 md:h-56 lg:w-96 lg:h-72">
            <img src={image1} alt="Microsoft Azure" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center justify-center w-88 h-64 bg-white shadow-lg mx-10 sm:w-64 sm:h-48 md:w-80 md:h-56 lg:w-96 lg:h-72">
            <img src={image2} alt="OpenAI" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
