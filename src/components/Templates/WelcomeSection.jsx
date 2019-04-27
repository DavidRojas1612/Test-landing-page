import React from "react";
import "./WelcomeSection.scss";
import lchero from '../../assets/ImgHero/Ic_ilustra_Hero.png'
const WelcomeSection = () => (
  <section className="welcome">
    <h1 className="welcome__title">
      Bienvenido a tu <span>Entrevista Técnica</span> en <span>Wolox</span>
    </h1>
    <div className="welcome__container">
      <img className="welcome__img" src={lchero} alt=""/>
    </div>
  </section>
);

export default WelcomeSection;
