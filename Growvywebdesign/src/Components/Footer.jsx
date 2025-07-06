// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white mt-20 w-full">
      {/* Full-width card-style footer */}
      <div className="w-full bg-white shadow-md border-t border-gray-200 px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          
          {/* Growvy + Social Icons */}
          <div>
            <h3 className="text-3xl font-extrabold mb-4">Growvy</h3>
            <p className="text-gray-600 mb-4">
              Optimize your business with smart asset management, growth strategies, 
              and cutting-edge solutions to boost sales and efficiency.
            </p>

            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img src="/facebook.png" alt="Facebook" className="w-10 h-10 rounded-full" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="/Ins.png" alt="Instagram" className="w-10 h-10 rounded-full" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <img src="/Link.png" alt="LinkedIn" className="w-10 h-10 rounded-full" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-black">About Us</Link></li>
              <li><Link to="/services" className="text-gray-600 hover:text-black">Services</Link></li>
              <li><Link to="/pricing" className="text-gray-600 hover:text-black">Plans & Pricing</Link></li>
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link to="/jobs" className="text-gray-600 hover:text-black">Business Solutions</Link></li>
              <li><Link to="/success" className="text-gray-600 hover:text-black">Success Stories</Link></li>
              <li><Link to="/jobs" className="text-gray-600 hover:text-black">Jobs</Link></li>
            </ul>
          </div>

          {/* Footer Image */}
          <div className="flex items-center -mt-9 px-16">
            <img 
              src="/Vector 1.png"
              alt="Growvy"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

       
      </div>
    </footer>
  );
};


export default Footer;
