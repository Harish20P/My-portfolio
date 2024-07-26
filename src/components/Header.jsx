import React from "react";

function Header() {
  return (
    <header className="Header">
      <nav className="Header-navbar">
        <ul className="Header-navbar-list">
          <li className="Header-navbar-item"><a className="active" href="#Education">Education</a></li>
          <li className="Header-navbar-item"><a href="#Courses">Courses</a></li>
          <li className="Header-navbar-item"><a href="#Projects">Projects</a></li>
          <li className="Header-navbar-item"><a href="#Skills">Skills</a></li>
          <li className="Header-navbar-item"><a href="#extra">ExtraActivities</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;