import "./Contacts.css";

export default function Contacts() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const mailtoLink = `mailto:your.email@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(
      message + "\n\nFrom: " + name + " <" + email + ">"
    )}`;

    window.location.href = mailtoLink;

    // Optional: reset form
    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form className="section-box" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={{
            background: "var(--bg-color)",
            color: "var(--text-color)",
            border: `1px solid var(--neon-color)`,
            padding: "0.5rem",
            borderRadius: "6px",
            marginBottom: "1rem",
          }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={{
            background: "var(--bg-color)",
            color: "var(--text-color)",
            border: `1px solid var(--neon-color)`,
            padding: "0.5rem",
            borderRadius: "6px",
            marginBottom: "1rem",
          }}
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          style={{
            background: "var(--bg-color)",
            color: "var(--text-color)",
            border: `1px solid var(--neon-color)`,
            padding: "0.5rem",
            borderRadius: "6px",
            marginBottom: "1rem",
          }}
        />
        <button type="submit" className="contact-submit">
          Send Message
        </button>
      </form>
    </section>
  );
}
