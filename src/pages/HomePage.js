import React from 'react';

function HomePage() {
  return (
    <div>
          <nav className="nav-1 navbar navbar-expand-lg pt-3">
      <div className="container">
        <a className="navbar-brand" href="#"><img src="assets/logo.png" alt='logo' /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
          <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Toyota Electrified
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Gazoo Racing</a></li>
            <li><a class="dropdown-item" href="#">Models</a></li>
            <li><a class="dropdown-item" href="#">Shopping Tools</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Gazoo Racing
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Gazoo Racing</a></li>
            <li><a class="dropdown-item" href="#">Models</a></li>
            <li><a class="dropdown-item" href="#">Shopping Tools</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Models
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Gazoo Racing</a></li>
            <li><a class="dropdown-item" href="#">Models</a></li>
            <li><a class="dropdown-item" href="#">Shopping Tools</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Shopping Tools
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Promotion
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown mx-2">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">SERVICES</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">PRODUCTS</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" href="#">WARRANTY</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" aria-disabled="true">T-CARE</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" aria-disabled="true">NEWS & EVENT</a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link" aria-disabled="true">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="assets/home-page-slider.png" className="d-block w-100" alt="Slide 1" />
          </div>
          <div className="carousel-item">
            <img src="assets/home-page-slider.png" className="d-block w-100" alt="Slide 2" />
          </div>
          <div className="carousel-item">
            <img src="assets/home-page-slider.png" className="d-block w-100" alt="Slide 3" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default HomePage;