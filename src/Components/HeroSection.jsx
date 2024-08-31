import {Link } from "react-router-dom"
import React from 'react';
import MyImg from "../Assests/regis.svg"
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
        {/* Left Section - Text */}
        <div className="flex flex-col space-y-6 lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-extrabold">
            Welcome to Ujjwal's Website
          </h1>
          <p className="text-lg lg:text-xl">
            I am a frontend developer and a B.Tech CSE student studying at Punjab Technical University.
          </p>
          <Link to="/contact" className="bg-white text-blue-500 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 hover:shadow-lg transition duration-300 ease-in-out">
            Connect with me
          </Link>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            src={MyImg}
            alt="Ujjwal's Profile"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
