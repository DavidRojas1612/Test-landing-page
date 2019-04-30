import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./Products.scss";
import { getProducts, setProducts } from "../../../store/actions";
import { connect } from "react-redux";
import Loader from "../../Atoms/Loader";
import Input from "../../Atoms/Input";
import Card from "../../Organisms/Card";

const Products = ({ products, getProducts, history, errorMessage, setProducts }) => {
  
  useEffect(() => {
    getProducts();
  }, []);

  const handleProduct = id => {
    history.push(`/products/${id}`);
  };

  const handleSearchProducts = e => {
    const search = e.target.value;
    const reg = new RegExp(`.*${search}.*`, "i");
    if (e.key === "Enter") {
      search === ""
        ? getProducts(search)
        : setProducts(
            products.products.filter(product => product.name.match(reg))
          );
    }
  };

  return (
    <section className="products l-container">
      {products && products.products && (
        <>
          <Input
            placeholder="Search"
            theme="login__input"
            onKeyDown={e => handleSearchProducts(e)}
          />
          <div className="products__container">
            {products.products.map(({ name, price, sku, id, image }) => (
              <Card
                key={id}
                name={name}
                price={price}
                sku={sku}
                image={image}
                handleProduct={() => handleProduct(id)}
              />
            ))}
          </div>
        </>
      )}
      {errorMessage && (
        <div className="error__container">
          <h3 className="error__title">Ups! algo no ha salido bien</h3>
          <Loader />
        </div>
      )}
    </section>
  );
};
const mapDispatchToProps = dispatch => ({
  getProducts: name => dispatch(getProducts(name)),
  setProducts: products =>
    dispatch(
      setProducts({
        products
      })
    )
});

const ProductsRouter = withRouter(Products);
const mapStateToProps = ({ products, errorMessage }) => ({
  products,
  errorMessage
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsRouter);
