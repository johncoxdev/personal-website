"use client";

import React, { useEffect, useState } from 'react';


const StarEffect = () => {
  const [stars, setStars] = useState<JSX.Element[]>([]);
  const randomStarAmount = Math.random() * 75 + 10;

  useEffect(() => {
    const generateRandomStar = () => {
        const size = Math.floor(Math.random() * 10) + 1;
        const left = Math.random() * 98;
        const top = Math.random() * 98;

        const pingSpeed = Math.floor(Math.random() * 10);
        const pingString = ["animate-ping-1", "animate-ping-2", "animate-ping-3", "animate-ping-4", "animate-ping-5", "animate-ping-6", "animate-ping-7", "animate-ping-8", "animate-ping-9", "animate-ping-0"];
        
        return (
          <svg
            key={Math.random()}
            className={`absolute opacity-90 ${pingString[pingSpeed]}`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <circle
              cx="12"
              cy="12"
              r={size / 2}
              fill="white"
            />
          </svg>
        );
      };

    const starElements = Array.from({ length: randomStarAmount }, () => generateRandomStar());
    setStars(starElements);
  }, []);

  return (
    <div id="Star-Scatter" className='fixed z-10 min-h-screen w-full'>
        {stars}
    </div>
  )
};

export default StarEffect;