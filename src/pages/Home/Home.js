import Navbar from "../../components/Navbar/Navbar";
import AboutMe from "../../components/AboutMe/AboutMe";
import MySkills from "../../components/MySkills/MySkills";
import Projects from "../../components/Projects/Projects";
import ContactMe from "../../components/ContactMe/ContactMe";
import Educations from "../../components/Educations/Educations";
import CodingProfiles from "../../components/CodingProfiles/CodingProfiles";

import "./Home.css";
import { mySocials } from "../../data";
import { Icon } from "@iconify/react/dist/iconify.js";

const Home = () => {
  return (
    <div className={`flex-center home`}>
      <Navbar />
      <AboutMe />
      <MySkills />
      <Projects />
      <CodingProfiles />
      <Educations />
      <ContactMe />
      <h6
        className="flex-center home__footer"
        style={{ margin: "1.5rem 0 1rem" }}
      >
        <div className="flex-center home__footer__socials">
          {mySocials.map((social) => (
            <a href={social.link} target="_blank">
              <Icon fontSize={"1.1rem"} icon={social.icon} className="icon-btn cursor-btn" />
            </a>
          ))}
        </div>
        <p>© 2024 Prince. All rights reserved.</p>
      </h6>
    </div>
  );
};

export default Home;
