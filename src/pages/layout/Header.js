import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsSticky(entry.isIntersecting); // Update isSticky based on intersection
      });
    }, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div ref={targetRef} className={isSticky ? 'sticky' : ''}>
          <nav className="nav-1 navbar navbar-expand-lg pt-3" id='navbar'>
      <div className="container">
        <a className="navbar-brand" href="#"><img src="assets/logo.png" alt='logo' /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
          <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle text-dark hover-color" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Toyota Electrified
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Gazoo Racing</a></li>
            <li><a class="dropdown-item" href="#">Models</a></li>
            <li><a class="dropdown-item" href="#">Shopping Tools</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle text-dark hover-color" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Gazoo Racing
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Gazoo Racing</a></li>
            <li><a class="dropdown-item" href="#">Models</a></li>
            <li><a class="dropdown-item" href="#">Shopping Tools</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle text-dark hover-color" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Models
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Gazoo Racing</a></li>
            <li><a class="dropdown-item" href="#">Models</a></li>
            <li><a class="dropdown-item" href="#">Shopping Tools</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle text-dark hover-color" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Shopping Tools
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle text-dark hover-color" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Promotion
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle text-dark hover-color" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          More
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
          </ul>
        </div>
       <div className='search-img'>
       <ul className="navbar-nav pt-1">
          <li className="nav-item">
            <a className="nav-link" href="#"><img src="assets/Button.png" alt='logo' /></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#"><img src="assets/Icon FInd Dealer 2.png" alt='logo' style={{ margin: '-5px' }}  /></a>
        </li>
          </ul>
       </div>
      </div>
    </nav>
        <nav className="navbar navbar-expand-lg">
      <div className="container">
        <NavLink to="/" className="navbar-brand">Toyota After Sales</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav2" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span><img src='assets/Down.png'/></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav2">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/services" className="nav-link active custom-border-radius text-white" aria-current="page">SERVICES</NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink to="/products" className="nav-link custom-border-radius text-white ">PRODUCTS</NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink to="/warranty" className="nav-link custom-border-radius text-white">WARRANTY</NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink to="/t-care" className="nav-link custom-border-radius text-white" aria-disabled="true">T-CARE</NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink to="/news-and-events" className="nav-link custom-border-radius text-white" aria-disabled="true">NEWS & EVENT</NavLink>
            </li>
            <li className="nav-item mx-3">
              <NavLink  to="/faq"  className="nav-link custom-border-radius text-white" aria-disabled="true">FAQ</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Header;
