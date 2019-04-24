import React from "react";
import { Link } from "react-router-dom";
import Button from "../Atoms/Button";
import "./NavBar.scss";


const NavBar = ({handleClass, customClass}) => (
  <nav className={`navbar l-container ${customClass || ''}`}>
    <ul className="navbar__list">
      <li className="navbar__item">
        <a className="navbar__link" href='#inicio'> Inicio </a>
      </li>
      <li className="navbar__item">
        <a className="navbar__link" href='#tecnologias'> Tecnologías </a>
      </li>
      <li className="navbar__item">
        <a className="navbar__link" href='#beneficios'> Beneficios </a>
      </li>
      <li className="navbar__item">
        <a className="navbar__link" href='#requerimientos'> Requerimientos </a>
      </li>
      <li className="navbar__item">
        <Link to="/cliente/nuevo">
          <Button theme="button--primary__outline">Login</Button>
        </Link>
      </li>
      <li className="navbar__item">
          <Button theme="button--secondary" onClick={handleClass}>Cerrar</Button>
      </li>
    </ul>
  </nav>
);

export default NavBar;
