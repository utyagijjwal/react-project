import React from 'react';
import { FaLaptopCode, FaPaintBrush, FaDraftingCompass } from 'react-icons/fa';

const Ujjwal = () => {
  return (
    <section className="text-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold mb-12 tracking-wide">My Services</h2>

        {/* Service Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Web Design Service */}
          <div className="group relative bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 ease-in-out border border-black">
            <FaPaintBrush className="text-5xl text-blue-500 mb-4 group-hover:text-black transition-all duration-300" />
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-black transition-all duration-300">Web Design</h3>
            <p className="text-gray-600 group-hover:text-black mt-4">
              Creating responsive and visually captivating websites, focusing on user experience and modern design trends.
            </p>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 scale-x-0 group-hover:scale-x-100 transform transition duration-500 ease-in-out"></div>
          </div>

          {/* UI/UX Design Service */}
          <div className="group relative bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 ease-in-out border border-black">
            <FaDraftingCompass className="text-5xl text-green-500 mb-4 group-hover:text-black transition-all duration-300" />
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-black transition-all duration-300">UI/UX Design</h3>
            <p className="text-gray-600 group-hover:text-black mt-4">
              Crafting user-friendly interfaces and improving user interaction with creative and intuitive design systems.
            </p>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-500 to-teal-600 scale-x-0 group-hover:scale-x-100 transform transition duration-500 ease-in-out"></div>
          </div>

          {/* Frontend Development Service */}
          <div className="group relative bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 ease-in-out border border-black">
            <FaLaptopCode className="text-5xl text-purple-500 mb-4 group-hover:text-black transition-all duration-300" />
            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-black transition-all duration-300">Frontend Development</h3>
            <p className="text-gray-600 group-hover:text-black mt-4">
              Building high-performance web applications using modern frameworks, ensuring responsiveness and speed.
            </p>
            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-600 scale-x-0 group-hover:scale-x-100 transform transition duration-500 ease-in-out"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ujjwal;