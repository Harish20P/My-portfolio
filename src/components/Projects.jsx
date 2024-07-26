import React from 'react';

const Projects = (props) => {
  return (
    <div className="project">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <ul className="technology-list">
        {props.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;