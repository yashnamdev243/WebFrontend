import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const ManimaheshKailash = () => {
  const navigate=useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-cover bg-black/50 bg-center h-[450px] flex items-center justify-center text-white text-center shadow-lg"
        style={{ backgroundImage: "url('/blog_card1.jpg')" }}
      >
        <div className="bg-black/20 p-10 w-full h-[450px] flex flex-col justify-center items-center">
          <h1 className="lg:text-5xl  text-3xl font-extrabold tracking-wide">
            Manimahesh Kailash Yatra 2025
          </h1>
          <p className="mt-3 text-lg text-gray-200 shadow-2xl font-semibold backdrop-blur-md px-2">
            A Sacred Journey to the Abode of Lord Shiva
          </p>
        </div>
        
      </motion.div>


      <div className="bg-gradient-to-r from-gray-100 via-black-200 py-12 to-gray-200">

      <div className="text-md bg-transparent p-2 text-gray-600 flex items-center justify-center space-x-2">
      <Link to="/blog" className="text-black font-medium hover:font-semibold">
        Blogs
      </Link>
      <span className="text-gray-400">/</span>
      <span className="text-gray-500">Manimahesh Kailash</span>
    </div>
        {/* Overview Section */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="container lg:w-340 w-80 mx-auto px-6 md:px-10 py-16 bg-white shadow-xl rounded-lg"
        >

          {/* <h2 className="text-2xl lg:text-5xl font-bold text-[#1f84a6] text-center mb-5 underline underline-offset-6">
            Manimahesh Kailash: The Sacred Peak of Chamba
          </h2> */}
          <div className="text-center mx-auto">
            <span className="text-2xl lg:text-4xl text-[#1f84a6] mb-6 font-bold relative inline-block stroke-current">
              Manimahesh Kailash: The Sacred Peak of Chamba
              <svg
                className="absolute left-0 right-0 mx-auto -bottom-0.5 w-full max-h-1.5"
                viewBox="0 0 55 5"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                  strokeWidth="2"
                ></path>
              </svg>
            </span>
          </div>
          <p className="mt-6 lg:text-lg text-sm text-gray-700 leading-relaxed max-w-6xl mx-auto fira-sans text-justify">
            <b className="text-[#1f84a6]">Manimahesh Kailash</b>, located in the
            scenic <b>Chamba district</b> of &nbsp;
            <span className="font-semibold">Himachal Pradesh</span>, is one of
            the most revered pilgrimage sites dedicated to <b>Lord Shiva</b>.
            This sacred destination attracts thousands of devotees every year,
            all of whom undertake the challenging <b>yatra (pilgrimage)</b> to
            reach the holy
            <b>Manimahesh Lake</b>, situated at an altitude of{" "}
            <b>4,080 meters (13,380 feet)</b>. The lake is believed to be
            blessed by <b>Lord Shiva</b> himself, and it is considered one of
            the holiest spots for Hindus. According to legend, the lake is said
            to be where
            <b>Lord Shiva</b> meditated and where he resides with{" "}
            <b>Goddess Parvati</b>. Pilgrims believe that bathing in the{" "}
            <b>crystal-clear waters</b> of <b>Manimahesh Lake</b> purifies the
            soul and brings them closer to <b>divine blessings</b>. The journey
            to
            <b>Manimahesh Kailash</b> is as spiritually enriching as it is
            physically demanding.
          </p>

          <p className="mt-6 lg:text-lg text-sm text-gray-700 leading-relaxed max-w-6xl mx-auto fira-sans text-justify">
            The trek takes pilgrims through <b>picturesque valleys</b>,{" "}
            <b>dense forests</b>, and <b>rugged terrains</b>, with steep ascents
            and winding paths that test one’s endurance. The breathtaking views
            of the surrounding <b>snow-capped peaks</b>, especially the
            majestic&nbsp;<b>Manimahesh Peak (5,653 meters)</b>, add to the
            mystical charm of the <b>yatra</b>. The peak, often referred to as
            the <b>"Kailash of the Himalayas,"</b> is said to resemble a&nbsp;
            <b>Shiva Lingam</b>, further enhancing its spiritual
            significance.&nbsp;<b>Manimahesh Kailash</b> is not just a
            destination; it is a journey of&nbsp;<b>devotion and reflection</b>.
            Pilgrims offer prayers at various points along the route, often
            stopping at <b>sacred shrines</b> and <b>ritual sites</b> to seek
            blessings. The serene and untouched beauty of the place, combined
            with its deep connection to <b>Lord Shiva</b>, creates an atmosphere
            of <b>peace and tranquility</b>, allowing devotees to immerse
            themselves in both <b>nature and spirituality</b>. The culmination
            of the journey, arriving at the holy <b>Manimahesh Lake</b>
            &nbsp;with the towering <b>Manimahesh Peak</b> in the background, is
            an experience that leaves an <b>indelible mark</b> on the hearts and
            souls of those who undertake this sacred pilgrimage.
          </p>
        </motion.section>

        {/* Route Map & Trek Itinerary */}
        <motion.section
  initial={{ x: 50, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="mt-12 px-6 py-8"
>
  <h2 className="text-xl lg:text-3xl font-bold text-[#1f84a6] text-center mt-3">
    Route Map & Trek Itinerary
  </h2>
  <p className="mt-4 text-lg text-gray-700 text-center font-semibold">
    <span className="text-[#0999a6]">Starting Point:</span> Hadsar Village (Near Bharmour)
  </p>

  <ul className="mt-6 space-y-4 lg:text-lg text-sm lg:w-340 w-80 mx-auto text-gray-100 text-center">
    {[
      { text: "Hadsar to Dhancho – 7 km", delay: 0.5 },
      { text: "Dhancho to Manimahesh Lake – 5 km", delay: 0.7 },
      { text: "Return Journey – Descend back to Hadsar", delay: 0.9 },
    ].map((item, index) => (
      <motion.li
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: item.delay }}
        className="bg-gradient-to-r from-[#0999a6] to-[#057d8a] p-4 rounded-lg shadow-lg font-medium 
                   hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
      >
        {item.text}
      </motion.li>
    ))}
  </ul>
</motion.section>


        {/* Best Time to Visit */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-white mt-10 p-4 lg:w-340 w-80 mx-auto shadow-lg rounded-lg text-center transition"
        >
          <h2 className="text-xl lg:text-3xl font-bold text-[#1f84a6] text-center">
            Best Time to Visit
          </h2>
          <p className="mt-2 lg:text-lg px-3 py-3 mx-auto text-gray-700 fira-sans md:text-center font-medium">
            The best time to undertake the Manimahesh Kailash Yatra is during
            the months of August and September, coinciding with the grand
            Manimahesh Fair. During this time, thousands of devotees take a holy
            dip in the lake, believing it to be spiritually purifying.
          </p>
        </motion.div>

        {/* Booking CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="container mx-auto mt-16 text-center py-8"
        >
          <h2 className="text-xl lg:text-3xl font-bold text-[#1f84a6] text-center mt-3">
            Book Your Journey Now!
          </h2>
          <p className="mt-2 mx-5 md:text-lg text-gray-700 font-medium fira-sans">
            Embark on the Manimahesh Kailash Yatra for an unforgettable
            spiritual and trekking experience amidst the breathtaking Himalayas.
          </p>
          <motion.button
          onClick={()=>navigate("/contact")}
            animate={{ scale: 1.1 }}
            className="mt-6 border-1 bg-white border-[#1f84a6] text-[#1f84a6] hover:text-white lg:px-6 lg:py-2  px-4 py-2 rounded-lg lg:text-lg text-sm hover:bg-[#116869] transition shadow-md cursor-pointer"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ManimaheshKailash;
