import React from "react";
import "./BuildForYou.css";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaCloud,
  FaDatabase,
  FaRobot,
  FaShoppingCart,
  FaSearch,
} from "react-icons/fa";

const items = [
  {
    icon: <FaLaptopCode />,
    title: "Web Applications",
    desc: "Responsive, fast, and modern web apps.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Apps",
    desc: "iOS & Android apps with smooth UX.",
  },
  {
    icon: <FaServer />,
    title: "Backend Solutions",
    desc: "Secure and scalable backend systems.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Services",
    desc: "Deploy apps on AWS, Azure, or GCP.",
  },
  {
    icon: <FaDatabase />,
    title: "Databases",
    desc: "Optimized and structured database solutions.",
  },
  {
    icon: <FaRobot />,
    title: "AI / Automation",
    desc: "Smart automation and AI-driven solutions.",
  },
  {
    icon: <FaShoppingCart />,
    title: "E-Commerce",
    desc: "Online stores with seamless shopping experiences.",
  },
  {
    icon: <FaSearch />,
    title: "Technical SEO",
    desc: "Improve site performance, crawlability, and rankings.",
  },
];

// Parent container variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren", // parent animates first
      staggerChildren: 0.1, // children appear in small delay
    },
  },
};

// Individual card variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function BuildForYou() {
  return (
    <motion.section
      className="build-section"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="section-title">What I Can Build For You</h2>
      <div className="build-grid">
        {items.map((item, i) => (
          <motion.div className="build-card" key={i} variants={cardVariants}>
            <div className="build-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
