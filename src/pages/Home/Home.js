import { useState } from 'react';

import './Home.css';

import Navbar from '../../components/Navbar/Navbar';
import AboutMe from '../../components/AboutMe/AboutMe';
import MySkills from '../../components/MySkills/MySkills';
import Projects from '../../components/Projects/Projects';
import Extensions from '../../components/Extensions/Extensions';
import CodingProfiles from '../../components/CodingProfiles/CodingProfiles';
import Educations from '../../components/Educations/Educations';
import ContactMe from '../../components/ContactMe/ContactMe';

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
            <h5 style={{margin:'1.5rem 0 1rem'}}>© 2023 Prince. All rights reserved.</h5>
        </div>
    );
};

export default Home;