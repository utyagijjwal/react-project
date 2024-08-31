import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Me</h1>
        
        <p className="text-lg text-gray-700 leading-8 mb-6">
          Hi, I'm <span className="font-bold text-blue-600">Ujjwal</span>, from 
          <span className="font-bold text-blue-600"> Yamuna Nagar</span>. I am currently pursuing 
          my B.Tech in Computer Science at 
          <span className="font-bold text-blue-600"> Punjab Technical University, Jalandhar</span>.
          I have a strong passion for web development and enjoy creating efficient, modern, and
          user-friendly websites and applications.
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-blue-700">HTML</h3>
            <p className="text-gray-600">Experienced in building structured, semantic, and accessible HTML5 pages.</p>
          </div>

          <div className="bg-blue-100 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-blue-700">CSS</h3>
            <p className="text-gray-600">Proficient in creating visually appealing layouts with CSS3 and modern techniques.</p>
          </div>

          <div className="bg-blue-100 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-blue-700">JavaScript</h3>
            <p className="text-gray-600">Skilled in writing clean, efficient JavaScript to add interactivity and logic to websites.</p>
          </div>

          <div className="bg-blue-100 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-blue-700">React.js</h3>
            <p className="text-gray-600">Experienced in building dynamic, component-based user interfaces with React.js.</p>
          </div>

          <div className="bg-blue-100 p-4 rounded-md shadow-md">
            <h3 className="text-xl font-semibold text-blue-700">Tailwind CSS</h3>
            <p className="text-gray-600">Proficient in using Tailwind CSS for rapid and responsive design implementation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
