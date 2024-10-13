import Aboutimg from "../Albums/about.jpg";
import { HiOutlineDownload } from "react-icons/hi";

const About = () => {
  return (
    <div className="w-full h-screen top-0 left-0 bg-white" id="about">
      <div className="content max-w-[920px] m-auto h-screen w-full flex flex-col justify-center items-center lg:items-start">
        <div className="m-auto">
          <div className="hero-main flex gap-4 lg:gap-8 md:gap-8 sm:gap-8 flex-col items-center lg:flex-row m-4 lg:items-start">
            <div className="hero-img lg:mr-8">
              <img
                className="rounded-full h-64 lg:h-96 sm:h-80 max-w-sm"
                src={Aboutimg}
                alt=""
              />
            </div>
            <div className="hero-text text-center lg:text-start">
              <h1 className="text-3xl font-bold text-blue-700 mb-4">
                ABOUT ME
              </h1>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                A Junior Web Developer
              </h1>
              <p className="text-gray-500 mb-4">
                Currently student at Batam State Polytechnic majoring in
                Informatics Engineering, skilled in Web Development like UI/UX
                Design, Front-End Web Development, Back-End Web Development and
                Project Management Experienced by engaging in Project Based
                Learning to build a website with HTML, CSS, PHP, JS and also
                skilled with public speaking, problem solving and easily adapt
                to the surrounding environment and build good relationships with
                new individu.
              </p>
              <span className="flex justify-center lg:justify-start gap-4">
                <a
                  href="https://drive.google.com/file/d/1z2o5xj_Zms1qrfbJUrnMkNET8hzBx1Lp/view?usp=drive_link"
                  target="blank"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-5 py-2.5 text-center mr-2 mb-2"
                  data-aos="fade-up"
                >
                  <span className="flex gap-2 items-center">
                    <HiOutlineDownload size={24} />
                    Download My CV
                  </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
