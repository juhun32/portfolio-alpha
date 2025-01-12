import React from "react";
import "../css/Projects.css";

import github from "../img/github.png";

function Projects({ isDarkMode }) {
  return (
    <div className={isDarkMode ? "projects-dark-mode" : "projects"}>
      <div className="project-title">
        Projects<div className="horizontal-line"></div>
      </div>
      <div className="projects-container personal">
        <div className="project-item-container">
          <div className="project-item">
            <div className="project-item-img f1">
              <h3 className="project-item-title">
                f1-statistics
                <a href="https://github.com/juhun32/f1-statistics">
                  <img className="contact-img" src={github} alt="github" />
                </a>
              </h3>

              <p>
                Formula 1 Statistics is a comprehensive F1 driver statistics
                system, featuring real-time data retrieval and data
                visualization, driver standings and championship points from
                OpenF1 APIs. Features informative page where one can learn more
                about motor racing and F1.
              </p>
            </div>
          </div>

          <div className="project-item">
            <div className="project-item-img">
              <h3 className="project-item-title">
                project-verstappen
                <a href="https://github.com/juhun32/project-verstappen">
                  <img className="contact-img" src={github} alt="github" />
                </a>
              </h3>

              <p>
                project-verstappen records session telemetry from Assetto Corsa,
                using Shared Memory API. Vision is to applicate imitation
                learning and reinforcement learning using the derived data, and
                make autopilot race driver. Inspired by A2RL.
              </p>
            </div>
          </div>
          <div className="project-item">
            <div className="project-item-img calculator">
              <h3 className="project-item-title">
                iOS calculator clone
                <a href="https://github.com/juhun32/ios-calculator">
                  <img className="contact-img" src={github} alt="github" />
                </a>
              </h3>

              <p>
                IOS calculator clone is a web application, designed to mimic the
                functionality and design of the IOS calculator, which I built
                from my iPhone 13 calculator.
              </p>
            </div>
          </div>

          <div className="project-item">
            <div className="project-item-img jailbreak">
              <h3 className="project-item-title">
                Prison Break!
                <a href="https://github.com/juhun32/Prison-Break">
                  <img className="contact-img" src={github} alt="github" />
                </a>
              </h3>

              <p>
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
