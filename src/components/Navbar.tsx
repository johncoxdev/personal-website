const NormalNavbar = () => {
  return(
    <nav className="hidden lg:flex z-50 absolute sm:pt-14 sm:pb-5 flex text-white font-julius sm:text-xl justify-evenly w-full">
      <div className="flex justify-evenly w-full sm:w-6/12">
        <a href="#home">
          <span className="group text-white transition duration-300 hover:text-light-orange">
            Home
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-light-orange"></span>
          </span>
        </a>
        <a href="#about_page">
          <span className="group text-white transition duration-300 hover:text-light-orange">
            About
            <span className="block max-w-0  group-hover:max-w-full transition-all duration-300 h-0.5 bg-light-orange"></span>
          </span>
        </a>
        <a href="#project_page">
          <span className="group text-white transition duration-300 hover:text-light-orange">
            Projects
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-light-orange"></span>
          </span>
        </a>
        <a href="#astrophotography_page">
          <span className="group text-white transition duration-300 hover:text-light-orange">
            Astrophotography
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-light-orange"></span>
          </span>
        </a>
      </div>
    </nav>
  )
};

export default NormalNavbar;
