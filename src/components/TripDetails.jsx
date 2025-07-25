

import { useParams } from "react-router-dom";
import { Card } from "antd";

const travelDestinations = [
  { id: 1, title: "Dubai, France", description: "Experience the city of love.", price: "$1200", image: "/assets/paris.jpg" },
  { id: 2, title: "West Bengal, Indonesia", description: "A tropical paradise awaits.", price: "$900", image: "/assets/bali.jpg" },
  { id: 3, title: "Chin, Japan", description: "Discover the blend of tradition.", price: "$1500", image: "/assets/tokyo.jpg" },
  { id: 4, title: "Japan, Italy", description: "Walk through ancient history.", price: "$1100", image: "/assets/rome.jpg" },
];

const TripDetails = () => {
  const { id } = useParams();
  const trip = travelDestinations.find((destination) => destination.id === parseInt(id));

  if (!trip) {
    return <h2 className="text-center text-red-500 mt-10">Trip not found</h2>;
  }

  return (
    <div className="container mx-auto p-8 flex justify-center items-center min-h-screen">
      <Card
        hoverable
        className="w-[700px] shadow-lg rounded-lg relative"
        cover={
          <div className="relative">
            <img alt={trip.title} src={trip.image} className="rounded-t-lg w-full h-80 object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-6">
              <h1 className="text-3xl font-bold text-center">{trip.title}</h1>
              <p className="text-lg text-center mt-2">{trip.description}</p>
              <p className="text-xl font-bold text-yellow-300 mt-4">Price: {trip.price}</p>
              <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg">
                Book Now
              </button>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default TripDetails;
