import { useState } from 'react';
import { ArrowRight, Play, Pause } from 'lucide-react'; // Import Lucide icons
import "./Hero.css";

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
  return (
    <div className="hero relative py-20 lg:py-32">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-neutral-900 to-black opacity-70"></div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Main hero text with animations */}
        <div className="hero-text text-center mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
            <span className="bg-gradient-to-r from-orange-200 to-red-300 text-transparent bg-clip-text">
              {heroData.text1}
            </span>
            <br />
            <span className="text-white">
              {heroData.text2}
            </span>
          </h1>
        </div>

        {/* Subheading with gradient text */}
        <div className="hero-explore text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-white">
              Power Enterprise AI, Government AI, 
              <br className="hidden sm:block" /> and Generative AI
            </span>{" "}
            <span className="bg-gradient-to-r from-lime-200 to-green-300 text-transparent bg-clip-text">
              with your data
            </span>
          </h2>
        </div>

          {/* Navigation dots and play button */}
        <div className="hero-dot-play flex flex-col items-center gap-8">
          {/* Dots navigation */}
          {/* <div className="flex gap-4">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => setHeroCount(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  heroCount === index 
                    ? 'bg-gradient-to-r from-red-500 to-orange-300 w-12'
                    : 'bg-neutral-700 hover:bg-neutral-600'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div> */}

          {/* Play/Pause button */}
          {/* <button
            onClick={() => setPlayStatus(!playStatus)}
            className="flex items-center gap-2 text-white bg-neutral-900/50 hover:bg-neutral-800 
                     px-6 py-3 rounded-full transition-all duration-300 group"
          >
            {playStatus ? (
              <>
                <Pause className="w-5 h-5 text-red-300" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5 text-red-300" />
                <span>Play</span>
              </>
            )}
          </button> */}

          {/* CTA Button */}
          <button className="mt-8 bg-gradient-to-r from-red-500 to-orange-300 
                         px-8 py-4 rounded-lg text-white font-semibold 
                         hover:opacity-90 transition-opacity flex items-center gap-2 group">
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;