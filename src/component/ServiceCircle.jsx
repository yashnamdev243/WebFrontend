import React from "react";

const ServiceCircle = ({ services = [] }) => {
  if (!Array.isArray(services) || services.length === 0) {
    return <p className="text-center text-gray-500">No services available</p>;
  }

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <div className="absolute w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>

      {services.map((service, index) => {
        const angle = (index / services.length) * (2 * Math.PI);
        const x = Math.cos(angle) * 220;
        const y = Math.sin(angle) * 160;

        return (
          <div
            key={index}
            className={`absolute px-5 py-4 rounded-2xl shadow-2xl backdrop-blur-lg bg-opacity-80 transition-all transform hover:scale-110 hover:rotate-6 flex items-center justify-center text-white font-semibold`}
            style={{
              transform: `translate(${x}px, ${y}px)`,
              width: "180px",
              backgroundColor: service.color || "rgba(255, 255, 255, 0.2)",
            }}
          >
            {service.text}
          </div>
        );
      })}
    </div>
  );
};

export default ServiceCircle;
