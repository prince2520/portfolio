import { Icon } from '@iconify/react';
import DarkLightSwitcher from './DarkLightSwitcher/DarkLightSwitcher';

import './Navbar.css';

const Navbar = () => {

    return (
        <div className="navbar">
            <div className='navbar-icon'>
                <Icon icon="ph:code-fill" fontSize={'2.5rem'}/>
                <div className='name'>PRINCE</div>
            </div>
            <div className='navbar-routes flex-center'>
                <h4 className='route'>Home</h4>
                <h4 className='route'>Blogs</h4>
                <DarkLightSwitcher/>
            </div>
        </div>
    );
};

export default Navbar;