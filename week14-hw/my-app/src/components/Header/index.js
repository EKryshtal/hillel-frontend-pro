import React from "react";
import './style.css';
import Logo from '../../logo.svg';

const Header = () => {
  const Img = <img src={Logo} alt="Logo"></img>
  const Logout = <button className="header__logout">Logout</button>
  
  const Header = <header className="header">{Img}{Logout}</header>

  return Header;
}

export default Header;