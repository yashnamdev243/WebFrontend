import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HeroSection from "./HeroSection";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
// const tourImages = [
//   { src: "/slide1.jpg" },
//   { src: "/slide2.jpg" },
//   { src: "/slide3.jpg" },
//   { src: "/slide4.jpg" },
//   { src: "/slide5.jpg" },
//   { src: "/slide6.jpg" },
//   { src: "/slide7.jpg" },
//   { src: "/slide8.jpg" },
//   { src: "/slide9.jpg" },


// ];

const TourCarousel = () => {
    const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      const q = query(collection(db, "slides"), orderBy("order"));
      const snapshot = await getDocs(q);
      const slideList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSlides(slideList);
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
                                src={slide.src}

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
