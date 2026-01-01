import "./Projects.css";
import portfolioImg from "../../assets/portfolio.png";
import pulseImg from "../../assets/pulse.png";
import dashboardImg from "../../assets/dashboard.png";

const projects = [
  {
    title: "Personal Portfolio",
    desc: "Responsive React site showcasing my skills and work.",
    image: portfolioImg,
    live: "https://samson-glory.vercel.app/",
    github: "https://github.com/Samson-Glory/samson-portfolio",
  },
  {
    title: "pulse App",
    desc: "React chat application with real-time messaging features.",
    image: pulseImg,
    live: "https://pulse-one-pink.vercel.app/",
    github: "https://github.com/Samson-Glory/Pulse",
  },
  {
    title: "Dashboard",
    desc: "Dashboard for a platform with user analytics.",
    image: dashboardImg,
    live: "https://react-admin-dashboard-pi-tan.vercel.app/dashboard",
    github: "https://github.com/Samson-Glory/React-Admin-Dashboard",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {/* Screenshot */}
            <a href={project.live} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
                loading="lazy"
              />
            </a>

            {/* Text */}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              {/* Links */}
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
