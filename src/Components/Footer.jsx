import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { resourcesLinks, platformLinks, communityLinks, navItems } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-700 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-200 to-red-300 text-transparent bg-clip-text">
              Savannah AI
            </h3>
            <p className="text-neutral-400 text-sm">
              Empowering African AI with quality data and innovative solutions.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-neutral-400 hover:text-red-300 transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-red-300 transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-red-300 transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-red-300 transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-md font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-3">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-red-300 transition-colors text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-md font-semibold mb-4 text-white">Platform</h3>
            <ul className="space-y-3">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-red-300 transition-colors text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-md font-semibold mb-4 text-white">Community</h3>
            <ul className="space-y-3">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-red-300 transition-colors text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-neutral-800 pt-8 pb-4 mb-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-white focus:outline-none focus:border-red-300"
              />
              <button className="bg-gradient-to-r from-red-500 to-orange-300 px-6 py-2 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-neutral-400 text-sm">
              &copy; {new Date().getFullYear()} Savannah AI. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-neutral-400 hover:text-red-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-400 hover:text-red-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
