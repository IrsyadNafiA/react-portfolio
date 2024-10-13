// import React from "react";
import Irsyad from "../Albums/Irsyad.jpg";
import Html from "../Albums/html.png";
import Css from "../Albums/css.png";
import Js from "../Albums/javascript.png";
import Php from "../Albums/php.png";
import logoReact from "../Albums/react.png";
import Tailwind from "../Albums/tailwind.png";
import Bootstrap from "../Albums/bootstrap.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="w-full h-screen bg-gray-100" id="home">
      <div className="content max-w-[1024px] m-auto h-screen w-full flex flex-col justify-center lg:items-start items-center">
        <div className="m-auto flex flex-col gap-4">
          <div className="hero-main gap-2 lg:gap-12 md:gap-12 sm:gap-12 flex flex-col-reverse lg:flex-row m-4">
            <div className="hero-text text-center lg:text-start">
              <h1 className="text-3xl lg:text-6xl md:text-6xl font-bold text-gray-900">
                <TypeAnimation
                  sequence={[
                    "Web Developer🤞", // Types '#anyoneanything'
                    2000, // Waits 2s
                    "Learning Front-End Dev", // Deletes '#anyoneanything' and types '#anyonecancode'
                    2000, // Waits 2s
                    "Learning Back-End Dev", // Types 'Three' without deleting 'Two'
                    2000,
                    () => {
                      // console.log('Done typing!'); // Place optional callbacks anywhere in the array
                    },
                  ]}
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: "1em" }}
                />
              </h1>
              <p className="text-gray-500 my-8" data-aos="fade-right">
                Hi, I am Irsyad Nafi Alif Perdana. A passionate student based in
                Batam, Indonesia. 📍
              </p>
              <span
                className="flex gap-4 justify-center lg:justify-start"
                data-aos="fade-right"
              >
                <a
                  href="https://www.linkedin.com/in/irsyad-nafi-87097b259/"
                  target="blank"
                  className="text-gray-900 hover:text-blue-700"
                >
                  <FaLinkedin size={32} />
                </a>
                <a
                  href="https://github.com/IrsyadNafiA"
                  target="blank"
                  className="text-gray-900 hover:text-blue-700"
                >
                  <FaGithub size={32} />
                </a>
              </span>
            </div>
            <div className="hero-img flex justify-center mt-20 lg:mt-0 md:mt-0 sm:mt-0 mb-2">
              <img
                className="rounded-full h-64 lg:h-96 sm:h-80 max-w-sm hover:drop-shadow-xl"
                src={Irsyad}
                alt=""
                data-aos="fade-left"
              />
            </div>
          </div>
          <div
            className="skills flex flex-col gap-4 items-center lg:flex-row lg:mt-8"
            data-aos="fade-up"
          >
            <h3 className="text-xl border-0 font-bold lg:border-r-2 border-gray-900 pr-4">
              My Skills
            </h3>
            <div className="logos flex m-2">
              <div className="flex flex-wrap justify-center gap-3 lg:gap-6">
                <img src={Html} alt="" />
                <img src={Css} alt="" />
                <img src={Js} alt="" />
                <img src={Php} alt="" />
                <img src={logoReact} alt="" width={48} />
                <img src={Tailwind} alt="" />
                <img src={Bootstrap} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
