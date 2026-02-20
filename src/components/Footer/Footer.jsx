import "./Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Samson Glory. All rights reserved.</p>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <a
            href="https://github.com/Samson-Glory"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/samson-glory/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/ekSamsonDev"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}
