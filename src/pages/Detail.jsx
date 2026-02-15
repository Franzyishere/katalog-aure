import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import foods from "../data/food";
import "../styles/Detail.css";

export default function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const food = foods.find((f) => f.id == id);

  const [showImage, setShowImage] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  if (!food) {
    return <p className="text-center mt-5">Data tidak ditemukan</p>;
  }

  // =====================
  // PESAN WHATSAPP
  // =====================
  const waMessage = encodeURIComponent(
`*Halo Aure Gifts & Hampers 🌙*

Nama & No. Hp Pemesan :

Alamat :

Saya ingin memesan :
   *🍪 Produk : ${food.name}*
   *💰 Harga : Rp ${food.price.toLocaleString()}*

Sebanyak :

*(pilih salah satu untuk opsi pengambilan)*


*Bila diambil*
Tanggal Pengambilan :

*Bila dikirim*
Nama penerima :
Alamat penerima :

*Bila COD*
Tanggal & Lokasi COD :
_Untuk jam menyesuaikan dari kami_

NB: apabila dilakukan pengiriman, tolong kirimkan share lokasi yang sesuai.

Terimakasih!!!`
);

  return (
    <div className="container detail-page">

      {/* BACK */}
      <button className="btn btn-light mb-3" onClick={handleBack}>
        ← Kembali
      </button>

      <div className="detail-card">

        {/* IMAGE */}
        <div
          className="detail-image clickable"
          onClick={() => setShowImage(true)}
        >
          <img src={food.image} alt={food.name} />
          <span className="ramadhan-tag">🌙 Eid Special Edition</span>
          <span className="zoom-hint">Tap untuk lihat penuh</span>
        </div>

        {/* CONTENT */}
        <div className="detail-body">
          <span className="detail-category">{food.hampersType}</span>
          <h2 className="detail-title">{food.name}</h2>

          <h6 className="detail-price">
            Rp {food.price.toLocaleString()}
          </h6>

          <div className="detail-desc">
            {food.deskripsi.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          {/* CTA WHATSAPP */}
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

      {/* IMAGE MODAL */}
      {showImage && (
        <div className="image-modal" onClick={() => setShowImage(false)}>
          <span className="image-close">✕</span>
          <img src={food.image} alt={food.name} />
        </div>
      )}
    </div>
  );
}
