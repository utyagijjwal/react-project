import React, { useState } from 'react';
import {Link } from "react-router-dom"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-white tracking-wide">
          Ujjwal
        </div>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Links for Desktop */}
        <div className="hidden lg:flex space-x-8">
          <Link
            to="/"
            className="text-white text-lg font-semibold hover:bg-white hover:text-blue-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out shadow hover:shadow-lg"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white text-lg font-semibold hover:bg-white hover:text-blue-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out shadow hover:shadow-lg"
          >
            About Us
          </Link>
          <Link
            to="/service"
            className="text-white text-lg font-semibold hover:bg-white hover:text-blue-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out shadow hover:shadow-lg"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white text-lg font-semibold hover:bg-white hover:text-blue-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out shadow hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>

        {/* Dropdown Links for Mobile */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg z-10">
            <div className="flex flex-col space-y-4 py-6 px-8">
              <Link
                to="/"
                className="text-white text-lg font-semibold hover:bg-white hover:text-blue-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out shadow hover:shadow-lg"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-white text-lg font-semibold hover:bg-white hover:text-blue-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out shadow hover:shadow-lg"
              >
                About Us
              </Link>
              <Link
                to="/service"
                className="text-white text-lg font-semibold hover:bg-white hover:text-blue-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out shadow hover:shadow-lg"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-white text-lg font-semibold hover:bg-white hover:text-blue-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out shadow hover:shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
