import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div>
      <header>
        <h1>Majd Alhourani</h1>
        <p>Junior Web Developer</p>

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
          <h2>Hello, I'm Majd!</h2>
          <p>
            I'm a web developer passionate about building modern and
            user-friendly web applications.
          </p>
          <a href="#projects">View My Projects</a>
        </section>

        <section id="about">
          <h2>About Me</h2>
          <p>
            I'm a junior web developer who enjoys learning new technologies,
            solving problems, and creating useful applications.
          </p>
        </section>

        <section id="skills">
          <h2>My Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Git</li>
          </ul>
        </section>

        <section id="projects">
          <h2>My Projects</h2>

          <article>
            <h3>Task Manager</h3>
            <p>A web application for managing daily tasks.</p>s
          </article>

          <article>
            <h3>Book Management</h3>
            <p>An application for creating and managing books.</p>
          </article>

          <article>
            <h3>E-Commerce Website</h3>
            <p>An online shopping application.</p>
          </article>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <p>I'm open to new opportunities and collaborations.</p>
          <a href="mailto:majd@example.com">Send Me an Email</a>
        </section>
      </main>

      <footer>
        <p>Copyright 2026 Majd Alhourani.</p>
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
