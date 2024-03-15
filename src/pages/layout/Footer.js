import React from 'react';

function Footer() {
  return (
        <div className="bg-white container footer">
    <hr/>
    <div className='back-to-top'> <a href='#navbar'>Back to top </a> <span><img src='assets/SVG.png'  alt='arrow'/></span></div>
    <hr/>
           <div class="row mt-5">
        <div class="col-6 col-md">
            <h5 className='fw-bold text-start'>Beyond Solution</h5>
            <ul class="list-unstyled text-dark text-start">
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">Toyota Spektakuler</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">Toyota EZ Deal</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">Kinto</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">Toyota Financial Service</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">Get Your Offer</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">Form Inquiry</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">Pricelist</a></li>
            </ul>
        </div>
        <div class="col-6 col-md">
            <h5 className='fw-bold text-start'>Beyond Experience</h5>
            <ul class="list-unstyled text-dark text-start">
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">E-brochure</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">Toyota Live Showroom</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">Toyota Interactive Virtual Assistant</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">Toyota Official Store Solution</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">Find Dealer</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">Booking Service</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">Aftersales</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">Toyota Mobile Service</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">T-Care</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">mToyota</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">Toyota Genuine Accessories</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark">Special Service Campaign</a></li>
            </ul>
        </div>
        <div class="col-6 col-md">
            <h5 className='fw-bold text-start'>Beyond Technology</h5>
            <ul class="list-unstyled text-dark text-start">
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark" target="_blank" rel="noopener">T-intouch</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark" target="_blank" rel="noopener">Toyota Safety Sense</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark" target="_blank" rel="noopener">TNGA</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark" target="_blank" rel="noopener">Engine</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark" target="_blank" rel="noopener">Android Auto</a></li>
            </ul>
        </div>
        <div class="col-6 col-md">
            <h5 className='fw-bold text-start'>Beyond Sustainability</h5>
            <ul class="list-unstyled text-dark text-start">
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark" target="_blank" rel="noopener">ITFE</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark" target="_blank" rel="noopener">Toyota Berbagi</a></li>
            </ul>
        </div>
        <div class=" col-6 col-md">
            <h5 className='fw-bold text-start'>More</h5>
            <ul class="list-unstyled text-dark text-start">
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark" target="_blank" rel="noopener">Pressroom</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark" target="_blank" rel="noopener">Owners Manual</a></li>
                <li class="mb-2"><a href="#" class="text-decoration-none text-dark" target="_blank" rel="noopener">News & Information</a></li>
            </ul>
        </div>
        <div class="col-12 col-md">
            <h5 className='fw-bold text-start px-2 mt-4 mt-md-0'>Join us on</h5>
            <div className='d-flex text-start'>
              <div className='mx-1'><img src="assets/whatsapp.png" alt='logo' /></div>
              <div className='mx-1'><img src="assets/Instagram.png" alt='logo' /></div>
              <div className='mx-1'><img src="assets/facebook.png" alt='logo' /></div>
              <div className='mx-1'><img src="assets/Tiktok.png" alt='logo' /></div>
              <div className='mx-1'><img src="assets/YouTube.png" alt='logo' /></div>
              <div className='mx-1'><img src="assets/Twitter.png" alt='logo' /></div>
            </div>
            <div><div className='mt-3 text-start'><img src="assets/customer-care.png" alt='logo' /></div></div>
        </div>
            </div>
          <hr/>
            <div className='container text-center mt-3'>
                <p className='fw-bold'>©2023 Toyota Astra Motor</p>
                <p className='fw-bold'>All information applies to Indonesia vehicles only</p>
                <p className='fw-bold mt-4'>Privacy Policy <span className='mx-3'>|</span> Legal Cookie <span className='mx-3'>|</span> Contact Us</p>
            </div>
        </div>
  );
}

export default Footer;
