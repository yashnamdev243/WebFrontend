import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSection from "./HeroSection";


const TourCarousel = () => {
    const [slides, setSlides] = useState([]);


  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await fetch("http://namdevshivlingart.vercel.app/api/slides");
        if (!res.ok) throw new Error("Failed to fetch slides");
        const data = await res.json();
        setSlides(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSlides();
  }, []);
  return (
    <div className="w-full max-w-[2180px] mx-auto sm:px-6 lg:px-0 relative h-screen">
      {/* Fixed Positioned Hero Section */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-white">
        <HeroSection />
      </div>
{slides.length > 0 && (

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
        {/* {tourImages.map((tour, index) => ( */}
                {slides.map((slide) => (

          // <SwiperSlide key={index}>
                    <SwiperSlide key={slide.id}>

            <div className="relative h-screen">
              <img
                // src={tour.src}
                  // src={slide.src}
              src={`http://namdevshivlingart.vercel.app${slide.src}`}
              // src={`${import.meta.env.VITE_API_URL}${slide.src}`}
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
      )}

    </div>
  );
};

export default TourCarousel;
