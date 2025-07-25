import React from "react";
import Layout from "../layout/layout";

const Content = () => {
  return (
    <Layout>
      <div className="bg-gray-100 ">
        <div className="relative w-full h-[700px]">
          {/* Background Image */}
          <img
            src="src/assets/harsh-jain-LgYuGuVEZYY-unsplash.jpg"
            alt="Tour1"
            className="w-full h-full object-cover"
          />

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4">
            <h1 className="text-4xl font-bold">Trek Package</h1>
            <p className="text-lg mt-2">An unforgettable Himalayan adventure</p>
          </div>
        </div>

        {/* Trek Details */}
        <div className="grid md:grid-cols-1 gap-6 bg-white p-18 rounded-lg shadow-lg mt-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              Trek Overview
            </h2>
            <p className="text-gray-700 mt-2">
              Trek is a stunning Himalayan trek offering breathtaking views of
              Mt. Trishul and Nanda Ghunti, with frozen lakes and snow-clad
              trails. The actual trek begins from Lohajung (7,600 ft) to
              Bekaltal (9,689 ft). Experience the beauty of oak forests and the
              confluence of Kail and Pindari Rivers. As we reach Bekaltal,
              encircling it lie thick oak forests that add to the beauty and
              serenity of the region. It makes for the perfect camping spot. One
              can definitely not imagine coming across the whole galaxy of stars
              seen right after the golden sunset amidst the valleys with a mild
              cool breeze tranquillizing your mind and soul. The trek from
              Bekaltal to Brahmatal includes traversing from oak and
              rhododendron forests to Telandi meadows. Telandi meadows, a green
              land in summer, turns into a snow-scape in winters. Camping on the
              lakeside with the spectacular view of the night sky in the frozen
              lake during winters is a sight to behold.
            </p>
            {/* <ul className="mt-4 space-y-2">
              <li>
                📍 <strong>Region:</strong> Uttarakhand, India
              </li>
              <li>
                ⛰ <strong>Max Altitude:</strong> 12,250 ft
              </li>
              <li>
                🚶‍♂️ <strong>Trekking Distance:</strong> 22 km
              </li>
              <li>
                💪 <strong>Difficulty:</strong> Easy to Moderate
              </li>
              <li>
                📅 <strong>Duration:</strong> 5 Days / 4 Nights
              </li>
            </ul> */}
          </div>
        </div>

        {/* Contact Details */}
        <div className="mt-6 bg-gray-200 p-6 rounded-lg text-center">
          <h3 className="text-xl font-semibold">Help & Support</h3>
          <p>📞 +91-96961 87592</p>
          <p>📧 spiritualhikesteam@gmail.com</p>
        </div>
      </div>
    </Layout>
  );
};

export default Content;
