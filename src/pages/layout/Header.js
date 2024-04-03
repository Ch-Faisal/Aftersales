import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
function Header() {

  useEffect(() => {
    var nav_link_1 = document.querySelector(".nav_link_1");
    var nav_link_2 = document.querySelector(".nav_link_2");
    var nav_link_3 = document.querySelector(".nav_link_3");
    var nav_link_4 = document.querySelector(".nav_link_4");
    var nav_link_5 = document.querySelector(".nav_link_5");
    var nav_link_6 = document.querySelector(".nav_link_6");
 

    if (nav_link_1.classList.contains("active")) {
      nav_link_1.classList.add("custom_active_class");
    }
    if (nav_link_2.classList.contains("active")) {
      nav_link_2.classList.add("custom_active_class");
    }

    if (nav_link_3.classList.contains("active")) {
      nav_link_3.classList.add("custom_active_class");
    }

    if (nav_link_4.classList.contains("active")) {
      nav_link_4.classList.add("custom_active_class");
    }
    
    if (nav_link_5.classList.contains("active")) {
      nav_link_5.classList.add("custom_active_class");
    }
    
    if (nav_link_6.classList.contains("active")) {
      nav_link_6.classList.add("custom_active_class");
    }
  }, []);
  return (
    <div className="custom_margin_header_bottom">
    <div className=" sticky">
      <nav className="nav-1 navbar navbar-expand-lg pt-3" id="navbar">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/assets/logo.png" alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li class="nav-item dropdown mx-2">
                <a
                  class="nav-link dropdown-toggle text-dark hover-color"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Toyota Electrified
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Gazoo Racing
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Models
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Shopping Tools
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown mx-2">
                <a
                  class="nav-link dropdown-toggle text-dark hover-color"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gazoo Racing
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Gazoo Racing
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Models
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Shopping Tools
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown mx-2">
                <a
                  class="nav-link dropdown-toggle text-dark hover-color"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Models
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Gazoo Racing
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Models
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Shopping Tools
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown mx-2">
                <a
                  class="nav-link dropdown-toggle text-dark hover-color"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shopping Tools
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown mx-2">
                <a
                  class="nav-link dropdown-toggle text-dark hover-color"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Promotion
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown mx-2">
                <a
                  class="nav-link dropdown-toggle text-dark hover-color"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="search-img">
            <ul className="navbar-nav pt-1">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img src="/assets/Button.png" alt="logo" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <img
                    src="/assets/Icon FInd Dealer 2.png"
                    alt="logo"
                    style={{ margin: "-5px" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg navbar_bottom_custom_padding">
        <div className="container-lg container-fluid px-0">
          <NavLink to="/" className="navbar-brand mx-lg-0 mx-3 navbar_bottom_custom_padding_1">
            Toyota After Sales
          </NavLink>
          <button
            className="navbar-toggler mx-lg-0 mx-3 navbar_bottom_custom_padding_2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav2"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <img src="/assets/Down.png" />
            </span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end color_in_mobile"
            id="navbarNav2"
          >
            <ul className="navbar-nav">
              <li className="nav-item mx-0">
                <div className="d-flex justify-content-between justify-content-lg-start">
                <NavLink
                  to="/services"
                  className="nav-link nav_link_1 custom-border-radius  mx-lg-0 mx-3"
                  aria-current="page"
                >
                  SERVICES
                </NavLink>
                <button
            className="navbar-toggler mx-lg-0 mx-3 navbar_bottom_custom_padding_2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav3"
            aria-controls="navbarNav3"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <img src="/assets/Down.png" />
            </span>
          </button>
          </div>
          <div className="collapse" id="navbarNav3">
  <ul className="navbar-nav">
    <li className="nav-item mx-3">
      <NavLink to="/services" className="nav-link  custom-border-radius text-white">
      General Repair
      </NavLink>
    </li>
    <li className="nav-item mx-3">
      <NavLink to="/services" className="nav-link custom-border-radius text-white">
      Body & Paint
      </NavLink>
    </li>
    <li className="nav-item mx-3">
      <NavLink to="/services" className="nav-link custom-border-radius text-white">
      Toyota Mobile Service
      </NavLink>
    </li>
    <li className="nav-item mx-3">
      <NavLink to="/services" className="nav-link custom-border-radius text-white">
      Express Maintenance
      </NavLink>
    </li>
  </ul>
</div>
              </li>
              <li className="nav-item mx-0">
              <div className="d-flex justify-content-between justify-content-lg-start">
                <NavLink
                  to="/products"
                  className="nav-link nav_link_2 custom-border-radius mx-3"
                >
                  PRODUCTS
                </NavLink>
                <button
            className="navbar-toggler mx-lg-0 mx-3 navbar_bottom_custom_padding_2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav4"
            aria-controls="navbarNav4"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <img src="/assets/Down.png" />
            </span>
          </button>
          </div>
          <div className="collapse" id="navbarNav4">
  <ul className="navbar-nav">
    <li className="nav-item mx-3">
      <NavLink to="/products" className="nav-link custom-border-radius text-white">
      Service Parts
      </NavLink>
    </li>
    <li className="nav-item mx-3">
      <NavLink to="/products" className="nav-link custom-border-radius text-white">
      TMO
      </NavLink>
    </li>
    <li className="nav-item mx-3">
      <NavLink to="/products" className="nav-link custom-border-radius text-white">
      TGB
      </NavLink>
    </li>
    <li className="nav-item mx-3">
      <NavLink to="/products" className="nav-link custom-border-radius text-white">
      Tire Solution
      </NavLink>
    </li>
  </ul>
</div>
              </li>
              <li className="nav-item mx-0">
                <NavLink
                  to="/warranty"
                  className="nav-link nav_link_3 custom-border-radius  mx-3"
                >
                  WARRANTY
                </NavLink>
              </li>
              <li className="nav-item mx-0">
                <NavLink
                  to="/t-care"
                  className="nav-link nav_link_4 custom-border-radius  mx-3"
                >
                  T-CARE
                </NavLink>
              </li>
              <li className="nav-item mx-0">
                <NavLink
                  to="/news-information"
                  className="nav-link nav_link_5 custom-border-radius  mx-3"
                  aria-disabled="true"
                >
                  NEWS & EVENT
                </NavLink>
              </li>
              <li className="nav-item mx-0">
                <NavLink
                  to="/faq"
                  className="nav-link nav_link_6 custom-border-radius  mx-3"
                  aria-disabled="true"
                >
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </div>
  );
}

export default Header;
