import { motion } from "framer-motion";
import "./Skills.css";

const skills = [
  { name: "HTML", percent: 95, color: "#f16529" },
  { name: "CSS", percent: 90, color: "#2965f1" },
  { name: "JavaScript", percent: 85, color: "#f0db4f" },
  { name: "React", percent: 80, color: "#61dafb" },
  { name: "Next.js", percent: 75, color: "#000000" },
  { name: "Node.js", percent: 70, color: "#3c873a" },
  { name: "MongoDB", percent: 65, color: "#4db33d" },
  { name: "Git", percent: 90, color: "#f05032" },
];

export default function Skills() {
  const radius = 60;
  const stroke = 20;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  return (
    <section id="skills">
      <h2>Skills</h2>
      <br />
      <div className="skills-circle-list">
        {skills.map((skill, index) => {
          const strokeDashoffset =
            circumference - (skill.percent / 100) * circumference;
          return (
            <div key={skill.name} className="skill-circle-item">
              <svg height={radius * 2} width={radius * 2}>
                <circle
                  stroke="#111"
                  fill="transparent"
                  strokeWidth={stroke}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                />
                <motion.circle
                  stroke="lime"
                  fill="transparent"
                  strokeWidth={stroke}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  initial={{ strokeDashoffset: circumference }}
                  whileInView={{ strokeDashoffset }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  strokeLinecap="round"
                />
              </svg>
              <div className="skill-circle-text">
                <span>{skill.name}</span>
                <span>{skill.percent}%</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
