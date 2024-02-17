import { Icon } from "@iconify/react";

import DarkLightSwitcher from "./DarkLightSwitcher/DarkLightSwitcher";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="cursor-btn navbar-icon">
        <Icon icon="ph:code-fill" />
        <h4>PRINCE</h4>
      </div>

      <div className="flex-center navbar-right">
        {/* <div className='flex-center navbar-routes'>
                    <h5 className='route cursor-btn'>Home</h5>
                    <h5 className='route  cursor-btn'>Blogs</h5>
                </div> */}
        <DarkLightSwitcher />
        {/* <div className='flex-center cursor-btn navbar-menu'>
                    <Icon icon="ic:round-menu" fontSize={"2rem"}/>
                </div> */}
      </div>
    </div>
  );
};

export default Navbar;
