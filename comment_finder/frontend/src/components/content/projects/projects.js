import React, {useState} from 'react';
import "./projects.css";
import ProjectCard from './projectCard/projectCard';


const Projects = (props) => {

    return(
        <div className="projectsContainer" id="projects">
            <a href="#start">
                <div className='projectsAddon'>
                    Go Back
                </div>
            </a>
            <div className='projectsBox'>
                <div className='paperBg'></div>
                <div className='projectsContent'>
                    <div className='Panel'>
                        <ProjectCard id={"1"}/>
                        <ProjectCard id={"2"}/>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Projects;