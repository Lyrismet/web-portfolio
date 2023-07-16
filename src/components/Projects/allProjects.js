import React from 'react';
import projectsData from "@/data/projects.json";
import Project from "@/components/Projects/Project";


const AllProjects = () => {
    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <div id="works" style={{display: "flex"}} className="projects">
                {projectsData.map((project, index) => (
                    <Project
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        story={project.story}
                        badges={project.badges}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllProjects;
