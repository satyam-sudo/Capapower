import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };
  return (
    <>
      <div>
      
        <div className="form-inline ml-auto">
          <div className="btn" onClick={ToggleSidebar}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
        <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
          <div className="sd-header">
            <div className="btn" onClick={ToggleSidebar}>
              <i className="fa fa-times"></i>
            </div>
          </div>
          <figure className="logo">
              <Link to="/">
                <img
                  className="header-logo img-fluid"
                  src="assets/images/capapower-h.png"
                  alt=""
                />
              </Link>
            </figure>
          <ul>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/about"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </Link>
              <ul
                className="dropdown-menu dropdown-menu"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/company">
                    Company
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/team">
                    Team
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/faq">
                    Faq’s
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/portfolio">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/pricing">
                    Pricing & Plan
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    404
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Coming Soon
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </Link>
              <ul
                className="dropdown-menu dropdown-menu"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/">
                    All Services
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Technical Service
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Maintenance
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Panel Repair
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Monitoring
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Diagnostics
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Wind Turbines
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </Link>
              <ul
                className="dropdown-menu dropdown-menu"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <Link className="dropdown-item" to="/">
                    Products
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Single Product
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Shopping Cart
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Checkout
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    My Account
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <nav className="menu-box">
                <div className="menu-outer"></div>
                <div className="contact-info">
                    <h4>Contact Info</h4>
                    <ul>
                        <li>Chicago 12, Melborne City, USA</li>
                        <li><a href="tel:+8801682648101">+88 01682648101</a></li>
                        <li><a href="mailto:info@example.com">info@example.com</a></li>
                    </ul>
                </div>
                <div className="social-links">
                    <ul className="clearfix">
                        <li><a href="#"><span className="fab fa-twitter"></span></a></li>
                        <li><a href="#"><span className="fab fa-facebook-square"></span></a></li>
                        <li><a href="#"><span className="fab fa-pinterest-p"></span></a></li>
                        <li><a href="#"><span className="fab fa-instagram"></span></a></li>
                        <li><a href="#"><span className="fab fa-youtube"></span></a></li>
                    </ul>
                </div>
            </nav>
        </div>
      </div>
      <div
        className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
        onClick={ToggleSidebar}
      ></div>
    </>
  );
};

export default SideNav;
