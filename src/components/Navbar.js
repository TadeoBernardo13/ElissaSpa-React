import React from 'react';
import '../styles/Navbar.css'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="header">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center d-flex align-items-center">
                <li className="mobileLogo">
                  <img
                    src="assets/logoSpa.png"
                    alt=''
                    className="rounded-circle"
                    width="100"
                  />
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Servicios">
                    Servicios
                  </NavLink>
                </li>
                <li className="nav-item desktopLogo">
                  <img
                    src= "assets/logoSpa.png"
                    alt=''
                    className="rounded-circle"
                    width="150"
                  />
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Contacto">
                    Contacto
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Cursos">
                    Cursos
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
  );
}
