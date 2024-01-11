import { Icon } from '@iconify/react';
import DarkLightSwitcher from './DarkLightSwitcher/DarkLightSwitcher';

import './Navbar.css';

const Navbar = () => {

    return (
        <div className="navbar">
            <div className='navbar-icon'>
                <Icon icon="ph:code-fill"/>
                <h4>PRINCE</h4>
            </div>
            <div className='flex-center navbar-routes'>
                <h5 className='route cursor-btn'>Home</h5>
                <h5 className='route  cursor-btn'>Blogs</h5>
                <DarkLightSwitcher/>
            </div>
        </div>
    );
};

export default Navbar;