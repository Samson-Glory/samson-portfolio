import "./About.css";

// just use the URL directly in the img src, don't import it
const aboutImg = "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

export default function About() {
  return (
    <section id="about" className="about-section">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <img src={aboutImg} alt="About me" className="about-img" />
        <div className="about-text">
          <p>
            I'm a passionate developer specializing in{" "}
            <strong>React, Node.js, and SEO-friendly web applications</strong>.
            I focus on building{" "}
            <strong>fast, scalable, and interactive websites</strong> that leave
            a lasting impression.
          </p>
          <br />
          <p>
            Also with a background in WordPress, I create{" "}
            <strong>responsive designs</strong> that look great on any device.
          </p>
          <br />
          <p>
            Umm Hobbies eh, okay I enjoy reading, hiking, and playing video
            games. Im also jovial and love to make people laugh, so if you want
            to chat about anything, hit me up...{" "}
          </p>
          <br />
          <p>
            I'm always eager to take on new challenges and collaborate on
            exciting projects. Let's build something amazing together...
          </p>
          <br />
          <p>
            Also Im going to update that profile picture soon, bear with me.
          </p>
        </div>
      </div>
    </section>
  );
}
