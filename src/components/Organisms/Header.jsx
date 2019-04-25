import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo_full_color.svg";
import NavBar from "./NavBar";
import "./Header.scss";
import Button from "../Atoms/Button";

const Header = () => {
  const [stateMenu, setMenu] = useState(false);

  return (
    <header className="header">
    <div className="header__container">
      <div className="header__item">
        <a className="header__link" href="/">
          <Logo className="header__logo" />
        </a>
      </div>
      <div className="header__item">
        <div
          className="header__menu-icon"
        >
          <Button theme="button--primary__outline" onClick={() => setMenu(!stateMenu)}>Menu</Button>
        </div>
      </div>
    </div>
    <NavBar customClass={ stateMenu && 'viewNavbar'} handleClass={() => setMenu(!stateMenu)}/>
    </header>
  );
};

export default Header;
