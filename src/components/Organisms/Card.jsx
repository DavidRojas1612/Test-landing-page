import React from "react";
import "./Card.scss";
import DetailCard from "../Molecules/DetailCard";

const Card = ({ name, price, sku, handleProduct, image, detail }) => {
  const handleDetail = props => <DetailCard {...props} />;

  return (
    <>
      <div className="card" onClick={handleProduct}>
        <div className="card__img">
          <img src={image} alt="card description" />
        </div>
        <div className="card__container">
          <h3 className="card__date date__main">{name}</h3>
          <h5 className="card__date">{sku}</h5>
          <p>Technological product</p>
        </div>
        <div className="card__price">
          <h4 className="card__date">${price}</h4>
        </div>
      </div>
      {detail && handleDetail(detail)}
    </>
  );
};

export default Card;
