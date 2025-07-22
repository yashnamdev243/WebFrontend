import React from "react";

const ServiceSteps = ({ services }) => {
  return (
    <div className="relative flex flex-col items-end space-y-6 mt-30">
      {services.map((service, index) => (
        <div
          key={index}
          className={`relative px-2 py-4 w-[250px] text-center text-white font-semibold rounded-xl shadow-lg transition-transform transform hover:scale-105 ${service.bgColor}`}
          style={{ marginRight: `${index * 40}px` }}
        >
          {service.text}
          {index !== services.length - 1 && (
            <div
              className="absolute right-1/2 w-[10px] h-10 bg-gray-400"
              style={{
                top: "100%",
                right: "50%",
                transform: "translateX(50%) rotate(0deg)",
              }}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ServiceSteps;
