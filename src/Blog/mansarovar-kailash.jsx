import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MansarovarKailash = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-cover bg-black bg-center h-[450px] flex items-center justify-center text-white text-center shadow-lg"
        style={{ backgroundImage: "url('/blog_card5.jpg')" }}
      >
        <div className="bg-opacity-60 p-10 rounded-xl">
          <h1 className="lg:text-5xl  text-3xl font-extrabold tracking-wide">
            Mansarovar Kailash Yatra 2025
          </h1>
          <p className="mt-3 text-lg text-gray-300">
            The Holy Journey to Mount Kailash and Lake Mansarovar
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-gray-100 via-black-200 py-12 to-gray-200">

      <div className="text-md bg-transparent p-2 text-gray-600 flex items-center justify-center space-x-2">
      <Link to="/blog" className="text-black font-medium hover:font-semibold">
        Blogs
      </Link>
      <span className="text-gray-400">/</span>
      <span className="text-gray-500">Mansarovar Kailash</span>
    </div>

        {/* Overview Section */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="container lg:w-340 w-80 mx-auto px-6 md:px-10 py-16 bg-white shadow-xl rounded-lg"
        >
          <h2 className="text-2xl lg:text-4xl font-bold text-[#1f84a6] text-center mb-5 underline underline-offset-6">
            Mansarovar Kailash: A Sacred Pilgrimage
          </h2>
          <p className="mt-6 lg:text-lg text-sm text-gray-700 text-center leading-relaxed max-w-6xl mx-auto">
          Mount Kailash and Lake Mansarovar, located in the remote region of Tibet, hold immense spiritual and religious significance across multiple belief systems, including Hinduism, Buddhism, Jainism, and Bon traditions. These sacred sites are considered among the holiest places on Earth, and thousands of pilgrims from around the world undertake a difficult and demanding journey to seek divine blessings, spiritual enlightenment, and the purification of the soul.

Mount Kailash, often referred to as the "abode of Lord Shiva" in Hinduism, is revered as the home of the supreme deity. In Hindu belief, it is believed that Lord Shiva resides on the peak of Kailash, meditating in eternal peace. The mountain, with its distinct pyramid-like shape, is considered the center of the universe and represents the axis of spiritual power. Similarly, in Tibetan Buddhism, Mount Kailash is associated with the Buddha's teachings and is regarded as the dwelling place of the spiritual energy of the universe. For the followers of Jainism, the mountain is the site where Lord Rishabhdev, the first Tirthankara, attained nirvana. The Bon tradition also reveres Mount Kailash as the abode of their deities, giving it a universal spiritual status.
</p>

<p className="mt-6 lg:text-lg text-sm text-gray-700 text-center leading-relaxed max-w-6xl mx-auto">

Lake Mansarovar, located near the base of Mount Kailash, is equally revered across these faiths. According to Hindu mythology, the lake was created by Lord Brahma and is said to possess purifying qualities. A dip in its pristine waters is believed to cleanse sins and grant spiritual liberation. In Buddhism, Lake Mansarovar symbolizes purity and is closely associated with the cycle of birth, death, and rebirth, reflecting the concept of samsara. For Jains, the lake is sacred as it is believed to have been the site of Lord Rishabhdev's meditation. The Bon tradition also considers the lake a holy site, with its waters representing the vast and profound wisdom of their teachings.

The yatra to Mount Kailash and Lake Mansarovar is not just a physical journey but a deeply spiritual one. Pilgrims undertake a challenging circumambulation (parikrama) around Mount Kailash, which spans around 52 kilometers. It is believed that completing this ritual walk removes the accumulated karma and grants the devotee spiritual purification. The arduous trek, often performed at high altitudes, is a test of physical endurance and devotion. Many pilgrims also take a holy dip in Lake Mansarovar to cleanse themselves spiritually before or after the parikrama.

The journey to these sacred sites is challenging, with high altitudes, harsh weather conditions, and rugged terrain. Despite these challenges, the pilgrimage is undertaken with immense faith and devotion, as it is believed to lead to spiritual enlightenment, the eradication of past sins, and the attainment of moksha (liberation from the cycle of life and death). Mount Kailash and Lake Mansarovar continue to be powerful symbols of divine energy, attracting millions of devotees seeking to deepen their spiritual connection and experience the ultimate reality.     
     </p>
        </motion.section>

        {/* Trek Itinerary */}
        <motion.section
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 px-6 py-8"
        >
          <h2 className="text-xl lg:text-3xl font-bold text-[#1f84a6] text-center mt-3">
            Route Map & Trek Itinerary
          </h2>
          <ul className="mt-4 space-y-4 lg:text-lg text-sm lg:w-340 w-80 mx-auto text-gray-100 text-center">
            <li className="bg-gradient-to-r from-[#0999a6] to-[#0999a6] p-4 rounded-lg shadow-lg">
              Kathmandu to Nepalgunj – Flight
            </li>
            <li className="bg-gradient-to-r from-[#0999a6] to-[#0999a6] p-4 rounded-lg shadow-lg">
              Nepalgunj to Simikot to Taklakot – Journey through Tibet
            </li>
            <li className="bg-gradient-to-r from-[#0999a6] to-[#0999a6] p-4 rounded-lg shadow-lg">
              Taklakot to Mansarovar Lake – Sacred Bath & Rituals
            </li>
            <li className="bg-gradient-to-r from-[#0999a6] to-[#0999a6] p-4 rounded-lg shadow-lg">
              Mansarovar to Mount Kailash (Dirapuk) – Trek Begins
            </li>
          </ul>
        </motion.section>

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
            Join us on this spiritual expedition to Mount Kailash and Lake Mansarovar for a life-changing experience.
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

export default MansarovarKailash;