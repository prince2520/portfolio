import { myProjects } from '../../data';
import Project from './Project/Project';

import './Projects.css';

const Projects = () => {
    return (
        <div className="projects">
            <h3>PROJECTS</h3>
            <div className='flex-center projects-container'>
            {myProjects.map (project => <Project project={project}/>)}
            </div>
        </div>
    );
};

export default Projects;