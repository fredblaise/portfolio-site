import React from 'react';
import projects from '../data/projects';
import ProjectItem from '../components/ProjectItem';
import Title from '../components/Title';

function Projects() {
   return (
      <div className="flex flex-col">
         <Title>Projects</Title>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, i) => (
               <ProjectItem
                  key={i}
                  imgUrl={project.imgUrl}
                  title={project.title}
                  stack={project.stack}
                  link={project.link}
                  details={project.details}
               />
            ))}
         </div>
      </div>
   )
}

export default Projects;