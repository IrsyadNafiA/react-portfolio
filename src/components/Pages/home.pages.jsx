import Irsyad from "../Albums/Irsyad.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { skills } from "../../api/Skills";
import CardSkill from "../Utilities/cards.skills.utilities";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div className="w-full h-screen bg-gray-100 flex justify-center" id="home">
      <div className="content w-[1024px] max-w-full flex flex-col justify-center items-center px-4">
        <div className="hero-main w-full gap-2 lg:gap-12 md:gap-12 sm:gap-12 flex flex-col-reverse lg:flex-row">
          <div className="hero-text w-full flex flex-col justify-center text-center lg:text-start gap-2">
            <h1 className="text-3xl lg:text-6xl md:text-6xl font-bold text-gray-900">
              <TypeAnimation
                sequence={[
                  "Web Developer🤞",
                  2000,
                  "Learning Front-End",
                  2000,
                  "Learning Back-End",
                  2000,
                  () => {},
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: "1em" }}
              />
            </h1>
            <p className="text-gray-500" data-aos="fade-right">
              Hi, I am Irsyad Nafi Alif Perdana. A passionate student based in
              Batam, Indonesia. 📍
            </p>
            <div
              className="flex gap-4 justify-center lg:justify-start"
              data-aos="fade-right"
            >
              <a
                href="https://www.linkedin.com/in/irsyad-nafi/"
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
            </div>
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
          className="skills w-full mt-2 flex flex-col md:gap-4 items-center md:flex-row"
          data-aos="fade-up"
        >
          <div className="flex items-center text-xl font-bold lg:border-r-2 border-gray-900 md:pr-4 whitespace-nowrap md:h-full">
            <span>Skills</span>
          </div>

          <div className="flex overflow-hidden w-full max-w-full px-2">
            <Marquee speed={50} gradient={false}>
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="min-w-[80px] sm:min-w-[100px] px-4 py-2"
                >
                  <CardSkill icon={skill.icon} name={skill.name} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
