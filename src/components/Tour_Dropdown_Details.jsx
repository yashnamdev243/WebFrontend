import { useParams } from "react-router-dom";
import { Card } from "antd";
import { travelDestinations } from "../Data/Tours_package_data";
import { tours } from "../Data/tourStepsData.jsX"; // Timeline data for each tour

import TimelineComponent from "../components/TimelineComponent";
import React, { useState } from "react";
import ThingsToPack from "./ThingsToPack";
import Inclusion_Exclusion from "./Inclusion_Exclusion";

const TourDetails = () => {
  const { id } = useParams();
  const trip = travelDestinations.find(
    (destination) => destination.id === parseInt(id)
  );

  // Here we assume the timeline id is formatted as "tour{trip.id}"
  const tourTimeline = tours.find((tour) => tour.id === `tour${trip?.id}`);

  // Setting mode to "alternate" for left-right layout
  const [mode] = useState("alternate");

  if (!trip) {
    return <h2 className="text-center text-red-500 mt-10">Trip not found</h2>;
  }

  return (
    <div className="w-full max-w-full container mx-auto flex flex-col justify-center items-center">
      <Card
        // hoverable
        className="relative w-full max-w-full mx-auto"
        cover={
          <div className="relative w-full h-full">
            <img
              alt={trip.title}
              src={trip.bg}
              className="w-full h-[400px] md:h-[450px] lg:h-screen"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-10  bg-opacity-40">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center drop-shadow-lg fira-sans [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]">
                {trip.title}
              </h1>
              <p className="text-sm md:text-xl text-white text-center md:mx-15 mt-3 md:mt-5 fira-sans [text-shadow:_0_4px_4px_rgb(0_0_0_/_0.8)]">
                {trip.description}
              </p>
            </div>
          </div>
        }
      />

      <div className="container mx-auto flex flex-col justify-center items-center px-4 sm:px-8 my-6">
        {/* Title Section */}

        <span class="text-3xl lg:text-4xl text-[#1f84a6] mx-1 mb-6 font-bold relative inline-block stroke-current">
          Trek Overview
          <svg
            class="absolute -bottom-0.5 w-full max-h-1.5"
            viewBox="0 0 55 5"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
              stroke-width="2"
            ></path>
          </svg>
        </span>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#d3ebf3] p-5 sm:p-8 rounded-lg shadow-lg w-full max-w-7xl">
          {/* Image Section */}
          <div className="flex items-center justify-center">
            <img
              alt={trip.title}
              src={trip.image}
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[380px] object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#1f84a6] font-bold mb-4">
              {trip.title}
            </h1>
            <p className="text-gray-700 text-sm sm:text-[18px] fira-sans text-justify">
              {trip.paragraph}
            </p>
          </div>
        </div>
      </div>
      <span class="mt-8 text-3xl lg:text-4xl text-[#1f84a6] mx-1 font-bold relative inline-block stroke-current pb-1.5">
      Tour Progress
          <svg
            class="absolute -bottom-0.5 w-full max-h-1.5"
            viewBox="0 0 55 5"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
              stroke-width="2"
            ></path>
          </svg>
        </span>
      {/* Timeline Section */}
      <div className=" w-full max-w-[1200px] mx-auto">
        {tourTimeline ? (
          <TimelineComponent mode={mode} timelineSteps={tourTimeline.steps} />
        ) : (
          <p className="text-center text-gray-600">
            No timeline available for this trip.
          </p>
        )}
      </div>

      <div className="w-full mx-auto">
        <ThingsToPack />
      </div>

      <div className="container mx-auto my-6">
        <Inclusion_Exclusion />
      </div>

      {/* <div>
  <ItineraryPage />
</div> */}
    </div>
  );
};

export default TourDetails;
