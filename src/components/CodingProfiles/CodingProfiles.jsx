import { Icon } from '@iconify/react';
import { codingProfiles } from '../../data';

import './CodingProfiles.css';

const CodingProfiles = () => {
    
    return (
        <div className="coding-profiles">
            <h3>CODING PROFILES</h3>
            <div className='flex-center coding-profiles-lists'>
                 {
                 codingProfiles.map(profile =>
                  <div className='coding-profile-li cursor-btn flex-center'>
                    <Icon icon={profile.icon} fontSize={"1.1rem"}/>
                    <h5>{profile.title}</h5>
                  </div>)
                 }
            </div>
        </div>
    );
};

export default CodingProfiles;