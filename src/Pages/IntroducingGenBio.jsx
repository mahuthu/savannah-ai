import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import dnaBackground from '../assets/bac6.png';

const IntroducingGenBio = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with background image */}
      <div className="relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={dnaBackground} 
            alt="DNA Visualization" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4BBC30]/80 to-[#1EACEB]/80"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-white">
            <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium uppercase tracking-wider mb-6">
              About Us
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Introducing GenBio AI
            </h1>
            
            <p className="text-xl mb-8 text-white/90 max-w-3xl">
              We're building the world's first AI-driven Digital Organism (AIDO) to transform how we understand and interact with biology.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6 text-[#191D3A]">Our Mission</h2>
          <div className="gradient-line w-20 h-1 bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] mb-8"></div>
          
          <p className="text-lg text-slate-700 mb-8">
            At GenBio AI, we're on a mission to revolutionize biological research and accelerate scientific discovery. Our AI-driven approach integrates cutting-edge computational methods with deep biological understanding to create predictive models that address some of the most challenging problems in healthcare, agriculture, and environmental science.
          </p>
          
          <p className="text-lg text-slate-700 mb-8">
            Founded by a team of leading experts in artificial intelligence and molecular biology, GenBio AI represents the convergence of these fields to create a powerful new platform for scientific innovation.
          </p>
        </div>
        
        {/* Our Approach Section */}
        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto mb-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-[#191D3A]">Our Approach</h2>
            <div className="gradient-line w-20 h-1 bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] mb-8"></div>
            
            <p className="text-lg text-slate-700 mb-6">
              The Digital Living System (AIDO) represents a paradigm shift in how we model and understand biological systems. By creating a comprehensive digital representation of living processes, we enable:
            </p>
            
            <ul className="space-y-4 mb-8">
              {["More accurate predictions", "Faster experimentation", "Novel insights", "Reduced development costs"].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-[#4BBC30] flex-shrink-0 mt-1 mr-3" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-1/2 bg-gradient-to-r from-[#4BBC30]/5 to-[#1EACEB]/5 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-[#191D3A]">How AIDO Works</h3>
            
            <p className="text-slate-700 mb-4">
              AIDO combines multiscale foundation models that can simulate and predict biological processes at multiple levels of organization:
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-medium text-[#1EACEB]">Molecular Level</h4>
                <p className="text-sm text-slate-600">Protein structure prediction, molecular dynamics, and drug interactions</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-medium text-[#1EACEB]">Cellular Level</h4>
                <p className="text-sm text-slate-600">Cell signaling, gene expression, and cellular metabolism</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-medium text-[#1EACEB]">Tissue & Organ Level</h4>
                <p className="text-sm text-slate-600">Tissue function, organ development, and physiological responses</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-medium text-[#1EACEB]">Organism Level</h4>
                <p className="text-sm text-slate-600">Whole-organism responses, phenotypic predictions, and disease modeling</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Impact Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6 text-[#191D3A]">Our Impact</h2>
          <div className="gradient-line w-20 h-1 bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#191D3A]">Healthcare</h3>
              <p className="text-slate-700">
                Accelerating drug discovery, personalizing treatments, and predicting disease outcomes with unprecedented accuracy.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#191D3A]">Agriculture</h3>
              <p className="text-slate-700">
                Developing more resilient crops, optimizing growth conditions, and enhancing sustainable farming practices.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#191D3A]">Environment</h3>
              <p className="text-slate-700">
                Modeling ecosystem dynamics, supporting conservation efforts, and developing bioremediation solutions.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#191D3A]">Research</h3>
              <p className="text-slate-700">
                Enabling novel scientific discoveries, reducing experimental time, and fostering interdisciplinary collaboration.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center py-16">
          <h2 className="text-3xl font-bold mb-6 text-[#191D3A]">Join Us on Our Journey</h2>
          <p className="text-lg text-slate-700 mb-8">
            Discover how GenBio AI is transforming biological research and creating new possibilities for the future of healthcare, agriculture, and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] px-8 py-4 rounded-md text-white font-medium flex items-center justify-center gap-2 group hover:opacity-90 transition-opacity"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href="/models" 
              className="bg-transparent border-2 border-[#e5e7eb] hover:border-[#1E4EEB]/20 px-8 py-4 rounded-md text-[#1E4EEB] font-medium flex items-center justify-center gap-2 group hover:text-[#1E4EEB] transition-all"
            >
              Explore Our Models
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroducingGenBio; 