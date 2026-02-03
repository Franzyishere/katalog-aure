import { useEffect, useState } from "react";
import { useSearchParams, useNavigationType } from "react-router-dom";
import foods from "../data/food.js";
import FoodCard from "../components/FoodCard.jsx";
import EmptyState from "../components/EmptyState.jsx";
import HeroRamadhan from "../components/HeroRamadhan.jsx";
import "../styles/Home.css";
import "../styles/ModalRamadhan.css";

export default function Home() {
  const [groupFilter, setGroupFilter] = useState(null);      // hampers
  const [searchParams, setSearchParams] = useSearchParams();
  // ======================
  // FILTER DARI URL
  // ======================
  const hampersType = searchParams.get("hampers");
  const typeFilter = searchParams.get("type");
  // ======================
  // POPUP STATE
  // ======================      // premium / regular
  const [showModal, setShowModal] = useState(false);
  const [closing, setClosing] = useState(false);
  // ======================
  // POPUP LOGIC
  // ======================
  useEffect(() => {
    const popupShown = sessionStorage.getItem("ramadhan-popup");

    if (!popupShown) {
      setShowModal(true);
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  const handleAgree = () => {
    setClosing(true);

    sessionStorage.setItem("ramadhan-popup", "true");

    setTimeout(() => {
      setShowModal(false);
      setClosing(false);
    }, 400);
  };

  // ======================
  // FILTER PRODUK
  // ======================
  const filteredFoods = foods.filter((food) => {
    if (!hampersType) return false;
    if (food.hampersType !== hampersType) return false;

    if (
      hampersType === "kue-kering" &&
      typeFilter &&
      food.type !== typeFilter
    ) {
      return false;
    }

    return true;
  });
  // ======================
  // HANDLER FILTER
  // ======================
  const selectHampers = (key) => {
    setSearchParams({ hampers: key });
  };

  const selectType = (type) => {
    setSearchParams({
      hampers: "kue-kering",
      type,
    });
  };

  return (
    <>
    <HeroRamadhan />
      <div className="container my-4">
        {/* ================= FILTER TABS ================= */}
        <div className="mobile-tabs">
          {[
            { key: "kue-kering", label: "🍪 Hampers Kue Kering" },
            { key: "snack-sembako", label: "🧃 Snack & Sembako" },
            { key: "pecah-belah", label: "🏺 Pecah Belah" },
            { key: "paket-hemat", label: "💝 Paket Hemat" },
          ].map((item) => (
            <button
              key={item.key}
              className={`tab-btn ${
                hampersType === item.key ? "active" : ""
              }`}
              onClick={() => selectHampers(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* ================= SUB FILTER ================= */}
        {hampersType === "kue-kering" && (
          <div className="chip-wrapper">
            <span
              className={`chip ${typeFilter === "premium" ? "active" : ""}`}
              onClick={() => selectType("premium")}
            >
              ✨ Premium
            </span>

            <span
              className={`chip ${typeFilter === "regular" ? "active" : ""}`}
              onClick={() => selectType("regular")}
            >
              🤍 Non Premium
            </span>

            <span
              className={`chip ${
                typeFilter === "custom-satuan" ? "active" : ""
              }`}
              onClick={() => selectType("custom-satuan")}
            >
              🎀 Custom Satuan
            </span>
          </div>
        )}

        {/* GRID PRODUK */}
        <section className="container product-section">
          <div className="row justify-content-center">
            {filteredFoods.length === 0 ? (
              <EmptyState />
            ) : (
              filteredFoods.map((food) => (
                <FoodCard key={food.id} food={food} />
              ))
            )}
          </div>
        </section>
        {/* NOTE — SELALU TAMPIL */}
        <div className="hampers-note">
          <span className="note-icon">📌</span>
          <div>
            <p>
              Apabila ingin sesuai katalog, minimal pemesanan
              <strong> H-7</strong>
            </p>
            <p>
              Apabila ingin request isian / media, minimal pemesanan
              <strong> H-5</strong>
            </p>
          </div>
        </div>

      {/* MODAL SYARAT */}
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
                  🌙 Syarat & Ketentuan Pemesanan
                </h5>
              </div>

              <div className="modal-body">
                <div className="mb-3">
                  <h6 className="fw-bold text-brand-dark">Terimakasih telah meilih layanan kami dan mohon membaca syarat ketentuan berikut sebelum melakukan pemesanan.</h6>
                  <h6 className="fw-bold text-brand-pink">📝 Pemesanan & Pembayaran</h6>
                  <ul className="small text-muted">
                    <li>Pelanggan dapat melihat katalog produk melalui website Aure Gifts & Hampers.</li>
                    <li>Pemesanan dilakukan dengan mengisi format order melalui WhatsApp (nomor tertera pada website).</li>
                    <li>Pembayaran dilakukan dengan sistem DP minimal <strong>50%</strong> dari total pemesanan.</li>
                    <li>Pembatalan pesanan (cancel) menyebabkan <strong>DP hangus</strong>.</li>
                    <li>Pelunasan dilakukan saat pengambilan hampers.</li>
                  </ul>
                </div>

                <div className="mb-3">
                  <h6 className="fw-bold text-brand-pink">🍪 Ketersediaan Produk</h6>
                  <ul className="small text-muted">
                    <li>Ketersediaan produk menyesuaikan dengan stok yang tersedia.</li>
                    <li>Jika terdapat item atau varian yang habis, maka akan digantikan dengan produk lain yang setara nilainya.</li>
                    <li>Penggantian dilakukan dengan tetap memperhatikan kualitas dan estetika hampers.</li>
                  </ul>
                </div>

                <div className="mb-3">
                  <h6 className="fw-bold text-brand-pink">🎀 Dekorasi & Tampilan Hampers</h6>
                  <ul className="small text-muted">
                    <li>Warna, pita, bunga, dan aksesoris dekorasi menyesuaikan dengan stok yang tersedia.</li>
                    <li>Kami memastikan tampilan hampers tetap serasi, rapi, dan sesuai konsep katalog.</li>
                  </ul>
                </div>

                <div className="mb-3">
                  <h6 className="fw-bold text-brand-pink">🚚 Pengambilan & Pengiriman</h6>
                  <ul className="small text-muted">
                    <li>Tanggal pengambilan wajib diisi melalui format order pemesanan.</li>
                    <li>Pengambilan langsung sangat disarankan untuk menjaga kondisi hampers tetap optimal.</li>
                    <li>Opsi COD tersedia hanya di area Madiun kota <strong>(Min. Pembelian Rp 50.000)</strong>.</li>
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

              <div className="modal-body">
                <p className="small text-muted">
                  Terima kasih telah mempercayakan momen spesial Anda bersama
                  <strong> Aure Gifts & Hampers</strong> 🤍
                </p>
              </div>

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
    </>
  );
}