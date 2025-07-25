import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSection from "./HeroSection";

const tourImages = [
  { src: "/Slider_11.jpg" },
  { src: "/Slider_21.jpg" },
  { src: "/Slider_31.jpg" },
  { src: "/Slider_41.jpg" },
  { src: "/Slider_51.jpg" },
];

const TourCarousel = () => {
  return (
    <div className="w-full max-w-[2180px] mx-auto sm:px-6 lg:px-0 relative h-screen">
      {/* Fixed Positioned Hero Section */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-white">
        <HeroSection />
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={false}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="shadow-lg theSwiper"
      >
        {tourImages.map((tour, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-screen">
              <img
                src={tour.src}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              {/* Overlay to Darken Background */}
              {/* <div className="absolute inset-0 bg-gray-700 opacity-40"></div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TourCarousel;
