import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import BuildForYou from "./components/BuildForYou/BuildForYou";
import GrowBusiness from "./components/GrowBusiness/GrowBusiness";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import BackgroundCanvas from "./components/BackgroundCanvas";
import SplashScreen from "./components/SplashScreen"; // ✅ import splash

const sectionContainer = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function App() {
  const [mode, setMode] = useState("dark");
  const [loading, setLoading] = useState(true); // ✅ track splash

  // Apply theme to body
  useEffect(() => {
    document.body.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <>
      {loading ? (
        // Show splash screen first
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
          {/* Navbar + Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: loading ? 0 : 1 }}
            transition={{ duration: 1.5 }}
          >
            <Navbar mode={mode} setMode={setMode} />
            <BackgroundCanvas mode={mode} />
          </motion.div>

          <main className="page-wrapper">
            {/* Hero Section */}
            <Hero />

            {/* About Section */}
            <About />

            {/* New Section: What I Can Build For You */}
            <motion.section
              variants={sectionContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <BuildForYou />
            </motion.section>

            {/* New Section: How I Help Businesses Grow */}
            <motion.section
              variants={sectionContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <GrowBusiness />
            </motion.section>

            {/* Projects Section */}
            <motion.section
              variants={sectionContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <Projects />
            </motion.section>

            {/* Skills Section */}
            <motion.section
              variants={sectionContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <Skills />
            </motion.section>

            {/* Contact Section */}
            <motion.section
              variants={sectionContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <Contact />
            </motion.section>

            {/* Footer */}
            <Footer />
          </main>
        </>
      )}
    </>
  );
}
