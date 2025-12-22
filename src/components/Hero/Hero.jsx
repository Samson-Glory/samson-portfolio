import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  const heroText = "Hi, I'm Samson 👨‍💻\nDesigner & Developer";
  const splitText = heroText.split("");

  // Variants for letters
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="hero"
      className="hero"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <h1 className="hero-title">
        {splitText.map((char, index) => {
          if (char === "\n") return <br key={index} />;
          return (
            <motion.span key={index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
        <motion.span className="cursor">|</motion.span>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.7, ease: "easeOut" }}
      >
        From sketch to screen - I build what you envision, design with purpose,
        and develop with precision
      </motion.p>

      <motion.div
        className="hero-buttons"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.8, duration: 0.7, ease: "easeOut" }}
      >
        <a href="#contact" className="sec-button">
          Hire Me
        </a>
        <a
          href="https://wa.me/2349155834434"
          target="_blank"
          rel="noopener noreferrer"
          className="sec-button whatsapp-button"
        >
          <i className="fab fa-whatsapp" style={{ marginRight: "0.5rem" }}></i>
          Chat on WhatsApp
        </a>
      </motion.div>
    </motion.section>
  );
}
