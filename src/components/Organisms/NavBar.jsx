import React from "react";
import { NavLink, N } from "react-router-dom";
import Button from "../Atoms/Button";
import "./NavBar.scss";


const NavBar = ({handleClass, customClass}) => (
  <nav className={`navbar l-container ${customClass || ''}`}>
    <ul className="navbar__list">
      <li className="navbar__item">
        <a className="navbar__link" onClick={handleClass} href='/#inicio'> Inicio </a>
      </li>
      <li className="navbar__item">
        <a className="navbar__link" onClick={handleClass} href='/#tecnologias'> Tecnologías </a>
      </li>
      <li className="navbar__item">
        <a className="navbar__link"  onClick={handleClass} href='/#beneficios'> Beneficios </a>
      </li>
      <li className="navbar__item">
        <a className="navbar__link"  onClick={handleClass} href='/#requerimientos'> Requerimientos </a>
      </li>
      <li className="navbar__item">
        <NavLink to="/login"  onClick={handleClass} className="button--primary__outline navbar__link--button">Login</NavLink>
      </li>
      <li className="navbar__item">
          <Button theme="button--secondary navbar__link--button" onClick={handleClass}>Volver</Button>
      </li>
    </ul>
  </nav>
);

export default NavBar;
