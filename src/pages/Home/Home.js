import Navbar from "../../components/Navbar/Navbar";
import AboutMe from "../../components/AboutMe/AboutMe";
import MySkills from "../../components/MySkills/MySkills";
import Projects from "../../components/Projects/Projects";
import ContactMe from "../../components/ContactMe/ContactMe";
import Educations from "../../components/Educations/Educations";
import CodingProfiles from "../../components/CodingProfiles/CodingProfiles";

import "./Home.css";

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
      <h6 style={{ margin: "1.5rem 0 1rem" }}>
        © 2024 Prince. All rights reserved.
      </h6>
    </div>
  );
};

export default Home;
