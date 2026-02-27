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
import SplashScreen from "./components/SplashScreen";

// Animation variants for sections
const sectionContainer = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Animated section wrapper
const AnimatedSection = ({ children }) => (
  <motion.section
    variants={sectionContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
  >
    {children}
  </motion.section>
);

export default function App() {
  const [mode, setMode] = useState("dark");
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Apply theme
  useEffect(() => {
    document.body.setAttribute("data-theme", mode);
  }, [mode]);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {loading ? (
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
          {/* Navbar + Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar mode={mode} setMode={setMode} />
            {/* Pass simplified={true} on mobile */}
            <BackgroundCanvas simplified={isMobile} />
          </motion.div>

          <main className="page-wrapper">
            <Hero />
            <About />
            <AnimatedSection>
              <BuildForYou />
            </AnimatedSection>
            <AnimatedSection>
              <GrowBusiness />
            </AnimatedSection>
            <AnimatedSection>
              <Projects />
            </AnimatedSection>
            <AnimatedSection>
              <Skills />
            </AnimatedSection>
            <AnimatedSection>
              <Contact />
            </AnimatedSection>
            <Footer />
          </main>
        </>
      )}
    </>
  );
}
