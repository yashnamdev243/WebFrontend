import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ChardhamYatra = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-cover bg-black bg-center h-[450px] flex items-center justify-center text-white text-center shadow-lg"
        style={{ backgroundImage: "url('/blog_card7.jpg')" }}
      >
        <div className="bg-opacity-60 p-10 rounded-xl">
          <h1 className="lg:text-5xl  text-3xl font-extrabold tracking-wide">
            Chardham Yatra 2025
          </h1>
          <p className="mt-3 text-lg text-gray-300">
            A Sacred Journey to the Four Abodes of God
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-gray-100 via-black-200 py-12 to-gray-200">
      <div className="text-md bg-transparent p-2 text-gray-600 flex items-center justify-center space-x-2">
      <Link to="/blog" className="text-black font-medium hover:font-semibold">
        Blogs
      </Link>
      <span className="text-gray-400">/</span>
      <span className="text-gray-500">Chardham Yatra</span>
    </div>
        {/* Overview Section */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="container lg:w-340 w-80 mx-auto px-6 md:px-10 py-16 bg-white shadow-xl rounded-lg"
        >
          <h2 className="text-2xl lg:text-4xl font-bold text-[#1f84a6] text-center mb-5 underline underline-offset-6">
            Chardham Yatra: The Ultimate Spiritual Journey
          </h2>
          <p className="mt-6 lg:text-lg text-sm text-gray-700 text-center leading-relaxed max-w-6xl mx-auto">
          The Chardham Yatra is one of the most revered pilgrimage circuits in India, encompassing four sacred sites situated in the picturesque state of Uttarakhand. The yatra, which translates to the "four abodes," includes Yamunotri, Gangotri, Kedarnath, and Badrinath—each of which holds profound religious significance for Hindus. This sacred journey is not just a physical pilgrimage but a deeply spiritual experience that allows devotees to connect with the divine and witness the spiritual essence of the majestic Himalayas.

Yamunotri, the first shrine in the Chardham circuit, is dedicated to the goddess Yamuna, the sister of Yama, the god of death. Located at an altitude of around 3,200 meters, Yamunotri is situated near the source of the Yamuna River, which is one of the holiest rivers in Hinduism. Pilgrims take a dip in the thermal springs here and perform rituals to seek blessings for their well-being and protection from untimely death. The pristine, snow-capped peaks surrounding Yamunotri enhance its spiritual significance, making it a place of purity and devotion.

Gangotri, the second stop, is the sacred source of the Ganges River, considered the most sacred river in Hinduism. It is believed that the river goddess Ganga descended to Earth at this spot to purify humanity. The temple at Gangotri stands on the banks of the Bhagirathi River and is a popular site for devotees seeking salvation and spiritual renewal. Pilgrims often perform rituals here to honor the goddess and bathe in the icy waters of the river to wash away sins. The serene landscape of Gangotri, with its towering peaks and flowing waters, exudes a sense of tranquility and divinity.

The third site on the Chardham circuit, Kedarnath, is one of the twelve Jyotirlingas dedicated to Lord Shiva. Situated at a high altitude of 3,583 meters, the Kedarnath temple is one of the most challenging pilgrimages to undertake due to its remoteness and the rugged terrain. According to legend, the temple was built by the Pandavas from the Mahabharata and is believed to have been consecrated by Lord Shiva himself. The visit to Kedarnath offers devotees the opportunity to seek blessings for the removal of their sins and to feel a deep connection with Lord Shiva, the destroyer and transformer in the Hindu trinity.

Finally, Badrinath, the fourth site, is dedicated to Lord Vishnu, the preserver of the universe. The Badrinath temple, perched at 3,133 meters, is one of the most important pilgrimage destinations in Hinduism. It is believed that Lord Vishnu meditated here for thousands of years, and the site is revered for its spiritual aura. Pilgrims flock to Badrinath to seek the blessings of Lord Vishnu for salvation and prosperity. The temple is located in the breathtaking Valley of Flowers, with snow-capped peaks surrounding the site, making it a visual and spiritual marvel.

The Chardham Yatra is a journey that offers devotees an opportunity to cleanse their soul, remove accumulated sins, and experience the divine presence in the heart of the Himalayas. The pilgrimage is not just about visiting sacred temples but also about embracing the spiritual energy of the region, connecting with nature, and gaining spiritual enlightenment. Every year, thousands of devotees embark on this challenging but fulfilling journey, seeking blessings and divine grace in the serene and spiritually charged atmosphere of the Uttarakhand mountains.  
        </p>
        </motion.section>

        {/* Route Map & Itinerary */}
        <motion.section
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 px-6 py-8"
        >
          <h2 className="text-xl lg:text-3xl font-bold text-[#1f84a6] text-center mt-3">
            Route Map & Itinerary
          </h2>
          <p className="mt-4 text-lg text-gray-700 text-center">
            Journey starts from Haridwar or Rishikesh and covers:
          </p>
          <ul className="mt-4 space-y-4 lg:text-lg text-sm lg:w-340 w-80 mx-auto text-gray-100 text-center">
            <li className="bg-gradient-to-r from-[#0999a6] to-[#0999a6] p-4 rounded-lg shadow-lg">
              Yamunotri - The Origin of River Yamuna
            </li>
            <li className="bg-gradient-to-r from-[#0999a6] to-[#0999a6] p-4 rounded-lg shadow-lg">
              Gangotri - The Origin of River Ganga
            </li>
            <li className="bg-gradient-to-r from-[#0999a6] to-[#0999a6] p-4 rounded-lg shadow-lg">
              Kedarnath - One of the 12 Jyotirlingas of Lord Shiva
            </li>
            <li className="bg-gradient-to-r from-[#0999a6] to-[#0999a6] p-4 rounded-lg shadow-lg">
              Badrinath - The Abode of Lord Vishnu
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
            The best time for Chardham Yatra is from April to June and September to November. Avoid monsoon season due to landslides and harsh weather conditions.
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
            Book Your Chardham Yatra Now!
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            Embark on a life-changing spiritual journey with us. Reserve your seat today!
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

export default ChardhamYatra;
