import React from 'react';

const Education = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg text-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Education</h2>

        <div className="flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0 md:space-x-12">
          
          {/* School Section - Left */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-8">Schooling</h3>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
              <h4 className="text-2xl font-semibold mb-2">High School</h4>
              <p className="text-black mb-4">New Happy Senior Secondary School</p>
              <p className="text-black">Year: 2006 - 2022</p>
              <p className="text-black">Percentage: 88%</p>
            </div>
          </div>

          {/* College Section - Right */}
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold mb-8">College</h3>
            <div className="bg-white text- p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
              <h4 className="text-2xl font-semibold mb-2">B.Tech in CSE</h4>
              <p className="text-black mb-4">Punjab Technical University</p>
              <p className="text-black">Year: 2022 - 2026</p>
              <p className="text-black">CGPA: 7.5/10</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
