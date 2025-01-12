import React from "react";
import gimpo from "../img/gimpo.jpg";
import gmu from "../img/gmu.png";
import codepath from "../img/codepath.png";
import himedia from "../img/himedia.png";
import english from "../img/english.png";
import insightlegi from "../img/insightlegi.png";
import "../css/Experience.css";

const Experience = ({ isDarkMode }) => {
  return (
    <div className={isDarkMode ? "experience-dark-mode" : "experience"}>
      <div className="experience-title">
        Experience<div className="horizontal-line"></div>
      </div>

      <div className="experience-grid">
        <div className="experience-left-column experience-list">
          <div className="experience-jobtitle">
            <img src={insightlegi} alt="insightlegi logo" />
            <div>
              <p className="job-title">Backend Developer</p>
              <p className="date">December 2024 – Present</p>
            </div>
          </div>
        </div>

        <div className="experience-right-column experience-detail">
          <p className="event-title">Eduverse</p>
          <p className="event-desc">
            Implemented an ML-based recommendation algorithm using Python and
            Django suggesting user connections, personalized posts. Developed
            search endpoint using Django ORM, PostgreSQL to query profiles and
            posts with filters for names, skills, post types. Collaborated on
            API testing, debugging using Postman and Git, ensuring profile
            post-related functionality achieved 98% accuracy. Implemented
            backend features, search features with seamless React integration
            for frontend functionality, deployed using Firebase. Worked as a
            team of 6 to develop and deploy scalable backend services, ensuring
            high availability and performance.
          </p>
        </div>

        <div className="experience-left-column experience-list">
          <div className="experience-jobtitle">
            <img src={english} alt="english logo" />
            <div>
              <p className="job-title">English Instructor</p>
              <p className="date">July 2024 – August 2024</p>
            </div>
          </div>
        </div>

        <div className="experience-right-column experience-detail">
          <p className="event-title">21Cen. English Academy</p>
          <p className="event-desc">
            Provided one-on-one tutoring sessions to 14 high school students.
            Developed 10 customized lesson plans by individually addressing each
            student's specific needs and learning objectives.
          </p>
        </div>

        <div className="experience-left-column experience-list">
          <div className="experience-jobtitle">
            <img src={himedia} alt="himedia logo" />
            <div>
              <p className="job-title">Apprentice Backend Developer</p>
              <p className="date">January 2023 – April 2023</p>
            </div>
          </div>
        </div>

        <div className="experience-right-column experience-detail">
          <p className="event-title">
            Himedia Academy Backend Developer Apprenticeship
          </p>
          <p className="event-desc">
            Intensive Backend development training course consisted of 10 chosen
            participants. Developed foundational skills in Java development,
            object-oriented programming, data structures, and Oracle DBMS.
            Managed team projects by utilizing Git and Notion to enhance
            collaboration and track progress.
          </p>
        </div>

        <div className="experience-left-column experience-list">
          <div className="experience-jobtitle">
            <img src={gimpo} alt="gimpo logo" />
            <div>
              <p className="job-title">Student Scientific Researcher</p>
              <p className="date">March 2021 – November 2021</p>
            </div>
          </div>
        </div>

        <div className="experience-right-column experience-detail">
          <p className="event-title">
            Gimpo Highschool Science Research Program
          </p>
          <p className="event-desc">
            Developed and tested a Python AI-powered motion detection program
            using MediaPipe model. Authored a scientific research paper
            publishing the project methodology, results, and implications.
          </p>
        </div>

        <div className="experience-middle-column">
          <div className="vertical-line"></div>
        </div>
      </div>

      <div className="experience-title">
        Activities<div className="horizontal-line"></div>
      </div>
      <div className="experience-grid">
        <div className="experience-left-column experience-list">
          <div className="experience-jobtitle">
            <img src={insightlegi} alt="insightlegi logo" />
            <div>
              <p className="job-title">Web Developer Volunteer</p>
              <p className="date"> January 2025</p>
            </div>
          </div>
        </div>

        <div className="experience-right-column experience-detail">
          <p className="event-title">InsightLegi DataStorm ’25</p>
          <p className="event-desc">
            Developed a static website using React and Bootstrap to promote
            Hackathon 2025, including event details and registration process.
            Deployed the project on Firebase Hosting, enabling fast and scalable
            access.
          </p>
        </div>

        <div className="experience-left-column experience-list">
          <div className="experience-jobtitle">
            <img src={gmu} alt="gmu logo" />
            <div>
              <p className="job-title">Technical Support Volunteer</p>
              <p className="date">November 2024</p>
            </div>
          </div>
        </div>

        <div className="experience-right-column experience-detail">
          <p className="event-title">
            George Mason University InsightLegi DataStorm 2024
          </p>
          <p className="event-desc">
            Managed logistics, participant data and provided technical support
            for participants and mentors for a 36-hour hackathon
            event.Contributed to social media promotion and event planning,
            resulting in 1000+ views.
          </p>
        </div>

        <div className="experience-left-column experience-list">
          <div className="experience-jobtitle">
            <img src={gmu} alt="gmu logo" />
            <div>
              <p className="job-title">Participant</p>
              <p className="date">October 2024</p>
            </div>
          </div>
        </div>

        <div className="experience-right-column experience-detail">
          <p className="event-title">
            George Mason University PatriotHacks 2024
          </p>
          <p className="event-desc">
            Participated in a 36-hour hackathon event, collaborated with 3 team
            members to develop a React web application that provides information
            about government spending of tax revenue on incarceration, and
            solutions to reduce spending.
          </p>
        </div>

        <div className="experience-left-column experience-list">
          <div className="experience-jobtitle">
            <img src={codepath} alt="codepath logo" />
            <div>
              <p className="job-title">Student</p>
              <p className="date">May 2024 – August 2024</p>
            </div>
          </div>
        </div>

        <div className="experience-right-column experience-detail">
          <p className="event-title">
            CodePath Technical Interview Prep Course [TIP102 Intermediate]
          </p>
          <p className="event-desc">
            Improved problem-solving skills and understanding of data structures
            and algorithms. Enhanced soft skills in communication and analytical
            thinking by collaborating with 5 team members.
          </p>
        </div>

        <div className="experience-left-column experience-list">
          <div className="experience-jobtitle">
            <img src={gimpo} alt="gimpo logo" />
            <div>
              <p className="job-title">Club President</p>
              <p className="date">August 2020 – March 2022</p>
            </div>
          </div>
        </div>

        <div className="experience-right-column experience-detail">
          <p className="event-title">
            Gimpo Highschool Software Developer Student Club
          </p>
          <p className="event-desc">
            Managed 36 club members ensuring smooth progress of their personal
            projects. Organized two successful project demonstration event for 5
            club members. Invited a published author in artificial intelligence
            for a Q&A session with club members.
          </p>
        </div>

        <div className="experience-middle-column">
          <div className="vertical-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
