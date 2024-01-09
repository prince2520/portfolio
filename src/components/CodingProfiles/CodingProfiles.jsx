import { Icon } from '@iconify/react';

import './CodingProfiles.css';

const profiles = [
    {
        title: 'CodeChef',
        icon: 'simple-icons:codechef',
        link: ''
    },
    {
        title: 'CodeForces',
        icon: 'simple-icons:codeforces',
        link: ''
    },
    {
        title: 'LeetCode',
        icon: 'simple-icons:leetcode',
        link: ''
    },
    {
        title: 'GeeksForGeeks',
        icon: 'simple-icons:geeksforgeeks',
        link: ''
    }
];

const CodingProfiles = () => {
    return (
        <div className="coding-profiles">
            <h2>Coding Profiles</h2>
            <div className='flex-center coding-profiles-lists'>
                 {
                 profiles.map(profile =>
                  <div className='coding-profile-li flex-center'>
                    <Icon icon={profile.icon} fontSize={"1.1rem"}/>
                    <h5>{profile.title}</h5>
                  </div>)
                 }
            </div>
            

        </div>
    );
};

export default CodingProfiles;