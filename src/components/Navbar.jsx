import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // sesuaikan path

export default function Navbar() {
  return (
    <nav className="navbar-aure">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/icons/logo-aure.png" alt="Aure Logo" className="logo-img" />
          <span>Aure Gifts & Hampers</span>
        </Link>

        <div className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/produk" className="nav-link">Produk</Link>
          <Link to="/kontak" className="nav-link">Kontak</Link>
        </div>
      </div>
    </nav>
  );
}
