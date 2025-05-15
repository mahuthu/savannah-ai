import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import dnaImage1 from '../assets/bac1.png';
import dnaImage2 from '../assets/bac2.png';
import dnaImage3 from '../assets/bac6.png';
import './CoreBanner.css';

const CoreBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [dnaImage1, dnaImage2, dnaImage3];
  
  // Create array for animated dots
  const dots = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: `${Math.random() * 6 + 2}px`,
    duration: `${Math.random() * 10 + 10}s`,
    delay: `${Math.random() * 5}s`
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="core-banner">
      {/* Background animated dots */}
      <div className="animated-dots">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="dot"
            style={{
              top: dot.top,
              left: dot.left,
              width: dot.size,
              height: dot.size,
              animationDuration: dot.duration,
              animationDelay: dot.delay
            }}
          />
        ))}
      </div>
      
      {/* Background color gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1EACEB]/5 to-[#4BBC30]/5"></div>
      
      <div className="flex flex-col md:flex-row w-full">
        {/* Left column with rotating DNA image - now taking full height */}
        <div className="w-full md:w-1/2 h-[40vh] md:h-screen relative dna-image-container">
          {images.map((img, index) => (
            <div
              key={index}
              className={`image-transition ${
                currentImageIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img 
                src={img} 
                alt={`DNA visualization ${index + 1}`} 
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
        
        {/* Right column with text content */}
        <div className="w-full md:w-1/2 flex items-center relative z-20 bg-white/70 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none">
          <div className="p-8 md:p-16 space-y-6 w-full">
            <span className="inline-block bg-[#1EACEB]/10 text-[#1EACEB] rounded-full px-4 py-2 text-sm font-medium uppercase tracking-wider text-fade-in">
              Our Technology
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#191D3A]">
              <span className="block text-fade-in">Pushing</span>
              <div className="gradient-text-wrapper text-fade-in delay-200">
                <span className="gradient-text bg-gradient-to-r from-[#4BBC30] to-[#1EACEB]">
                  Boundaries of 
                </span>
              </div>
              <span className="block text-fade-in delay-400">Discovery</span>
            </h1>
            
            <p className="text-lg text-slate-600 max-w-xl text-fade-in delay-400">
            Accelerating AI development across Africa by providing accessible, high-quality datasets and models in healthcare and agriculture.

            </p>
            
            <button className="contact-button bg-[#4BBC30] px-8 py-3 rounded-md text-white font-medium flex items-center gap-2 group text-fade-in delay-600">
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreBanner; 