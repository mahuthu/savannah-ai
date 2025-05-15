import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { resourcesLinks, platformLinks, communityLinks, navItems } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] text-transparent bg-clip-text">
              Savannah AI
            </h3>
            <p className="text-slate-600 text-sm">
            Building Africa's Future with Precision Data in Health and Agriculture.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-slate-400 hover:text-[#1EACEB] transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-slate-400 hover:text-[#1EACEB] transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-slate-400 hover:text-[#1EACEB] transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-slate-400 hover:text-[#1EACEB] transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-md font-semibold mb-4 text-[#191D3A]">Resources</h3>
            <ul className="space-y-3">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-[#1EACEB] transition-colors text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-md font-semibold mb-4 text-[#191D3A]">Platform</h3>
            <ul className="space-y-3">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-[#1EACEB] transition-colors text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-md font-semibold mb-4 text-[#191D3A]">Community</h3>
            <ul className="space-y-3">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-[#1EACEB] transition-colors text-sm"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 pt-8 pb-4 mb-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-lg font-semibold text-[#191D3A] mb-4">Stay Updated</h3>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 text-slate-800 focus:outline-none focus:border-[#1EACEB]"
              />
              <button className="bg-gradient-to-r from-[#4BBC30] to-[#1EACEB] px-6 py-2 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Savannah AI. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-[#1EACEB] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-500 hover:text-[#1EACEB] transition-colors">
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
