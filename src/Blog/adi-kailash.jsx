import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AdiKailash = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-cover bg-black bg-center h-[450px] flex items-center justify-center text-white text-center shadow-lg"
        style={{ backgroundImage: "url('/blog_card4.jpg')" }}
      >
        <div className="bg-opacity-60 p-10 rounded-xl">
          <h1 className="lg:text-5xl  text-3xl font-extrabold tracking-wide">
            Adi Kailash Yatra 2025
          </h1>
          <p className="mt-3 text-lg text-gray-300">
            A Sacred Journey to the Lesser-Known Abode of Lord Shiva
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-gray-100 via-black-200 py-12 to-gray-200">
      <div className="text-md bg-transparent p-2 text-gray-600 flex items-center justify-center space-x-2">
      <Link to="/blog" className="text-black font-medium hover:font-semibold">
        Blogs
      </Link>
      <span className="text-gray-400">/</span>
      <span className="text-gray-500">Adi Kailash</span>
    </div>
        {/* Overview Section */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="container lg:w-340 w-80 mx-auto px-6 md:px-10 py-16 bg-white shadow-xl rounded-lg"
        >
          <h2 className="text-2xl lg:text-4xl font-bold text-[#1f84a6] text-center mb-5 underline underline-offset-6">
            Adi Kailash: The Chota Kailash of the Himalayas
          </h2>
          <p className="mt-6 lg:text-lg text-sm text-gray-700 text-center leading-relaxed max-w-6xl mx-auto">
          Adi Kailash, also known as Chota Kailash, is one of the most revered and sacred pilgrimage destinations in India. Situated in the remote Pithoragarh district of Uttarakhand, it is a spiritual site for Hindus and trekkers alike, offering an enriching blend of natural beauty and divine significance. The name "Chota Kailash" (which means "Small Kailash") stems from the belief that this mountain is a miniature version of the much venerated Mount Kailash, located in Tibet, which is regarded as the abode of Lord Shiva.

The Adi Kailash trek is often considered an alternative to the more challenging Kailash Mansarovar pilgrimage. It is believed that this sacred mountain in the Himalayan range, towering at an altitude of approximately 5,440 meters (17,850 feet), is the seat of Lord Shiva and the place where he resides with Goddess Parvati. The mountain and its surrounding area are thus deeply intertwined with Hindu mythology, making it a revered spot for those seeking spiritual solace and blessings. Many devotees believe that a visit to Adi Kailash purifies the soul and brings them closer to divinity.

</p>
<p className="mt-6 lg:text-lg text-sm text-gray-700 text-center leading-relaxed max-w-6xl mx-auto">

The journey to Adi Kailash is not only a spiritual one but also an extraordinary adventure for trekkers and nature lovers. The trek takes pilgrims through rugged terrains, picturesque valleys, and dense forests, all set against the backdrop of snow-capped peaks. The Parvati Sarovar, a serene lake located at the foot of the mountain, adds to the tranquility of the place, making it an ideal spot for meditation and reflection. The crystal-clear waters of Parvati Sarovar are believed to have healing properties, further adding to the divine allure of this sacred site.

The surrounding landscapes, dotted with alpine meadows, pristine rivers, and vast stretches of unspoiled wilderness, create an enchanting environment that leaves visitors awestruck. The tranquility of the area provides a perfect setting for spiritual introspection, offering a break from the hustle and bustle of everyday life. The trek to Adi Kailash is challenging but immensely rewarding, with its peaceful surroundings making it a deeply transformative experience for both the body and the mind.

Access to Adi Kailash is relatively difficult, and the journey requires proper preparation and planning. However, those who undertake the pilgrimage are often rewarded with an unmatched sense of peace and spiritual fulfillment. Whether one is a devout believer or a passionate trekker, Adi Kailash offers a unique blend of divinity and natural beauty, making it one of India’s most cherished spiritual destinations.



          </p>
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
            The best time to visit Adi Kailash is from May to October when the weather is pleasant and the trek routes are accessible. Avoid the monsoon season due to landslides and difficult terrain.
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
            Embark on the Adi Kailash Yatra for an unparalleled spiritual and adventurous experience amidst the majestic Himalayas.
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

export default AdiKailash;
