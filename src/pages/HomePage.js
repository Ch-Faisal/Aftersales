import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';

function HomePage() {
  return (
    <div>
      <Header></Header>
      <div className='section-1 ' id='section-1'>
      <div id="carouselExample" className="carousel slide d-none d-lg-block" data-bs-ride="carousel">
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
         <div className="carousel-item">
          <img src="assets/home-page-slider.png" className="d-block w-100" alt="Slide 3" />
        </div>
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span aria-hidden="true">
          <i className="fas fa-chevron-left"></i> 
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span aria-hidden="true">
          <i className="fas fa-chevron-right"></i>
        </span>
        <span className="visually-hidden">Next</span>
      </button>

      <ol className="carousel-indicators">
        <li data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></li>
        <li data-bs-target="#carouselExample" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselExample" data-bs-slide-to="2"></li>
        <li data-bs-target="#carouselExample" data-bs-slide-to="3"></li>
      </ol>
    </div>
    <div className='d-block d-lg-none'>
        <img src='assets/showcase.png' alt='showcase' className='img-fluid w-100 '/>
    </div>
      </div>
      <div className='section-2 mt-5'>
        <div className='container'>
        <div className='section-2-content px-5 mb-4'>
            <div className='main-heading text-center'>
                    <h2 className='fw-bold'>Meningkatkan Kenyamanan Para Customer dengan Aftersales Test</h2>
                </div>
                <div className='section-text'>
                    <p>After Sales Service Toyota dengan kualitas servis terjamin karena kendaraan Anda akan ditangani oleh teknisi yang berpengalaman dan bersertifikat. Layanan di bengkel resmi Toyota menggunakan Toyota Genuine Parts yaitu suku cadang resmi dari Toyota dengan mengedepankan kualitas dan telah dirancang sesuai dengan spesifikasi dan kebutuhan kendaraan kesayangan Anda. Jaringan luas dengan 297 bengkel perawatan dan perbaikan serta 80 bengkel Body & Paint yang tersebar di seluruh penjuru Nusantara.</p>
                </div>
            </div>
            <div className='row px-5'>
                <div className='col-md-4'>
                   <div className='wrapper mb-4 mb-md-3'>
                    <div className='section-img'>
                        <img src="assets/value_icon_1.png" alt='' />
                        </div>
                        <div className='title mt-4'>
                        <h4 className='fw-bold'>Servis yang Berkualitas</h4>
                        </div>
                   </div>
                </div>
                <div className='col-md-4'>
                   <div className='wrapper mb-4 mb-md-3'>
                    <div className='section-img'>
                        <img src="assets/value_icon_2.png" alt='' />
                        </div>
                        <div className='title mt-4'>
                        <h4 className='fw-bold'>Toyota Genuine Parts</h4>
                        </div>
                   </div>
                </div>
                <div className='col-md-4'>
                   <div className='wrapper mb-4 mb-md-3'>
                    <div className='section-img'>
                        <img src="assets/location-icon.png" alt='' />
                        </div>
                        <div className='title mt-4'>
                        <h4 className='fw-bold px-4'>Jaringan yang luas</h4>
                        </div>
                   </div>
                </div>
            </div>
        </div>
      </div>
      <div className='container'>
        <h4 className='terbaik'>Rekomendasi Terbaik untuk Kendaraanmu</h4>
        <div className="row justify-content-center Terbaik ">
            <div className="input-group mb-3 w-75 ">
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                <option selected>All New Alphard</option>
                <option value="1">Alphard</option>
                <option value="2">untuk</option>
                <option value="3">Terbaik</option>
                </select>
                <div>         
                       <button className='btn Servis px-4 mx-2'>Lihat Servis</button>
                </div>
            </div>
        </div>
        </div>
      <div className='section-3 mt-5'>
  <div className='container'>
    <h5 className='fw-bold title'>Hanya Bengkel Resmi Toyota yang mengerti </h5>
    <h5 className='fw-bold'> kendaraan Toyota Anda  </h5>
    <p className='mb-5'>Telusuri penawaran terbaik di bengkel Resmi kami!</p>
    <div className="row">
      <div className="col-sm-6 col-lg-4">
        <div className="card mt-4 mt-lg-0" style={{width: "18rem"}}>
          <img src="assets/services.png" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title fw-bold">Services</h4>
            <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4">
        <div className="card mt-4 mt-lg-0" style={{width: "18rem"}}>
          <img src="assets/products-img.png" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title fw-bold">Products</h4>
            <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4">
        <div className="card mt-4 mt-lg-0" style={{width: "18rem"}}>
          <img src="assets/warrenty-img.png" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h4 className="card-title fw-bold">Warrenty</h4>
            <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-sm-6 col-lg-4">
        <div className="card mt-4 mt-lg-0" style={{width: "18rem"}}>
          <img src="assets/T-care.png" className="card-img-top" alt="t-care-img"/>
          <div className="card-body">
            <h5 className="card-title fw-bold">T-Care</h5>
            <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4">
        <div className="card mt-4 mt-lg-0" style={{width: "18rem"}}>
          <img src="assets/News-event.png" className="card-img-top" alt="news-event-img"/>
          <div className="card-body">
            <h5 className="card-title fw-bold">News-Event</h5>
            <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4">
        <div className="card mt-4 mt-lg-0" style={{width: "18rem"}}>
          <img src="assets/faq.png" className="card-img-top" alt="faq-img"/>
          <div className="card-body">
            <h5 className="card-title fw-bold">FAQ</h5>
            <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
          </div>
        </div>
      </div>
    </div>
    <div className='logos d-flex justify-content-center mt-5 mb-4'>
        <div className='mx-2'>
            <img src="assets/quality-service.png"  alt="t-care-img"/>
        </div>
        <div className='mx-2'>
        <img src="assets/genuine-parts (1).png"  alt="t-care-img"/>
        </div>
        <div className='mx-2'>
        <img src="assets/tmo.png"  alt="t-care-img"/>
        </div>
    </div>
  </div>
</div>


      <Footer></Footer>
    </div>
  );
}

export default HomePage;
