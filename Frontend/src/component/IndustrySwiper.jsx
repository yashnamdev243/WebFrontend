

import { memo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Slide02Industries from './Slide02Industries ';

const IndustrySwiper = () => {
  return (
    <div 
      className="grid md:grid-rows-2  relative  mt-20  bg-cover bg-center   lg:px-4"
      // style={{ backgroundImage: "url('/background-image.jpg')" }}
    >
      <Swiper 
        modules={[Pagination, Navigation, Autoplay]} 
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}      
        navigation={false}
        autoplay={{ delay: 3000 }}
        className="lg:w-full w-80 max-w-[1210px] lg:h-100 h-50 mx-auto p-6"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide 
            key={index}
            className="p-2  bg-opacity-70  rounded-lg hover:shadow-2xl  transition-all transform  duration-300 hover:scale-105 border-t-4 border-gray-500 border  flex justify-end items-right text-center"
        
          >
              <h2 className="lg:text-5xl text-2xl font-bold lg:mt-25 mt-3 text-black  " >     {slide.title}</h2>
            <p className="text-gray-600 lg:text-xl text-sm mt-3 leading-snug w-[70%] mx-auto">{slide.description}</p>
     
          </SwiperSlide>
        ))}
      </Swiper>

      
      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #fff !important;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 18px !important;
        }
      `}</style>
      <Slide02Industries />
      {/* <IndustriesChart /> */}
    </div>
  );
};

const slidesData = [
  {
    image: "/Industry_Expertise.avif",
    title: "Industry Expertise",
    description: "We bring decades of experience and deep knowledge across multiple pharmaceutical domains."
  },
  {
    image: "/Global_Reach.avif",
    title: "Global Reach",
    description: "With a network of partners worldwide, we offer insights into international markets and regulatory environments."
  },
  {
    image: "/Innovative_Solutions.avif",
    title: "Innovative Solutions",
    description: "We harness the power of emerging technologies and methodologies to deliver cutting-edge solutions."
  },
  {
    image: "/Client_Success.avif",
    title: "Client Success",
    description: "We are committed to the success of our clients and work diligently to ensure that every project is a step toward achieving their business objectives."
  }
];

export default memo(IndustrySwiper);
