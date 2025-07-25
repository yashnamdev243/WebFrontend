import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SlCalender } from "react-icons/sl";
import { FiMapPin } from "react-icons/fi";
import { FaPhoneAlt, FaChevronCircleRight } from "react-icons/fa";
import { travelDestinations } from "../Data/Tours_package_data";

import { useNavigate } from "react-router-dom";

const Tour_package_Cards = () => {
  const navigate = useNavigate();
  return (
    <div className="container w-full mx-auto md:py-8 md:px-2 p-4 rounded-lg relative">
      <h2 className="lg:text-4xl text-xl font-bold text-center mb-10 mx-4 text-[#1f84a6] [text-shadow:_0_4px_4px_rgb(255_255_255_/_0.8)]">
        Explore Your Dream Destination with Spiritual Hikes
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          320: { slidesPerView: 1 }, // Extra Small Devices (Phones)
          480: { slidesPerView: 1.5 }, // Small Phones
          640: { slidesPerView: 2 }, // Tablet: 2 slides
          1024: { slidesPerView: 3 }, // Small Laptop: 3 slides
          1280: { slidesPerView: 4 }, // Large Screens: 4 slides
        }}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation
        className="h-auto overflow-hidden"
      >
        {travelDestinations.map((destinations) => (
          <SwiperSlide
            key={destinations.id}
            className="flex justify-center mb-10"
          >
            <div className="bg-gray-200 rounded-lg overflow-hidden mx-auto w-75 md:w-auto hover:shadow-xl shadow-[#1f84a6]/30 transition duration-500">
              <img
                src={destinations.image}
                alt={destinations.title}
                className="w-full h-60 md:h-74 object-cover hover:scale-105 transition duration-500 cursor-pointer"
              />

              <div className="flex flex-col gap-0 pb-4 px-4">
                {/* <a className="flex flex-col gap-4 py-4" href="/trip/ujjain-omkareshwar"> */}
                <h3 className="font-assistant font-semibold lg:text-xl text-lg text-primary-text group-hover:text-custom-primary transition duration-500 text-ellipsis overflow-hidden text-nowrap py-2">
                  {destinations.title}
                </h3>
                <div className="grid grid-cols-2 relative">
                  <span className="h-full w-0.5 scale-x-50 bg-[#777E90] absolute left-1/2 -translate-x-1/2"></span>
                  <div className="flex flex-col gap-1">
                    <div className="text-[14px] flex flex-1 items-center gap-0 text-primary-text">
                      <FiMapPin size={20} color="green" />
                      {destinations.label}
                    </div>
                    <div className="text-md flex flex-1 items-center gap-2">
                      <SlCalender color="blue" />
                      <div className="space-x-1 text-md">
                        {/* <span>20 Feb,</span>
                <span>27 Feb,</span> */}
                        {destinations.time}
                      </div>
                    </div>
                  </div>
                  <div className="h-full w-full flex flex-col justify-center items-start pl-5">
                    <p className="text-[13px] relative text-secondary-text">
                      {destinations.rate}
                      <span className="text-[0.375rem] text-[#777E90]">
                        per
                      </span>
                      <span className="h-0.5 w-full scale-y-[0.33] bg-red-600 absolute top-1.5 left-0 -rotate-6"></span>
                    </p>
                    <p className="text-lg font-semibold">
                      {destinations.price}
                      <span className="text-[#777E90]">/</span>
                      <span className="text-[0.625rem] text-[#777E90]">
                        per
                      </span>
                    </p>
                  </div>
                </div>
                {/* </a> */}
                <div className="flex gap-2 justify-between items-center mt-2">
                  <button
                    type="button"
                    onClick={() =>
                      (window.location.href = "tel:+91 9696187592")
                    }
                  >
                    <div className="cursor-pointer flex flex-row items-center gap-x-2 border-1 border-[#1F84A6] px-2 py-1 rounded-md font-semibold hover:bg-[#1F84A6] hover:text-white active:bg-[#1F84A6] active:text-white">
                      Enquiry
                      <FaPhoneAlt color="red" size={15} />
                    </div>
                  </button>

                  <button
                    onClick={() => navigate(`/tour/${destinations.id}`)}
                    className="group primary-btn flex items-center gap-x-2 px-2 py-1 border-1 border-[#1F84A6] rounded-md hover:bg-[#1F84A6] hover:text-white active:bg-[#1F84A6] active:text-white font-semibold cursor-pointer"
                  >
                    More Details
                    <FaChevronCircleRight
                      className="group-hover:text-white text-[#1f84a6] group-active:text-white"
                      size={15}
                    />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Navigation Arrow Styling */}
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #333 !important;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          width: 450px;
          height: 40px;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px !important;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default Tour_package_Cards;
