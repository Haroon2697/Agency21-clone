import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Logo */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h2 className="text-3xl font-bold text-yellow-500 ">
              Agency
              <span className="text-3xl font-bold text-white ">21</span>
            </h2>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg text-yellow-500 font-semibold mb-6 uppercase tracking-widest relative before:absolute before:left-0 before:bottom-0 before:w-12 before:h-1 before:bg-yellow-500 before:rounded-lg">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['FAQ', 'Offers', 'Realtors', 'Blog', 'Events'].map((link, index) => (
                <li key={index} className="relative">
                  <a
                    href="#"
                    className="text-white text-sm tracking-wide pl-4 relative before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-2 before:bg-yellow-300 before:rounded-full"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg text-yellow-500 font-semibold mb-6 uppercase tracking-widest relative before:absolute before:left-0 before:bottom-0 before:w-12 before:h-1 before:bg-yellow-500 before:rounded-lg">
              Useful Links
            </h3>
            <ul className="space-y-3">
              {['Site Policy', 'Terms & Conditions', 'Privacy Policy'].map((link, index) => (
                <li key={index} className="relative">
                  <a
                    href="#"
                    className="text-white text-sm tracking-wide pl-4 relative before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-2 before:bg-yellow-500 before:rounded-full"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg text-yellow-500 font-semibold mb-6 uppercase tracking-widest relative before:absolute before:left-0 before:bottom-0 before:w-12 before:h-1 before:bg-yellow-500 before:rounded-lg">
              Location
            </h3>
            <ul className="space-y-3">
              <li className="text-white text-sm">123 Main Street</li>
              <li className="text-white text-sm">Islamabad</li>
              <li className="text-white text-sm">Pakistan</li>
              <li className="text-white text-sm">info@agency21.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-yellow-500 font-semibold mb-6 uppercase tracking-widest relative before:absolute before:left-0 before:bottom-0 before:w-12 before:h-1 before:bg-yellow-500 before:rounded-lg">
              Connect with Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-300 transition-colors text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors text-white">
                <Linkedin size={24} />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-yellow-300 transition-colors text-white">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-yellow-300 text-center text-sm">
          <p className="text-white text-center">&copy; MGC Copyright 2023 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
