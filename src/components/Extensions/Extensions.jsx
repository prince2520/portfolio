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
        <div className="extensions flex">
            <h2>EXTENSIONS</h2>
            <div className='extensions-container flex-center'>
            {myExtensions.map (extension =>
                 <div className='extension flex-center'>
                    <div className='extension-img'>
                        <img src={extension.imageUrl}/>
                    </div>
                    <div className='extension-details flex-center'>
                        <h3>{extension.title}</h3>
                        <p>{extension.description}</p>
                        <div className='tech-used'>
                            <h5>Tech Used</h5>
                            <div className='tech-lists flex-center'>
                            {extension.techUsed.map((tech)=>{
                                return <div className='tech-list flex-center'>
                                    <h6>{tech}</h6>
                                </div>})}
                            </div>
                        </div>
                        <div className='extension-links'>
                            <h5>Links</h5>
                            <div className='extension-lists flex-center'>
                            {extension.links.map((link)=>{
                                return <div className='extension-li flex-center'>
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