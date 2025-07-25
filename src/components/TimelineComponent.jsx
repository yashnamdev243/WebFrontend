import React from "react";
import { Timeline } from "antd";
const TimelineComponent = ({ mode, timelineSteps }) => {
  if (!timelineSteps || timelineSteps.length === 0) {
    return (
      <p className="text-red-500 text-center mt-4">
        No timeline steps available.
      </p>
    );
  }
  // const TimelineComponent = ({ mode, timelineSteps }) => {
  return (
    <div className="px-4 sm:px-8 py-6">
      {/* Desktop Timeline */}
      <Timeline
        className="hidden sm:block"
        mode={mode}
        items={timelineSteps.map((step, index) => ({
          label: (
            <div className="w-full max-w-auto text-left rounded-lg border-b-0 p-4 font-cursive">
              <p className="text-[6px] sm:text-sm text-blue-800 text-right font-semibold fira-sans">
                {step.date}
              </p>
              <h3 className="text-zinc-800 font-semibold text-[12px] sm:text-2xl fira-sans">
                {step.title}
              </h3>
              <p className="text-zinc-700 mt-4 text-[8px] sm:text-xl font-semibold fira-sans text-justify">
                {step.description}
              </p>
              <p className="text-gray-600 mt-2 text-[6px] sm:text-lg fira-sans text-justify">
                {step.paragraph}
              </p>
            </div>
          ),
          children: (
            <div className="flex flex-col md:flex-row items-center gap-6 mt-4 p-4">
              <img
                src={step.image}
                alt={step.title}
                className="w-full max-w-[600px] h-[100px] md:h-[380px] object-cover rounded-md"
              />
            </div>
          ),
        }))}
      />

      {/* ✅ Mobile-Friendly Steps UI (Debug: Remove `sm:hidden` if needed) */}
      <div className="sm:hidden flex flex-col gap-6 ">
        {timelineSteps.map((step, index) => (
          <div key={index} className="relative flex items-start gap-2">
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-[#1F84A6] text-white flex items-center justify-center font-semibold ">
                {index + 1}
              </div>
              {index !== timelineSteps.length - 1 && (
                <div className="w-1 h-full bg-gray-300 mt-1"></div>
              )}
              {/* Vertical Line Connecting All Steps */}
              <div className="absolute left-[10px] top-7 bottom-0 w-[2px] bg-gray-300"></div>
            </div>

            {/* Step Content */}
            <div className="p-4 mr-2 bg-white shadow-md rounded-lg flex-1 border border-blue-300">
              <p className="text-xs text-blue-700 text-right fira-sans">{step.date}</p>
              <h3 className="text-zinc-800 font-semibold text-base fira-sans">
                {step.title}
              </h3>
              <p className="text-zinc-700 mt-3 text-sm font-semibold fira-sans">{step.description}</p>
              <p className="text-zinc-600 mt-2 text-xs fira-sans">{step.paragraph}</p>
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-[150px] object-cover rounded-md mt-2 border border-gray-400"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineComponent;
