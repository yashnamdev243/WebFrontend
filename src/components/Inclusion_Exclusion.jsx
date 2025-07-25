import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { TourInclusionExclusion } from "../Data/Inclusion_Exclusion_Data";

const Inclusion_Exclusion = () => {
  const { id } = useParams();
  const tourData = TourInclusionExclusion.find(
    (tour) => tour.id === parseInt(id)
  );
  const [selectedCategory, setSelectedCategory] = useState("Inclusion");

  if (!tourData) {
    return (
      <p className="text-center text-red-500 mt-10">
        No details available for this tour.
      </p>
    );
  }

  const displayedData =
    selectedCategory === "Inclusion" ? tourData.inclusion : tourData.exclusion;

  return (
    <div className="max-w-[1220px] mx-4 md:mx-auto px-4  md:px-6 py-6 space-y-8 bg-gradient-to-b from-blue-100 to-green-100 shadow-lg rounded-xl">
      {/* Toggle Buttons */}
      <div className="flex justify-center gap-4 sm:gap-8">
        {["Inclusion", "Exclusion"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`relative fira-sans px-4 sm:px-6 text-lg sm:text-2xl font-semibold transition duration-300
              ${
                selectedCategory === category
                  ? "text-[#0c5973] font-bold before:w-[67%]  before:left sm:before:left-6"
                  : "text-black hover:text-[#0c5973]"
              } 
              before:absolute before:-bottom-1 before:h-[2.5px] before:w-0 before:bg-[#0c5973] 
              before:transition-all before:duration-300 hover:before:w-20 sm:hover:before:w-25`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display Data in Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {displayedData.map((item, index) => (
          <div
            key={index}
            className="p-4 sm:p-5 md:text-[18px] text-sm bg-gray-100 shadow-md rounded-lg border-gray-200 transition transform duration-300 hover:scale-105 active:scale-105 active:shadow-lg hover:shadow-lg fira-bold text-zinc-800"
          >
          {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inclusion_Exclusion;
