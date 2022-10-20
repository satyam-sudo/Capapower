import React, { useState } from "react";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";

function Navbar() {
  const [text, setText] = useState("");
  const [showScroll, setShowScroll] = useState(false);

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    if (text === "") {
      alert("Please enter something!");
    } else {
      alert(text);
      setText("");
    }
  };
  const onChange = (evt: any) => setText(evt.target.value);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  window.addEventListener("scroll", checkScrollTop);

  return (
    <>
      <header className="main-header">
        <div className="header-top d-none d-lg-block">
          <div className="auto-container">
            <div className="top-inner clearfix">
              <div className="text left-column pull-left">
                <h6 className="text-lowercase">
                  <i className="comment-icon fas fa-envelope"></i>
                  <a href="mailto:customercare@capapower.com">
                    customercare@capapower.com
                  </a>
                </h6>
              </div>
              <div className="text left-column pull-left pl-2">
                <h6>
                  <i className="comment-icon fas fa-phone"></i>
                  <a href="tel:1800-XX-XXXX">1800-XX-XXXX</a>
                </h6>
              </div>
              <div className="right-column pull-right clearfix">
                <ul className="info clearfix">
                  <li className="search-box-outer">
                    <form className="dropdown" onSubmit={onSubmit}>
                      <input
                        value={text}
                        onChange={onChange}
                        placeholder="search items..."
                        className="search-box-btn"
                        id="dropdownMenu3"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                      />
                      <button type="submit" className="search-box-btn">
                        Search
                      </button>
                    </form>
                  </li>
                </ul>
                <ul className="social-links clearfix">
                  <li>
                    <Link to="/">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-vimeo-v"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light bg-gradient" >
        <div className="container">
        <figure className="logo">
              <Link to="/">
                <img
                  className="header-logo img-fluid"
                  src="assets/images/capapower-h.png"
                  alt=""
                />
              </Link>
            </figure>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav justify-content-end navigation" style={{float:"right"}}>
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
                  className="dropdown"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown" to="/company">
                      Company
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown" to="/team">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown" to="/faq">
                      Faq’s
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown" to="/portfolio">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown" to="/pricing">
                      Pricing & Plan
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown" to="/">
                      404
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown" to="/">
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
                  className="dropdown"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown" to="/">
                      All Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown" to="/">
                      Technical Service
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown" to="/">
                      Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown" to="/">
                      Panel Repair
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown" to="/">
                      Monitoring
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown" to="/">
                      Diagnostics
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown" to="/">
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
                  className="dropdown"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown" to="/">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown" to="/">
                      Single Product
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown" to="/">
                      Shopping Cart
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown" to="/">
                      Checkout
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown" to="/">
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
          </div>
          <SideNav/>
        </div>
      </nav>
      <button
        className="scrollTop"
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? "flex" : "none" }}
      >
        <i className="flaticon-up-arrow"></i>
      </button>
    </>
  );
}

export default Navbar;
