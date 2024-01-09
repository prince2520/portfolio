import AnimeSuper from './../../assests/images/projects/AnimeSuper.png';
import { Icon } from '@iconify/react';

import './Projects.css';


const myProjects = [
    {
        title : 'Animesuper',
        imageUrl : AnimeSuper,
        description : `AnimeSuper is the ultimate destination for anime enthusiasts,
         providing a seamless platform to organize your favorite anime and manga while keeping you updated 
         on the latest trends within the vibrant anime community.😊
        `,
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
        title : 'Animesuper',
        imageUrl : AnimeSuper,
        description : `AnimeSuper is the ultimate destination for anime enthusiasts,
         providing a seamless platform to organize your favorite anime and manga while keeping you updated 
         on the latest trends within the vibrant anime community.😊
        `,
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
        title : 'Animesuper',
        imageUrl : AnimeSuper,
        description : `AnimeSuper is the ultimate destination for anime enthusiasts,
         providing a seamless platform to organize your favorite anime and manga while keeping you updated 
         on the latest trends within the vibrant anime community.😊
        `,
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
        title : 'Animesuper',
        imageUrl : AnimeSuper,
        description : `AnimeSuper is the ultimate destination for anime enthusiasts,
         providing a seamless platform to organize your favorite anime and manga while keeping you updated 
         on the latest trends within the vibrant anime community.😊
        `,
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
    }
];

const Projects = () => {

    return (
        <div className="projects flex-center">
            <h2>PROJECTS</h2>
            {myProjects.map (project =>
                 <div className='project flex-center'>
                    <div className='project-img'>
                        <img src={project.imageUrl}/>
                    </div>
                    <div className='project-details flex-center'>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className='tech-used'>
                            <h5>Tech Used</h5>
                            <div className='tech-lists flex-center'>
                            {project.techUsed.map((tech)=>{
                                return <div className='tech-list flex-center'>
                                    <h6>{tech}</h6>
                                </div>})}
                            </div>
                        </div>
                        <div className='project-links'>
                            <h5>Links</h5>
                            <div className='project-lists flex-center'>
                            {project.links.map((link)=>{
                                return <div className='project-li flex-center'>
                                    <Icon icon={link.icon} />
                                    <h6>{link.title}</h6>
                                </div>})}
                            </div>
                        </div>
                    </div>
                 </div>)}
        </div>
    );
};

export default Projects;