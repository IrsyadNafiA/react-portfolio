import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
// import {
//   AiOutlineHome,
//   AiOutlineUser,
//   AiOutlineProject,
//   AiOutlineMail,
// } from "react-icons/ai";
import NavbarLink from "../Utilities/navbar.link.utilities";

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const links = ["home", "about", "project", "contact"];

  return (
    <nav
      className="absolute z-50 w-full bg-white drop-shadow-md"
      data-aos="fade-down"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="w-full flex justify-between items-center mx-auto py-3 px-8 md:px-12">
        <a href="/" className="font-bold text-2xl text-gray-900">
          IRSYAD<span className="text-blue-600">NAFI</span>
        </a>
        <div className="block md:hidden p-2 hover:bg-gray-600/10 rounded-full">
          <HiMenuAlt3 size={30} onClick={handleNav} />
        </div>
        <div
          className={`w-full ${
            nav ? "block" : "hidden"
          } absolute left-0 top-16 md:w-auto md:block md:static items-center justify-between`}
          id="navbar-sticky"
        >
          <ul className="w-full bg-white flex flex-col px-6 py-4 md:flex-row md:space-x-8 md:p-4 font-medium text-lg">
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
