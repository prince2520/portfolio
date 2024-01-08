import { useState } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import AboutMe from '../../components/AboutMe/AboutMe';

import './Home.css';
import MySkills from '../../components/MySkills/MySkills';
import Projects from '../../components/Projects/Projects';

const Home = () => {
    const [dark, isDark] = useState(false);

    return (
        <div className={`home flex-center`}>
            <Navbar/>
            <AboutMe/>
            <MySkills/>
            <Projects/>
        </div>
    );
};

export default Home;