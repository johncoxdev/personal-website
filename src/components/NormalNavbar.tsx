"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NormalNavbar = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <nav className="mt-2 mr-2 ml-2 lg:mt-10 lg:mr-10 lg:ml-10">
      <div className="flex justify-between">
        <div className="flex">
          <div>
            <img src="./Willow.svg" width="50" height="50" alt="Willow the Planet Logo" className="hover:animate-bounce"/>
          </div>
          <p className='font-michroma text-md font-semibold animate-animate-text bg-gradient-to-r from-dark-babyblue via-babyblue via-blurple via-purple via-blurple via-babyblue to-dark-babyblue bg-clip-text text-white hover:text-transparent lg:text-3xl'>John Cox</p>
        </div>
        {/* This is the navbar + hitbox */}
        <div className="flex">
          {/* This is only the navbar */}
          <div>
            <ul style={visible ? { display: "block" } : { display: "none" }}>
              <div className="flex flex-col">
                <Link href={"/"} className="my-1 ring-1 ring-offset-1 pl-3 pr-3">
                  <span className="text-white text-lg"> Home</span>
                </Link>
                <Link href={"/about"} className="my-1 ring-1 ring-offset-1 pl-3 pr-3">
                  <span className="text-white text-lg">About</span>
                </Link>
                <Link href={"/projects"} className="my-1 ring-1 ring-offset-1 pl-3 pr-3">
                  <span className="text-white text-lg"> Projects</span>
                </Link>
                <Link href={"/astrophotography"} className="my-1 ring-1 ring-offset-1 pl-3 pr-3">
                  <span className="text-white text-lg"> Astrophotography</span>
                </Link>
              </div>
            </ul>
          </div>
          {/* This is the hitbox */}
          <div className="ml-2">
            <button
              type="button"
              className="text-white text-sm lg:hidden"
              onClick={handleClick}
            >
              <svg
                className="h-8 w-8"
                aria-hidden="true"
                fill="white"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
            <div>
            <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
              <div className="font-exo font-extralight flex flex-row items-center text-2xl lg:justify-center">
                <Link href={"/"}>
                  <span className="cursor-custom group text-white transition-all duration-500 ease-in-out mx-6">
                    <span className="bg-left-bottom bg-gradient-to-r from-babyblue to-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Home
                    </span>
                  </span>
                </Link>

                <Link href={"/about"}>
                  <span className="cursor-custom group text-white transition-all duration-500 ease-in-out mx-6">
                    <span className="bg-left-bottom bg-gradient-to-r from-babyblue to-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      About
                    </span>
                  </span>
                </Link>

                <Link href={"/projects"}>
                  <span className="cursor-custom group text-white transition-all duration-500 ease-in-out mx-6">
                    <span className="bg-left-bottom bg-gradient-to-r from-babyblue to-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Projects
                    </span>
                  </span>
                </Link>

                <Link href={"/astrophotography"}>
                  <span className="cursor-custom group text-white transition-all duration-500 ease-in-out mx-6">
                    <span className="bg-left-bottom bg-gradient-to-r from-babyblue to-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Astrophotography
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NormalNavbar;
