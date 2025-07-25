import React from "react";

const Itinerary = ({ itineraryData }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Tour Itinerary
      </h2>

      <div className="space-y-6">
        {itineraryData.map((day, index) => (
          <div key={index} className="p-4 border-l-4 border-blue-500 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Day {day.day}: {day.title}</h3>
            <p className="text-gray-700 mt-2">{day.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sample itinerary data (You can replace it with API data)
const sampleItinerary = [
  { day: 1, title: "Arrival & Sightseeing", description: "Welcome to the city! Visit famous landmarks and enjoy a local dinner." },
  { day: 2, title: "Adventure & Activities", description: "Experience thrilling activities like trekking and river rafting." },
  { day: 3, title: "Leisure & Departure", description: "Relax at the beach, enjoy shopping, and prepare for departure." },
];

const ItineraryPage = () => {
  return <Itinerary itineraryData={sampleItinerary} />;
};

export default ItineraryPage;
