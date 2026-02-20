import "./Contacts.css";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Contact Me</h2>
      <p className="contact-sub">
        Got a project or just want to chat? Reach out and let’s build something
        amazing.
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <MdEmail className="contact-icon" />
          <h3>Email</h3>
          <p>
            <a href="mailto:ek.samsonglory@gmail.com">
              ek.samsonglory@gmail.com
            </a>
          </p>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <p>
            <a
              href="https://www.linkedin.com/in/samson-glory/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/samson-glory
            </a>
          </p>
        </div>

        <div className="contact-card">
          <FaTwitter className="contact-icon" />
          <h3>Twitter</h3>
          <p>
            <a
              href="https://twitter.com/ekSamsonDev"
              target="_blank"
              rel="noreferrer"
            >
              @ekSamsonDev
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
