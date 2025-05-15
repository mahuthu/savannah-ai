import React from 'react';
import { ArrowRight, Check, FileText, FlaskConical, Microscope, Brain, PieChart } from 'lucide-react';
import cellImage from '../assets/climate.jpeg';

const AdvancingResearch = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with background image */}
      <div className="relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={cellImage} 
            alt="Cell Biology Visualization" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E4EEB]/80 to-[#1EACEB]/80"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-white">
            <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium uppercase tracking-wider mb-6">
              Healthcare
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Advancing Biological Research
            </h1>
            
            <p className="text-xl mb-8 text-white/90 max-w-3xl">
              Discover how our AI-Driven Digital Organism advances modern biology and accelerates scientific discovery.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Introduction Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6 text-[#191D3A]">Transforming Biological Research</h2>
          <div className="gradient-line w-20 h-1 bg-gradient-to-r from-[#1E4EEB] to-[#1EACEB] mb-8"></div>
          
          <p className="text-lg text-slate-700 mb-8">
            Biological research has traditionally been limited by physical constraints, experimental time, and the complexity of living systems. GenBio AI's AIDO platform removes these barriers by creating comprehensive digital models that enable researchers to explore biological questions with unprecedented speed and accuracy.
          </p>
          
          <p className="text-lg text-slate-700 mb-8">
            By combining machine learning with biological knowledge, we're creating a new paradigm for scientific discovery that accelerates research timelines from years to months or even weeks.
          </p>
        </div>
        
        {/* Research Areas Section */}
        <div className="max-w-5xl mx-auto mb-20 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6 text-[#191D3A]">Key Research Areas</h2>
          <div className="gradient-line w-20 h-1 bg-gradient-to-r from-[#1E4EEB] to-[#1EACEB] mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex">
              <div className="flex-shrink-0 mr-5">
                <div className="w-14 h-14 bg-[#1EACEB]/10 rounded-lg flex items-center justify-center">
                  <Microscope className="w-7 h-7 text-[#1EACEB]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#191D3A]">Cellular Biology</h3>
                <p className="text-slate-700">
                  Our models simulate complex cellular processes, enabling researchers to observe and manipulate cell behavior in ways previously impossible through traditional methods.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-5">
                <div className="w-14 h-14 bg-[#1EACEB]/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-7 h-7 text-[#1EACEB]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#191D3A]">Genomics</h3>
                <p className="text-slate-700">
                  AIDO can analyze and interpret genomic data at scale, identifying patterns and relationships that would take human researchers years to discover.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-5">
                <div className="w-14 h-14 bg-[#1EACEB]/10 rounded-lg flex items-center justify-center">
                  <FlaskConical className="w-7 h-7 text-[#1EACEB]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#191D3A]">Drug Discovery</h3>
                <p className="text-slate-700">
                  Our platform accelerates the identification and validation of drug candidates by simulating molecular interactions and predicting efficacy with high accuracy.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-5">
                <div className="w-14 h-14 bg-[#1EACEB]/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-7 h-7 text-[#1EACEB]" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 text-[#191D3A]">Systems Biology</h3>
                <p className="text-slate-700">
                  AIDO integrates data across biological scales to model complex systems, from metabolic networks to entire organisms and even ecosystems.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Case Studies Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6 text-[#191D3A]">Research Breakthroughs</h2>
          <div className="gradient-line w-20 h-1 bg-gradient-to-r from-[#1E4EEB] to-[#1EACEB] mb-12"></div>
          
          <div className="space-y-12">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <span className="inline-block bg-[#1EACEB]/10 text-[#1EACEB] text-sm px-3 py-1 rounded-full mb-4">
                Case Study
              </span>
              <h3 className="text-2xl font-bold mb-4 text-[#191D3A]">Predicting Protein Interactions</h3>
              <p className="text-slate-700 mb-6">
                Our AIDO platform accurately predicted novel protein-protein interactions that were subsequently validated in laboratory experiments, reducing discovery time from months to days.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#4BBC30]/10 rounded-full flex items-center justify-center mr-4">
                  <PieChart className="w-6 h-6 text-[#4BBC30]" />
                </div>
                <div>
                  <p className="text-[#191D3A] font-medium">Results</p>
                  <p className="text-sm text-slate-600">98% prediction accuracy | 85% time reduction</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <span className="inline-block bg-[#1EACEB]/10 text-[#1EACEB] text-sm px-3 py-1 rounded-full mb-4">
                Case Study
              </span>
              <h3 className="text-2xl font-bold mb-4 text-[#191D3A]">Gene Expression Analysis</h3>
              <p className="text-slate-700 mb-6">
                AIDO identified key regulatory networks in cancer cells that had been overlooked by traditional analysis methods, leading to the discovery of potential therapeutic targets.
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#4BBC30]/10 rounded-full flex items-center justify-center mr-4">
                  <PieChart className="w-6 h-6 text-[#4BBC30]" />
                </div>
                <div>
                  <p className="text-[#191D3A] font-medium">Results</p>
                  <p className="text-sm text-slate-600">3 novel targets identified | Published in Nature Methods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* For Researchers Section */}
        <div className="max-w-4xl mx-auto text-center py-16 bg-gradient-to-r from-[#1E4EEB]/5 to-[#1EACEB]/5 p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6 text-[#191D3A]">For Researchers</h2>
          <p className="text-lg text-slate-700 mb-10 max-w-3xl mx-auto">
            Join the growing community of scientists using AIDO to accelerate their research and make breakthrough discoveries in biological science.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-left">
              <h3 className="text-xl font-bold mb-3 text-[#191D3A]">Academic Partnerships</h3>
              <p className="text-slate-700 mb-4">
                We collaborate with leading universities and research institutions to advance the boundaries of biological science.
              </p>
              <a href="/partnerships" className="text-[#1E4EEB] hover:text-[#1EACEB] inline-flex items-center font-medium">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-left">
              <h3 className="text-xl font-bold mb-3 text-[#191D3A]">Data Access</h3>
              <p className="text-slate-700 mb-4">
                Access our comprehensive biological datasets and pre-trained models to accelerate your research projects.
              </p>
              <a href="/datasets" className="text-[#1E4EEB] hover:text-[#1EACEB] inline-flex items-center font-medium">
                Explore datasets
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-left">
              <h3 className="text-xl font-bold mb-3 text-[#191D3A]">API & Tools</h3>
              <p className="text-slate-700 mb-4">
                Integrate AIDO capabilities into your research workflow with our well-documented APIs and research tools.
              </p>
              <a href="/api" className="text-[#1E4EEB] hover:text-[#1EACEB] inline-flex items-center font-medium">
                View documentation
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
          
          <a 
            href="/contact" 
            className="bg-gradient-to-r from-[#1E4EEB] to-[#1EACEB] px-8 py-4 rounded-md text-white font-medium inline-flex items-center gap-2 group hover:opacity-90 transition-opacity"
          >
            Request Research Access
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdvancingResearch; 