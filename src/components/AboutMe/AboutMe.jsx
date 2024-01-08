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