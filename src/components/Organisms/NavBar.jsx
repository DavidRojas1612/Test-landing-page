import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Button from "../Atoms/Button";
import { connect } from "react-redux";
import "./NavBar.scss";

const NavBar = ({ handleClass, customClass, authed, user }) => (
  <nav className={`navbar l-container ${customClass || ""}`}>
    <ul className="navbar__list">
      {!authed ? (
        <>
          <li className="navbar__item">
            <Link
              className="navbar__link"
              onClick={handleClass}
              to="/#inicio"
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            >
              {" "}
              Inicio{" "}
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              className="navbar__link"
              onClick={handleClass}
              to="/#tecnologias"
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            >
              {" "}
              Tecnologías{" "}
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              className="navbar__link"
              onClick={handleClass}
              to="/#beneficios"
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            >
              {" "}
              Beneficios{" "}
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              className="navbar__link"
              onClick={handleClass}
              to="/#requerimientos"
              scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              {" "}
              Requerimientos{" "}
            </Link>
          </li>
          <li className="navbar__item">
            <Link
              to="/login"
              onClick={handleClass}
              className="button--primary__outline navbar__link--button"
            >
              Login
            </Link>
          </li>
          <li className="navbar__item">
            <Button
              theme={`button--secondary navbar__link--button`}
              onClick={handleClass}
            >
              Volver
            </Button>
          </li>
        </>
      ) : (
        <>
          <li className="navbar__item">
            <Link
              to="/products"
              onClick={handleClass}
              className="navbar__link"
            >
              Productos
            </Link>
          </li>
          <li className="navbar__item">
            <h3 className="navbar__title">{user.nombre}</h3>
          </li>
          <li className="navbar__item">
            <Button
              theme={`button--secondary navbar__link--button`}
              onClick={handleClass}
            >
              Volver
            </Button>
          </li>
        </>
      )}
    </ul>
  </nav>
);

const mapStateToProps = ({ authed, user }) => ({ authed, user });

export default connect(mapStateToProps)(NavBar);
