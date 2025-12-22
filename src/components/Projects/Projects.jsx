import "./Projects.css";

const projects = [
  {
    title: "Personal Portfolio",
    desc: "Responsive HTML/CSS/JS site showcasing my skills and work.",
  },
  {
    title: "Task Manager App",
    desc: "Full‑stack to‑do app with Node.js, Express and MongoDB.",
  },
  {
    title: "Blog Platform",
    desc: "Modern blog platform built with React and MDX.",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <br />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
