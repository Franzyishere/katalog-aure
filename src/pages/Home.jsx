import { useEffect, useState } from "react";
import foods from "../data/food.js";
import FoodCard from "../components/FoodCard.jsx";
import { useRef } from "react";
import React from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // swipe kiri
      setActiveBanner((prev) => (prev + 1) % banners.length);
    }

    if (touchEndX.current - touchStartX.current > 50) {
      // swipe kanan
      setActiveBanner((prev) =>
        prev === 0 ? banners.length - 1 : prev - 1
      );
    }
  };

const handleTouchMove = (e) => {
  touchEndX.current = e.changedTouches[0].screenX;
};

  // ======================
  // 🌙 BANNER SLIDER DATA
  // ======================
  const banners = [
    {
      badge: "🌙 Ramadhan Edition",
      title: "Open Order Lebaran 2026",
      desc: "Hampers & Kue Lebaran Homemade • Stock Terbatas",
    },
    {
      badge: "🛍️ Easy Order",
      title: "Pesan Mudah via WhatsApp",
      desc: "Klik produk favorit & order langsung tanpa ribet",
    },
    {
      badge: "⏳ Limited Stock",
      title: "Kuota Produksi Terbatas",
      desc: "Pastikan order sebelum H-4 Idul Fitri",
    },
  ];

  const [activeBanner, setActiveBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // ======================
  // MODAL RULES
  // ======================
  useEffect(() => {
    setShowModal(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const handleAgree = () => {
    setClosing(true);
    setTimeout(() => {
      setShowModal(false);
      setClosing(false);
    }, 500);
  };

  const filteredFoods = foods.filter(food => {
    const matchName = food.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || food.category === category;
    return matchName && matchCategory;
  });

  return (
    <div className="container my-4">

      {/* 🌙 RAMADHAN SLIDER */}
      <div
        className="ramadhan-slider mb-4"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {banners.map((banner, index) => (
          <div
            key={index}
            className={`ramadhan-slide ${
              index === activeBanner ? "active" : ""
            }`}
          >
            <span className="ramadhan-badge">{banner.badge}</span>
            <h4>{banner.title}</h4>
            <p>{banner.desc}</p>
          </div>
        ))}

        {/* ● ○ ○ INDICATOR DOTS */}
        <div className="ramadhan-dots">
          {banners.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === activeBanner ? "active" : ""}`}
              onClick={() => setActiveBanner(index)}
            />
          ))}
        </div>
      </div>

      {/* GRID PRODUK */}
      <div className="row">
        {filteredFoods.map(food => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>

      {/* MODAL SYARAT & KETENTUAN */}
      {showModal && (
        <div
          className={`modal fade show ramadhan-fade-overlay ${
            closing ? "ramadhan-fade-out" : ""
          }`}
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg ramadhan-fade-modal">
            <div className="modal-content">

              <div className="modal-header bg-brand-green text-white">
                <h5 className="modal-title d-flex align-items-center gap-2">
                  <span className="ramadhan-icon">🌙</span>
                  Syarat & Ketentuan Pemesanan
                </h5>
              </div>

              <div className="modal-body">
                <div className="mb-3">
                  <h6 className="fw-bold text-brand-pink">📝 Pemesanan & Pembayaran</h6>
                  <ul className="small text-muted">
                    <li>Pelanggan dapat melihat katalog produk melalui website Aure Gifts & Hampers.</li>
                    <li>Pemesanan dilakukan dengan mengisi format order melalui WhatsApp (nomor tertera pada website).</li>
                    <li>Pembayaran dilakukan dengan sistem DP minimal <strong>50%</strong> dari total pemesanan.</li>
                    <li>Pembatalan pesanan (cancel) menyebabkan <strong>DP hangus</strong>.</li>
                    <li>Pelunasan dilakukan saat pengambilan parcel.</li>
                  </ul>
                </div>

                <div className="mb-3">
                  <h6 className="fw-bold text-brand-pink">🍪 Ketersediaan Produk</h6>
                  <ul className="small text-muted">
                    <li>Ketersediaan produk menyesuaikan dengan stok yang tersedia.</li>
                    <li>Jika terdapat item atau varian yang habis, maka akan digantikan dengan produk lain yang setara nilainya.</li>
                    <li>Penggantian dilakukan dengan tetap memperhatikan kualitas dan estetika parcel.</li>
                  </ul>
                </div>

                <div className="mb-3">
                  <h6 className="fw-bold text-brand-pink">🎀 Dekorasi & Tampilan Parcel</h6>
                  <ul className="small text-muted">
                    <li>Warna, pita, bunga, dan aksesoris dekorasi menyesuaikan dengan stok yang tersedia.</li>
                    <li>Kami memastikan tampilan parcel tetap serasi, rapi, dan sesuai konsep katalog.</li>
                  </ul>
                </div>

                <div className="mb-3">
                  <h6 className="fw-bold text-brand-pink">🚚 Pengambilan & Pengiriman</h6>
                  <ul className="small text-muted">
                    <li>Tanggal pengambilan wajib diisi melalui format order pemesanan.</li>
                    <li>Pengambilan langsung sangat disarankan untuk menjaga kondisi parcel tetap optimal.</li>
                    <li>Opsi COD hanya tersedia di area <strong>501 & Stadion</strong>.</li>
                    <li>Pengiriman dapat menggunakan layanan transportasi online (Gojek, Grab, dll) secara mandiri atau dipesankan oleh penjual.</li>
                    <li>Pengambilan maksimal <strong>H-4 Hari Raya Idul Fitri</strong>.</li>
                    <li>Alamat pengambilan/pengiriman akan diinformasikan setelah pemesanan.</li>
                  </ul>
                </div>

                <div>
                  <h6 className="fw-bold text-brand-pink">💰 Harga & Ongkos Kirim</h6>
                  <ul className="small text-muted">
                    <li>Harga yang tertera pada katalog belum termasuk ongkos kirim.</li>
                    <li>Biaya pengiriman akan diinformasikan setelah alamat tujuan dikonfirmasi.</li>
                  </ul>
                </div>
               </div>

              <p className="text-center small text-muted mt-3">
                Terima kasih telah mempercayakan momen spesial Anda bersama  
                <strong> Aure Gifts & Hampers </strong> 🤍
              </p>

              <div className="modal-footer">
                <button
                  className="btn btn-brand-popup w-100"
                  onClick={handleAgree}
                >
                  🌙 Saya Setuju & Lanjutkan
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}