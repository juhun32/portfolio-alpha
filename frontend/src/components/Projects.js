import React from "react";
import "../css/Projects.css";

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
              <p className="project-item-title">f1-statistics</p>
              <a href="https://github.com/juhun32/f1-statistics">github</a>
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
              <p className="project-item-title">project-verstappen</p>
              <a href="https://github.com/juhun32/project-verstappen">github</a>
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
              <p className="project-item-title">iOS calculator clone</p>
              <a href="https://github.com/juhun32/ios-calculator">github</a>
              <p>
                IOS calculator clone is a web application, designed to mimic the
                functionality and design of the IOS calculator, which I built
                from my iPhone 13 calculator.
              </p>
            </div>
          </div>

          <div className="project-item">
            <div className="project-item-img jailbreak">
              <p className="project-item-title">Prison Break!</p>
              <a href="https://github.com/juhun32/Prison-Break">github</a>
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
