// import Link from "next/link";

// const NormalNavbar = () => {
//   return (
//     <nav>
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <Link href={"/"} className="flex items-center">
//           <img src="./Willow.svg" width="50" height="50" alt="Willow the Planet Logo" className="h-8 mr-3 hover:animate-bounce"/>
//           <p className='self-center text-md md:text-2xl font-semibold whitespace-nowrap animate-animate-text bg-gradient-to-r from-dark-babyblue via-babyblue via-blurple via-purple via-blurple via-babyblue to-dark-babyblue bg-clip-text text-white text-3xl hover:text-transparent'>John Cox</p>
//         </Link>
//         <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
//           <span className="sr-only">Open main menu</span>
//           <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
//         </button>
//         <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//           <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
//             <li>
//               <Link href={"/"}>
//                 <span className="cursor-custom font-exo font-extralight block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 group transition-all duration-500 ease-in-out md:text-2xl">
//                   <span className="bg-left-bottom bg-gradient-to-r from-babyblue to-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out"> Home </span>
//                 </span>
//               </Link>
//             </li>
//             <li>
//               <Link href={"/about"}>
//                 <span className="cursor-custom font-exo font-extralight block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 group transition-all duration-500 ease-in-out md:text-2xl">
//                   <span className="bg-left-bottom bg-gradient-to-r from-babyblue to-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out"> About </span>
//                 </span>
//               </Link>
//             </li>
//             <li>
//               <Link href={"/projects"}>
//                 <span className="cursor-custom font-exo font-extralight block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 group transition-all duration-500 ease-in-out md:text-2xl">
//                   <span className="bg-left-bottom bg-gradient-to-r from-babyblue to-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out"> Projects </span>
//                 </span>
//               </Link>
//             </li>
//             <li>
//               <Link href={"/astrophotography"}>
//                 <span className="cursor-custom font-exo font-extralight block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 group transition-all duration-500 ease-in-out md:text-2xl">
//                   <span className="bg-left-bottom bg-gradient-to-r from-babyblue to-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out"> Astrophotography </span>
//                 </span>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

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
    <nav className="mt-2 mr-2 ml-2 md:mt-10 md:mr-10 md:ml-10">
      <div className="flex justify-between">
        <div className="flex">
          <img src="./Willow.svg" width="50" height="50" alt="Willow the Planet Logo" className="hover:animate-bounce"/>
          <p className='font-michroma text-md font-semibold animate-animate-text bg-gradient-to-r from-dark-babyblue via-babyblue via-blurple via-purple via-blurple via-babyblue to-dark-babyblue bg-clip-text text-white hover:text-transparent md:text-3xl'>John Cox</p>
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
              className="text-white text-sm md:hidden"
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
        </div>
      </div>
      <div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div className="flex flex-row items-center text-2xl font-semibold md:justify-center">
            <Link href={"/"}>
              <span className="text-green mx-6 hover:underline"> Home</span>
            </Link>

            <Link href={"/experiences"}>
              <span className="text-green mx-6 hover:underline">
                {" "}
                Experiences
              </span>
            </Link>

            <Link href={"/projects"}>
              <span className="text-green mx-6 hover:underline"> Projects</span>
            </Link>

            <Link href={"/contact"}>
              <span className="text-green mx-6 hover:underline"> Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NormalNavbar;
