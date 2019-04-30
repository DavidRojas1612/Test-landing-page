import React from "react";
import WolloxFooter from "../../assets/Ic_Wolox_Footer.svg";
import "./Footer.scss";
const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <h1 className="footer__title">
        Gracias por <span> completar el ejercicio </span>
      </h1>
      <h3 className="footer__subtitle">
        Te invitamos a ver más información
      </h3>
      <a href="https://www.wolox.com.ar/" className="button--primary ">
        Conoce más
      </a>
    </div>
    <img className="footer__img" src={WolloxFooter} alt="footer" />
  </footer>
);

export default Footer;
