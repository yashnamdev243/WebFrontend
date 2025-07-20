import { useState , useEffect} from "react";
import Carousel from "../component/Carousel";
import {
  TbCircleArrowLeftFilled,
  TbCircleArrowRightFilled,
} from "react-icons/tb";
import { IoMdCloseCircle } from "react-icons/io";
import SkeletonLoader from "../component/SkeletonLoader";

const projects = [
        {
    id: 18,
    title: "",
    description:
      "",
    image: "/gallery18.jpeg",
  },
     {
    id: 19,
    title: "",
    description:
      "",
    image: "/gallery19.jpeg",
  },
   {
    id: 20,
    title: "",
    description:
      "",
    image: "/gallery20.jpeg",
  },
 {
    id: 21,
    title: "",
    description:
      "",
    image: "/gallery21.jpeg",
  },
   {
    id: 22,
    title: "",
    description:
      "",
    image: "/gallery22.jpeg",
  },
   {
    id: 23,
    title: "",
    description:
      "",
    image: "/gallery23.jpeg",
  },
   {
    id: 25,
    title: "",
    description:
      "",
    image: "/gallery25.jpeg",
  },
  {
    id: 24,
    title: "",
    description:
      "",
    image: "/gallery24.jpeg",
  },
 
  
  {
    id: 7,
    title: "Virtual Reality Experience",
    description:
      "An immersive VR application designed to revolutionize user engagement and interaction.",
    image: "/gallery7.jpg",
  },
  {
    id: 8,
    title: "Blockchain-Based Solution",
    description:
      "A decentralized and secure blockchain application for transparent and efficient transactions.",
    image: "/gallery8.jpg",
  },
    {
    id: 9,
    title: "",
    description:
      "",
    image: "/gallery9.jpg",
  },
    {
    id: 10,
    title: "",
    description:
      "",
    image: "/gallery10.jpg",
  },{
    id: 6,
    title: "Cybersecurity Platform",
    description:
      "An advanced security platform that protects businesses from cyber threats and vulnerabilities.",
    image: "/gallery6.jpg",
  },
    {
    id: 11,
    title: "",
    description:
      "",
    image: "/gallery11.jpg",
  },
 
   {
    id: 12,
    title: "",
    description:
      "",
    image: "/gallery12.jpg",
  },
   {
    id: 13,
    title: "",
    description:
      "",
    image: "/gallery13.jpeg",
  },
   {
    id: 14,
    title: "",
    description:
      "",
    image: "/gallery14.jpeg",
  },
   {
    id: 15,
    title: "",
    description:
      "",
    image: "/gallery15.jpeg",
  },
   {
    id: 16,
    title: "",
    description:
      "",
    image: "/gallery16.jpeg",
  },

     {
    id: 17,
    title: "",
    description:
      "",
    image: "/gallery17.jpeg",
  },
  {
    id: 1,
    title: "Innovative Web Design",
    description:
      "A cutting-edge web design project with modern aesthetics and seamless user experience.",
    image: "/gallery1.jpeg",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "A powerful and user-friendly e-commerce website for seamless shopping experiences.",
    image: "/gallery2.jpeg",
  },
  {
    id: 3,
    title: "AI-Powered Dashboard",
    description:
      "An intelligent dashboard that provides deep insights using AI-driven analytics.",
    image: "/gallery3.jpg",
  },
  {
    id: 4,
    title: "Mobile App Development",
    description:
      "A feature-rich mobile application designed for both Android and iOS users.",
    image: "/gallery4.jpg",
  },
  {
    id: 5,
    title: "Cloud-Based CRM System",
    description:
      "A scalable CRM solution that helps businesses manage customer relationships effectively.",
    image: "/gallery5.jpg",
  },
   {
    id: 26,
    title: "",
    description:
      "",
    image: "/gallery26.jpeg",
  },
 
   {
    id: 27,
    title: "",
    description:
      "",
    image: "/gallery27.jpeg",
  },
 
];

const ProjectGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  
  const closeModal = () => setSelectedIndex(null);

  const showPrev = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const showNext = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };
    useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return; 

      if (e.key === "ArrowLeft") {
        showPrev();
      } else if (e.key === "ArrowRight") {
        showNext();
      } else if (e.key === "Escape" || e.key === "Backspace") {
    closeModal();
  }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  const [loading, setLoading] = useState(true);
  const [current, setCurrent] = useState(0);
  const length = projects.length;
const [touchStartX, setTouchStartX] = useState(null);
const [touchEndX, setTouchEndX] = useState(null);

const handleTouchStart = (e) => {
  setTouchStartX(e.targetTouches[0].clientX);
};

const handleTouchMove = (e) => {
  setTouchEndX(e.targetTouches[0].clientX);
};

const handleTouchEnd = () => {
  if (!touchStartX || !touchEndX) return;
  const distance = touchStartX - touchEndX;

  const isSwipeLeft = distance > 50;
  const isSwipeRight = distance < -50;

  if (isSwipeLeft) {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  } else if (isSwipeRight) {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }

  
  setTouchStartX(null);
  setTouchEndX(null);
};

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(timer);
  }, [length]);
 useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (<>
  <div className=" font-bold py-10   text-white   text-center"
        data-aos="fade-up"></div>
    <div className="relative lg:w-370 lg:h-[85vh] w-85 h-[27vh] mt-2 border-b-2  border-gray-500 shadow-2xl rounded-lg mx-auto overflow-hidden"
     onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}>
      {projects.map((slide, index) => (
        <div
          key={index}
          
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
           {loading ? (
              <SkeletonLoader />
            ) : (
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />  )}
          <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
            {/* <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1> */}
            {/* <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p> */}
            {/* <button className="bg-white text-black px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition">
              {slide.button}
            </button> */}
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute lg:bottom-4 bottom-2 left-1/2 transform -translate-x-1/2 flex lg:space-x-2 space-x-1">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`lg:w-2 lg:h-2 w-[5px] h-[5px] rounded-full ${
              index === current ? "bg-blue-500" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
    <section className="  bg-gradient-to-b from-white to-white">
     
    
       <h2 className="lg:text-4xl mt-20 text-2xl font-bold  mb-8 text-[#04080B] text-center"           data-aos="fade-up"
>
               Our Creative Projects
            </h2>

      <div className=" mx-auto px-6 pb-20">
        
        <section
          className="  bg-gradient-to-b from-gray-100 to-gray-100  rounded-2xl"
          id="carousel"
          data-aos="zoom-in"
        >
          <Carousel />
        </section>
        <h2
          className="lg:text-4xl text-2xl font-bold  text-center  mb-8 mt-10 text-[#04080B] relative"
          data-aos="fade-up"
        >
         
        </h2>
        <div>
        
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  lg:px-33 px-7 ">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative  bg-white shadow-xl rounded-sm overflow-hidden transform  hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
              data-aos="zoom-in"
              data-aos-delay={`${index * 100}`}
              onClick={() => setSelectedIndex(index)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover cursor-pointer"
              />
            </div>
          ))}
        </div>

        
        {selectedIndex !== null && (
          <div
            // className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            className="fixed inset-0 bg-gradient-to-r from-black/60 to-gray-900/60 flex items-center justify-center z-50 "
            onClick={closeModal}
          >
            <div
              className="relative max-w-3xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2  text-white hover:text-red-400 rounded-full px-3 py-1 text-sm font-bold z-10"
                onClick={closeModal}
              >
                <IoMdCloseCircle size={30} />

              </button>

             
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-800 rounded-full p-[2px] z-10"
                onClick={showPrev}
              >
                <TbCircleArrowLeftFilled size={35} />
              </button>

              
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white bg-gray-700 hover:bg-gray-800 rounded-full p-[2px] z-10"
                onClick={showNext}
              >
                <TbCircleArrowRightFilled size={35} />
              </button>

              <img
                src={projects[selectedIndex].image}
                alt={projects[selectedIndex].title}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
                
              {/* <div className="bg-white text-black p-4 rounded-b-xl">
                <h3 className="text-xl font-semibold mb-2 text-blue-900">{projects[selectedIndex].title || 'Untitled Project'}</h3>
                <p className="text-sm">
                  {projects[selectedIndex].description || 'No description available.'}
                </p>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </section>
    </>
  );
};

export default ProjectGallery;
