
import { Icon } from '@iconify/react';

const Project = ({project}) => {

    return (
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
                                    <h6 className='color-white'>{tech}</h6>
                                </div>})}
                            </div>
                        </div>
                        <div className='project-links'>
                            <div className='project-lists flex-center'>
                            {project.links.map((link)=>{
                                return <div className='project-li cursor-btn flex-center'>
                                    <Icon className='icon-btn' icon={link.icon} />
                                    <h6>{link.title}</h6>
                                </div>})}
                            </div>
                        </div>
                    </div>
                 </div>
    );

};

export default Project;