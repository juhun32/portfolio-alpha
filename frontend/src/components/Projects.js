import React from "react";
import "../css/Projects.css";

function Projects({ isDarkMode }) {
  return (
    <div className={isDarkMode ? "projects-dark-mode" : "projects"}>
      <div className="project-title">
        <p>
          Personal Projects<div className="horizontal-line"></div>
        </p>
      </div>
      <div className="projects-container personal">
        <div className="project-item-container">
          <div className="project-item">
            <div className="project-item-img f1">
              <p className="project-item-title">Formula 1 Statistics</p>
              <p>
                Formula 1 Statistics is a React web application, designed to
                visualize Formula 1 telemetry datas. The app delivers real-time
                updates of races, numbers, and educational content about the
                sport.
              </p>
            </div>
          </div>

          <div className="project-item">
            <div className="project-item-img calculator">
              <p className="project-item-title">IOS calculator clone</p>
              <p>
                IOS calculator clone is a web application, designed to mimic the
                functionality and design of the IOS calculator, which I built
                from my iPhone 13 calculator.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="project-title">
        <p>
          Hackathon Projects<div className="horizontal-line"></div>
        </p>
      </div>
      <div className="projects-container hackathon">
        <div className="project-item-container">
          <div className="project-item">
            <div className="project-item-img jailbreak">
              <p className="project-item-title">Prison Break!</p>
              <p>
                {" "}
                Prison Break! is a React web application, designed to provide
                information about government spending of tax revenue on
                incarceration, and solutions to reduce spending.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
