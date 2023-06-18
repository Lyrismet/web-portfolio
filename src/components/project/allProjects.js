import React from 'react';
import projectsData from "@/data/projects.json";
import Project from "@/components/project/project";

const AllProjects = () => {
    return (
        <div>
            <h1>Мои проекты</h1>
            <div className="projects">
                {projectsData.map((project, index) => (
                    <Project
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllProjects;
