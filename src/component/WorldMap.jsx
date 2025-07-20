import React from "react";
import worldMap from "/free-blank-map-asia.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";

const markers = [
  { name: "Bangladesh", top: "51%", left: "72%" },
  { name: "Russia", top: "25%", left: "75%" },
  { name: "India", top: "55%", left: "67%" },
  { name: "China", top: "45%", left: "73%" },
  { name: "Pakistan", top: "50%", left: "65%" },
  { name: "South Africa", top: "76%", left: "53%" },
  { name: "USA", top: "38%", left: "20%" },
  { name: "Europe", top: "30%", left: "55%" },
  { name: "Tajikistan", top: "42%", left: "66%" },
];

const WorldMap = () => {
  return (
    <div
      className="relative  mt-10 
    mx-auto  w-full max-w-[1210px]  hover:shadow-xl   overflow-hidden"
      data-aos="zoom-in"
    >
      <img
        src={worldMap}
        alt="World Map"
        className="w-full h-auto object-cover rounded-lg shadow-2xl "
      />
      {markers.map((marker, index) => (
        <div
          key={index}
          className="absolute flex flex-col items-center"
          style={{
            top: marker.top,
            left: marker.left,
            transform: "translate(-50%, -50%)",
          }}
        >
          <FaMapMarkerAlt size={22} className="text-red-500  " />

          <span className="text-xs text-black bg-gray-300 bg-opacity-80 px-1 rounded mt-1">
            {marker.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default WorldMap;
