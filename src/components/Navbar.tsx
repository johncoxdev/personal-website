"use client";

import Link from "next/link";
import { useState } from "react";

const NormalNavbar = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return(
    <nav className="hidden sm:flex z-50 absolute sm:pt-20 sm:pb-20 flex text-white font-julius sm:text-xl justify-evenly w-full">
      <div className="flex justify-evenly w-6/12">
        <a href="#home">
          <span className="hover:text-light-orange">
            <p className="hover:scale-105 transition-all duration-500">Home</p>
          </span>
        </a>
        <a href="#about_page">
          <span className="hover:text-light-orange hover:scale-105">
            <p className="hover:scale-105 transition-all duration-500">About</p>
          </span>
        </a>
        <a href="#project_page">
          <span className="hover:text-light-orange hover:scale-105">
            <p className="hover:scale-105 transition-all duration-500">Projects</p>
          </span>
        </a>
        <a href="#astrophotography_page">
          <span className="hover:text-light-orange hover:scale-105">
            <p className="hover:scale-105 transition-all duration-500">Astrophotography</p>
          </span>
        </a>
      </div>
    </nav>
  )
};

export default NormalNavbar;
