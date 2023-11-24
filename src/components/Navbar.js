import React from "react";
import logo from "../logo1.png";

/*****Font Awesome******/
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-secondary">
      <div className="container">
        <button className="navbar-brand" href="">
          <img className="logo" src={logo} alt="logo..." />
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <Link className="nav-link" to="/Home">
              <li className="nav-item active">
                Home <span className="sr-only"></span>
              </li>
            </Link>

            <Link className="nav-link" to="/AboutMe">
              <li className="nav-item">About Me</li>
            </Link>

            <Link className="nav-link" to="/Skills">
              <li className="nav-item">Skills</li>
            </Link>

            <Link className="nav-link" to="/Project">
              <li className="nav-item">Projects</li>
            </Link>

            <Link className="nav-link" to="/Contacts">
              <li className="nav-item">Contacts</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
