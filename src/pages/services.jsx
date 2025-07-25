import React from "react";
import { FaPlane, FaHotel, FaMapMarkedAlt, FaCar, FaShip, FaHiking, FaUmbrellaBeach, FaRegHandshake } from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-[url('src/assets/fabrizio-conti-aExT3y92x5o-unsplash.jpg')] bg-cover bg-center bg-no-repeat min-h-screen py-12 pt-25">
    {/* <div className="bg-blue-200 min-h-screen py-12 pt-25"> */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-900">Our Services</h1>
          <p className="text-gray-700 mt-4 text-lg">
            Explore the world with our exclusive services, designed to make your journeys comfortable, affordable, and unforgettable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300">
            <FaPlane className="text-blue-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Flight Bookings</h3>
            <p className="text-gray-600">Find the best flight deals for your next destination.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300">
            <FaHotel className="text-green-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Hotel Reservations</h3>
            <p className="text-gray-600">Stay in luxurious and budget-friendly hotels worldwide.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300">
            <FaMapMarkedAlt className="text-purple-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Tour Packages</h3>
            <p className="text-gray-600">Customized tours for families, groups, and solo travelers.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300">
            <FaCar className="text-yellow-500 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Car Rentals</h3>
            <p className="text-gray-600">Drive hassle-free with our reliable car rental services.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300">
            <FaShip className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Cruise Trips</h3>
            <p className="text-gray-600">Enjoy luxury cruises with breathtaking ocean views.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300">
            <FaHiking className="text-green-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Adventure Tours</h3>
            <p className="text-gray-600">Hiking, trekking, safaris, and more for thrill-seekers.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300">
            <FaUmbrellaBeach className="text-yellow-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Beach Holidays</h3>
            <p className="text-gray-600">Relax at the most stunning beaches worldwide.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-300">
            <FaRegHandshake className="text-red-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold">24/7 Customer Support</h3>
            <p className="text-gray-600">We’re here to assist you anytime, anywhere.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 p-10 rounded-lg shadow-md text-center text-white">
          <h2 className="text-3xl font-semibold">Start Your Journey Today!</h2>
          <p className="mt-2 text-lg">Book your next trip with us and experience the best travel services.</p>
          <button className="mt-4 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
