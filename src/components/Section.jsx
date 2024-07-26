import React from "react";
import image from "../images/img.png";

function Sections(props) {
    return (
      <section id="About" className="about-section">
        <div className="left">
          <h2>About Me</h2>
          <p>
            Hello! I'm {props.name}
          </p>
          <p>
            {props.degree} student specializing in {props.domain}.
          </p>
          <p>
            I am passionate about leveraging technology to solve complex problems and create innovative solutions.
          </p>
        </div>
        <div className="right">
          <img src={image} alt = "my image" />  
        </ div>
      </section>
    );
  }

  export default Sections;