import React from 'react';
import githubLogo from '../assets/git.png';

const OurModels = () => {
  return (
    <div className="relative py-12 sm:py-16 bg-white/10">
      <div className="container mx-auto px-4">
        {/* Header Section - GenBio style with left alignment */}
        <div className="mb-12 sm:mb-24">
          <span className="inline-block text-[#1EACEB] text-xs sm:text-sm font-medium mb-2 sm:mb-4">
            Download 
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-24 text-[#191D3A]">
            Our Models
          </h2>

          {/* Platform links with centered large icons - matching image layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            {/* Hugging Face */}
            <div className="flex flex-col items-center justify-center">
              <div className="mb-6 sm:mb-8">
                <img 
                  src="https://genbio.ai/wp-content/uploads/2024/12/hugging-face-logo-1.svg" 
                  alt="Hugging Face Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                />
              </div>
              <a 
                href="https://huggingface.co/genbio-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl md:text-3xl font-bold text-[#191D3A] hover:text-[#4BBC30] transition-colors text-center"
              >
                Hugging Face
              </a>
            </div>
            
            {/* GitHub */}
            <div className="flex flex-col items-center justify-center">
              <div className="mb-6 sm:mb-8">
                <img 
                  src={githubLogo} 
                  alt="GitHub Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24"
                />
              </div>
              <a 
                href="https://github.com/genbio-ai/AIDO" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl sm:text-2xl md:text-3xl font-bold text-[#191D3A] hover:text-[#4BBC30] transition-colors text-center"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurModels; 