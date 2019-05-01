import React from "react";
import "./ItemDescription.scss";

const ItemDescription = ({ logo, label }) => (
  <div className="item__description">
    <img className="item__description__logo" src={logo} alt="description" />
    <p className="item__description__p">{label}</p>
  </div>
);

export default ItemDescription;
