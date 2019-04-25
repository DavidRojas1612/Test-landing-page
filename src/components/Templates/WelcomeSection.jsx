import React from "react";
import "./WelcomeSection.scss";
import lchero from '../../assets/ImgHero/Ic_ilustra_Hero.png'
const WelcomeSection = () => (
  <section className="welcome">
    <p className="welcome__title">
      Bienvenido a tu <span>Entrevista Técnica</span> en <span>Wolox</span>
    </p>
    <img src={lchero} alt=""/>
  </section>
);

export default WelcomeSection;
