import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar({ mode, setMode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu on scroll if open
  useEffect(() => {
    if (!menuOpen) return;
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  // Close menu when switching to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  // Toggle light/dark mode
  const toggleTheme = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* Desktop Navbar */}
      {!isMobile && (
        <nav className={`navbar desktop-nav ${mode}`}>
          <div className="nav-logo">SG</div>
          <div className="nav-icons">
            <a href="#hero" aria-label="Home">
              <i className="fas fa-home"></i>
            </a>
            <a href="#about" aria-label="About">
              <i className="fas fa-user-astronaut"></i>
            </a>
            <a href="#projects" aria-label="Projects">
              <i className="fas fa-cubes"></i>
            </a>
            <a href="#skills" aria-label="Skills">
              <i className="fas fa-laptop-code"></i>
            </a>
            <a href="#contact" aria-label="Contact">
              <i className="fas fa-comment-dots"></i>
            </a>
            <button className="nav-button">Book a Call</button>

            {/* Theme toggle slider */}
            <div className="theme-switch">
              <input
                type="checkbox"
                id="theme-toggle-desktop"
                checked={mode === "dark"}
                onChange={toggleTheme}
              />
              <label
                htmlFor="theme-toggle-desktop"
                className="toggle-slider"
              ></label>
            </div>
          </div>
        </nav>
      )}

      {/* Mobile Navbar */}
      {isMobile && (
        <nav className={`navbar mobile-nav ${mode}`}>
          <div className="mobile-nav-top">
            <div className="mobile-logo">SG</div>
            <div className="mobile-actions">
              {/* Theme toggle slider */}
              <div className="theme-switch">
                <input
                  type="checkbox"
                  id="theme-toggle-mobile"
                  checked={mode === "dark"}
                  onChange={toggleTheme}
                />
                <label
                  htmlFor="theme-toggle-mobile"
                  className="toggle-slider"
                ></label>
              </div>

              <button
                className="mobile-menu-button"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                ☰
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="mobile-menu">
              <a href="#hero" onClick={() => setMenuOpen(false)}>
                Home
              </a>
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
              <button
                className="nav-button mobile-call-button"
                onClick={() => setMenuOpen(false)}
              >
                Book a Call
              </button>
            </div>
          )}
        </nav>
      )}
    </>
  );
}
