import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import healthBackground from '../assets/hosp1.jpeg'; // Replace with an appropriate image

const IntroducingTiba = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with background image */}
      <div className="relative overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={healthBackground} 
            alt="AI in Healthcare" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E4EEB]/30 to-[#1EACEB]/80"></div>
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-white">
            <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium uppercase tracking-wider mb-6">
              Healthcare AI
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Introducing TIBA
            </h1>
            
            <p className="text-xl mb-8 text-white/90 max-w-3xl">
              TIBA is an AI-powered diagnostic platform that continuously learns from patient data to provide accurate, fast, and personalized medical insights.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6 text-[#191D3A]">Our Mission</h2>
          <div className="gradient-line w-20 h-1 bg-gradient-to-r from-[#1E4EEB] to-[#1EACEB] mb-8"></div>
          
          <p className="text-lg text-slate-700 mb-8">
            At TIBA, our mission is to transform healthcare through intelligent diagnostics. By combining advanced machine learning with real-world patient data, we aim to enhance clinical decision-making and reduce misdiagnosis across healthcare systems.
          </p>
          
          <p className="text-lg text-slate-700 mb-8">
            Our team of AI researchers, clinicians, and biomedical engineers is committed to building a robust, ethical, and ever-evolving diagnostic tool that adapts to emerging health challenges and patient needs.
          </p>
        </div>
        
        {/* Our Approach Section */}
        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto mb-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-[#191D3A]">Our Approach</h2>
            <div className="gradient-line w-20 h-1 bg-gradient-to-r from-[#1E4EEB] to-[#1EACEB] mb-8"></div>
            
            <p className="text-lg text-slate-700 mb-6">
              TIBA uses patient-submitted health information to continuously improve its diagnostic capabilities. Each input—from symptoms and lab results to clinical history—helps fine-tune our AI model for better accuracy.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Real-time learning from patient data",
                "Support for clinical decision-making",
                "Increased diagnostic precision",
                "Scalable to multiple disease areas",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <Check className="text-[#1E4EEB] flex-shrink-0 mt-1 mr-3" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-1/2 bg-gradient-to-r from-[#1E4EEB]/5 to-[#1EACEB]/5 p-8 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-[#191D3A]">How TIBA Works</h3>
            
            <p className="text-slate-700 mb-4">
              Patients upload their health records, including symptoms, test results, and past medical history. TIBA's AI models analyze this data in real-time and adapt using new insights to enhance diagnostic performance.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-medium text-[#1E4EEB]">Input Stage</h4>
                <p className="text-sm text-slate-600">Users submit symptoms, medical history, and lab results via a secure interface.</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-medium text-[#1E4EEB]">Model Evaluation</h4>
                <p className="text-sm text-slate-600">AI models process the inputs and match them with known clinical patterns to suggest possible conditions.</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-medium text-[#1E4EEB]">Continuous Learning</h4>
                <p className="text-sm text-slate-600">Each interaction improves the model via continuous feedback loops and fine-tuning.</p>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-medium text-[#1E4EEB]">Actionable Insights</h4>
                <p className="text-sm text-slate-600">Clinicians receive data-backed diagnostic suggestions to guide treatment and further investigation.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Impact Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6 text-[#191D3A]">Our Impact</h2>
          <div className="gradient-line w-20 h-1 bg-gradient-to-r from-[#1E4EEB] to-[#1EACEB] mb-8"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#191D3A]">Faster Diagnoses</h3>
              <p className="text-slate-700">
                Reduce patient wait times with rapid preliminary assessments powered by AI.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#191D3A]">Better Patient Outcomes</h3>
              <p className="text-slate-700">
                TIBA helps minimize misdiagnosis and supports personalized care strategies.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#191D3A]">Empowered Clinicians</h3>
              <p className="text-slate-700">
                Provides clinicians with evidence-based insights to aid their diagnostic reasoning.
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#191D3A]">Scalable Technology</h3>
              <p className="text-slate-700">
                Designed to serve rural clinics and advanced hospitals alike with cloud-based intelligence.
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
            className="bg-gradient-to-r from-[#1E4EEB] to-[#1EACEB] px-8 py-4 rounded-md text-white font-medium flex items-center justify-center gap-2 group hover:opacity-90 transition-opacity"
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

export default IntroducingTiba;