import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const KinnaurKailash = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-cover bg-black/50 bg-center h-[450px] flex items-center justify-center text-white text-center shadow-lg"
        style={{ backgroundImage: "url('/blog_card3.jpg')" }}
      >
        <div className="bg-opacity-60 p-10 rounded-xl">
          <h1 className="lg:text-5xl  text-3xl font-extrabold tracking-wide">
            Kinnaur Kailash Yatra 2025
          </h1>
          <p className="mt-3 text-lg text-gray-300">
            A Spiritual and Adventurous Journey to the Land of Gods
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-gray-100 via-black-200 py-12 to-gray-200">

      <div className="text-md bg-transparent p-2 text-gray-600 flex items-center justify-center space-x-2">
      <Link to="/blog" className="text-black font-medium hover:font-semibold">
        Blogs
      </Link>
      <span className="text-gray-400">/</span>
      <span className="text-gray-500">Kinnaur Kailash</span>
    </div>

        {/* Overview Section */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="container lg:w-340 w-80 mx-auto px-6 md:px-10 py-16 bg-white shadow-xl rounded-lg"
        >
          <h2 className="text-2xl lg:text-4xl font-bold text-[#1f84a6] text-center mb-5 underline underline-offset-6">
            Kinnaur Kailash: The Sacred Abode of Lord Shiva
          </h2>
          <p className="mt-6 lg:text-lg text-sm text-gray-700 text-center leading-relaxed max-w-6xl mx-auto">
            Kinnaur Kailash, located in the picturesque Kinnaur district of
            Himachal Pradesh, is one of the most sacred and revered pilgrimage
            sites in India. Nestled in the Indian Himalayas, this region is not
            only known for its stunning natural beauty but also for its deep
            spiritual and mythological significance. Kinnaur Kailash is believed
            to be the winter abode of Lord Shiva, the Supreme God in Hindu
            mythology, making it a key destination for devotees and trekkers
            alike. At the heart of this sacred site is the awe-inspiring 79-foot
            vertical rock formation, known as the "Shiva Lingam." This natural
            rock formation is revered as an embodiment of Lord Shiva and is
            considered to be an important symbol of divinity. The Shiva Lingam
            is located at an altitude of 4,650 meters (15,255 feet), making it a
            remarkable sight for both its spiritual meaning and its challenging
            location. According to Hindu beliefs, the sight of the Shiva Lingam
            is said to bring blessings and purify the soul of the devotee.
          </p>
          <p className="mt-6 lg:text-lg text-sm text-gray-700 text-center leading-relaxed max-w-6xl mx-auto">
            The Kinnaur Kailash trek is a unique blend of spiritual and physical
            challenges, attracting pilgrims and adventurers alike. The trek,
            which usually spans around 3 to 4 days, takes one through rugged
            terrains, dense forests, and steep ridges, offering breathtaking
            views of snow-capped peaks, deep valleys, and lush green landscapes.
            The route is demanding, with the altitude making the trek physically
            taxing. However, the rewards are immeasurable – not only in terms of
            the sense of achievement but also the spiritual serenity that comes
            with being in such a sacred and awe-inspiring environment. A key
            aspect of the Kinnaur Kailash trek is the "Kinnaur Kailash
            Parikrama," a circular trek around the sacred mountain, which is
            believed to be an act of devotion. Pilgrims often complete the trek
            to seek blessings from Lord Shiva and to purify their soul. The trek
            offers spectacular panoramic views of the surrounding mountain
            range, and the experience of walking in the midst of the towering
            Himalayas, surrounded by the divinity of the place, is truly
            transformative. While the Kinnaur Kailash trek is demanding, it is
            also one of the most spiritually enriching experiences. The beauty
            of the place, coupled with its deep connection to Lord Shiva, makes
            it a place where the soul can find peace and solace. The serene
            environment and the majestic views of the Himalayas ensure that
            those who undertake the journey are rewarded with a life-changing
            experience, full of awe, reflection, and spiritual awakening.{" "}
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
          <p className="mt-4 text-lg text-gray-700 text-center">
            Starting Point: Tangling Village (Near Reckong Peo)
          </p>
          <ul className="mt-4 space-y-4 lg:text-lg text-sm lg:w-340 w-80 mx-auto text-gray-100 text-center">
            <li className="bg-gradient-to-r from-[#0999a6] to-[#0999a6] p-4 rounded-lg shadow-lg">
              Tangling Village to Ganesh Park – 6 km
            </li>
            <li className="bg-gradient-to-r from-[#0999a6] to-[#0999a6] p-4 rounded-lg shadow-lg">
              Ganesh Park to Parvati Kund – 3 km
            </li>
            <li className="bg-gradient-to-r from-[#0999a6] to-[#0999a6] p-4 rounded-lg shadow-lg">
              Parvati Kund to Kinnaur Kailash Peak – 5 km
            </li>
            <li className="bg-gradient-to-r from-[#0999a6] to-[#0999a6] p-4 rounded-lg shadow-lg">
              Return Journey – Descend back to Tangling Village
            </li>
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
          <p className="mt-2 lg:text-lg text-sm px-6 py-3 mx-auto text-gray-700">
            The ideal time to undertake the Kinnaur Kailash Yatra is from June
            to September. During these months, the weather conditions are
            favorable, and the trails are accessible. However, trekkers should
            be cautious of the challenging terrain and unpredictable weather
            changes.
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
          <p className="mt-2 text-lg text-gray-700">
            Embark on the Kinnaur Kailash Yatra for an unparalleled spiritual
            and adventurous experience amidst the majestic Himalayas.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-6 bg-[#1f84a6] text-white lg:px-8 lg:py-3  px-4 py-2 rounded-lg lg:text-lg text-sm hover:bg-[#116869] transition shadow-md"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default KinnaurKailash;
