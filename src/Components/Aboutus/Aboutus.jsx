import React from 'react';
import image1 from "../../assets/afroprompts3.png";

const AboutUs = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]" style={{ backgroundColor: 'rgba(0,0,0, 0.9)' }}>
      <div className="text-center">
        <span className="bg-neutral-900 text-red-700 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          About Us
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-red-900 ">
          Savannah {" "}
          <span className="bg-gradient-to-r from-red-700 to-red-900 text-transparent bg-clip-text">
            AI
          </span>
        </h2>
      </div>
      <div className="container mx-auto px-4 py-20 ">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white-900 mb-6">About Savannah AI</h2>
            <p className="text-lg text-red-700 leading-relaxed mb-6">
              Savannah AI is a leading AI consulting agency based in Kenya dedicated to providing comprehensive AI solutions that enhance productivity, streamline
              processes, and drive growth for organizations across various industries.
            </p>
            <p className="text-lg text-white-700 leading-relaxed mb-6">
              Our team of experts is committed to delivering tailored AI strategies and implementations that meet the unique
              needs of each client. Whether it's AI training and education, model training and fine-tuning, chatbot development
              with NLP, or creating awareness and content around AI tools and technologies, we have the expertise to drive
              impactful results for your business.
            </p>
            <p className="text-lg text-red-700 leading-relaxed mb-6">
              At Savannah AI, we believe in the transformative power of AI to unlock new opportunities, improve decision-making,
              and drive innovation. Partner with us to embark on a journey of AI adoption and transformation, and discover
              the immense potential AI holds for your organization.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={image1} alt="About Us" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
