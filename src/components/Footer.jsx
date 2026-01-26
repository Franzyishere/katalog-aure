import React from "react";

export default function Footer() {
  return (
    <footer className="mt-5" style={{ backgroundColor: "#fdf3df" }}>
        <div className="container py-4">
            <div className="row">

            <div className="col-md-4 mb-3">
                <div className="d-flex align-items-center gap-2 mb-2">
                <img src="/icons/logo-aure.png" width="50" />
                <h6 className="fw-bold mb-0">Aure Gifts & Hampers</h6>
                </div>
                <p className="small text-muted">
                Hampers dan kue lebaran untuk berbagi kebahagiaan di hari yang fitri 🤍
                </p>
            </div>

        <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Hubungi Kami</h6>
            <div className="d-flex align-items-center gap-2">
            <img src="/icons/whatsapp.svg" width="18" />
            <small>WhatsApp Order</small>
            </div>
        </div>

        <div className="col-md-4 mb-3">
            <small className="text-muted">
            © {new Date().getFullYear()} Aure Gifts & Hampers  
            <br />Ramadhan & Lebaran Edition
            </small>
        </div>

        </div>
    </div>
    </footer>
  );
}