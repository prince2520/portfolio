import Lottie from "lottie-react";
import { Icon } from '@iconify/react';

import CodingAnimation from "../../assests/animations/Coding.json";

import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="flex-center information">
                <h4>Hello, I'm</h4>
                <h1>PRINCE</h1>
                <h3>Software Engineer</h3>

                <div className="flex-center download-link">
                    <button className="button-design cursor-btn">
                        <h5 className="color-white">Download Resume</h5>
                    </button>
                    <button className="button-design button-hollow-design contact-me-btn cursor-btn">
                        <h5 className="contact-me-btn-heading">Contact Me</h5>
                    </button>
                </div>

                <div className="flex-center my-socials">
                    {["mdi:linkedin", "mingcute:youtube-fill", "mdi:github"].map(icon => 
                            <Icon icon={icon} className="icon-btn cursor-btn"/>
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