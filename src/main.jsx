import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

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

  return (
    <div>
      <header>
        <h1>
          {firstName} {lastName}
        </h1>
        <p>{jobTitle.toUpperCase()}</p>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home">
          <h2>Hello, I'm {firstName}!</h2>
          <p>{introduction}</p>
          <a href="#projects">View My Projects</a>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>{aboutMe}</p>
        </section>

        <section id="skills">
          <h2>My Skills</h2>
          <ul>
            <li>{skills[0]}</li>
            <li>{skills[1]}</li>
            <li>{skills[2]}</li>
            <li>{skills[3]}</li>
            <li>{skills[4]}</li>
            <li>{skills[5]}</li>
          </ul>
        </section>

        <section id="projects">
          <h2>My Projects</h2>

          <article>
            <h3>{projects[0].name}</h3>
            <p>{projects[0].description}</p>
          </article>

          <article>
            <h3>{projects[1].name}</h3>
            <p>{projects[1].description}</p>
          </article>

          <article>
            <h3>{projects[2].name}</h3>
            <p>{projects[2].description}</p>
          </article>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <p>I'm open to new opportunities and collaborations.</p>
          <a href={`mailto:${email}`}>Send Me an Email</a>
        </section>
      </main>

      <footer>
        <p>
          Copyright 2026 {firstName} {lastName}.
        </p>
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
