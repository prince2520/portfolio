import Lottie from "lottie-react";
import { Icon } from "@iconify/react";
import { mySocials } from "../../data";

import CodingAnimation from "../../assests/animations/Coding.json";

import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="flex-center about-me">
      <div className="flex-center information">
        <h4>Hello, I'm</h4>
        <h1>PRINCE</h1>
        <h3 style={{ textWrap: "nowrap" }}>Software Developer</h3>

        <div className="flex-center download-link">
          <button className="button-design cursor-btn">
            <h5 className="color-white">Download Resume</h5>
          </button>
          <button className="button-design button-hollow-design contact-me-btn cursor-btn">
            <h5 className="contact-me-btn-heading">Contact Me</h5>
          </button>
        </div>
        <div className="flex-center my-socials">
          {mySocials.map(
            (social) => (
              <a href={social.link} target="_blank" ><Icon icon={social.icon} className="icon-btn cursor-btn" /></a>
            )
          )}
        </div>
      </div>

      <div className="coding-animation">
        <Lottie animationData={CodingAnimation} loop={true} />
      </div>
    </div>
  );
};

export default AboutMe;
