import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import NavbarLink from "../Utilities/navbar.link.utilities";
import { useEffect } from "react";

const Navigation = () => {
  const [nav, setNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const links = ["home", "about", "project", "contact"];

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener ketika komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        scrollPosition > 30
          ? "drop-shadow-md fixed bg-white/50 backdrop-blur-sm"
          : "absolute bg-white"
      } md:fixed z-[9999] w-full`}
    >
      <div
        className={`md:hidden inset-0 absolute h-screen bg-transparent ${
          nav ? "block" : "hidden"
        }`}
        onClick={handleNav}
      ></div>
      <div className="w-full flex justify-between items-center mx-auto py-4 px-8 md:px-12">
        <a href="/" className="font-bold text-2xl text-gray-900">
          IRSYAD<span className="text-blue-600">NAFI</span>
        </a>
        <div className="block md:hidden hover:bg-gray-600/10 rounded-full">
          <HiMenuAlt3 size={30} onClick={handleNav} />
        </div>
        <div
          className={`w-full ${
            nav ? "block" : "hidden"
          } absolute left-0 top-16 md:w-auto md:block md:static items-center justify-between`}
          id="navbar-sticky"
        >
          <ul
            className={`w-full z-[9999] ${
              scrollPosition > 30
                ? "bg-white/80 bg-blur-md md:bg-transparent"
                : "bg-white"
            } flex flex-col px-6 py-4 md:flex-row md:space-x-8 md:p-4 font-medium text-lg`}
          >
            {links.map((link, index) => (
              <li key={index}>
                <NavbarLink href={link} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
