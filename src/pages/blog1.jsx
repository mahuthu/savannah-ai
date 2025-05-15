
import React from 'react';
import { ArrowRight, Check, FileText, FlaskConical, Microscope, Brain, PieChart } from 'lucide-react';
import cellImage from '../assets/agriculture.jpg';

const AdvancingAgriResearch = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={cellImage} 
            alt="Agricultural Data Visualization" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#4BBC30]/30 to-[#1EACEB]/80"></div>
        </div>

        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-white">
            <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium uppercase tracking-wider mb-6">
              Agriculture & AI
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Advancing Agricultural Research with AI
            </h1>

            <p className="text-xl mb-8 text-white/90 max-w-3xl">
              Discover how our AI-ready agricultural data and models enable researchers, organizations, and startups to solve food security challenges and accelerate innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6 text-[#191D3A]">Empowering Agriculture with Data & Intelligence</h2>
          <div className="gradient-line w-20 h-1 bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] mb-8"></div>

          <p className="text-lg text-slate-700 mb-8">
            Traditional agricultural research is often hampered by fragmented data and slow experimental feedback cycles. Our platform bridges this gap by offering a robust repository of structured, annotated agricultural datasets and trained AI models accessible via API or licensing.
          </p>

          <p className="text-lg text-slate-700 mb-8">
            Whether you're optimizing crop yield, predicting disease outbreaks, or designing new sustainable practices, our data and tools can fast-track your research and product development.
          </p>
        </div>

        {/* Key Research Areas */}
        <div className="max-w-5xl mx-auto mb-20 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6 text-[#191D3A]">Key Research Areas</h2>
          <div className="gradient-line w-20 h-1 bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ResearchCard 
              icon={<Microscope className="w-7 h-7 text-[#4BBC30]" />} 
              title="Crop Monitoring" 
              description="Use our satellite and sensor datasets to monitor crop health, soil moisture, and nutrient levels across seasons and geographies."
            />
            <ResearchCard 
              icon={<FileText className="w-7 h-7 text-[#4BBC30]" />} 
              title="Pest & Disease Prediction" 
              description="Leverage AI to forecast pest invasions and disease risks using historical data and real-time environmental inputs."
            />
            <ResearchCard 
              icon={<FlaskConical className="w-7 h-7 text-[#4BBC30]" />} 
              title="Climate Adaptation" 
              description="Model the impact of changing climate patterns on food systems and identify resilient crop varieties for different regions."
            />
            <ResearchCard 
              icon={<Brain className="w-7 h-7 text-[#4BBC30]" />} 
              title="Yield Optimization" 
              description="Train or fine-tune models using our yield and input-output datasets to improve productivity and reduce waste."
            />
          </div>
        </div>

        {/* Research Breakthroughs */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6 text-[#191D3A]">Impact & Collaborations</h2>
          <div className="gradient-line w-20 h-1 bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] mb-12"></div>

          <div className="space-y-12">
            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <span className="inline-block bg-[#4BBC30]/10 text-[#4BBC30] text-sm px-3 py-1 rounded-full mb-4">
                Case Study
              </span>
              <h3 className="text-xl font-bold mb-3 text-[#191D3A]">Enhancing Crop Yields in Sub-Saharan Africa</h3>
              <p className="text-slate-700">
                By partnering with local agricultural bodies and using our AI models trained on regional data, researchers were able to improve maize yields by 20% while reducing fertilizer waste.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
              <span className="inline-block bg-[#4BBC30]/10 text-[#4BBC30] text-sm px-3 py-1 rounded-full mb-4">
                Pilot Program
              </span>
              <h3 className="text-xl font-bold mb-3 text-[#191D3A]">AI for Climate-Smart Farming</h3>
              <p className="text-slate-700">
                A European research institute used our labeled datasets to develop climate-smart recommendation engines for wheat and soybean farmers.
              </p>
            </div>
          </div>
        </div>

            {/* For Researchers Section */}
    <div className="max-w-4xl mx-auto text-center py-16 bg-gradient-to-r from-[#4BBC30]/5 to-[#1EACEB]/5 p-8 rounded-xl">
    <h2 className="text-3xl font-bold mb-6 text-[#191D3A]">For Researchers and AI Startups</h2>
    <p className="text-lg text-slate-700 mb-10 max-w-3xl mx-auto">
      Join our growing community to accelerate research and make breakthrough discoveries in Agriculture.
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-left">
        <h3 className="text-xl font-bold mb-3 text-[#191D3A]">Partnerships</h3>
        <p className="text-slate-700 mb-4">
          We collaborate with universities and research institutions to advance the boundaries of AI in Agriculture.
        </p>
        <a href="/partnerships" className="text-[#4BBC30] hover:text-[#1EACEB] inline-flex items-center font-medium">
          Learn more
          <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-left">
        <h3 className="text-xl font-bold mb-3 text-[#191D3A]">Data Access</h3>
        <p className="text-slate-700 mb-4">
          Access our comprehensive datasets and pre-trained models to accelerate your projects.
        </p>
        <a href="/datasets" className="text-[#4BBC30] hover:text-[#1EACEB] inline-flex items-center font-medium">
          Explore datasets
          <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
      
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-left">
        <h3 className="text-xl font-bold mb-3 text-[#191D3A]">API & Tools</h3>
        <p className="text-slate-700 mb-4">
          Integrate our capabilities into your workflow with our well-documented APIs and tools.
        </p>
        <a href="/api" className="text-[#4BBC30] hover:text-[#1EACEB] inline-flex items-center font-medium">
          View documentation
          <ArrowRight className="w-4 h-4 ml-1" />
        </a>
  </div>
</div>

<a 
  href="/contact" 
  className="bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] px-8 py-4 rounded-md text-white font-medium inline-flex items-center gap-2 group hover:opacity-90 transition-opacity"
>
  Request Access
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</a>
</div>
      </div>
    </div>
  );
};

const ResearchCard = ({ icon, title, description }) => (
  <div className="flex">
    <div className="flex-shrink-0 mr-5">
      <div className="w-14 h-14 bg-[#4BBC30]/10 rounded-lg flex items-center justify-center">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-bold mb-3 text-[#191D3A]">{title}</h3>
      <p className="text-slate-700">{description}</p>
    </div>
  </div>
);

export default AdvancingAgriResearch;




