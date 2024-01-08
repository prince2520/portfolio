import { useState } from 'react';
import { Icon } from '@iconify/react';

import './DarkLightSwitcher.css';

const DarkLightSwitcher = () => {
    const [dark, isDark] = useState(false);

    return (
        <div 
        className='dark-light-switcher flex-center cursor-btn' 
        onClick={()=>isDark(prevState => !prevState)}>
            <Icon
             fontSize={`1.25rem`}
              icon={ dark ? `material-symbols:light-mode-rounded` : `icon-park-outline:dark-mode`}/>
            <h4>{dark ? `Dark` : `Light`}</h4>
        </div>
    );
};

export default DarkLightSwitcher;