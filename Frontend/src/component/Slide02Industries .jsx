import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPills,
  FaAppleAlt,
  FaMicroscope,
  FaHospital,
  FaLeaf,
  FaFlask,
  FaVial,
} from "react-icons/fa";

const industries = [
  { text: "Pharmaceuticals", icon: <FaPills />, bgColor: "bg-blue-500" },
  { text: "Food Industries", icon: <FaAppleAlt />, bgColor: "bg-red-500" },
  { text: "Medical Devices", icon: <FaMicroscope />, bgColor: "bg-purple-500" },
  { text: "Healthcare", icon: <FaHospital />, bgColor: "bg-teal-500" },
  { text: "Nutraceuticals", icon: <FaLeaf />, bgColor: "bg-green-500" },
  { text: "Chemical Industry", icon: <FaFlask />, bgColor: "bg-yellow-500" },
  { text: "R&D Labs", icon: <FaVial />, bgColor: "bg-indigo-500" },
];

const Slide02Industries = () => {
  const [radius, setRadius] = useState(380);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const updateRadius = () => {
      if (window.innerWidth >= 1024) {
        setRadius(310); 
      } else if (window.innerWidth >= 768) {
        setRadius(310); 
      } else {
        setRadius(130); 
      }
    };

    updateRadius();
    window.addEventListener("resize", updateRadius); 

    return () => window.removeEventListener("resize", updateRadius);
  }, []);

  return (
    <div className="flex flex-col items-center  justify-center text-white relative w-full mx-auto">
      
      <h2 className="lg:text-4xl text-xl font-bold text-black  mt-20 lg:mt-10 " data-aos="fade-up">
        Project Management & Services
      </h2>

      <div className="hidden lg:flex flex-col items-center lg:mt-10">
        <div className="relative lg:w-[800px] lg:h-[490px]  rounded-t-full flex items-center justify-center">
          
          <div className="relative w-[450px] h-[420px]">
            {industries.map((industry, index) => {
              const angle = (index / (industries.length - 1)) * Math.PI; 
              const x = 150 + radius * Math.cos(angle);
              const y = 180 - radius * Math.sin(angle);

              return (
                <div
                  key={index}
                  className={`absolute flex mt-30 items-center justify-center w-36 h-36 ${industry.bgColor} text-white rounded-full border-2 border-sky-900 shadow-xl hover:scale-105 transition-all`}
                  style={{ left: `${x}px`, top: `${y}px` }}
                  data-aos="zoom-in"
                >
                  <div className="absolute bottom-16 text-4xl animate-bounce">
                    {industry.icon}
                  </div>
                  <p className="absolute bottom-10 text-sm font-semibold text-gray-100 text-center">
                    {industry.text}
                  </p>
                </div>
              );
            })}
            
            <div className="relative w-full h-60 border-t-24 border-sky-900 mt-40  rounded-t-full flex items-center justify-center">
              <p className="text-xl font-bold text-black">Project Management</p>
            </div>
          </div>
        </div>
      </div>

    
       <div className ="lg:hidden flex flex-wrap justify-center  mt-10">
        <div className="relative  w-[340px] h-[380px] mx-auto  rounded-t-full flex items-center justify-center">
          
          <div className="relative w-[300px] h-[435px] mx-auto mr-26">
            {industries.map((industry, index) => {
              const angle = (index / (industries.length - 1)) * Math.PI; 
              const x = 150 + radius * Math.cos(angle);
              const y = 180 - radius * Math.sin(angle);

              return (
                <div
                  key={index}
                  className={`absolute flex  mx-auto items-center justify-center w-16 h-16 ${industry.bgColor} text-white rounded-full border-2 border-sky-900 shadow-xl hover:scale-105 transition-all`}
                  style={{ left: `${x}px`, top: `${y}px` }}
                  data-aos="zoom-in"
                >
                  <div className="absolute bottom-7 text-lg animate-bounce">
                    {industry.icon}
                  </div>
                  <p className="absolute bottom-4 text-[7px] font-semibold text-gray-100 text-center">
                    {industry.text}
                  </p>
                </div>
              );
            })}
            
            <div className="relative ml-26 w-40 mx-auto h-60 border-t-12 border-sky-900 mt-32  rounded-t-full flex items-center justify-center">
              <p className="text-sm mt-[-13a0px] font-bold text-black">Project Management</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Slide02Industries;
