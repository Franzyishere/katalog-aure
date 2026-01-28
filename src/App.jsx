import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./index.css";
import Home from "./pages/Home.jsx";
import Detail from "./pages/Detail.jsx";
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx";
import HeroRamadhan from "./components/HeroRamadhan.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroRamadhan />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
