import React from "react";
import "../Style/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container">
      <nav className="header-bar">
        <h1 className="logo">Ecomerce</h1>
        <ul className="slider-menu">
          <li className="nav-li">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/market" className="nav-link">
              Tienda
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/about" className="nav-link">
              Nosotros
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
