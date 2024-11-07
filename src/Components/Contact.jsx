import React from 'react';
import { Mail, Phone, Send, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="relative py-20 border-b border-neutral-800">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-neutral-900 to-black opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-500/10 text-red-300 rounded-full px-4 py-2 text-sm font-medium uppercase tracking-wider mb-6">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's Start a
            <span className="block mt-2 bg-gradient-to-r from-orange-200 to-red-300 text-transparent bg-clip-text">
              Conversation
            </span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Contact Info */}
          <div className="w-full lg:w-1/2 space-y-8">
            <p className="text-lg text-neutral-300 leading-relaxed">
              Feel free to reach out to us with any inquiries or questions. Our team is here to assist you and provide
              information about our services, pricing, and more.
            </p>
            
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-500/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-red-300" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Phone Numbers</h4>
                  <p className="text-neutral-400">+254793704217</p>
                  <p className="text-neutral-400">+254726258462</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-500/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-red-300" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Email</h4>
                  <p className="text-neutral-400">info@savannahai.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-red-500/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-red-300" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Location</h4>
                  <p className="text-neutral-400">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="w-full lg:w-1/2">
            <form className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-8 border border-neutral-800">
              <div className="space-y-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:border-red-300 transition-colors"
                    id="name"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2" htmlFor="email">
                    Your Email
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:border-red-300 transition-colors"
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:border-red-300 transition-colors"
                    id="message"
                    rows="4"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-orange-300 py-3 px-6 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
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
