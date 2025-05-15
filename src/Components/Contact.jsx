import React from 'react';
import { Mail, Phone, Send, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="relative py-20 border-b border-gray-200 bg-white">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#1EACEB]/10 text-[#1EACEB] rounded-full px-4 py-2 text-sm font-medium uppercase tracking-wider mb-6">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Let's Start a
            <span className="block mt-2 bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] text-transparent bg-clip-text">
              Conversation
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Contact Info */}
          <div className="w-full lg:w-1/2 space-y-8">
            <p className="text-lg text-slate-600 leading-relaxed">
              Feel free to reach out to us with any inquiries or questions. Our team is here to assist you and provide
              information about our services, pricing, and more.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-[#4BBC30]/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-[#4BBC30]" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-2">Phone Numbers</h4>
                  <p className="text-slate-600">+254793704217</p>
                  <p className="text-slate-600">+254726258462</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#1EACEB]/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[#1EACEB]" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-2">Email</h4>
                  <p className="text-slate-600">info@savannahai.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#1E4EEB]/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#1E4EEB]" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-semibold mb-2">Location</h4>
                  <p className="text-slate-600">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full lg:w-1/2">
            <form className="bg-white shadow-md rounded-xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div>
                  <label className="block text-slate-900 text-sm font-medium mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1EACEB] transition-colors"
                    id="name"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-slate-900 text-sm font-medium mb-2" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1EACEB] transition-colors"
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-900 text-sm font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#1EACEB] transition-colors"
                    id="message"
                    rows="4"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] py-3 px-6 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
