import React from 'react';

const Contact = () => {
  return (
    <section className="relative mt-20 border-b border-neutral-800 min-h-[600px]" style={{ backgroundColor: 'rgba(0,0,0, 0.5)' }}>
      <div className="container mx-auto px-4 py-20">
        
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Contact Us</h2>
            <p className="text-lg text-red-200 leading-relaxed mb-6">
              Feel free to reach out to us with any inquiries or questions. Our team is here to assist you and provide
              information about our services, pricing, and more. You can contact us via phone, email, or by filling out
              the form below.
            </p>
            <div className="mb-6">
              <h4 className="text-xl font-bold text-red-200 mb-2">Phone:</h4>
              <p className="text-lg text-red-200">(123) 456-7890</p>
            </div>
            <div className="mb-6">
              <h4 className="text-xl font-bold text-red-200 mb-2">Email:</h4>
              <p className="text-lg text-red-200">info@savannahai.com</p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Your Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Your Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-gradient-to-r from-red-500 to-orange-300 py-3 px-4 rounded-md text-white font-bold shadow-md hover:shadow-lg focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Send Message
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