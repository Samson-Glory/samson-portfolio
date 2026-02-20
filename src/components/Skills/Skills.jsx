import "./Skills.css";

const skills = [
  {
    title: "HTML5",
    desc: "Semantic, accessible HTML for SEO and responsive design.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    title: "CSS3",
    desc: "Modern layouts with Flexbox, Grid, and subtle animations.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    title: "JavaScript",
    desc: "Dynamic interactions, ES6+ features, and DOM mastery.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    title: "React",
    desc: "Component-based UI, hooks, and scalable single-page apps.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "WordPress",
    desc: "Custom themes, plugins, and CMS-driven websites.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
  },
  {
    title: "SEO",
    desc: "On-page optimization, meta tags, and search visibility.",
    icon: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
  },
  {
    title: "Node.js",
    desc: "Server-side logic, REST APIs, and backend integration.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    title: "Git",
    desc: "Version control, branching strategies, and collaboration.",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.icon} alt={skill.title} className="skill-icon" />
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
