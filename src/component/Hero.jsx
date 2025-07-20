import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const videoData = [
  {
    id: 1,
    src: "/45675-446485292_tiny.mp4",
    title: "Innovation at Work",
    description: "Bringing ideas to life with cutting-edge technology.",
  },
  {
    id: 2,
    src: "/197486-905015022_tiny.mp4",
    title: "Creative Solutions",
    description: "Transforming the digital landscape with creativity.",
  },
  {
    id: 3,
    src: "/197489-905015030_tiny.mp4",
    title: "Future of Tech",
    description: "Embracing the next generation of technology.",
  },
  {
    id: 4,
    src: "/5451-183788677_small.mp4",
    title: "Seamless Experience",
    description: "Enhancing user experiences with seamless solutions.",
  },
  {
    id: 5,
    src: "/5448-183788663_tiny.mp4",
    title: "Boundless Possibilities",
    description: "Exploring infinite opportunities in the digital world.",
  },
  {
    id: 6,
    src: "/262187_tiny.mp4",
    title: "Next-Level Innovation",
    description: "Revolutionizing the industry with innovation.",
  },
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
  };

  return (
    <div className="relative min-h-screen w-full bg-gray-900 text-white flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-90"></div>
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-teal-500 opacity-30 blur-3xl rounded-full transform -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-cyan-400 opacity-30 blur-3xl rounded-full"></div>

      <div className="relative z-10 w-full h-screen max-w-7xl px-6">
        <Slider {...settings}>
          {videoData.map((video) => (
            <div
              key={video.id}
              className="relative w-full h-screen rounded-xl overflow-hidden"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-xl"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 text-white p-4">
                <h2 className="text-3xl font-bold">{video.title}</h2>
                <p className="mt-2 text-lg text-gray-300">
                  {video.description}
                </p>

                <div className="mt-6 text-center">
                  <h1 className="text-5xl md:text-7xl font-extrabold text-white animate-fade-in-up drop-shadow-lg">
                    Welcome to <span className="text-teal-400">MSGMP</span>
                  </h1>
                  <p className="mt-4 text-xl md:text-2xl text-gray-300 animate-fade-in-down drop-shadow-md">
                    Experience the future of digital solutions with creativity
                    and innovation.
                  </p>
                  <a
                    href="/about"
                    className="mt-6 inline-block px-12 py-4 font-semibold text-lg text-white bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full shadow-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
