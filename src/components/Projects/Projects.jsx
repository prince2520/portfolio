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
                link : ''
            },
            {
                title : 'Github',
                link : ''
            },
            {
                title : 'Youtube',
                link : ''
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
                    <div className='project-details'>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <div className='tech-used'>
                            <h4>Tech Used</h4>
                            <div className='tech-links flex-center'>
                            {project.links.map((link)=>{
                                return <div className='projects-link flex-center'>
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