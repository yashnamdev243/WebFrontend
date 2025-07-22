import React from "react";

const Card = ({ icon: Icon, title, value, bgColor, hoverColor, textColor }) => {
  return (
    <div
      className={`flex flex-col items-center p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverColor;
        e.currentTarget.style.color = "#fff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = bgColor;
        e.currentTarget.style.color = textColor;
      }}
    >
      <div className="text-4xl">
        <Icon size={50} />
      </div>
      <h2 className="text-2xl font-bold mt-2">{value}</h2>
      <p className="text-lg">{title}</p>
    </div>
  );
};

export default Card;
