import { useEffect, useState } from "react";
import foods from "../data/food.js";
import FoodCard from "../components/FoodCard.jsx";
import React from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const handleAgree = () => {
    setShowModal(false);
  };

  const filteredFoods = foods.filter(food => {
    const matchName = food.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || food.category === category;
    return matchName && matchCategory;
  });

  return (
    <div className="container my-4">

      {/* GRID PRODUK */}
      <div className="row">
        {filteredFoods.map(food => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>

      {/* MODAL SYARAT & KETENTUAN */}
      {showModal && (
        <div
            className="modal fade show ramadhan-fade-overlay"
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
                  Saya Setuju & Lanjutkan
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}