import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";

// images
import linkedin from "./img/linkedin.png";
import github from "./img/github.png";
import moon from "./img/moon.png";
import sun from "./img/sun.png";
import resume from "./resume.pdf";
import intro4 from "./img/intro4.png";

// libraries
import "aos/dist/aos.css";

// components
import Home from "./components/Home";
import Experience from "./components/Experience";
import Spotify from "./components/Spotify";
import Projects from "./components/Projects";

function App() {
  // dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    console.log("clicked");
  };

  return (
    <Router>
      <div className="App">
        <header className={isDarkMode ? "header-dark-mode" : ""}>
          <nav className="nav-contact">
            <ul className="nav-title">
              <img
                className="nav-img"
                src={intro4}
                alt="Link picture of yourself"
                class="nav-img"
              />
              <Link to="/">Juhun Park</Link>
            </ul>
            <ul>
              <li className="nav-link">
                <Link to="/experience">Experience</Link>
              </li>
              <li className="nav-link">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="nav-link">
                <Link to={resume} target="_blank" rel="noreferrer">
                  Resume
                </Link>
              </li>
              <li className="contact-link">
                <Link to="https://linkedin.com/in/juhun-park">
                  <img className="contact-img" src={linkedin} alt="linkedin" />
                </Link>
              </li>
              <li className="contact-link">
                <Link to="https://github.com/juhun32">
                  <img className="contact-img" src={github} alt="github" />
                </Link>
              </li>
              <li className="contact-link">
                <button className="header-button" onClick={toggleDarkMode}>
                  <img
                    src={isDarkMode ? sun : moon}
                    alt={isDarkMode ? "Sun" : "Moon"}
                    className={isDarkMode ? "sun" : "moon"}
                  />
                </button>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
