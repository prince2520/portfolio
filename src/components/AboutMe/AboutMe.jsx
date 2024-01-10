import Lottie from "lottie-react";
import { Icon } from '@iconify/react';

import CodingAnimation from "../../assests/animations/Coding.json";


import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="about-me">
            <div className="information flex-center">
                <h3>Hello, I'm</h3>
                <div className="name">PRINCE</div>
                <h2>Software Engineer</h2>
                <div className="download-link flex-center">
                    <button className="button-design cursor-btn">Download Resume</button>
                    <button className="button-design button-hollow-design cursor-btn">Contact Me</button>
                </div>
                <div className="my-socials flex-center">
                    <Icon icon="mdi:linkedin" />
                    <Icon icon="mingcute:youtube-fill" />
                    <Icon icon="mdi:github" />                
                </div>
            </div>
            <div className="coding-animation">
                <Lottie animationData={CodingAnimation} loop={true} />
            </div>
        </div>
    );
};

export default AboutMe;