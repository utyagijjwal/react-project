import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Me</h3>
            <p>
              I am Ujjwal, a frontend developer passionate about creating dynamic and responsive web applications.
              Let's build something amazing together!
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-gray-300 transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300 transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-gray-300 transition duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-300 transition duration-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Follow Me</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://facebook.com" className="text-white hover:text-gray-300 transition duration-300">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-gray-300 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-gray-300 transition duration-300">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://github.com" className="text-white hover:text-gray-300 transition duration-300">
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-200 pt-4">
          <p>&copy; {new Date().getFullYear()} Ujjwal. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
