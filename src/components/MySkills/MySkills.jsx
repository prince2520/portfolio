import { Icon } from '@iconify/react';

import './MySkills.css';

const technologies = [
    {
        name : 'C++',
        logo : 'logos:c-plusplus'
    },
    {
        name : 'HTML',
        logo : 'logos:html-5'
    },
    {
        name : 'CSS',
        logo : 'vscode-icons:file-type-css'
    },
    {
        name : 'JavaScript',
        logo : 'logos:javascript'
    },
    {
        name : 'TypeScript',
        logo : 'devicon:typescript'
    },
    {
        name : 'React',
        logo : 'skill-icons:react-dark'
    },
    {
        name : 'Node.js',
        logo : 'vscode-icons:file-type-node'
    },
    {
        name : 'MongoDB',
        logo : 'devicon:mongodb-wordmark'
    },
    {
        name : 'Figma',
        logo : 'logos:figma'
    },
];

const MySkills = () => {
    return (
        <div className="my-skills">
            <h2>MY SKILLS</h2>
            <div className='my-technologies flex-center'>
            {technologies
            .map(
                technology =>
                <div className='technology flex-center'>
                    <Icon icon={technology.logo} fontSize={"1.25rem"}/>
                    <h3>{technology.name}</h3>
                </div>)}

            </div>
            
        </div>
    );
};

export default MySkills;