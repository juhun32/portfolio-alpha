import React from "react";
import "../css/Projects.css";

function Projects({ isDarkMode }) {
  return (
    <section className={'projects ${isDarkMode ? "dark-mode" : ""}'} id="projects">
      <p className="project-title">Projects</p>
      <div className="projects-container">
        <div className="project-item-container">
          <div className="project-item">Project 1</div>
          <div className="project-item">Project 2</div>
          <div className="project-item">Project 3</div>
          <div className="project-item">Project 4</div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
