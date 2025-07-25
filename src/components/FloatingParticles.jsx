import React from "react";

const FloatingParticles = () => {
  const particles = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 50 + 20, // Random size between 20px - 70px
    top: Math.random() * 100 + "%", // Random vertical position
    left: Math.random() * 100 + "%", // Random horizontal position
    duration: Math.random() * 5 + 3 + "s", // Random animation duration
  }));

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-gray-300 bg-opacity-20 rounded-full animate-floating"
          style={{
            width: particle.size,
            height: particle.size,
            top: particle.top,
            left: particle.left,
            animationDuration: particle.duration,
          }}
        ></div>
      ))}
    </div>
  );
};

export default FloatingParticles;
