import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-lime-200 font-bold hover:text-orange-200"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-lime-200 font-bold hover:text-orange-200"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-lime-200 font-bold hover:text-orange-200"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center col-span-2 lg:col-span-3 justify-end">
          <p className="text-red-300 mr-4 font-bold">Follow Us:</p>
          <a href="#" className="text-white hover:text-red-300 mr-4">
            <FaFacebook className="text-xl" />
          </a>
          <a href="#" className="text-white hover:text-red-300 mr-4">
            <FaTwitter className="text-xl" />
          </a>
          <a href="#" className="text-white hover:text-red-300">
            <FaInstagram className="text-xl" />
          </a>
        </div>
        <div className="col-span-3 text-center text-red-300 mt-4">
          &copy; {new Date().getFullYear()} Savannah AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
