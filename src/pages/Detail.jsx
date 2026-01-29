import { useParams, Link } from "react-router-dom";
import foods from "../data/food.js";
import "./Detail.css";

export default function Detail() {
  const { id } = useParams();
  const food = foods.find(f => f.id == id);

  if (!food) {
    return <p className="text-center mt-5">Data tidak ditemukan</p>;
  }

  const waMessage = encodeURIComponent(
    `Halo Aure Gifts & Hampers 🌙
    Saya ingin memesan:
    🍪 Produk: ${food.name}
    💰 Harga: Rp ${food.price.toLocaleString()}

Mohon info ketersediaannya ya 😊`
  );

  return (
    <div className="container my-4">

      <Link to="/" className="btn btn-light mb-3">
        ← Kembali ke Katalog
      </Link>

      <div className="detail-card shadow-lg">

        <div className="detail-image">
          <img src={food.image} alt={food.name} />
          <span className="ramadhan-tag">Ramadhan Edition</span>
        </div>

        <div className="detail-body">
          <h3 className="fw-bold text-brand-pink">{food.name}</h3>

          <span className="badge bg-brand-green mb-2">
            {food.category}
          </span>

          <h4 className="detail-price">
            Rp {food.price.toLocaleString()}
          </h4>

          <p className="mt-3 text-muted">
            {food.description}
          </p>

          <a
            href={`https://wa.me/6285604782201?text=${waMessage}`}
            target="_blank"
            className="btn btn-whatsapp w-100 mt-4"
          >
            <img src="/icons/whatsapp.svg" width="22" />
            Pesan via WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
