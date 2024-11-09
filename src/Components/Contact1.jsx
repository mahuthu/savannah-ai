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
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block bg-red-500/10 text-red-300 rounded-full px-4 py-2 text-sm font-medium uppercase tracking-wider mb-6">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Get in Touch
            <span className="block mt-2 bg-gradient-to-r from-orange-200 to-red-300 text-transparent bg-clip-text">
              We'd Love to Hear from You
            </span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
            Have questions about our services? Need support? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="bg-neutral-900/50 backdrop-blur-sm p-6 rounded-xl border border-neutral-800">
              <div className="flex items-start space-x-4">
                <div className="bg-red-500/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-red-300" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-neutral-400">+254793704217</p>
                  <p className="text-neutral-400">+254726258462</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur-sm p-6 rounded-xl border border-neutral-800">
              <div className="flex items-start space-x-4">
                <div className="bg-red-500/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-red-300" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-neutral-400">info@savannahai.com</p>
                  <p className="text-neutral-400">support@savannahai.com</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur-sm p-6 rounded-xl border border-neutral-800">
              <div className="flex items-start space-x-4">
                <div className="bg-red-500/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-red-300" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Location</h3>
                  <p className="text-neutral-400">Nairobi, Kenya</p>
                  <p className="text-neutral-400">East Africa</p>
                </div>
              </div>
            </div>

            <div className="bg-neutral-900/50 backdrop-blur-sm p-6 rounded-xl border border-neutral-800">
              <div className="flex items-start space-x-4">
                <div className="bg-red-500/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-red-300" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Business Hours</h3>
                  <p className="text-neutral-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-neutral-400">Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-neutral-900/50 backdrop-blur-sm p-8 rounded-xl border border-neutral-800">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 
                               text-white placeholder-neutral-400 focus:outline-none focus:border-red-300 
                               transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 
                               text-white placeholder-neutral-400 focus:outline-none focus:border-red-300 
                               transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 
                             text-white placeholder-neutral-400 focus:outline-none focus:border-red-300 
                             transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 
                             text-white placeholder-neutral-400 focus:outline-none focus:border-red-300 
                             transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-orange-300 py-3 px-6 rounded-lg 
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
          <div className="bg-neutral-900/50 backdrop-blur-sm p-4 rounded-xl border border-neutral-800">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19891888283!2d36.70730744863279!3d-1.3031933000000025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1635835023219!5m2!1sen!2sus"
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