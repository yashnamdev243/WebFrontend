import React, { useEffect, useState } from "react";
import { GiTrophyCup, GiWorld } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { TbDeviceImacUp } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Link } from "react-router-dom";

const GMPSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: "ease-out", once: true });
  }, []);

  const stats = [
    {
      icon: TbDeviceImacUp,
      title: "Completed Projects",
      value: 50,
      suffix: "+",
      gradient: "bg-gradient-to-r from-sky-200 to-sky-400",
      textColor: "text-sky-300",
    },
    {
      icon: GiTrophyCup,
      title: "Years in Industry",
      value: 20,
      suffix: "+ Years",
      gradient: "bg-gradient-to-r from-pink-200 to-pink-400",
      textColor: "text-pink-300",
    },
    {
      icon: GiWorld,
      title: "Global Presence",
      value: 5,
      suffix: "+ Countries",
      gradient: "bg-gradient-to-r from-green-200 to-green-400",
      textColor: "text-green-300",
    },
    {
      icon: FaUsers,
      title: "Expert Team",
      value: 60,
      suffix: "+ Professionals",
      gradient: "bg-gradient-to-r from-blue-200 to-blue-400",
      textColor: "text-yellow-300",
    },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev];
          if (newCounters[index] < stat.value) {
            newCounters[index] += 1;
          } else {
            clearInterval(intervals[index]);
          }
          return newCounters;
        });
      }, 50);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  return (
    <div className="relative xl:w-5/6 lg:w-full w-full mx-auto lg:px-6 px-10 py-12">
      <Particles
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 50 },
            move: { speed: 3 },
            size: { value: 3 },
            color: { value: "#fff" },
          },
        }}
        init={loadFull}
        className="absolute inset-0 z-0"
      />

      <div className="bg-opacity-60 rounded-lg relative mt-10 z-10">
        <div className="text-center">
          <h2
            className="lg:text-4xl sm:text-3xl text-xl font-bold mb-6 text-black "
            data-aos="fade-up"
          >
            Explore GMP and Compliance Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-gradient-to-r from-[#4682B4] to-[#04080B] lg:p-2 rounded-lg shadow-2xl">
          {stats.map((stat, index) => (
            <div
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              key={index}
              className="p-4"
            >
              <div
                className={`flex flex-col items-center justify-center lg:p-6 p-2  transform transition-all duration-300 hover:scale-105  `}
              >
                <stat.icon
                  className={` text-5xl sm:text-6xl  mb-2" text-white`}
                />
                <p className={`text-xl sm:text-2xl font-bold text-white `}>
                  {counters[index]}
                  {stat.suffix}
                </p>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-100">
                  {stat.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center ">
          <Link
            to="/about"
            className="lg:mt-12 mt-3 shadow-lg relative inline-block lg:px-6 px-4 py-2 lg:text-lg text-sm text-blue-900 font-semibold bg-white border-1 border-blue-900 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#E03121] hover:text-white "
            data-aos="zoom-in"
          >
            <span className="relative z-10">Read More</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GMPSection;
