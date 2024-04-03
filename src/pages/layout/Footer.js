import React from "react";
function Footer() {
  const scrollToTop = () => {
    const navbar = document.getElementById("navbar_top");
    navbar.scrollIntoView({ behavior: "smooth" });
  };
  const BookingService = () => {
    window.location.href = "https://www.toyota.astra.co.id/shopping-tools/booking-service";
  };

  return (
    <div>
       <div class="wrapper1 " id="wrapper1">
        <ul onClick={BookingService}>
          <li class="whatsapp mt-3">
            <div className="fa">
              <img src="/assets/sideoption.png" alt="" />
            </div>
            <p className="sideoption pt-1">Booking Service</p>
          </li>
        </ul>
      </div>
       <div class="wrapper2 d-none d-md-block" id="wrapper2">
        <ul onClick={scrollToTop}>
          <li class="whatsapp mt-3">
            <div className="fa d-flex"><svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_2119_64084)">
                <path
                  d="M2 7.14286L8 2L14 7.14286M2 14L8 8.85714L14 14"
                  stroke="white"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_2119_64084">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            </div>
            <p className="sideoption ps-2 pt-1">Back to Top</p>
          </li>
        </ul>
      </div>
    <div className="bg-white container-fluid footer px-0">
      <hr />
      <div className="back-to-top">
        <a onClick={scrollToTop}>Back to top </a>
        <span>
          <img src="/assets/SVG.png" alt="arrow" />
        </span>
      </div>
      <hr />
      <div className="container list d-none d-md-block">
        <div class="row mt-5">
          <div class="col-6 col-md">
            <h5 className="fw-bold text-start">Beyond Solution</h5>
            <ul class="list-unstyled text-dark text-start">
              <li class="mb-2">
                <a href="https://www.toyota.astra.co.id/spektakuler" target="_blank" class="text-decoration-none text-dark">
                  Toyota Spektakuler
                </a>
              </li>
              <li class="mb-2">
                <a href="https://finance.toyota.astra.co.id/ezdeal" target="_blank" class="text-decoration-none text-dark">
                  Toyota EZ Deal
                </a>
              </li>
              <li class="mb-2">
                <a href="https://www.toyota.astra.co.id/kinto" target="_blank" class="text-decoration-none text-dark">
                  Kinto
                </a>
              </li>
              <li class="mb-2">
                <a href="https://finance.toyota.astra.co.id/ezdeal" target="_blank" class="text-decoration-none text-dark">
                  Toyota Financial Service
                </a>
              </li>
              <li class="mb-2">
                <a href="https://simulation.toyota.astra.co.id/" target="_blank" class="text-decoration-none text-dark">
                  Get Your Offer
                </a>
              </li>
              <li class="mb-2">
                <a href="https://www.toyota.astra.co.id/shopping-tools/konsultasi-pembelian" target="_blank" class="text-decoration-none text-dark">
                  Form Inquiry
                </a>
              </li>
              <li class="mb-2">
                <a href="https://www.toyota.astra.co.id/shopping-tools/pricelist" target="_blank" class="text-decoration-none text-dark">
                  Pricelist
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5 className="fw-bold text-start">Beyond Experience</h5>
            <ul class="list-unstyled text-dark text-start">
              <li class="mb-2">
                <a href="https://www.toyota.astra.co.id/shopping-tools/e-brochure" target="_blank" class="text-decoration-none text-dark">
                  E-brochure
                </a>
              </li>
              <li class="mb-2">
                <a href="https://liveshowroom.toyota.astra.co.id/showroom" target="_blank" class="text-decoration-none text-dark">
                  Toyota Live Showroom
                </a>
              </li>
              <li class="mb-2">
                <a href="https://api.whatsapp.com/send/?phone=628111500315&text&type=phone_number&app_absent=0" target="_blank" class="text-decoration-none text-dark">
                  Toyota Interactive Virtual Assistant
                </a>
              </li>
              <li class="mb-2">
                <a href="https://toss.toyota.astra.co.id/" target="_blank" class="text-decoration-none text-dark">
                  Toyota Official Store Solution
                </a>
              </li>
              <li class="mb-2">
                <a href="https://www.toyota.astra.co.id/shopping-tools/dealer" target="_blank" class="text-decoration-none text-dark">
                  Find Dealer
                </a>
              </li>
              <li class="mb-2">
                <a href="https://www.toyota.astra.co.id/shopping-tools/booking-service" target="_blank" class="text-decoration-none text-dark">
                  Booking Service
                </a>
              </li>
              <li class="mb-2">
                <a href="https://aftersales.toyota.astra.co.id/" target="_blank" class="text-decoration-none text-dark">
                  Aftersales
                </a>
              </li>
              <li class="mb-2">
                <a href="https://aftersales.toyota.astra.co.id/" target="_blank" class="text-decoration-none text-dark">
                  Toyota Mobile Service
                </a>
              </li>
              <li class="mb-2">
                <a href="https://aftersales.toyota.astra.co.id/t-care" target="_blank" class="text-decoration-none text-dark">
                  T-Care
                </a>
              </li>
              <li class="mb-2">
                <a href="https://www.toyota.astra.co.id/mtoyota" target="_blank" class="text-decoration-none text-dark">
                  mToyota
                </a>
              </li>
              <li class="mb-2">
                <a href="https://www.toyota.astra.co.id/accessories" target="_blank" class="text-decoration-none text-dark">
                  Toyota Genuine Accessories
                </a>
              </li>
              <li class="mb-2">
                <a href="https://ssc.toyota.astra.co.id/" target="_blank" class="text-decoration-none text-dark">
                  Special Service Campaign
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5 className="fw-bold text-start">Beyond Technology</h5>
            <ul class="list-unstyled text-dark text-start">
              <li class="mb-2">
                <a
                  href="https://www.toyota.astra.co.id/tintouch"
                  class="text-decoration-none text-dark"
                  target="_blank"
                  rel="noopener"
                >
                  T-intouch
                </a>
              </li>
              <li class="mb-2">
                <a
                  href="https://www.toyota.astra.co.id/technology/engine"
                  class="text-decoration-none text-dark"
                  target="_blank"
                  rel="noopener"
                >
                  Toyota Safety Sense
                </a>
              </li>
              <li class="mb-2">
                <a
                  href="https://www.toyota.astra.co.id/tnga"
                  class="text-decoration-none text-dark"
                  target="_blank"
                  rel="noopener"
                >
                  TNGA
                </a>
              </li>
              <li class="mb-2">
                <a
                  href="https://www.toyota.astra.co.id/technology/safety"
                  class="text-decoration-none text-dark"
                  target="_blank"
                  rel="noopener"
                >
                  Engine
                </a>
              </li>
              <li class="mb-2">
                <a
                  href="https://www.toyota.astra.co.id/androidauto"
                  class="text-decoration-none text-dark"
                  target="_blank"
                  rel="noopener"
                >
                  Android Auto
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5 className="fw-bold text-start">Beyond Sustainability</h5>
            <ul class="list-unstyled text-dark text-start">
              <li class="mb-2">
                <a
                  href="https://itstimeforeveryone.toyota.astra.co.id/"
                  class="text-decoration-none text-dark"
                  target="_blank"
                  rel="noopener"
                >
                  ITFE
                </a>
              </li>
              <li class="mb-2">
                <a
                  href="https://www.toyota.co.id/sustainability/toyota-berbagi"
                  class="text-decoration-none text-dark"
                  target="_blank"
                  rel="noopener"
                >
                  Toyota Berbagi
                </a>
              </li>
            </ul>
          </div>
          <div class=" col-6 col-md">
            <h5 className="fw-bold text-start">More</h5>
            <ul class="list-unstyled text-dark text-start">
              <li class="mb-2">
                <a
                  href="https://pressroom.toyota.astra.co.id/"
                  class="text-decoration-none text-dark"
                  target="_blank"
                  rel="noopener"
                >
                  Pressroom
                </a>
              </li>
              <li class="mb-2">
                <a
                  href="https://www.toyota.astra.co.id/ownership#downershipOwnerManual"
                  class="text-decoration-none text-dark"
                  target="_blank"
                  rel="noopener"
                >
                  Owners Manual
                </a>
              </li>
              <li class="mb-2">
                <a
                  href="https://www.toyota.astra.co.id/corporate-information/news-promo"
                  class="text-decoration-none text-dark"
                  target="_blank"
                  rel="noopener"
                >
                  News & Information
                </a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md">
            <h5 className="fw-bold text-start px-2 mt-4 mt-md-0">Join us on</h5>
            <div className="d-flex text-start">
              <div className="mx-1">
              <a
               href="https://api.whatsapp.com/send/?phone=628111500315&text&type=phone_number&app_absent=0" target="_blank">
                <img src="assets/whatsapp.png" alt="logo" />
                </a>
              </div>
              <div className="mx-1">
              <a
               href="https://www.instagram.com/toyotaid/" target="_blank">
                <img src="assets/Instagram.png" alt="logo" />
                </a>
              </div>
              <div className="mx-1">
              <a
               href="https://www.facebook.com/ToyotaID" target="_blank">
                <img src="assets/Facebook.png" alt="logo" />
                </a>
              </div>
              <div className="mx-1">
              <a
               href="https://www.tiktok.com/@toyotaid" target="_blank">
                <img src="assets/Tiktok.png" alt="logo" />
                </a>
              </div>
              <div className="mx-1">
              <a
               href="https://www.youtube.com/channel/UCxVa64ZcWGi_VStlkfmoteQ" target="_blank">
                <img src="assets/YouTube.png" alt="logo" />
                </a>
              </div>
              <div className="mx-1">
              <a
               href="https://twitter.com/ToyotaID" target="_blank">
                <img src="assets/Twitter.png" alt="logo" />
                </a>
              </div>
            </div>
            <div>
              <div className="mt-3 text-start">
                <a href="https://linktr.ee/toyotaastramotor?utm_source=linktree_profile_share&ltsid=81f3bbcd-6474-4017-a99f-58a9b675f5ce" target="_blank">
                <img src="assets/customer-care.png" alt="logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*for mobile devices*/}
      <div className="container d-block d-md-none">
        <div class="col-12 col-md">
          <h5 className="fw-bold text-start px-2 mt-5 mb-4 mt-md-0">
            Join us on
          </h5>
          <div className="d-flex text-start mb-4">
            <div className="mx-1">
              <img src="/assets/whatsapp.png" alt="logo" />
            </div>
            <div className="mx-1">
              <img src="/assets/Instagram.png" alt="logo" />
            </div>
            <div className="mx-1">
              <img src="/assets/Facebook.png" alt="logo" />
            </div>
            <div className="mx-1">
              <img src="/assets/Tiktok.png" alt="logo" />
            </div>
            <div className="mx-1">
              <img src="/assets/YouTube.png" alt="logo" />
            </div>
            <div className="mx-1">
              <img src="/assets/Twitter.png" alt="logo" />
            </div>
          </div>
          <div>
            <div className="mt-3 text-start">
              <img src="/assets/customer-care.png" alt="logo" />
            </div>
          </div>
        </div>
        <div
          className="accordion accordion-flush mt-4"
          id="accordionFlushExample"
        >
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Beyond Solution
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <ul class="list-unstyled text-dark text-start">
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none text-dark">
                      Toyota Spektakuler
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none text-dark">
                      Toyota EZ Deal
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none text-dark">
                      Kinto
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none text-dark">
                      Toyota Financial Service
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none text-dark">
                      Get Your Offer
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none text-dark">
                      Form Inquiry
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none text-dark">
                      Pricelist
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Beyond Experience
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                {" "}
                <ul class="list-unstyled text-dark text-start">
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none text-dark">
                      E-brochure
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none text-dark">
                      Toyota Live Showroom
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none text-dark">
                      Toyota Interactive Virtual Assistant
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none text-dark">
                      Toyota Official Store Solution
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none text-dark">
                      Find Dealer
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none text-dark">
                      Booking Service
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none text-dark">
                      Aftersales
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none text-dark">
                      Toyota Mobile Service
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none text-dark">
                      T-Care
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none text-dark">
                      mToyota
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none text-dark">
                      Toyota Genuine Accessories
                    </a>
                  </li>
                  <li class="mb-2">
                    <a href="#" class="text-decoration-none text-dark">
                      Special Service Campaign
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Beyond Technology
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <ul class="list-unstyled text-dark text-start">
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-decoration-none text-dark"
                      target="_blank"
                      rel="noopener"
                    >
                      T-intouch
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-decoration-none text-dark"
                      target="_blank"
                      rel="noopener"
                    >
                      Toyota Safety Sense
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-decoration-none text-dark"
                      target="_blank"
                      rel="noopener"
                    >
                      TNGA
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-decoration-none text-dark"
                      target="_blank"
                      rel="noopener"
                    >
                      Engine
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-decoration-none text-dark"
                      target="_blank"
                      rel="noopener"
                    >
                      Android Auto
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFourth"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Beyond Sustainability
              </button>
            </h2>
            <div
              id="flush-collapseFourth"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <ul class="list-unstyled text-dark text-start">
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-decoration-none text-dark"
                      target="_blank"
                      rel="noopener"
                    >
                      ITFE
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-decoration-none text-dark"
                      target="_blank"
                      rel="noopener"
                    >
                      Toyota Berbagi
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                More
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <ul class="list-unstyled text-dark text-start">
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-decoration-none text-dark"
                      target="_blank"
                      rel="noopener"
                    >
                      Pressroom
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-decoration-none text-dark"
                      target="_blank"
                      rel="noopener"
                    >
                      Owners Manual
                    </a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="#"
                      class="text-decoration-none text-dark"
                      target="_blank"
                      rel="noopener"
                    >
                      News & Information
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div className="container text-center mt-3">
        <p className="fw-bold">©2023 Toyota Astra Motor</p>
        <p className="fw-bold">
          All information applies to Indonesia vehicles only
        </p>
        <p className="fw-bold mt-4">
          Privacy Policy <span className="mx-3">|</span> Legal Cookie{" "}
          <span className="mx-3">|</span> Contact Us
        </p>
      </div>
    </div>
    </div>
  );
}

export default Footer;
