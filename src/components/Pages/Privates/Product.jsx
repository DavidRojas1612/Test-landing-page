import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Loader from "../../Atoms/Loader";
import Card from "../../Organisms/Card";
import "./Product.scss";

const Product = ({ match, products }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const { id } = match.params;
    const prod = products.products.filter(item => +id === item.id);
    setProduct(prod[0]);
  }, []);

  const handleCard = ({ id, name, price, sku, image, ...detail }) => {
    return (
      <Card
        key={id}
        name={name}
        price={price}
        sku={sku}
        image={image}
        detail={detail}
      />
    );
  };
  return (
    <section className="product l-container">
      {product ? handleCard(product) : <Loader />}
    </section>
  );
};

const mapStateToProps = ({ products }) => ({ products });

export default connect(
  mapStateToProps,
  null
)(Product);
