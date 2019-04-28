import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/logo_full_color.svg";
import { ReactComponent as Menu } from "../../assets/burguerMenu.svg"; 
import NavBar from "./NavBar";
import "./Header.scss";
import Button from "../Atoms/Button";

const Header = () => {
  const [stateMenu, setMenu] = useState(false);

  return (
    <header className="header">
    <div className="header__container header__item">
        <a className="header__link" href="/">
          <Logo className="header__logo" />
        </a>
      <div className="header__item">
      <Menu className="header__menu-icon" onClick={() => setMenu(!stateMenu)} />
      </div>
    </div>
    <div className={`header__container--nav ${ stateMenu && 'viewNavbar'}`}>
      <NavBar customClass={ stateMenu ? 'viewNavbar' : 'outNavbar'} handleClass={() => setMenu(!stateMenu)}/>
    </div>
    </header>
  );
};

export default Header;
