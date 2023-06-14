import Link from "next/link";

const NormalNavbar = () => {
  return (
    <nav className="pt-10 flex items-center justify-between">
      <div className='flex pl-4 font-michroma'>
          <img src="./Willow.svg" width="50" height="50" alt="Willow the Planet Logo" className="hover:animate-bounce"/>
          <p className='animate-animate-text bg-gradient-to-r from-dark-babyblue via-babyblue via-blurple via-purple via-blurple via-babyblue to-dark-babyblue  bg-clip-text text-white text-3xl hover:text-transparent'>John Cox</p>
      </div>
      <ul className="flex text-white text-2xl font-exo font-extralight pr-4">
        <li>
          <Link href={"/"}>
            <span className="cursor-custom group text-white transition-all duration-500 ease-in-out mx-6">
              <span className="bg-left-bottom bg-gradient-to-r from-babyblue to-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out"> Home
              </span>
            </span>
          </Link>
        </li>
        <li>
          <Link href={"/about"}>
            <span className="cursor-custom group text-white transition-all duration-500 ease-in-out mx-6">
              <span className="bg-left-top bg-gradient-to-r from-babyblue to-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out"> About
              </span>
            </span>
          </Link>
        </li>
        <li>
          <Link href={"/projects"}>
            <span className="cursor-custom group text-white transition-all duration-500 ease-in-out mx-6">
              <span className="bg-left-bottom bg-gradient-to-r from-babyblue to-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out"> Projects
              </span>
            </span>
          </Link>
        </li>
        <li>
          <Link href={"/astrophotography"}>
            <span className="cursor-custom group text-white transition-all duration-500 ease-in-out mx-6">
              <span className="bg-left-bottom bg-gradient-to-r from-babyblue to-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-700 ease-out"> Astrophotography
              </span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NormalNavbar;
