import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./main.css";

function App() {
  const firstName = "Majd";
  const lastName = "Alhourani";
  const jobTitle = "Junior Web Developer";
  const introduction =
    "I'm a web developer passionate about building modern and user-friendly web applications.";

  const aboutMe =
    "I'm a junior web developer who enjoys learning new technologies, solving problems, and creating useful applications.";

  const email = "majd@example.com";

  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"];

  const projects = [
    {
      name: "Task Manager",
      description: "A web application for managing daily tasks.",
    },
    {
      name: "Book Management",
      description: "An application for creating and managing books.",
    },
    {
      name: "E-Commerce Website",
      description: "An online shopping application.",
    },
  ];

  const currentHour = new Date().getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return (
    <div className="portfolio">
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <h1>
                {firstName} {lastName}
              </h1>
              <p>{jobTitle.toUpperCase()}</p>
            </div>

            <nav className="navigation">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container">
            <div className="hero-content">
              <h2>
                {greeting}, I'm {firstName}!
              </h2>

              <p className="hero-description">{introduction}</p>

              <a className="button" href="#projects">
                View My Projects
              </a>
            </div>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">{aboutMe}</p>
          </div>
        </section>

        <section id="skills" className="skills section">
          <div className="container">
            <h2 className="section-title">My Skills</h2>

            <ul className="skills-list">
              <li className="skill-item">{skills[0]}</li>
              <li className="skill-item">{skills[1]}</li>
              <li className="skill-item">{skills[2]}</li>
              <li className="skill-item">{skills[3]}</li>
              <li className="skill-item">{skills[4]}</li>
              <li className="skill-item">{skills[5]}</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="projects section">
          <div className="container">
            <h2 className="section-title">My Projects</h2>

            <div className="projects-list">
              <article className="project-card">
                <h3>{projects[0].name}</h3>
                <p>{projects[0].description}</p>
              </article>

              <article className="project-card">
                <h3>{projects[1].name}</h3>
                <p>{projects[1].description}</p>
              </article>

              <article className="project-card">
                <h3>{projects[2].name}</h3>
                <p>{projects[2].description}</p>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="container">
            <h2 className="section-title">Contact Me</h2>

            <p className="contact-description">
              I'm open to new opportunities and collaborations.
            </p>

            <form className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="Enter your name"
                  autoFocus
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  className="form-input form-textarea"
                  placeholder="Write your message..."
                  rows="5"
                  maxLength={50}
                />
              </div>

              <button className="button submit-button" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>
            Copyright 2026 {firstName} {lastName}.
          </p>
        </div>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
