import "./GrowBusiness.css";

const items = [
  {
    emoji: "🐢",
    title: "Laggy & outdated website",
    text: "Slow pages and clunky design push customers away before they even see what you offer.",
  },
  {
    emoji: "⚡",
    title: "Rebuilt for speed",
    text: "Optimized code, clean structure and lightning-fast load times that feel instant on every device.",
  },
  {
    emoji: "📈",
    title: "Turn visitors into buyers",
    text: "Smart UX and conversion-focused layouts that guide people naturally toward taking action.",
  },
  {
    emoji: "🤖",
    title: "Automated systems",
    text: "Payments, emails, bookings and workflows running 24/7 — so your business works while you sleep.",
  },
  {
    emoji: "🌍",
    title: "Built to scale",
    text: "Secure, cloud-ready infrastructure designed to handle 10x growth without breaking a sweat.",
  },
];

export default function GrowBusiness() {
  return (
    <section className="grow-section">
      <h2 className="grow-title">Grow Your Business</h2>
      <p className="grow-sub">
        From slow and struggling → to fast, automated and scalable.
      </p>

      <div className="grow-grid">
        {items.map((item, i) => (
          <div
            className="grow-card"
            key={i}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <span className="grow-emoji">{item.emoji}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
