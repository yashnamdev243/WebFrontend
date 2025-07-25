
// Components/ThingsToPack.js
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import packingItems_data from "../Data/packingItems_data";

const ThingsToPack = () => {
  return (
    <div className="max-w-[1250px] mx-auto p-4 mt-6 flex flex-col justify-center items-center">
      {/* Main Title */}
      
      <h2 class="text-3xl lg:text-4xl text-[#1f84a6]  mx-auto mb-10 font-bold relative inline-block stroke-current pb-1.5">
      Things To Pack
          <svg
            class="absolute -bottom-0.5 w-full max-h-1.5"
            viewBox="0 0 55 5"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
              stroke-width="2"
            ></path>
          </svg>
        </h2>
      {/* Grid Layout for Category Cards */}
      
      <div className="grid md:grid-rows-2 lg:grid-rows-1 gap-8 mr-2">
        {packingItems_data.map((group, idx) => (
          <div
            key={idx}
            className="border border-gray-300 rounded-lg shadow-md p-4 md:p-6 bg-white "
          >
            <h3 className="lg:text-2xl text-md font-bold text-[#1f84a6] mb-4">
              {group.category}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">

            {group.items.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-5 p-3 h-auto bg-gray-100 shadow-inner border border-gray-200 rounded-lg mb-4 transition-transform transform duration-300 hover:scale-105 hover:shadow-xl active:scale-105 active:shadow-xl"
              >
                <span className="text-2xl md:text-3xl text-[#0a617f]">{item.icon}</span>
                <div className="flex-1">
                  <h4 className="text-sm md:text-lg font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-gray-600 text-xs md:text-sm pt-1">{item.description}</p>
                </div>
                <FaCheckCircle className="text-green-700 text-xl" />
              </div>
            ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThingsToPack;
