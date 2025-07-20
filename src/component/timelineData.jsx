import React, { useEffect, useRef } from "react";
import {
  FaClipboardList,
  FaPlane,
  FaCheckCircle,
  FaFileAlt,
  FaTasks,
  FaRedoAlt,
  FaLock,
  FaHistory,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { MdOutlineAirplaneTicket } from "react-icons/md";
import {
  TbReport,
  TbReportSearch,
  TbArrowNarrowRightDashed,
} from "react-icons/tb";
import { FaFileCircleCheck } from "react-icons/fa6";
import { PiListChecksFill } from "react-icons/pi";
import { GiArchiveResearch } from "react-icons/gi";

import AOS from "aos";
import "aos/dist/aos.css";

const timelineData = [
  {
    title: "Pre-Audit Preparation",
    color: "border-blue-500",
    // icon: <FaClipboardList className="text-red-400" size={lg:'60'} />,
    icon: <FaClipboardList className="text-red-400 w-8 h-8 lg:w-14 lg:h-14" />,
  },
  {
    title: "Audit Arrangements including travel/ Accommodation Bookings",
    color: "border-green-500",
    icon: (
      <MdOutlineAirplaneTicket className="text-red-400 w-8 h-8 lg:w-14 lg:h-14" />
    ),
  },
  {
    title: "Audit Conduction",
    color: "border-yellow-500",
    icon: (
      <FaFileCircleCheck className="text-red-400 w-8 h-8 lg:w-14 lg:h-14" />
    ),
  },
  {
    title:
      "Audit Reporting: Draft report in Two Weeks for Review, Final Report in 04 Weeks",
    color: "border-red-500",
    icon: <FaFileAlt className="text-red-400 w-8 h-8 lg:w-14 lg:h-14" />,
  },
  {
    title: "CAPA Compliance with Evidence and Target Closure Time",
    color: "border-sky-500",
    icon: <PiListChecksFill className="text-red-400 w-8 h-8 lg:w-14 lg:h-14" />,
  },
  {
    title: "Each CAPA Follow-up until Closure",
    color: "border-purple-500",
    icon: <TbReportSearch className="text-red-400 w-8 h-8 lg:w-14 lg:h-14" />,
  },

  {
    title: "Audit Closure",
    color: "border-orange-500",
    icon: (
      <GiArchiveResearch className="text-red-400 w-8 h-8 lg:w-14 lg:h-14" />
    ),
  },
  {
    title: "Follow-up Audit in Every 3 Years",
    color: "border-pink-500",
    icon: <TbReport className="text-red-400 w-8 h-8 lg:w-14 lg:h-14" />,
  },
];

const Timeline = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1400 });
    AOS.refresh();
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden lg:p-4 p-2 ">
      <button
        onClick={() => scroll("left")}
        className="absolute left-1 top-1/2 z-30 transform -translate-y-1/2 
             bg-white/30 backdrop-blur-md text-gray-800 
             hover:bg-gray-800 hover:text-white 
             border border-white/50 hover:border-white 
             shadow-xl hover:shadow-2xl 
             transition-all duration-300 ease-in-out 
             lg:p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <FaChevronLeft size={20} />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-1 top-1/2 z-30 transform -translate-y-1/2 
             bg-white/30 backdrop-blur-md text-gray-800 
             hover:bg-gray-800 hover:text-white 
             border border-white/50 hover:border-white 
             shadow-xl hover:shadow-2xl 
             transition-all duration-300 ease-in-out 
             lg:p-3 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <FaChevronRight size={20} />
      </button>

      <div
        ref={scrollRef}
        className="flex lg:min-w-[1000px] overflow-x-auto no-scrollbar scroll-smooth relative z-10"
      >
        {timelineData.map((event, index) => {
          const isAbove = index % 2 === 0;
          const isLast = index === timelineData.length - 1;

          return (
            <div
              key={index}
              className=" flex flex-col items-center lg:min-w-[220px] relative mx-4 hover:scale-3d "
            >
              <div className="absolute top-1 text-center text-red-400 font-bold bg-white hover:bg-gradient-to-r from-[#4682B4] to-[#04080B]  border border-gray-500 hover:border-white rounded-full lg:px-3 px-2 lg:py-1 shadow-sm z-10 ">
                {index + 1}
              </div>

              <div
                data-aos={isAbove ? "fade-up" : "fade-down"}
                className={`lg:w-52 w-34 h-34 lg:h-52 border-red-400   flex flex-col items-center justify-center  p-2 rounded-full border-t-4 border-dotted `}
              >
                <div
                  data-aos={isAbove ? "fade-up" : "fade-down"}
                  className={`lg:w-48 w-30 h-30 lg:h-48 border-sky-700 bg-white hover:bg-gradient-to-r from-[#4682B4] to-[#04080B] hover:text-white flex flex-col items-center justify-center shadow-lg p-2 rounded-full border-4 ${event}`}
                >
                  {event.icon}
                  <h3 className="lg:text-[12px] text-[7px] font-normal text-center lg:mt-4 mt-1">
                    {event.title}
                  </h3>
                </div>
              </div>
              {!isLast && (
                <div className="">
                  <TbArrowNarrowRightDashed
                    size={28}
                    className="absolute  right-[-28px] top-1/2 -translate-y-1/2 text-red-400 "
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
