import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import healthBackground from '../assets/hosp1.jpeg'; // Replace with an appropriate image

const IntroducingTiba = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with background image */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={healthBackground} 
            alt="AI in Healthcare" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E4EEB]/30 to-[#1EACEB]/80"></div>
        </div>

        <div className="container mx-auto px-4 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-white">
            <span className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium uppercase tracking-wider mb-6">
              Healthcare AI
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Introducing TIBA
            </h1>

            <p className="text-xl mb-8 text-white/90 max-w-3xl">
              TIBA is an AI-powered Hospital Information Management System (HIMS) designed to digitize handwritten and printed medical records, reduce misdiagnosis, and empower patients through intelligent tools and real-time access to their health data.
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
            Our mission is to revolutionize healthcare by digitizing medical records using AI, enabling faster diagnosis, reducing clinical errors, and improving patient outcomes. By integrating OCR (Optical Character Recognition) and NER (Named Entity Recognition), TIBA transforms handwritten hospital paperwork into structured, digital records.
          </p>

          <p className="text-lg text-slate-700 mb-8">
            TIBA also empowers patients to take control of their healthcare journey through an intelligent portal, AI education tools, and real-time access to personal health data — ensuring informed decision-making and continuity of care.
          </p>
        </div>

        {/* Our Approach Section */}
        <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto mb-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-[#191D3A]">Our Approach</h2>
            <div className="gradient-line w-20 h-1 bg-gradient-to-r from-[#1E4EEB] to-[#1EACEB] mb-8"></div>

            <p className="text-lg text-slate-700 mb-6">
              TIBA digitizes handwritten and printed medical documents submitted by patients or hospitals and feeds the extracted information directly into structured patient profiles within the HIMS. Patients can upload previous lab results, prescriptions, and consultation notes while accessing AI-driven tools like Pingoo AI and AfyaMama for education and maternity care.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Digitizes hospital paperwork using OCR/NER",
                "Enables patient-controlled record uploads and sharing",
                "Pingoo AI educates patients using text and image queries",
                "AfyaMama provides personalized AI maternity support",
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
              Patients or hospital staff upload handwritten records, which are processed using OCR/NER. Extraction of prescriptions, lab results, triage info, diagnoses, and other key medical data and mapping it to structured digital fields in the HIMS. Clinicians and administrators then access real-time insights for accurate diagnosis and faster decisions.
            </p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-medium text-[#1E4EEB]">Record Upload</h4>
                <p className="text-sm text-slate-600">Users submit scans or photos of handwritten or printed health records.</p>
              </div>

              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-medium text-[#1E4EEB]">AI Processing</h4>
                <p className="text-sm text-slate-600">OCR and NER extract structured information like diagnoses, medications, and test results.</p>
              </div>

              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-medium text-[#1E4EEB]">Patient Portal & Tools</h4>
                <p className="text-sm text-slate-600">Pingoo AI answers patient questions; AfyaMama guides expectant mothers with custom AI responses.</p>
              </div>

              <div className="bg-white p-4 rounded shadow-sm">
                <h4 className="font-medium text-[#1E4EEB]">Clinician Dashboard</h4>
                <p className="text-sm text-slate-600">Doctors and admins receive clean, structured data to assist with diagnosis and planning.</p>
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
              <h3 className="text-xl font-bold mb-3 text-[#191D3A]">Reduced Misdiagnosis</h3>
              <p className="text-slate-700">
                By digitizing historical patient data, TIBA ensures that clinicians can make more informed decisions.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#191D3A]">Continuity of Care</h3>
              <p className="text-slate-700">
                Patients can share records across hospitals and clinics, eliminating test duplication and data loss.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#191D3A]">Patient Empowerment</h3>
              <p className="text-slate-700">
                Tools like Pingoo AI allow patients to understand conditions, treatments, and medications better.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-[#191D3A]">Admin Efficiency</h3>
              <p className="text-slate-700">
                Real-time access to clean medical data reduces the burden of paperwork, improves hospital workflow and ensures faster decision making.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center py-16">
          <h2 className="text-3xl font-bold mb-6 text-[#191D3A]">Join Us on Our Journey</h2>
          <p className="text-lg text-slate-700 mb-8">
            Discover how Savannah AI is transforming healthcare in Kenya through AI-driven digitization and patient-first design.
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
              Explore Our Tools
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroducingTiba;
