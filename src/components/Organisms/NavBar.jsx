import React from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "../Atoms/Button";
import { connect } from 'react-redux'
import "./NavBar.scss";


const NavBar = ({handleClass, customClass, authed}) => (
  <nav className={`navbar l-container ${customClass || ''}`}>
    <ul className="navbar__list">
      <li className="navbar__item">
        <NavLink className="navbar__link" onClick={handleClass} to='/#inicio'> Inicio </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink className="navbar__link" onClick={handleClass} to='/#tecnologias'> Tecnologías </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink className="navbar__link"  onClick={handleClass} to='/#beneficios'> Beneficios </NavLink>
      </li>
      <li className="navbar__item">
        <NavLink className="navbar__link"  onClick={handleClass} to='/#requerimientos'> Requerimientos </NavLink>
      </li>
      <li className="navbar__item">
        <>
          {!authed && (
            <NavLink to="/login"  onClick={handleClass} className="button--primary__outline navbar__link--button">Login</NavLink>
          )}
        </>
      </li>
      <li className="navbar__item">
          <Button theme="button--secondary navbar__link--button" onClick={handleClass}>Volver</Button>
      </li>
    </ul>
  </nav>
);


const mapStateToProps = ({ authed }) => ({ authed })

export default connect(
  mapStateToProps
)(NavBar)
