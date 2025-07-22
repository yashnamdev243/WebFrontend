import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import IndustrySwiper from "../component/IndustrySwiper";
import ParticlesComponent from "../component/ParticlesComponent";
import GMPServicesCard from "../component/GMPServicesCard.JSX";
import VideoGrid from "../component/VideoGrid";
import Testimonials from "../component/Testimonials";
//import Hero from "../component/Hero";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1400 });
    AOS.refresh();
  }, []);

  return (
    <div className="  font-sans">
      <div className=" flex items-center justify-center">
        <VideoGrid />
        {/* <Hero /> */}
      </div>

      <div className="overflow-hidden  ">
        <ParticlesComponent />

        <GMPServicesCard />
        <div className="mb-10">
          
          <IndustrySwiper />
        </div>
        {/* <Testimonials /> */}
      </div>
    </div>
  );
};

export default Home;
