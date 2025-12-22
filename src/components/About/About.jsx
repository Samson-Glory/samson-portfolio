import "./About.css";
import { motion } from "framer-motion";

export default function About() {
  // Variants for staggered animation
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const fadeSlide = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const pulse = {
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.05, 1],
      transition: {
        repeat: Infinity,
        repeatDelay: 2,
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="about"
      className="about"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h2 variants={fadeSlide}>About Me</motion.h2>

      <motion.p variants={fadeSlide}>
        Hello there — I'm Samson, part designer, part developer and a full‑time
        pixel perfectionist with over 5 years of experience, born and bred in
        Nigeria.
      </motion.p>

      <motion.p variants={fadeSlide} className="bold">
        Here's what I actually do:
      </motion.p>

      <motion.p variants={fadeSlide}>
        I turn your ideas into interactive experiences, crafting websites that{" "}
        <i>feel</i> as good as they look.
      </motion.p>

      <motion.p variants={fadeSlide}>
        Think of me as a bridge between logic and creativity - fluent in code,
        obsessed with clean designs and believe me when I say, always chasing
        that perfect user moment. I don't just build websites... I craft
        experiences that changes every perspective, mindset and boost whatever
        my client stands for because I know what I am doing.
      </motion.p>

      <motion.p variants={fadeSlide}>
        Got an idea? I'll code it. Need a vibe? I'll design it. Want both?
        Expect something out of this world 🌍
      </motion.p>

      <motion.p variants={fadeSlide} className="bold">
        What to expect:
      </motion.p>

      <motion.ul>
        <motion.li variants={listItem}>
          <motion.b className="highlight">💡 Creative Thinking:</motion.b> I
          don't do cookie-cutter. Every of my project starts with fresh ideas
          and unique concepts. <br />
          <b className="bold">source-</b> Trust me.
        </motion.li>

        <motion.li variants={listItem}>
          <motion.b className="highlight">📐 Clean, Responsive Code:</motion.b>{" "}
          Nothing is more unappealing than an unresponsive website, expect
          pixel-perfect builds, from desktop to mobile leave it to me.
        </motion.li>

        <motion.li variants={listItem}>
          <motion.b className="highlight">🧩 Smooth Collaboration:</motion.b>{" "}
          Expect clear updates, teamwork, fast turnarounds, and let's just
          say... I always keep to the time.
        </motion.li>

        <motion.li variants={listItem}>
          <motion.b className="highlight">🧠 Quick Learner:</motion.b> New tech?
          Bring it on.
        </motion.li>
      </motion.ul>
    </motion.section>
  );
}
