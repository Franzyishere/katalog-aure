import { Link } from "react-router-dom";
import "../styles/FoodCard.css";

export default function FoodCard({ food }) {
  return (
    <div className="col-6 col-md-4 col-lg-3 mb-4">
      <div className="product-card h-100">

        {/* IMAGE */}
        <Link to={`/detail/${food.id}`}>
          <div className="product-image">
            <img src={food.image} alt={food.name} />
            <span className="ramadhan-tag">Ramadhan</span>
          </div>
        </Link>

        {/* BODY */}
        <div className="product-body">
          <h6 className="product-title">{food.name}</h6>

          <div className="product-price">
            {food.price === 0
              ? "Harga via WhatsApp"
              : `Rp ${food.price.toLocaleString("id-ID")}`}
          </div>

          <Link
            to={`/detail/${food.id}`}
            className="btn btn-outline-brand w-100 mt-2"
          >
            Lihat Detail
          </Link>
        </div>

      </div>
    </div>
  );
}
