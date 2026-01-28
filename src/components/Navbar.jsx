import { Link } from "react-router-dom";
import React from "react";  

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
        <div className="container">

            <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            <img src="/icons/logo-aure.png" width="56" />
            <div>
                <div className="fw-bold">Aure Gifts & Hampers</div>
                <small className="text-brand-pink">Ramadhan & Lebaran Edition</small>
            </div>
            </Link>

            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <a
                    href="https://wa.me/6285604782201"
                    className="btn btn-brand d-flex align-items-center gap-2"
                >
                    <img src="/icons/whatsapp.svg" width="45" />
                </a>
                </li>
            </ul>
            </div>

        </div>
    </nav>
  );
}