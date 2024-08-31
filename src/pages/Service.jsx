import React from "react";

const services = [
  {
    title: "Web Development",
    description:
      "Build modern, responsive, and user-friendly websites with clean and efficient code.",
    icon: "🌐",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Leverage AI techniques to develop smart applications that learn and adapt over time.",
    icon: "🤖",
  },
  {
    title: "UI/UX Design",
    description:
      "Create visually appealing and highly intuitive user interfaces with seamless user experiences.",
    icon: "🎨",
  },
  {
    title: "Software Engineering",
    description:
      "Design and develop robust, scalable, and maintainable software systems tailored to business needs.",
    icon: "💻",
  },
];

const Service = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          My Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4 text-blue-500">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
