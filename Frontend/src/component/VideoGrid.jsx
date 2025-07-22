// import { Link } from "react-router-dom";
// import React, { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import "swiper/css";
// import SkeletonLoader from "./SkeletonLoader";

// const videoData = [
// { id: 1, src: "/45675-446485292_tiny.mp4" },
//   { id: 3, src: "/88231-602915804_tiny.mp4" },

// { id: 2, src: "/197486-905015022_tiny.mp4" },
// { id: 4, src: "/5451-183788677_small.mp4" },
// { id: 5, src: "/5448-183788663_tiny.mp4" },
// { id: 6, src: "/262187_tiny.mp4" },
// { id: 7, src: "/45682-446485348_tiny.mp4" },
// { id: 8, src: "/45677-446485324_tiny.mp4" },
// { id: 9, src: "/45680-446485331_tiny.mp4" },
// { id: 10, src: "/55712-503971805_tiny.mp4" },
// { id: 11, src: "/197482-905015009_tiny.mp4" },
// { id: 12, src: "/192281-892475127_tiny.mp4" },
// ];

// const VideoGrid = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div className="relative w-full min-h-screen">
//       {/* Welcome Message */}
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-50">
//         <div className="absolute inset-0 bg-black opacity-30"></div>
//         <div className="relative z-10  text-white p-4">

// <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4 animate-bounce flex items-center">
// {/* Welcome to {"  "} */}
// <span className="mr-2">Welcome to</span> {/* Added margin-right */}

//   <span className="text-[#E03121]">MS</span>
//   <span className="text-[#7BC3DF]">GMP</span>
//   <span className="border-l-3 border-gray-600 h-9 mt-2 mx-2"></span> {/* Border Separator */}
//   <span className="text-[#E3010F]">Gx</span>
//   <span className="text-[#163E93]">Pro</span>
// </h1>

//           <p className="text-sm sm:text-lg opacity-90 animate-fadeIn">
//           A Complete Design-Build Solution for Pharmaceutical & Industrial Projects           </p>
//           <Link
//             to="/about"
//             className="lg:mt-12 mt-3 shadow-lg relative inline-block lg:px-4 px-4 py-2 lg:text-lg text-sm text-sky-600 font-semibold bg-[#f0f7fd] border-2 border-sky-600 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#E03121] hover:text-white hover:border-[#f0f7fd]"
//             data-aos="zoom-in"
//           >
//             <span className="relative z-10">Read More</span>
//           </Link>
//         </div>
//       </div>

//       {/* Swiper for Both Mobile & Desktop */}
//       <Swiper
//         modules={[Autoplay]}
//         autoplay={{ delay: 6000, disableOnInteraction: false }}
//         loop={true}
//         spaceBetween={0}
//         slidesPerView={1} // Single video per slide
//         className="w-full h-screen"
//       >
//         {videoData.map((video) => (
//           <SwiperSlide key={video.id} className="w-full   h-screen">
//             <div className="relative w-full h-full overflow-hidden">
//               {loading ? (
//                 <SkeletonLoader />
//               ) : (
//                 <video autoPlay loop muted playsInline className="w-full   h-full object-cover">
//                   <source src={video.src} type="video/mp4" />
//                 </video>
//               )}
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default VideoGrid;

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import SkeletonLoader from "./SkeletonLoader";

const videoData = [{ id: 3, src: "/88231-602915804_tiny.mp4" }];

const VideoGrid = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-50">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 text-white p-4">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4 animate-bounce flex items-center">
            <span className="lg:ml-20 ml-15 lg:mr-2 mr-1">Namdev Narmadeshwar Shivling Arts</span>
            {/* <span className="text-[#E03121]">MS</span>
            <span className="text-[#7BC3DF]">GMP</span> */}
            {/* <span className="border-l-3 border-gray-600 h-9 mt-2 mx-2"></span> */}
            {/* <span className="text-[#E3010F]">Gx</span>
            <span className="text-[#163E93]">Pro</span> */}
            
           
          </h1>
          <p className="text-sm sm:text-lg opacity-90 animate-fadeIn">
           “ॐ नमः शिवाय” — The divine spirit in every sculpture.


          </p>

          <Link
            to="/about"
            className="lg:mt-12 mt-3 shadow-lg relative inline-block lg:px-6 px-4 py-2 lg:text-lg text-sm text-[#4f342f] font-semibold bg-white border-1 border-[#4f342f] rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#e98948] hover:text-white hover:border-[#f0f7fd]"
            data-aos="zoom-in"
          >
            <span className="relative z-10">Read More</span>
          </Link>
        </div>
      </div>

      <div className="w-full h-screen">
        {videoData.map((video) => (
          <div key={video.id} className="w-full h-full relative">
            {loading ? (
              <SkeletonLoader />
            ) : (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={video.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
