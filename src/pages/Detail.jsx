import { useParams, useNavigate, useLocation } from "react-router-dom";
import foods from "../data/food.js";
import "../styles/Detail.css";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const food = foods.find((f) => String(f.id) === String(id));

  // ======================
  // BACK HANDLER (AMAN)
  // ======================
  const handleBack = () => {
    if (location.key !== "default") {
      navigate(-1); // balik ke halaman sebelumnya
    } else {
      navigate("/"); // fallback
    }
  };

  if (!food) {
    return <p className="text-center mt-5">Data tidak ditemukan</p>;
  }

  // ======================
  // WA MESSAGE
  // ======================
  const waMessage = encodeURIComponent(
    `Halo Aure Gifts & Hampers 🌙
Nama & No. Hp Pemesan:
Alamat :
Saya ingin memesan :
🍪 Produk: ${food.name}
💰 Harga: Rp ${food.price.toLocaleString()}
Sebanyak :
Ambil / Kirim / COD :

Terimakasih 🤍`
  );

  return (
    <div className="detail-page">

      {/* ================= CONTENT ================= */}
      <div className="container detail-container">

        <div className="detail-card">

          {/* IMAGE */}
          <div className="detail-image">
            <img src={food.image} alt={food.name} />
            <span className="ramadhan-tag">🌙 Ramadhan Edition</span>
          </div>

          {/* BODY */}
          <div className="detail-body">
            <span className="detail-category">{food.hampersType}</span>

            <h2 className="detail-title">{food.name}</h2>

            <h6 className="detail-price">
              Rp {food.price.toLocaleString()}
            </h6>

            {/* DESKRIPSI */}
            <div className="detail-desc">
              {food.deskripsi
                ?.split("\n")
                .map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
            </div>

            {/* CTA */}
            <a
              href={`https://wa.me/6285604782201?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <img src="/icons/whatsapp.svg" alt="WA" />
              Pesan via WhatsApp
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}