import React from "react";
import CarouselComponent from "../components/CarouselComponent.JSX";
import ReviewSection from "../components/ReviewSection";
import TourCarousel from "../components/TourCarousel";
import Tour_package_Cards from "../components/Tour_package_Cards";
import Blog_cards from "../components/Blog_cards";

const Home = () => {
  return (
    <div className="bg-gray-100 ">
      <section className="flex flex-col items-center justify-center text-center md:px-0">
        <div className="w-full mx-auto sm:px-5 lg:px-0">
          <TourCarousel />
        </div>

        <div
          className="w-full relative pt-5 md:min-h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/Home_bg.jpg')" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[420px] md:max-w-[90%] mx-auto">
            <Tour_package_Cards />
          </div>

          <div className="z-10 w-full max-w-[90%] md:max-w-[95%] mx-auto  md:p-4 my-4">
            <Blog_cards />
          </div>

          <div className="w-full max-w-[90%] md:max-w-[95%] h-auto md:h-[500px] flex flex-col items-center justify-center mx-auto">
            <CarouselComponent />
          </div>

          <div className="w-full max-w-[90%] md:max-w-[95%] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-6">
            <ReviewSection />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
