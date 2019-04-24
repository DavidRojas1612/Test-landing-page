import React from "react";
import { Link } from "react-router-dom";
import Button from "../Atoms/Button";
import "./NavBar.scss";

const NavBar = () => (
  <nav className="navbar">
    <ul className="navbar__list">
      <li className="navbar__item">
        <a href='/'>W O L O X</a>
      </li>
      <li className="navbar__item">
        <a href='#inicio'> Inicio </a>
      </li>
      <li className="navbar__item">
        <a href='#tecnologias'> Tecnologías </a>
      </li>
      <li className="navbar__item">
        <a href='#beneficios'> Beneficios </a>
      </li>
      <li className="navbar__item">
        <a href='#requerimientos'> Requerimientos </a>
      </li>
      <li className="navbar__item">
        <Link to="/cliente/nuevo">
          <Button theme="button--primary__outline">Login</Button>
        </Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
