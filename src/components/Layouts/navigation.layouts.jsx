import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import NavbarLink from "../Utilities/navbar.link.utilities";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Navigation = () => {
  const isTab = useMediaQuery({ query: "(max-width: 768px)" });
  const [nav, setNav] = useState(isTab ? false : true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const links = ["home", "about", "project", "contact"];

  useEffect(() => {
    if (isTab) {
      setNav(false); //mobile
    } else {
      setNav(true); //desktop
    }

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener ketika komponen unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTab]);

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
        onClick={() => setNav(false)}
      ></div>
      <div className="w-full flex justify-between items-center mx-auto py-4 px-8 md:px-12">
        <a href="/" className="font-bold text-2xl text-gray-900">
          IRSYAD<span className="text-blue-600">NAFI</span>
        </a>
        <motion.div
          animate={{ rotate: nav ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="block md:hidden hover:bg-gray-600/10 rounded-full p-2"
        >
          <HiMenuAlt3 size={30} onClick={() => setNav(!nav)} />
        </motion.div>
        <AnimatePresence>
          {nav && (
            <motion.div
              key="menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`w-full absolute left-0 top-16 md:w-auto md:block md:static items-center justify-between`}
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
