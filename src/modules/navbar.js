import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../images/favicon-32x32.png';

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
    <div className="container-fluid">
    <img src={Logo} alt="" width="32" height="32"></img>
      <div className="navbar-brand" style={{paddingLeft: 10}}>YomBox</div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Areas
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/wifi">
              Heatmap
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/wifi-realtime">
              Socket's console
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li>
        </ul>

        <a href="https://github.com/WilDwMe/QuadOps-Map"><i className="bi bi-github" style={{fontSize: '1.5rem', color: 'white'}}></i></a>
        <span>&nbsp; &nbsp;</span>
        <a href="https://codeclimate.com/github/WilDwMe/QuadOps-Map/maintainability">
          <img
            alt="CodeClimate Badge"
            src="https://api.codeclimate.com/v1/badges/bd8a709cea2e77f05f3d/maintainability"
          />
        </a>
        <span>&nbsp; &nbsp;</span>
        {/* <a href="/">
          <img
            alt="GitHub package.json version (subfolder of monorepo)"
            src="https://img.shields.io/github/package-json/v/WilDwMe/QuadOps-Map?color=g&filename=package.json"
          />
        </a> */}
      </div>
    </div>
  </nav>
);

export default Navbar;
