import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Navbar.css';
import burgerLogo from "../../assets/burgerlogo.png";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="main">
        <img src={burgerLogo} alt="" />
        <div className="mainLink">
          <Link to="/">Anasayfa</Link>
          <Link to="/menu">Menü</Link>
          <Link to="/about">Hakkımızda</Link>
          <Link to="/contact">İletişim</Link>
        </div>
      </div>
    </div>
  );
};
