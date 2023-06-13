  import Link from "next/link";

  const HomeNavbar = () => {
    return (
      <nav className="flex text-center justify-center">
        <ul className="sm:flex justify-center text-md font-black font-extralight sm:text-3xl pt-10">
          <li>
            <Link href={"/"}>
              <span className="cursor-custom group text-white transition-all duration-500 ease-in-out mx-6">
                <span className="bg-left-bottom bg-gradient-to-r from-babyblue to-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Home
                </span>
              </span>
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              <span className="cursor-custom group text-white transition-all duration-500 ease-in-out mx-6">
                <span className="bg-left-bottom bg-gradient-to-r from-babyblue to-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  About
                </span>
              </span>
            </Link>
          </li>
          <li>
            <Link href={"/projects"}>
              <span className="cursor-custom group text-white transition-all duration-500 ease-in-out mx-6">
                <span className="bg-left-bottom bg-gradient-to-r from-babyblue to-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Projects
                </span>
              </span>
            </Link>
          </li>
          <li>
            <Link href={"/astrophotography"}>
              <span className="cursor-custom group text-white transition-all duration-500 ease-in-out mx-6">
                <span className="bg-left-bottom bg-gradient-to-r from-babyblue to-purple bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Astrophotography
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  export default HomeNavbar;
