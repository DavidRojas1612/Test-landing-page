import React from "react";
import "./DetailCard.scss";

const DetailCard = ({ brand, category, dimensions, stock }) => (
  <div className="detail">
    <div className="detail-card">
      <div className="detail-card__container">
        <h3 className="detail-card__date">Brand </h3>
        <p>{brand}</p>
      </div>

      <div className="detail-card__container">
        <h3 className="detail-card__date">Category </h3>
        <p>{category}</p>
      </div>

      <div className="detail-card__container">
        <h3 className="detail-card__date">Dimensions</h3>
        <p>{dimensions}</p>
      </div>
    </div>

    <div className={`detail-card ${stock ? "avalible" : "disabled"}`}>
      {stock ? (
        <h3 className="detail-card__date">In Stock</h3>
      ) : (
        <h3 className="detail-card__date">Out Stock</h3>
      )}
    </div>
  </div>
);

export default DetailCard;
