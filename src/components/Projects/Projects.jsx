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
        ],
        reverse: false
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
        ],
        reverse: true
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
        ],
        reverse: false
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
        ],
        reverse: true
    }
];

const Projects = () => {

    return (
        <div className="projects">
            <h3>PROJECTS</h3>
            <div className='flex-center projects-container'>
            {myProjects.map (project =>
                 <div className={`flex-center project ${project.reverse ? 'reverse-row' : ''}`}>
                    <div className='project-img'>
                        <img src={project.imageUrl}/>
                    </div>
                    <div className='flex-center project-details'>
                        <h4 style={{alignSelf:'center'}}>{project.title}</h4>
                        <p style={{textAlign:'left'}}>{project.description}</p>
                        <div className='tech-used'>
                            <div className='tech-lists flex-center'>
                            {project.techUsed.map((tech)=>{
                                return <div className='tech-list flex-center'>
                                    <h6>{tech}</h6>
                                </div>})}
                            </div>
                        </div>
                        <div className='project-links'>
                            <div className='project-lists flex-center'>
                            {project.links.map((link)=>{
                                return <div className='project-li cursor-btn flex-center'>
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

export default Projects;