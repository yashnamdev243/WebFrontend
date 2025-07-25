import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMountain,
  FaRoute,
  FaCampground,
  FaGlobe,
  FaPlaceOfWorship,
  FaHiking,
  FaMapMarkedAlt,
  FaShieldAlt,
  FaHotel,
  FaPrayingHands,
} from "react-icons/fa";
import { GiTempleGate } from "react-icons/gi";

const About = () => {
  const features = [
    {
      title: "Expert Guides",
      desc: "Trained professionals with deep knowledge of Himalayan terrain.",
      icon: <FaHiking />,
    },
    {
      title: "Personalized Experience",
      desc: "Customized tours to meet your needs and preferences.",
      icon: <FaMapMarkedAlt />,
    },
    {
      title: "Safety First",
      desc: "Planned itineraries, acclimatization, and emergency support.",
      icon: <FaShieldAlt />,
    },
  ];
  const destinations = [
    { name: "Char Dham Yatra", icon: <FaPlaceOfWorship />, id: 7 },
    { name: "Manimahesh Kailash Yatra", icon: <FaMountain />,id: 1 },
    { name: "Shrikhand Mahadev Trek", icon: <FaHiking />,id: 2 },
    { name: "Kinnaur Kailash Trek", icon: <FaMapMarkedAlt />,id: 3 },
    { name: "Adi Kailash Trek ", icon: <FaGlobe />,id: 4 },
    { name: "Mansarovar Kailash Yatra", icon: <FaCampground />,id: 5 },
    { name: "Kedarnath Dham", icon: <GiTempleGate />,id: 6 },
    // { name: "Ujjain Mahakaleshwar", icon: <FaPlaceOfWorship />, },
  ];
  const navigate = useNavigate();

  const [text, setText] = useState("");

  const words = [
    "Plan a Trek!",
    "Explore the Himalayas!",
    "Find Your Spiritual Path!",
  ];
  let index = 0;

  // Typing Effect for Headline
  useEffect(() => {
    const interval = setInterval(() => {
      setText(words[index]);
      index = (index + 1) % words.length;
    }, 2500);
    return () => clearInterval(interval);
  }, []);


  const handleNavigate = (id) => {
    navigate(`/tour/${id}`);
  };
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div
        className="relative lg:h-[70vh] h-55 flex items-center justify-center bg-cover bg-center bg-no-repeat text-white text-center"
        style={{ backgroundImage: "url('/about1.png')" }} // Ensure the image is moved here
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-gray-900/30 "></div>

        <div className="relative pb-6 z-10 animate-fadeIn">
          <h1 className="text-2xl mt-10 pb-2 font-bold md:text-5xl text-white drop-shadow-lg animate-glow">
            About <span className="text-[#2592b7] ">Spiritual Hikes</span>
          </h1>

          <p className="lg:mt-2 text-xs lg:text-lg max-w-2xl pb-2 mx-auto text-gray-200 animate-flicker">
            Experience the Spiritual, Embrace the Adventure!
          </p>

          <p className="lg:text-lg text-xs text-gray-300 text-center max-w-lg mx-auto italic animate-slideUp transition-all duration-500">
            {text}
          </p>

        </div>
      </div>

      {/* Who We Are */}

      <section className="relative pt-14 md:pb-6 px-6 md:px-20 bg-gradient-to-b from-blue-100 to-gray-100">
        {/* Section Heading */}
        <h2 className="lg:text-4xl text-2xl font-bold text-center text-[#06242e]  animate-fadeIn">
          Who <span className="text-[#2592b7]">We Are</span>
        </h2>
        <p className="mt-4 md:my-10 lg:text-lg text-sm text-gray-700 text-center max-w-3xl mx-auto fira-sans">
          Welcome to{" "}
          <span className="font-semibold text-[#0c95c3]">Spiritual Hikes</span>,
          your trusted companion for divine journeys and high-altitude
          adventures. With over{" "}
          <span className="font-bold text-[#0c95c3]">50+ successful treks</span>
          , we specialize in guiding spiritual seekers and thrill lovers through
          the Himalayas.
        </p>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 mt-12 items-center">
          {/* Image Section */}
          <div className="relative group">
            <img
              src="/Mission&Vision.png"
              alt="Trekking Spiritual Hikes"
              className="rounded-lg shadow-lg transform group-hover:scale-105 transition duration-500 ease-in-out   lg:w-[600px] lg:h-[400px] object-cover
"
            />

            <div className="absolute inset-0  bg-opacity-30 rounded-lg group-hover:bg-opacity-10 transition duration-500"></div>
          </div>

          {/* Text Content */}
          <div className="animate-fadeIn">
            <h3 className="lg:text-3xl text-xl text-center md:text-left font-semibold text-[#06242e] ">
              Our Mission <span className="text-[#0c95c3]"> &</span> Vision
            </h3>
            <p className="mt-6 text-gray-600 lg:text-lg text-center md:text-left text-sm leading-relaxed fira-sans">
              We believe that every journey to the Himalayas is more than just a
              trek—it is a
              <span className="font-bold text-[#0c95c3]">
                {" "}
                spiritual transformation.
              </span>
              Our mission is to provide well-organized, safe, and fulfilling
              experiences for travelers seeking divine blessings and adventure.
            </p>

            {/* Bullet Points with Icons */}
            <ul className="py-8 space-y-3 lg:text-lg text-sm">
              <li className="flex items-center gap-3 fira-bold">
                <FaHiking className="text-[#0c95c3] lg:text-xl text-lg" />{" "}
                Expert guidance from trained professionals
              </li>
              <li className="flex items-center gap-3 fira-bold">
                <FaHotel className="text-[#0c95c3] lg:text-xl text-lg" />{" "}
                Hassle-free accommodations and travel arrangements
              </li>
              <li className="flex items-center gap-3 fira-bold">
                <FaShieldAlt className="text-[#0c95c3] lg:text-xl text-lg" />{" "}
                Focus on safety with well-planned trekking schedules
              </li>
              <li className="flex items-center gap-3 fira-bold">
                <FaPrayingHands className="text-[#0c95c3]  lg:text-xl text-lg" />{" "}
                Authentic spiritual and cultural experience
              </li>
            </ul>

            {/* Call-to-Action Button */}
            {/* <div className="mt-6">
              <button className="bg-blue-600 text-white px-5 text-xs md:text-lg py-3 rounded-full font-semibold shadow-lg hover:bg-blue-800 hover:shadow-xl transition duration-300">
                Join Our Journey
              </button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Destinations We Cover */}

      <section
        className="relative py-12 bg-cover bg-center bg-gradient-to-r from-[#0cb4c3] to-[#06242e]  text-white"
        // style={{ backgroundImage: "url('\VisionsofGrandeur.jpg')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0  bg-opacity-50"></div>

        <div className="relative z-10 text-center text-white">
          <h2 className="lg:text-4xl text-2xl font-bold text-center animate-fadeIn">
            Our Destinations
          </h2>
          <p className="mt-4 lg:text-lg text-sm mx-6 max-w-2xl fira-sans md:mx-auto">
            Discover sacred and breathtaking locations with our expert-led
            expeditions.
          </p>

          <div className="grid md:grid-cols-4 gap-y-6 md:gap-y-10 gap-x-6 mt-10 px-10">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="bg-white text-gray-800 justify-items-center rounded-lg shadow-lg lg:p-6 py-4 text-center hover:shadow-2xl transform hover:scale-105 active:scale-105 transition duration-300 border-b-4 border-[#3992af] cursor-pointer"
              >
                <div
                  className="flex items-center gap-2"
                  onClick={()=>handleNavigate(destination.id)}
                >
                  <div className="text-[#0c95c3] lg:text-2xl text-xl">
                    {destination.icon}
                  </div>
                  <h3 className="lg:text-xl text-sm font-semibold">
                    {destination.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-10">
            <button className="bg-blue-600 text-white px-5  text-xs md:text-lg py-3 rounded-full font-semibold shadow-lg hover:bg-blue-800 hover:shadow-xl transition duration-300">
              Explore More
            </button>
          </div> */}
        </div>
      </section>

      <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-blue-50 to-white">
        <h2 className="lg:text-4xl text-2xl font-bold text-center text-[#06242e] mb-4 animate-fadeIn">
          Why Choose <span className="text-[#0c95c3]">Spiritual Hikes?</span>
        </h2>
        <p className="text-center lg:text-lg text-sm text-gray-700 py-4 max-w-3xl mx-auto fira-sans">
          Our commitment to safety, spiritual enrichment, and adventure makes us
          the ideal choice for your Himalayan journey.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-2xl transform hover:-translate-y-2 active:-translate-y-2 transition duration-300 border-l-4 border-[#3992af]  hover:blue-indigo-700"
            >
              <div className="text-[#0c95c3] lg:text-4xl text-2xl mb-3">
                {feature.icon}
              </div>
              <h3 className="lg:text-lg text-sm font-semibold text-[#0c95c3]">
                {feature.title}
              </h3>
              <p className="mt-2 lg:text-[16px] text-xs text-gray-700">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-10">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-blue-800 hover:shadow-xl transition duration-300">
          Join Us Today
        </button>
      </div> */}
      </section>

      {/* Call to Action */}
      <section className="py-10 md:py-18  bg-gradient-to-r from-[#0e5871]  to-[#098e9a]   text-white text-center">
        <h2 className="lg:text-4xl text-xl font-bold text-center mx-3">
          Start Your Spiritual Journey Today!
        </h2>
        <p className="py-6 lg:text-lg text-sm max-w-3xl md:mx-auto mx-5 fira-sans">
          Let your next adventure be a life-changing spiritual experience.
        </p>
        <button
          type="button"
          onClick={() => {
            navigate("/contact");
          }}
          className="mt-4 bg-transparent border-1 border-[#0E9DAB] text-white px-4   text-xs md:text-lg py-2 rounded-full  shadow-md hover:bg-[#0E9DAB] active:bg-[#0E9DAB] hover:text-white transition cursor-pointer fira-sans"
        >
          Contact Us Now
        </button>
      </section>
    </div>
  );
};

export default About;
