import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const UjjainMahakaleshwar = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative bg-cover bg-black bg-center h-[450px] flex items-center justify-center text-white text-center shadow-lg"
        style={{ backgroundImage: "url('/blog_card8.jpg')" }}
      >
        <div className="bg-opacity-60 p-10 rounded-xl">
          <h1 className="lg:text-5xl  text-3xl font-extrabold tracking-wide">
            Ujjain Mahakaleshwar Jyotirlinga
          </h1>
          <p className="mt-3 text-lg text-gray-300">
            A Divine Journey to One of the Twelve Jyotirlingas
          </p>
        </div>
      </motion.div>

      <div className="bg-gradient-to-r from-gray-100 via-black-200 py-12 to-gray-200">
      <div className="text-md bg-transparent p-2 text-gray-600 flex items-center justify-center space-x-2">
      <Link to="/blog" className="text-black font-medium hover:font-semibold">
        Blogs
      </Link>
      <span className="text-gray-400">/</span>
      <span className="text-gray-500">Mahakaleshwar Jyotirlinga</span>
    </div>
        {/* Overview Section */}
        <motion.section
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="container lg:w-340 w-80 mx-auto px-6 md:px-10 py-16 bg-white shadow-xl rounded-lg"
        >
          <h2 className="text-2xl lg:text-4xl font-bold text-[#1f84a6] text-center mb-5 underline underline-offset-6">
            Mahakaleshwar Jyotirlinga: The Eternal Flame
          </h2>
          <p className="mt-6 lg:text-lg text-sm text-gray-700 text-center leading-relaxed max-w-6xl mx-auto">
          The Mahakaleshwar Jyotirlinga, located in Ujjain, Madhya Pradesh, is one of the twelve revered Jyotirlingas dedicated to Lord Shiva, considered among the holiest places for Hindus. The Jyotirlinga is unique for several reasons, and its significance holds deep spiritual and cultural value.

One of the most distinct features of Mahakaleshwar is that it is the only Jyotirlinga facing south, a rare and profound aspect, and is hence referred to as Dakshinamukhi (South-facing). In Hindu philosophy, south is considered the direction of Yama, the god of death, and the south-facing idol of Mahakaleshwar is believed to symbolize the power of Lord Shiva to overcome death and time. The southward-facing idol is seen as a divine and powerful force that destroys the influence of death and grants immortality to devotees. This aspect adds a deep layer of mystery and reverence to the temple, making it a significant pilgrimage site.
</p>
 <p className="mt-6 lg:text-lg text-sm text-gray-700 text-center leading-relaxed max-w-6xl mx-auto">

The Mahakaleshwar temple itself is a grand structure, surrounded by a serene and spiritually charged atmosphere. The temple complex is situated on the banks of the Shipra River, which further enhances its sacredness. Devotees from across India and around the world visit Ujjain to worship Lord Mahakaleshwar, seeking blessings for peace, prosperity, and protection from evil forces.

One of the most notable aspects of the Mahakaleshwar Jyotirlinga is that it is believed to be Swayambhu, or self-manifested. This means that the idol was not created by human hands but is naturally occurring, believed to have emerged by divine will. This further elevates the temple’s spiritual significance, as many pilgrims believe that the divine presence in the form of Mahakaleshwar is eternal and unfathomable.

The temple's architectural beauty is also worth mentioning. With its towering spires and intricate carvings, it showcases a blend of traditional Indian temple architecture, combining both ancient and medieval styles. The temple is also home to a massive idol of Mahakaleshwar, intricately decorated, and a grand display of aarti, performed every evening, draws huge crowds. The aarti is an overwhelming experience, as the sound of bells and chanting fills the air, invoking a sense of peace and devotion.

The Mahakaleshwar Jyotirlinga is not just a place of worship but also a symbol of the triumph of spirituality over time and death. It holds a special place in the hearts of devotees who seek to connect with Lord Shiva, often praying for liberation (moksha) and protection from worldly troubles. With its rich history, spiritual significance, and unique features, Mahakaleshwar continues to be a powerful beacon of divine energy.   
       </p>
        </motion.section>

        {/* Rituals and Aarti Timings */}
        <motion.section
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 px-6 py-8"
        >
          <h2 className="text-xl lg:text-3xl font-bold text-[#1f84a6] text-center mt-3">
            Rituals and Aarti Timings
          </h2>
          <ul className="mt-4 space-y-4 lg:text-lg text-sm lg:w-340 w-80 mx-auto text-gray-100 text-center">
            <li className="bg-gradient-to-r from-[#0999a6] to-[#0999a6] p-4 rounded-lg shadow-lg">
              Bhasma Aarti – 4:00 AM
            </li>
            <li className="bg-gradient-to-r from-[#0999a6] to-[#0999a6] p-4 rounded-lg shadow-lg">
              Midday Aarti – 12:00 PM
            </li>
            <li className="bg-gradient-to-r from-[#0999a6] to-[#0999a6] p-4 rounded-lg shadow-lg">
              Evening Aarti – 7:00 PM
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
            The best time to visit Mahakaleshwar Jyotirlinga is during the winter months from October to March. The temple sees a huge influx of devotees during Maha Shivaratri and Shravan Maas.
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
            Plan Your Visit Now!
          </h2>
          <p className="mt-2 text-lg text-gray-700">
            Experience the divine aura of Mahakaleshwar Jyotirlinga. Book your spiritual journey today.
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

export default UjjainMahakaleshwar;