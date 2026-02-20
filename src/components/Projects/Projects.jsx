import "./Projects.css";
import portfolioImg from "@/assets/portfolio.png";
import pulseImg from "@/assets/pulse.png";
import dashboardImg from "@/assets/dashboard.png";

const projects = [
  {
    title: "Personal Portfolio",
    desc: "Fast React portfolio showcasing projects, skills, and SEO-optimized performance.",
    image: portfolioImg,
    live: "https://samson-glory.vercel.app/",
    github: "https://github.com/Samson-Glory/samson-portfolio",
  },
  {
    title: "Pulse Chat App",
    desc: "Real-time messaging app built with React and WebSockets for smooth live communication.",
    image: pulseImg,
    live: "https://pulse-one-pink.vercel.app/",
    github: "https://github.com/Samson-Glory/Pulse",
  },
  {
    title: "Admin Dashboard",
    desc: "Analytics dashboard with charts, user insights, and data tools for business tracking.",
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
            <a href={project.live} target="_blank" rel="noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="project-img"
                loading="lazy"
              />
            </a>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

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

        {/* See More button at the end */}
        <div className="see-more">
          <a href="/projects">See More Projects</a>
        </div>
      </div>
    </section>
  );
}
