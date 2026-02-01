import { useParams, Link } from "react-router-dom";
import foods from "../data/food.js";
import "./Detail.css";

export default function Detail() {
  const { id } = useParams();
  const food = foods.find((f) => f.id == id);

  if (!food) {
    return <p className="text-center mt-5">Data tidak ditemukan</p>;
  }

  const waMessage = encodeURIComponent(
    `Halo Aure Gifts & Hampers 🌙

Nama & No. Hp Pemesan:
Alamat:
Ambil / Kirim / COD:
Tanggal Pengambilan:

Saya ingin memesan:
🍪 Produk: ${food.name}
💰 Harga: Rp ${food.price.toLocaleString()}

Note: Untuk pengiriman harap kirimkan lokasi (Shareloc)`
  );

  return (
    <div className="container detail-page">

      {/* BACK */}
      <Link to="/" className="back-link">
        ← Kembali ke Katalog
      </Link>

      <div className="detail-card">

        {/* IMAGE */}
        <div className="detail-image">
          <img src={food.image} alt={food.name} />
          <span className="ramadhan-tag">🌙 Ramadhan Edition</span>
        </div>

        {/* CONTENT */}
        <div className="detail-body">
          <span className="detail-category">{food.type}</span>

          <h2 className="detail-title">{food.name}</h2>

          <h6 className="detail-price">
            Rp {food.price.toLocaleString()}
          </h6>

          <p className="detail-desc">
            {food.deskripsi}
          </p>

          {/* CTA */}
          <a
            href={`https://wa.me/6285604782201?text=${waMessage}`}
            target="_blank"
            className="btn-whatsapp"
          >
            <img src="/icons/whatsapp.svg" alt="WA" />
            Pesan via WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
