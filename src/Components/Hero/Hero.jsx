import { ArrowRight } from 'lucide-react';
import "./Hero.css";
import dnaImage from '../../assets/agriculture.jpg';
import cellImage from '../../assets/hosp1.jpeg';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const texts = ["Healthcare AI", "Agriculture AI"];

  useEffect(() => {
    // Set up rotation between the two texts
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="hero relative py-16 sm:py-20 lg:py-32">
        {/* White background matching GenBio */}
        <div className="absolute inset-0 bg-white/10"></div>

        <div className="relative z-10 container mx-auto px-4">
          {/* Main hero text with scientific theme */}
          <div className="hero-text text-center mb-10 sm:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 animate-fade-in">
              <div aria-live="polite" className="rotating-text-container">
                {texts.map((text, index) => (
                  <div 
                    key={index} 
                    className={`rotating-text ${index === activeIndex ? 'active' : ''}`}
                  >
                    {text}
                  </div>
                ))}
              </div>
              <div className="mobile-friendly-text">
                <span className="text-slate-900 sm:hidden">for the Global South.</span>
                <span className="gradient-text bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] hidden sm:inline">
                  for the Global South.
                </span>
              </div>
            </h1>
            
            {/* Subtitle with scientific theme */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-10 sm:mb-12 animate-fade-in animation-delay-200">
            "Building Africa's Future with Precision Data in Health and Agriculture"            </p>
          </div>

          {/* Single button section */}
          <div className="flex justify-center mb-12 sm:mb-16">
            <button className="bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] 
                         px-6 sm:px-8 py-3 sm:py-4 rounded-md text-white font-medium text-base sm:text-lg 
                         hover:opacity-90 transition-all flex items-center gap-2 group w-full sm:w-auto max-w-xs mx-auto">
              Introducing Our Vision
              <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Scientific visual cue with GenBio colors */}
          <div className="scientific-visual flex justify-center">
            <div className="dna-helix-animation"></div>
          </div>
        </div>
      </div>

      {/* Dual Cards Section - Similar to GenBio */}
      <div className="dual-cards-section">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1 - Introducing GenBio AI */}
            <div className="card-wrapper">
              <div className="card-image" style={{ backgroundImage: `url(${dnaImage})` }}>
                <div className="card-image-overlay green-blue-gradient"></div>
                <div className="card-content">
                  <h3 className="text-xl font-bold">Advancing Agricultural Research</h3>
                  <div className="indicator-line"></div>
                  <p className="text-sm text-white/90">Disover how we are empowering Agriculture with Data & Intelligence</p>
                </div>
              </div>
              <div className="card-footer">
                <a href="/blog1" className="read-more-link">
                  Read more
                  <ArrowRight className="w-4 h-4 read-more-icon" />
                </a>
              </div>
            </div>
            
            {/* Card 2 - Advancing Biological Research */}
            <div className="card-wrapper">
              <div className="card-image" style={{ backgroundImage: `url(${cellImage})` }}>
                <div className="card-image-overlay blue-gradient"></div>
                <div className="card-content">
                  <h3 className="text-xl font-bold">Improving Diagnosis</h3>
                  <div className="indicator-line"></div>
                  <p className="text-sm text-white/90">Learn about our mission to revolutionize diagnosis in healthcare</p>
                </div>
              </div>
              <div className="card-footer">
                <a href="/blog2" className="read-more-link">
                  Read more
                  <ArrowRight className="w-4 h-4 read-more-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;