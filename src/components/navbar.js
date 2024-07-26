import React, { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY;

    sections.forEach((section) => {
      if (
        scrollPosition >= section.offsetTop &&
        scrollPosition < section.offsetTop + section.offsetHeight
      ) {
        setActiveSection(section.getAttribute("id"));
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav>
      <ul>
        <li>
          <a href="#home" className={activeSection === "home" ? "active" : ""}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" className={activeSection === "about" ? "active" : ""}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" className={activeSection === "projects" ? "active" : ""}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className={activeSection === "contact" ? "active" : ""}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;