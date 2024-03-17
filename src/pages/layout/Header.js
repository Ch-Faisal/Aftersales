import React from 'react';

function Header() {
  return (
    <div>
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
        <a className="navbar-brand" href="#">Toyota After Sales</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav2" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span><img src='assets/Down.png'/></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav2">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active custom-border-radius text-white" aria-current="page" href="#">SERVICES</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link custom-border-radius text-white " href="#">PRODUCTS</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link custom-border-radius text-white" href="#">WARRANTY</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link custom-border-radius text-white" aria-disabled="true">T-CARE</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link custom-border-radius text-white" aria-disabled="true">NEWS & EVENT</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link custom-border-radius text-white" aria-disabled="true">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Header;
