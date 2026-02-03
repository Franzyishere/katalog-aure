import "../styles/HeroRamadhan.css";

export default function HeroRamadhan() {
  return (
    <section className="ramadhan-hero">
      <div className="hero-overlay" />

      <div className="hero-content">
        <span className="hero-badge">🌙 Ramadhan Edition</span>

        <h1 className="hero-title">
          Open Order Lebaran <span>2026</span>
        </h1>

        <p className="hero-subtitle">
          Hampers & Kue Lebaran Homemade <br />
          Stock Terbatas • Premium Packaging
        </p>

        <a
          href="https://wa.me/6285604782201?text=Halo%20Aure%20Gifts,%20saya%20ingin%20order%20hampers%20lebaran"
          target="_blank"
          className="hero-btn"
        >
          🛍️ Order via WhatsApp
        </a>
      </div>

      {/* ORNAMENT */}
      <div className="lantern lantern-left">🏮</div>
      <div className="lantern lantern-right">🏮</div>
      <div className="moon">🌙</div>
    </section>
  );
}
