import { useState } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import AboutMe from '../../components/AboutMe/AboutMe';

import './Home.css';
import MySkills from '../../components/MySkills/MySkills';
import Projects from '../../components/Projects/Projects';
import Extensions from '../../components/Extensions/Extensions';
import CodingProfiles from '../../components/CodingProfiles/CodingProfiles';

const Home = () => {
    const [dark, isDark] = useState(false);

    return (
        <div className={`home flex-center`}>
            <Navbar/>
            <AboutMe/>
            <MySkills/>
            <Projects/>
            <Extensions/>
            <CodingProfiles/>
        </div>
    );
};

export default Home;