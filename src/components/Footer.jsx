import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-brand">
      <div className="container">

        {/* TOP */}
        <div className="footer-top">
          <h5>Aure Gifts & Hampers</h5>
          <p>
            Hampers & Kue Lebaran Homemade <br />
            Premium • Fresh • Limited Stock
          </p>
        </div>

        {/* SOCIAL */}
        <div className="footer-social">
          <a href="https://wa.me/6285604782201" target="_blank">📱 WhatsApp</a>
          <a href="https://instagram.com/" target="_blank">📸 Instagram</a>
          <a href="https://tiktok.com/" target="_blank">🎵 TikTok</a>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} Aure Gifts & Hampers • Ramadhan Edition 🌙
        </div>

      </div>
    </footer>
  );
}
