import React from "react";
import details from "../Details";
import Projects from "./Projects";

function ProjectBlock() {
    return (
        <div id="Projects" className="projects">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-list">
                {details.projects.map((project, index) => (
                    <Projects 
                    key={index}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                />
            ))}
            </div>
        </div>
        )}

export default ProjectBlock; 