import { useParams, Link } from "react-router-dom";
import foods from "../data/food.js";

export default function Detail() {
  const { id } = useParams();
  const food = foods.find(f => f.id == id);

  if (!food) {
    return <p className="text-center mt-5">Data tidak ditemukan</p>;
  }

  return (
    <div className="container my-4">
      <Link to="/" className="btn btn-outline-secondary mb-3">
        ← Kembali
      </Link>

      <div className="card shadow">
        <img
          src={food.image}
          className="card-img-top"
          style={{ maxHeight: 300, objectFit: "cover" }}
        />
        <div className="card-body">
          <h3>{food.name}</h3>
          <span className="badge bg-secondary mb-2">
            {food.category}
          </span>
          <h4 className="text-primary">
            Rp {food.price.toLocaleString()}
          </h4>
          <p className="mt-3">{food.description}</p>
            <a
            href="https://wa.me/6281359735691"
            className="btn btn-success d-flex align-items-center gap-2 mt-3"
            target="_blank"
            >
            <img src="/icons/whatsapp.svg" width="20" />
            Pesan via WhatsApp
            </a>
        </div>
      </div>
    </div>
  );
}