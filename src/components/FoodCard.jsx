import { Link } from "react-router-dom";
import React from "react";

export default function FoodCard({ food }) {
  return (
    <div className="col-6 col-md-4 col-lg-3 mb-4">
      <Link to={`/detail/${food.id}`} className="text-decoration-none text-dark">
        <div className="card h-100 border-0 shadow-sm">
          <img
            src={food.image}
            className="card-img-top"
            style={{ height: 180, objectFit: "cover" }}
          />

          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-1">
              <h6 className="card-title mb-0">{food.name}</h6>
              <span className="ramadhan-badge">Ramadhan</span>
            </div>

            <small className="text-muted">{food.category}</small>

            <p className="fw-bold text-brand-pink mt-2 mb-0">
              Rp {food.price.toLocaleString()}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
