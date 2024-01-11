import { Icon } from '@iconify/react';

import FindMyLocation from '../../assests/images/extensions/FindMyLocation.png';

import './Extensions.css';

const myExtensions = [
    {
        title : 'FindMyLocation',
        imageUrl : FindMyLocation,
        description : `Discover Your World with Precision - Find My Location Chrome Extension`,
        techUsed : ['HTML', 'CSS', 'JavaScript', 'React', 'Django', 'SQLite', 'Figma', 'Firebase Storage', 'Redux ToolKit'],
        links : [
            {
                title : 'Website',
                link : '',
                icon: 'mdi:web'
            },
            {
                title : 'Github',
                link : '',
                icon : 'mdi:github'
            },
            {
                title : 'Youtube',
                link : '',
                icon : 'mdi:youtube'
            },
        ]
    },
    {
        title : 'FindMyLocation',
        imageUrl : FindMyLocation,
        description : `Discover Your World with Precision - Find My Location Chrome Extension`,
        techUsed : ['HTML', 'CSS', 'JavaScript', 'React', 'Django', 'SQLite', 'Figma', 'Firebase Storage', 'Redux ToolKit'],
        links : [
            {
                title : 'Website',
                link : '',
                icon: 'mdi:web'
            },
            {
                title : 'Github',
                link : '',
                icon : 'mdi:github'
            },
            {
                title : 'Youtube',
                link : '',
                icon : 'mdi:youtube'
            },
        ]
    },
    {
        title : 'FindMyLocation',
        imageUrl : FindMyLocation,
        description : `Discover Your World with Precision - Find My Location Chrome Extension`,
        techUsed : ['HTML', 'CSS', 'JavaScript', 'React', 'Django', 'SQLite', 'Figma', 'Firebase Storage', 'Redux ToolKit'],
        links : [
            {
                title : 'Website',
                link : '',
                icon: 'mdi:web'
            },
            {
                title : 'Github',
                link : '',
                icon : 'mdi:github'
            },
            {
                title : 'Youtube',
                link : '',
                icon : 'mdi:youtube'
            },
        ]
    },
    {
        title : 'FindMyLocation',
        imageUrl : FindMyLocation,
        description : `Discover Your World with Precision - Find My Location Chrome Extension`,
        techUsed : ['HTML', 'CSS', 'JavaScript', 'React', 'Django', 'SQLite', 'Figma', 'Firebase Storage', 'Redux ToolKit'],
        links : [
            {
                title : 'Website',
                link : '',
                icon: 'mdi:web'
            },
            {
                title : 'Github',
                link : '',
                icon : 'mdi:github'
            },
            {
                title : 'Youtube',
                link : '',
                icon : 'mdi:youtube'
            },
        ]
    },
];


const Extensions = () => {
    
    return (
        <div className="extensions">
            <h3>EXTENSIONS</h3>
            <div className='extensions-container flex-center'>
            {myExtensions.map (extension =>
                 <div className='flex-center extension'>
                    <div className='extension-img'>
                        <img src={extension.imageUrl}/>
                    </div>
                    <div className='extension-details flex-center'>
                        <h4>{extension.title}</h4>
                        <p>{extension.description}</p>
                        <div className='tech-used'>
                            <div className='tech-lists flex-center'>
                            {extension.techUsed.map((tech)=>{
                                return <div className='tech-list flex-center'>
                                    <h6>{tech}</h6>
                                </div>})}
                            </div>
                        </div>
                        <div className='extension-links'>
                            <div className='extension-lists flex-center'>
                            {extension.links.map((link)=>{
                                return <div className='cursor-btn flex-center extension-li '>
                                    <Icon icon={link.icon} />
                                    <h6>{link.title}</h6>
                                </div>})}
                            </div>
                        </div>
                    </div>
                 </div>)}
            </div>
        </div>
    );
};

export default Extensions;