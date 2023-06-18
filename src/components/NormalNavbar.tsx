import Link from "next/link";

const NormalNavbar = () => {
  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href={"/"} className="flex items-center">
          <img src="./Willow.svg" width="50" height="50" alt="Willow the Planet Logo" className="h-8 mr-3 hover:animate-bounce"/>
          <p className='self-center text-md md:text-2xl font-semibold whitespace-nowrap animate-animate-text bg-gradient-to-r from-dark-babyblue via-babyblue via-blurple via-purple via-blurple via-babyblue to-dark-babyblue bg-clip-text text-white text-3xl hover:text-transparent'>John Cox</p>
        </Link>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link href={"/"}>
                <span className="cursor-custom font-exo font-extralight block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 group transition-all duration-500 ease-in-out md:text-2xl">
                  <span className="bg-left-bottom bg-gradient-to-r from-babyblue to-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out"> Home </span>
                </span>
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                <span className="cursor-custom font-exo font-extralight block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 group transition-all duration-500 ease-in-out md:text-2xl">
                  <span className="bg-left-bottom bg-gradient-to-r from-babyblue to-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out"> About </span>
                </span>
              </Link>
            </li>
            <li>
              <Link href={"/projects"}>
                <span className="cursor-custom font-exo font-extralight block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 group transition-all duration-500 ease-in-out md:text-2xl">
                  <span className="bg-left-bottom bg-gradient-to-r from-babyblue to-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out"> Projects </span>
                </span>
              </Link>
            </li>
            <li>
              <Link href={"/astrophotography"}>
                <span className="cursor-custom font-exo font-extralight block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0 group transition-all duration-500 ease-in-out md:text-2xl">
                  <span className="bg-left-bottom bg-gradient-to-r from-babyblue to-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out"> Astrophotography </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NormalNavbar;
