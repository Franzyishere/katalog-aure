import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";
import "../styles/Footer.css";

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
          <a
            href="https://wa.me/6285604782201"
            target="_blank"
            className="social-link wa"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://instagram.com/aure.gift"
            target="_blank"
            className="social-link ig"
          >
            <FaInstagram />
          </a>

          <a
            href="https://tiktok.com/@auree.gift"
            target="_blank"
            className="social-link tt"
          >
            <FaTiktok />
          </a>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} Aure Gifts & Hampers • Eid Special Edition 🌙
        </div>

      </div>
    </footer>
  );
}
