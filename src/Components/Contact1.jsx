import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, ArrowRight } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block bg-[#1EACEB]/10 text-[#1EACEB] rounded-full px-4 py-2 text-sm font-medium uppercase tracking-wider mb-6">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-[#191D3A]">
            Get in Touch
            <span className="block mt-2 bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] text-transparent bg-clip-text">
              We'd Love to Hear from You
            </span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Have questions about our models? Need research collaboration? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-[#1EACEB]/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-[#1EACEB]" />
                </div>
                <div>
                  <h3 className="text-[#191D3A] font-semibold mb-2">Phone</h3>
                  <p className="text-slate-600">+254 (793) 704-217</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-[#1EACEB]/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-[#1EACEB]" />
                </div>
                <div>
                  <h3 className="text-[#191D3A] font-semibold mb-2">Email</h3>
                  <p className="text-slate-600">info@savannahinc.co.ke</p>
                  <p className="text-slate-600">support@tiba.co.ke</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-[#1EACEB]/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#1EACEB]" />
                </div>
                <div>
                  <h3 className="text-[#191D3A] font-semibold mb-2">Location</h3>
                  <p className="text-slate-600">Westlands, Brookside Dr</p>
                  <p className="text-slate-600">The Piano, Nairobi, Kenya</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-[#1EACEB]/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-[#1EACEB]" />
                </div>
                <div>
                  <h3 className="text-[#191D3A] font-semibold mb-2">Business Hours</h3>
                  <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-slate-600">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-[#191D3A]">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 
                               text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1EACEB] 
                               transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 
                               text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1EACEB] 
                               transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 
                             text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1EACEB] 
                             transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 
                             text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#1EACEB] 
                             transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] py-3 px-6 rounded-lg 
                           text-white font-semibold hover:opacity-90 transition-opacity flex items-center 
                           justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-white p-4 rounded-xl shadow-md border border-gray-100">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.642614163368!2d-122.14438138397606!3d37.42938597982537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb3741c3518d%3A0x55cb5a851766146b!2s435%20Tasso%20St%2C%20Palo%20Alto%2C%20CA%2094301%2C%20USA!5e0!3m2!1sen!2sus!4v1635835023219!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;