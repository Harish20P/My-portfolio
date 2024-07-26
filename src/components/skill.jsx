import React from "react";

function Skills ({skills}) {
    return (
        <div className="skills-grid">
        {skills.map((skillSet, index) => (
          <div className="skill-card" key={index}>
            <h3>{skillSet.category}</h3>
            <ul>
              {skillSet.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  
  export default Skills;