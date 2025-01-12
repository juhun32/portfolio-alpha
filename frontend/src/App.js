import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";

// images
import linkedin from "./img/linkedin.png";
import github from "./img/github.png";
import moon from "./img/moon.png";
import sun from "./img/sun.png";
// import resume from "./resume.pdf";
import intro4 from "./img/intro4.png";

// components
import Home from "./components/Home";
import Experience from "./components/Experience";
// import Spotify from "./components/Spotify";
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
                alt="my face"
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
                <Link to="https://drive.google.com/file/d/1p-JG7XvSbC2CP2bl5LEyUpj6RYBT_DBR/view?usp=sharing">
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
            <nav className="nav-hamburger">
              <input type="checkbox" id="menu-toggle" />
              <label htmlFor="menu-toggle" className="menu-icon">
                <span className="navicon"></span>
              </label>
              <ul className="menu">
                <div className="menu-grid">
                  <li className="ham-nav-link">
                    <Link to="/experience">Experience</Link>
                  </li>
                  <li className="ham-nav-link">
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li className="ham-nav-link">
                    <Link to="https://drive.google.com/file/d/1p-JG7XvSbC2CP2bl5LEyUpj6RYBT_DBR/view?usp=sharing">
                      Resume
                    </Link>
                  </li>
                  <li className="ham-contact-link">
                    <Link to="https://linkedin.com/in/juhun-park">
                      <img
                        className="contact-img"
                        src={linkedin}
                        alt="linkedin"
                      />
                    </Link>
                  </li>
                  <li className="ham-contact-link">
                    <Link to="https://github.com/juhun32">
                      <img className="contact-img" src={github} alt="github" />
                    </Link>
                  </li>
                  {/* <li className="ham-contact-link">
                    <button className="header-button" onClick={toggleDarkMode}>
                      <img
                        src={isDarkMode ? sun : moon}
                        alt={isDarkMode ? "Sun" : "Moon"}
                        className={isDarkMode ? "sun" : "moon"}
                      />
                    </button>
                  </li> */}
                </div>
              </ul>
            </nav>
          </nav>
        </header>

        <div className={isDarkMode ? "body-dark-mode" : ""}>
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route
              path="/experience"
              element={<Experience isDarkMode={isDarkMode} />}
            />
            <Route
              path="/projects"
              element={<Projects isDarkMode={isDarkMode} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
