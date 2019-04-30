import React from "react";
import "./FollowSection.scss";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";

const FollowSection = () => (
  <section className="follow">
    <div className="follow__container">
      <h1 className="follow__title">
        <span>350 + </span> <span>Woloxers</span>
      </h1>
      <div className="follow__subcontainer">
        <Twitter className="follow__p--twitter" />
        {" @Wolox"}
      </div>
      <a
        href="https://www.twitter.com/wolox"
        className="button__primary__outline  button__transparent"
      >
        Síguenos
      </a>
    </div>
    <div className="follow__container">
      <h1 className="follow__title">
        Trabajamos para <span>convertir</span> <span>ideas</span> en productos
      </h1>
    </div>
  </section>
);

export default FollowSection;
