import { useState } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import AboutMe from '../../components/AboutMe/AboutMe';
import MySkills from '../../components/MySkills/MySkills';
import Projects from '../../components/Projects/Projects';
import Extensions from '../../components/Extensions/Extensions';
import CodingProfiles from '../../components/CodingProfiles/CodingProfiles';
import Educations from '../../components/Educations/Educations';
import ContactMe from '../../components/ContactMe/ContactMe';

import './Home.css';


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
            <Educations/>
            <ContactMe/>
        </div>
    );
};

export default Home;