import React, { useState, useEffect} from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { useDispatch, useSelector } from 'react-redux';
// import store from '../store/store';

import '../css/home.css';
function HomePage() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.value);

  const [activeTab, setActiveTab] = useState(0); // Initialize active tab index
  const [activeTab2, setActiveTab2] = useState(0); // Initialize active tab index
  console.log("Token:",value); // Log the value

  // Set initial value
  useEffect(() => {
    const initialValue = 'OMN2FLG6hFY1QOUSB8WsEAl05JXV2XuZneARmOujoZsAq5wJO1qZ4rg4gTkE';
    dispatch({ type: 'SET_VALUE', payload: initialValue });
  }, [dispatch]);


  const handleTabClick = (index) => {
      setActiveTab(index);
  };
  const handleTab2Click = (index) => {
    setActiveTab2(index); 
};

    // Function to scroll left
    const scrollLeft = () => {
      document.getElementById("myTab").scrollLeft -= 100;
    };
  
    // Function to scroll right
    const scrollRight = () => {
      document.getElementById("myTab").scrollLeft += 100; // Adjust scroll distance as needed
    };
  return (
    <div>
      <Header></Header>
      <div className='section-1 p-0 ' id='section-1'>
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
        <div className='container px-0'>
        <div className='section-2-content px-0 px-md-5 mb-4'>
            <div className='main-heading text-center'>
                    <h2 className='fw-bold'>Meningkatkan Kenyamanan Para Customer dengan Aftersales Test</h2>
                </div>
                <div className='section-text'>
                    <p>After Sales Service Toyota dengan kualitas servis terjamin karena kendaraan Anda akan ditangani oleh teknisi yang berpengalaman dan bersertifikat. Layanan di bengkel resmi Toyota menggunakan Toyota Genuine Parts yaitu suku cadang resmi dari Toyota dengan mengedepankan kualitas dan telah dirancang sesuai dengan spesifikasi dan kebutuhan kendaraan kesayangan Anda. Jaringan luas dengan 297 bengkel perawatan dan perbaikan serta 80 bengkel Body & Paint yang tersebar di seluruh penjuru Nusantara.</p>
                </div>
            </div>
            <div className='px-lg-5 justify-content-center justify-content-lg-start mx-auto'>
          <div className='row mx-boxes align-items-stretch'>
          <div className='col-6 col-md'>
                  <div className='wrapper border-0 mb-4 mb-md-3 h-100'>
                      <div className='section-img'>
                        <img src="assets/value_icon_1.png" alt='' />
                    </div>
                    <div className='title mt-4'>
                        <h4 className='fw-bold text-dark'>Servis yang Berkualitas</h4>
                    </div>
                </div>
            </div>
            <div className='col-6 col-md w-50'>
                <div className='wrapper border-0 mb-4 mb-md-3 h-100'>
                    <div className='section-img'>
                        <img src="assets/value_icon_2.png" alt='' />
                    </div>
                    <div className='title mt-5'>
                        <h4 className='fw-bold text-dark'>Toyota Genuine Parts</h4>
                    </div>
                </div>
            </div>
            <div className='col-6 mx-auto col-md d-flex justify-content-center mt-2'>
                <div className='wrapper border-0 mb-4 mb-md-3 h-100'>
                    <div className='section-img'>
                        <img src="assets/location-icon.png" alt='' />
                    </div>
                    <div className='title mt-4'>
                        <h4 className='fw-bold px-md-4 text-dark'>Jaringan yang luas</h4>
                    </div>
                </div>
            </div>
          </div>
         </div>
        </div>
      </div>
      <div className='container'>
        <h4 className='terbaik mb-4 mb-md-4'>Rekomendasi Terbaik untuk Kendaraanmu</h4>
        <div className="row justify-content-center Terbaik ">
        <div className="d-md-flex mb-3 w-75 custom-select-container">
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"  value={selectedCar}
              onChange={handleCarChange}>
               {carModels.map((carModel, index) => (
                <option key={index} value={carModel.name}>{carModel.name}</option>
              ))}        
            </select> 
            <button className='btn Servis px-3 py-1 mx-2' style={{ whiteSpace: 'nowrap' }}>Lihat Servis</button>
        </div>
        </div>
        </div>
       
        <div className='all-new-alphard py-2'>
      <img src={selectedCarImage} alt={selectedCar} />
      {loading && (
        <div className='spinner-overlay'>
          <Oval height="80" width="80" radius="9" color="blue" wrapperStyle={{}} ariaLabel="three-dots-loading" /> 
        </div>
      )}
      <p className='text-center'>{selectedCar}</p>
    </div>
          <div className='container-fluid'>
          <div className='container'>
          <div className='new-alphard mt-5'>
          <ul className="nav nav-pills nav-fill d-flex">
            {carVariant.map((variant, index) => (
                <li className="nav-item" key={index}>
                <a
                    className={`nav-link text-nowrap ${activeTab === index ? 'active' : ''}`}
                    onClick={() => handleTabClick(index)}
                    href="javascript:void(0)">
                    {variant.name}
                </a>
                </li>
            ))}
            </ul>
          </div>
            <div>
                {activeTab === 0 && <div>
                  <div className="container">
                <div className="row d-flex justify-content-center mt-4">
                  <div className="col-md-12">
                    <div className="bg-white">
                      <div className="container" style={{ position: "relative" }}>
                        <div className="scroll-buttons d-flex align-items-center">
                          <img
                            onClick={scrollRight}
                            className="ms-5 cursor-pointer"
                            src="/assets/Frameright.svg"
                            alt=""
                            style={{
                              position: "absolute",
                              right: "-4px",
                              marginRight: "0px",
                              top: "20px"
                            }}
                          />
                          <img
                            className="mt-3 cursor-pointer"
                            onClick={scrollLeft}
                            src="/assets/Frameleft.svg"
                            alt=""
                            style={{ position: "absolute", top: "8px", left:"-4px" }}
                          />
                        </div>
                        <ul
                            className="nav custom-home-tabs custom-nav-tabs nav-fill custom-nav-fill"
                            id="myTab"
                            role="tablist"
                            style={{ borderBottom: "none !important", whiteSpace: "nowrap" }}
                            >
                          <li className="nav-item  custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link active tab-boxes"
                              id="faq_tab_1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#faq_tab_1"
                              type="button"
                              role="tab"
                              aria-controls="faq_tab_1"
                              aria-selected="true"
                              style={{ margin: "0", padding: "2px", height: "60px", width: "160px" }}
                              >
                              <div className="d-flex flex-column servis-tabs py-1 ">
                                <span>Servis ke-1</span>
                                <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                              id="faq_tab_2-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#faq_tab_2"
                              type="button"
                              role="tab"
                              aria-controls="faq_tab_2"
                              aria-selected="false"
                              style={{ margin: "0", padding: "2px", height: "60px",width: "155px" }}
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-2</span>
                                <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                              id="faq_tab_3-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#faq_tab_3"
                              type="button"
                              role="tab"
                              aria-controls="faq_tab_3"
                              aria-selected="false"
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-3</span>
                                <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes tab-boxes"
                              id="faq_tab_4-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#faq_tab_4"
                              type="button"
                              role="tab"
                              aria-controls="faq_tab_4"
                              aria-selected="false"
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-4</span>
                                <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                              id="faq_tab_5-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#faq_tab_5"
                              type="button"
                              role="tab"
                              aria-controls="faq_tab_5"
                              aria-selected="false"
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-5</span>
                                 <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                              id="faq_tab_6-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#faq_tab_6"
                              type="button"
                              role="tab"
                              aria-controls="faq_tab_6"
                              aria-selected="false"
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-6</span>
                                 <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                              id="faq_tab_7-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#faq_tab_7"
                              type="button"
                              role="tab"
                              aria-controls="faq_tab_7"
                              aria-selected="false"
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-7</span>
                                 <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                              id="faq_tab_8-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#faq_tab_8"
                              type="button"
                              role="tab"
                              aria-controls="faq_tab_8"
                              aria-selected="false"
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-8</span>
                                 <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                              id="faq_tab_9-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#faq_tab_9"
                              type="button"
                              role="tab"
                              aria-controls="faq_tab_9"
                              aria-selected="false"
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-9</span>
                                 <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                              id="faq_tab_10-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#faq_tab_10"
                              type="button"
                              role="tab"
                              aria-controls="faq_tab_10"
                              aria-selected="false"
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-10</span>
                                 <span>FREE</span>
                              </div>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="tab-content container-fluid p-0"
                        id="myTabContent"
                      >
                        <div
                          className="tab-pane fade active show px-3 px-lg-0"
                          id="faq_tab_1"
                          role="tabpanel"
                          aria-labelledby="faq_tab_1-tab"
                        >
                          <div className="container mt-5">
                          <div className='servis-content mx-md-5'>
                                <h1 className='servis-title'>GRATIS</h1>
                                <h1>Servis berkala setelah <span className='inline-text' >6 bulan</span> </h1>
                                <p className='text mt-3'>{serviceDescriptions.length > 0 && serviceDescriptions[0] ? serviceDescriptions[0] : "No description available"}</p>
                            </div>
                            <div className='row mt-5 mx-md-5'>
                          <div className='col-md-6'>
                              <div className='d-flex justify-content-center align-items-center mx-4'>
                                  <div>
                                      <img src="assets/Komponen Mesin.png" alt='' />
                                  </div>
                                  <p className='px-3 mb-0 text-nowrap'>Periksa Komponen Mesin</p> 
                              </div>
                              <div className='d-flex justify-content-between mt-4'>
                                  <div className='d-flex align-items-center'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Oli mesin</p>
                                  </div>
                                  <div className='d-flex align-items-center mx-md-5'>
                                      <img src="assets/Check.png" className='mx-md-5' alt='' />
                                      <p className='px-3 px-md-0 mb-0 text-nowrap '>Pipa gas buang</p> 
                                  </div>
                              </div>
                              <div className='d-flex mt-3'>
                                  <div className='d-flex align-items-center'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Sistem pendingin</p> 
                                  </div>
                                  <div className='d-flex align-items-center mx-md-4'>
                                      <img src="assets/Check.png" className='mx-md-1' alt='' />
                                      <p className='px-3 mb-0 text-nowrap' >Baterai 12 Volt</p> 
                                  </div>
                              </div>
                              <div className='d-flex justify-content-between mt-3'>
                                  <div className='d-flex align-items-center'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Cairan pendingin mesin & power control unit</p>
                                  </div>
                              </div>
                          </div>
                          <div className='col-md-6 mt-5 mt-md-0'>
                              <div className='d-flex justify-content-center align-items-center'>
                                  <div>
                                      <img src="assets/Komponen Mesin.png" alt='' />
                                  </div>
                                  <p className='px-3 mb-0 text-nowrap'>Periksa Komponen Mesin</p> 
                              </div>
                              <div className='d-flex mt-3'>
                                  <div className='d-flex align-items-center'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Pedal rem</p> 
                                  </div>
                                  <div className='d-flex align-items-center mx-md-4'>
                                      <img src="assets/Check.png" className=' ms-2 ms-md-2 mx-md-2' alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Ban</p>
                                  </div>
                              </div>
                              <div className='d-flex  mt-3'>
                                  <div className='d-flex align-items-center'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Minyak rem</p>
                                  </div>
                                  <div className='d-flex align-items-center mx-md-4'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Lampu, Klakson, Kaca Wiper</p>
                                  </div>
                              </div>
                              <div className='d-flex mt-3'>
                                  <div className='d-flex align-items-center'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Suspensi</p>
                                  </div>
                                  <div className='d-flex align-items-center mx-md-5'>
                                      <img src="assets/Check.png" className='ms-3 ms-md-0' alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Isi cairan AC</p>
                                  </div>
                              </div>
                          </div>
                      </div>      
                      <div className='d-none d-lg-block'>
                            <div className='row mx-md-5'>
                            <h1 className='fw-bold mt-5 mb-5'>Opsi Produk Toyota Lainnya</h1>
                            <div className='col-6 col-md'>
                            <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 mx-md-3 py-1 d-flex align-items-center justify-content-center'>
                            <div className='section-img'>
                              <img src="assets/value_icon_1.png" alt='' />
                            </div>   
                          </div>
                        </div>
                        <div className='col-6 col-md'>
                        <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 mx-md-3 py-1 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'rgba(215, 25, 33, 1)' }}>
                                <div className='section-img ' >
                                    <img src="assets/TMO-02.png" alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='col-6 col-md'>
                            <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 mx-md-3 mt-2 mt-md-0 py-1 d-flex align-items-center justify-content-center'>
                                <div className='section-img'>
                                    <img src="assets/location-icon.png" alt='' />
                                </div>
                            </div>
                        </div>
                            </div>
                            <div className='row mx-md-5 mt-4'>
                            <div className='col-6 col-md'>
                            <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 mx-md-3 py-4 d-flex flex-column align-items-center justify-content-center'>
                            <div className='section-img'>
                              <img src="assets/4L 5W-30 Gasoline.png" alt='' />
                            </div>   
                            <p className='pt-2'>Layanan Ban dari Toyota</p>
                          </div>
                        </div>
                        <div className='col-6 col-md'>
                        <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 py-4 mx-3  d-flex flex-column align-items-center justify-content-center'>
                                <div className='section-img ' >
                                    <img src="assets/Rectangle 87.png" alt='' />
                                </div>
                                <p className='pt-2'>Layanan Ban dari Toyota</p>
                            </div>
                        </div>
                        <div className='col-6 col-md'>
                            <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 mx-3 py-4 d-flex flex-column align-items-center justify-content-center'>
                                <div className='section-img'>
                                    <img src="assets/Engine Room Treatment 1.png" alt='' />
                                </div>
                                <p className='pt-2'>Layanan Ban dari Toyota</p>
                            </div>
                        </div>
                            </div>
                            <div className='row mx-5 mt-4'>
                            <div className='col-6 col-md'>
                            <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 mx-3 py-4 d-flex flex-column align-items-center justify-content-center'>
                            <div className='section-img'>
                              <img src="assets/4L 5W-30 Gasoline.png" alt='' />
                            </div>   
                            <p className='pt-2'>Cairan pembersih kaca/mika lampu yang kusam</p>
                          </div>
                        </div>
                        <div className='col-6 col-md'>
                        <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 py-4 mx-3  d-flex flex-column align-items-center justify-content-center'>
                                <div className='section-img ' >
                                    <img src="assets/4L 5W-30 Gasoline (2).png" alt='' />
                                </div>
                                <p className='pt-2'>Aerosol penghilang bakteri dan penyegar kabin</p>
                            </div>
                        </div>
                        <div className='col-6 col-md'>
                            <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 mx-3 py-4 d-flex flex-column align-items-center justify-content-center'>
                                <div className='section-img'>
                                    <img src="assets/4L 5W-30 Gasoline (4).png" alt='' />
                                </div>
                                <p className='pt-2'>Cairan pembersih injector & ruang bakar</p>
                            </div>
                        </div>
                            </div>
                            <button type="button" class="btn btn-outline-dark w-25 py-2 mt-5">Learn  more</button>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade px-3 px-lg-0"
                          id="faq_tab_2"
                          role="tabpanel"
                          aria-labelledby="faq_tab_2-tab"
                        >
                          <div className="container ps-lg-5 pe-lg-5 mt-5">
                          <div className='servis-content mx-md-5'>
                            <h1 className='servis-title'>GRATIS</h1>
                             <h1>Servis berkala setelah <span className='inline-text' >6 bulan</span> </h1>
                             <p className='text mt-3'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <p className='text mt-3'>{serviceDescriptions.length > 0 && serviceDescriptions[1] ? serviceDescriptions[1] : "No description available"}</p>
                            </div>
                          </div>
                          <div className='container'>
                          <div className='d-flex justify-content-center'>
                            <div className='row mt-5'>
                                <div className='col-lg-6'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap'>TMO Oli Mesin</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Chasis & Bodi</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Komponen Mesin</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-0'>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Chasis & Bodi</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap text-start'>Saringan Oli</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap text-start'>Gasket Oli Mesin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                              <div className='d-flex justify-content-center'>
                                <div className='row mt-5'>
                                  <div className='col-lg-12'>
                                    <ul className="nav nav-pills nav-fill home-tab d-flex">
                                        <li className="nav-item mx-2">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 0 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(0)}>TMO Oli Mesin</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 1 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(1)}>Tambah Produk Lain</a>
                                        </li>
                                    </ul>
                                 </div>
                                </div>
                            </div>
                            {activeTab2 === 0 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-md-center tmo-oli'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                              <p className='mt-2 text-red d-none d-md-block text-nowrap' style={{ color: 'rgba(215, 25, 33, 1)', fontSize:'14px' }}>
                                *Power comparison merupakan <br/> perbandingan hp  (Horse Power)
                            </p>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         {activeTab2 === 1 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Test Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>Test TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-md-center tmo-oli'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         <p className='mt-2 d-block d-md-none' style={{ color: 'rgba(215, 25, 33, 1)'}}>*Power comparison merupakan perbandingan hp (Horse Power)</p>
                         </div>
                            
                        </div>
                        <div
                          className="tab-pane fade px-3 px-lg-0"
                          id="faq_tab_3"
                          role="tabpanel"
                          aria-labelledby="faq_tab_3-tab"
                        >
                          <div className="container ps-lg-5 pe-lg-5 mt-5">
                          <div className='servis-content mx-md-5'>
                            <h1 className='servis-title'>GRATIS</h1>
                             <h1>Servis berkala setelah <span className='inline-text' >6 bulan</span> </h1>
                             <p className='text mt-3'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <p className='text mt-3'>{serviceDescriptions.length > 0 && serviceDescriptions[3] ? serviceDescriptions[3] : "No description available"}</p>
                            </div>
                          </div>
                          <div className='container'>
                          <div className='d-flex justify-content-md-center tmo-oli'>
                            <div className='row mt-5'>
                                <div className='col-lg-6'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap'>TMO Oli Mesin</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Chasis & Bodi</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Komponen Mesin</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-0'>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Chasis & Bodi</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap text-start'>Saringan Oli</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap text-start'>Gasket Oli Mesin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                              <div className='d-flex justify-content-center'>
                                <div className='row mt-5'>
                                  <div className='col-lg-12'>
                                    <ul className="nav nav-pills nav-fill home-tab d-flex">
                                        <li className="nav-item mx-2">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 0 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(0)}>TMO Oli Mesin</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 1 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(1)}>Tambah Produk Lain</a>
                                        </li>
                                    </ul>
                                 </div>
                                </div>
                            </div>
                            {activeTab2 === 0 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-md-center tmo-oli'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         {activeTab2 === 1 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Test Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>Test TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-md-center tmo-oli'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         <p className='mt-2' style={{ color: 'rgba(215, 25, 33, 1)'}}>*Power comparison merupakan perbandingan hp (Horse Power)</p>
                         </div>
                            
                        </div>
                        <div
                          className="tab-pane fade px-3 px-lg-0"
                          id="faq_tab_4"
                          role="tabpanel"
                          aria-labelledby="faq_tab_4-tab"
                        >
                          <div className="container ps-lg-5 pe-lg-5 mt-5">
                          <div className='servis-content mx-md-5'>
                            <h1 className='servis-title'>GRATIS</h1>
                             <h1>Servis berkala setelah <span className='inline-text' >6 bulan</span> </h1>
                             <p className='text mt-3'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <p className='text mt-3'>{serviceDescriptions.length > 0 && serviceDescriptions[4] ? serviceDescriptions[4] : "No description available"}</p>
                            </div>
                          </div>
                          <div className='container'>
                          <div className='d-flex justify-content-center'>
                            <div className='row mt-5'>
                                <div className='col-lg-6'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap'>TMO Oli Mesin</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Chasis & Bodi</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Komponen Mesin</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-0'>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Chasis & Bodi</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap text-start'>Saringan Oli</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap text-start'>Gasket Oli Mesin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                              <div className='d-flex justify-content-center'>
                                <div className='row mt-5'>
                                  <div className='col-lg-12'>
                                    <ul className="nav nav-pills nav-fill home-tab d-flex">
                                        <li className="nav-item mx-2">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 0 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(0)}>TMO Oli Mesin</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 1 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(1)}>Tambah Produk Lain</a>
                                        </li>
                                    </ul>
                                 </div>
                                </div>
                            </div>
                            {activeTab2 === 0 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-center'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         {activeTab2 === 1 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Test Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>Test TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-center'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         <p className='mt-2' style={{ color: 'rgba(215, 25, 33, 1)'}}>*Power comparison merupakan perbandingan hp (Horse Power)</p>
                         </div>
                            
                        </div>
                        <div
                          className="tab-pane fade px-3 px-lg-0"
                          id="faq_tab_5"
                          role="tabpanel"
                          aria-labelledby="faq_tab_5-tab"
                        >
                          <div className="container ps-lg-5 pe-lg-5 mt-5">
                          <div className='servis-content mx-md-5'>
                            <h1 className='servis-title'>GRATIS</h1>
                             <h1>Servis berkala setelah <span className='inline-text' >6 bulan</span> </h1>
                             <p className='text mt-3'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <p className='text mt-3'>{serviceDescriptions.length > 0 && serviceDescriptions[5] ? serviceDescriptions[5] : "No description available"}</p>
                            </div>
                          </div>
                          <div className='container mx-mx-5'>
                          <div className='d-flex justify-content-center mx-5'>
                            <div className='row mt-5 mx-4'>
                                <div className='col-lg-4 d-none d-md-block'>
                                <div className='d-flex justify-content-between'>
                                <div className='d-flex align-items-start'>
                                    <img src="assets/Komponen Mesin.png" alt='' className="align-self-start" />
                                    <div className="d-flex flex-column ">
                                        <li className='px-3 fw-bold text-start'>TMO Oli Mesin</li>
                                        <li className='px-3 fw-bold text-start'>TMO Lubricant Manual <span className='ms-4'>Transmission Fluid</span></li>
                                        <li className='px-3 fw-bold text-start'>TMO Lubricant Differential Gear Oil</li>
                                        <li className='px-3 fw-bold text-start'>TMO Lubricant Transfer <span className='ms-4'></span>Gear Oil</li>
                                    </div>
                                </div>
                            </div>

                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex align-items-start mt-2 mt-md-4'>
                                            <img src="assets/Saringan Oli.png" alt='' />
                                            <li className='px-3 text-nowrap list-unstyled fw-bold'>Saringan Oli</li>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-none d-md-block border-left'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex align-items-start mt-2 mt-md-0 '>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                           <div className='d-flex flex-column'>
                                           <li className='px-3 fw-bold text-start'>Gasket Oli Mesin </li>
                                            <li className='px-3 fw-bold text-start'>Gasket Plug </li>
                                           </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex align-items-start mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <li className='px-3 list-unstyled text-nowrap fw-bold text-start'>Saringan Udara Gasoline</li>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex align-items-start mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <li className=' list-unstyled px-3 text-nowrap fw-bold text-start'>Gasket Oli Mesin</li>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4'>

                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex align-items-start'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <li className='list-unstyled px-3 text-nowrap fw-bold text-start'>TMO Chemical Brake Fluid</li>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex align-items-start mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <li className='list-unstyled px-3 text-nowrap fw-bold text-start'>Periksa Komponen Mesin</li>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex align-items-start mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <li className='list-unstyled px-3 text-nowrap fw-bold text-start'>Periksa Chasis & Bodi</li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                              <div className='d-flex justify-content-center'>
                                <div className='row mt-5'>
                                  <div className='col-lg-12'>
                                    <ul className="nav nav-pills nav-fill home-tab d-flex">
                                        <li className="nav-item mx-2">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 0 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(0)}>TMO Oli Mesin</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 1 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(1)}>Tambah Produk Lain</a>
                                        </li>
                                    </ul>
                                 </div>
                                </div>
                            </div>
                            {activeTab2 === 0 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-center'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         {activeTab2 === 1 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Test Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>Test TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-center'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         <p className='mt-2' style={{ color: 'rgba(215, 25, 33, 1)'}}>*Power comparison merupakan perbandingan hp (Horse Power)</p>
                         </div>
                            
                        </div>
                        <div
                          className="tab-pane fade px-3 px-lg-0"
                          id="faq_tab_6"
                          role="tabpanel"
                          aria-labelledby="faq_tab_6-tab"
                        >
                          <div className="container ps-lg-5 pe-lg-5 mt-5">
                          <div className='servis-content mx-md-5'>
                            <h1 className='servis-title'>GRATIS</h1>
                             <h1>Servis berkala setelah <span className='inline-text' >6 bulan</span> </h1>
                             <p className='text mt-3'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <p className='text mt-3'>{serviceDescriptions.length > 0 && serviceDescriptions[1] ? serviceDescriptions[6] : "No description available"}</p>
                            </div>
                          </div>
                          <div className='container'>
                          <div className='d-flex justify-content-center'>
                            <div className='row mt-5'>
                                <div className='col-lg-6'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap'>TMO Oli Mesin</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Chasis & Bodi</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Komponen Mesin</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-0'>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Chasis & Bodi</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap text-start'>Saringan Oli</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap text-start'>Gasket Oli Mesin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                              <div className='d-flex justify-content-center'>
                                <div className='row mt-5'>
                                  <div className='col-lg-12'>
                                    <ul className="nav nav-pills nav-fill home-tab d-flex">
                                        <li className="nav-item mx-2">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 0 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(0)}>TMO Oli Mesin</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 1 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(1)}>Tambah Produk Lain</a>
                                        </li>
                                    </ul>
                                 </div>
                                </div>
                            </div>
                            {activeTab2 === 0 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-md-center tmo-oli'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                              <p className='mt-2 text-red d-none d-md-block text-nowrap' style={{ color: 'rgba(215, 25, 33, 1)', fontSize:'14px' }}>
                                *Power comparison merupakan <br/> perbandingan hp  (Horse Power)
                            </p>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         {activeTab2 === 1 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Test Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>Test TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-md-center tmo-oli'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         <p className='mt-2 d-block d-md-none' style={{ color: 'rgba(215, 25, 33, 1)'}}>*Power comparison merupakan perbandingan hp (Horse Power)</p>
                         </div>
                            
                        </div>
                        <div
                          className="tab-pane fade px-3 px-lg-0"
                          id="faq_tab_7"
                          role="tabpanel"
                          aria-labelledby="faq_tab_7-tab"
                        >
                          <div className="container ps-lg-5 pe-lg-5 mt-5">
                          <div className='servis-content mx-md-5'>
                            <h1 className='servis-title'>GRATIS</h1>
                             <h1>Servis berkala setelah <span className='inline-text' >6 bulan</span> </h1>
                             <p className='text mt-3'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <p className='text mt-3'>{serviceDescriptions.length > 0 && serviceDescriptions[1] ? serviceDescriptions[7] : "No description available"}</p>
                            </div>
                          </div>
                          <div className='container'>
                          <div className='d-flex justify-content-center'>
                            <div className='row mt-5'>
                                <div className='col-lg-6'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap'>TMO Oli Mesin</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Chasis & Bodi</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Komponen Mesin</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-0'>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Chasis & Bodi</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap text-start'>Saringan Oli</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap text-start'>Gasket Oli Mesin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                              <div className='d-flex justify-content-center'>
                                <div className='row mt-5'>
                                  <div className='col-lg-12'>
                                    <ul className="nav nav-pills nav-fill home-tab d-flex">
                                        <li className="nav-item mx-2">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 0 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(0)}>TMO Oli Mesin</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 1 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(1)}>Tambah Produk Lain</a>
                                        </li>
                                    </ul>
                                 </div>
                                </div>
                            </div>
                            {activeTab2 === 0 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-md-center tmo-oli'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                              <p className='mt-2 text-red d-none d-md-block text-nowrap' style={{ color: 'rgba(215, 25, 33, 1)', fontSize:'14px' }}>
                                *Power comparison merupakan <br/> perbandingan hp  (Horse Power)
                            </p>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         {activeTab2 === 1 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Test Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>Test TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-md-center tmo-oli'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         <p className='mt-2 d-block d-md-none' style={{ color: 'rgba(215, 25, 33, 1)'}}>*Power comparison merupakan perbandingan hp (Horse Power)</p>
                         </div>
                            
                        </div>
                        <div
                          className="tab-pane fade px-3 px-lg-0"
                          id="faq_tab_8"
                          role="tabpanel"
                          aria-labelledby="faq_tab_8-tab"
                        >
                          <div className="container ps-lg-5 pe-lg-5 mt-5">
                          <div className='servis-content mx-md-5'>
                            <h1 className='servis-title'>Rp 2,715,976,-</h1>
                             <h1>Servis berkala setelah <span className='inline-text' >6 bulan</span> </h1>
                             <p className='text mt-3'>{serviceDescriptions.length > 0 && serviceDescriptions[8] ? serviceDescriptions[8] : "No description available"}</p>
                             {/* <p className='text text-start mt-5 mx-5'><span className='d-block'>1. Harga yang tertera hanya estimasi dengan menggunakan TMO 10W-30 (gasoline) dan TMO 15W-40 (diesel), untuk Raize & Voxy menggunakan TMO 5W-30 (gasoline), dan LC300 menggunakan TMO 5W-30 (diesel). Harga di dealer dapat berbeda sesuai layanan tambahan yang diberikan dealer dan permintaan pelanggan</span>
                             <span className='d-block'>2.Dalam satuan Rupiah </span>
                             <span className='d-block'>3.Per Oktober 2022 </span>
                             <span className='d-block'>4.Sudah termasuk Pajak </span>
                             </p> */}
                            </div>
                          </div>
                          <div className='container'>
                            {activeTab2 === 0 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <h1>TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-md-center tmo-oli'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         </div>
                         <h1 className='mt-4'>Opsi Produk Toyota Lainnya</h1>
                         <div className='d-flex justify-content-center mt-5'>
                                <img src="assets/tire-solution.png" className='mx-4 px-2 py-3' alt='' style={{ borderRadius: '10px', border: '2px solid rgba(215, 25, 33, 1)' }} />
                                <img src="assets/tmo.png" className='mx-4 px-4 py-2' alt='' style={{ borderRadius: '10px', border: '2px solid rgba(215, 25, 33, 1)' }} />
                                <img src="assets/tgb.png" className='mx-4 px-4 py-2' alt='' style={{ borderRadius: '10px', border: '2px solid rgba(215, 25, 33, 1)' }} />
                            </div>
                        </div>
                        <div
                          className="tab-pane fade px-3 px-lg-0"
                          id="faq_tab_9"
                          role="tabpanel"
                          aria-labelledby="faq_tab_8-tab"
                        >
                          <div className="container ps-lg-5 pe-lg-5 mt-5">
                          <div className='servis-content mx-md-5'>
                            <h1 className='servis-title'>Rp 2,715,976,-</h1>
                             <h1>Servis berkala setelah <span className='inline-text' >6 bulan</span> </h1>
                             <p className='text mt-3'>{serviceDescriptions.length > 0 && serviceDescriptions[9] ? serviceDescriptions[9] : "No description available"}</p>
                             {/* <p className='text text-start mt-5 mx-5'><span className='d-block'>1. Harga yang tertera hanya estimasi dengan menggunakan TMO 10W-30 (gasoline) dan TMO 15W-40 (diesel), untuk Raize & Voxy menggunakan TMO 5W-30 (gasoline), dan LC300 menggunakan TMO 5W-30 (diesel). Harga di dealer dapat berbeda sesuai layanan tambahan yang diberikan dealer dan permintaan pelanggan</span>
                             <span className='d-block'>2.Dalam satuan Rupiah </span>
                             <span className='d-block'>3.Per Oktober 2022 </span>
                             <span className='d-block'>4.Sudah termasuk Pajak </span>
                             </p> */}
                            </div>
                          </div>
                          <div className='container'>
                            {activeTab2 === 0 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <h1>TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-md-center tmo-oli'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         </div>
                         <h1 className='mt-4'>Opsi Produk Toyota Lainnya</h1>
                         <div className='d-flex justify-content-center mt-5'>
                                <img src="assets/tire-solution.png" className='mx-4 px-2 py-3' alt='' style={{ borderRadius: '10px', border: '2px solid rgba(215, 25, 33, 1)' }} />
                                <img src="assets/tmo.png" className='mx-4 px-4 py-2' alt='' style={{ borderRadius: '10px', border: '2px solid rgba(215, 25, 33, 1)' }} />
                                <img src="assets/tgb.png" className='mx-4 px-4 py-2' alt='' style={{ borderRadius: '10px', border: '2px solid rgba(215, 25, 33, 1)' }} />
                            </div>
                        </div>
                        <div
                          className="tab-pane fade px-3 px-lg-0"
                          id="faq_tab_10"
                          role="tabpanel"
                          aria-labelledby="faq_tab_10-tab"
                        >
                          <div className="container ps-lg-5 pe-lg-5 mt-5">
                          <div className='servis-content mx-md-5'>
                            <h1 className='servis-title'>Rp 2,715,976,-</h1>
                             <h1>Servis berkala setelah <span className='inline-text' >6 bulan</span> </h1>
                             <p className='text mt-3'>{serviceDescriptions.length > 0 && serviceDescriptions[10] ? serviceDescriptions[10] : "No description available"}</p>
                             {/* <p className='text text-start mt-5 mx-5'><span className='d-block'>1. Harga yang tertera hanya estimasi dengan menggunakan TMO 10W-30 (gasoline) dan TMO 15W-40 (diesel), untuk Raize & Voxy menggunakan TMO 5W-30 (gasoline), dan LC300 menggunakan TMO 5W-30 (diesel). Harga di dealer dapat berbeda sesuai layanan tambahan yang diberikan dealer dan permintaan pelanggan</span>
                             <span className='d-block'>2.Dalam satuan Rupiah </span>
                             <span className='d-block'>3.Per Oktober 2022 </span>
                             <span className='d-block'>4.Sudah termasuk Pajak </span>
                             </p> */}
                            </div>
                          </div>
                          <div className='container'>
                            {activeTab2 === 0 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <h1>TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-md-center tmo-oli'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         </div>
                         <h1 className='mt-4'>Opsi Produk Toyota Lainnya</h1>
                         <div className='d-flex justify-content-center mt-5'>
                                <img src="assets/tire-solution.png" className='mx-4 px-2 py-3' alt='' style={{ borderRadius: '10px', border: '2px solid rgba(215, 25, 33, 1)' }} />
                                <img src="assets/tmo.png" className='mx-4 px-4 py-2' alt='' style={{ borderRadius: '10px', border: '2px solid rgba(215, 25, 33, 1)' }} />
                                <img src="assets/tgb.png" className='mx-4 px-4 py-2' alt='' style={{ borderRadius: '10px', border: '2px solid rgba(215, 25, 33, 1)' }} />
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                </div>}
                {activeTab === 1 && <div>
                  <div className="container">
                <div className="row d-flex justify-content-center mt-4">
                  <div className="col-md-12">
                    <div className="bg-white">
                      <div className="container" style={{ position: "relative" }}>
                        <div className="scroll-buttons d-flex align-items-center">
                          <img
                            onClick={scrollRight}
                            className="ms-5"
                            src="/assets/frameright.svg"
                            alt=""
                            style={{
                              position: "absolute",
                              right: "-4px",
                              marginRight: "0px",
                              top: "20px"
                            }}
                          />
                          <img
                            className="mt-3"
                            onClick={scrollLeft}
                            src="/assets/frameleft.svg"
                            alt=""
                            style={{ position: "absolute", top: "8px", left:"-4px" }}
                          />
                        </div>
                        <ul
                            className="nav custom-home-tabs custom-nav-tabs nav-fill custom-nav-fill"
                            id="myTab"
                            role="tablist"
                            style={{ borderBottom: "none !important", whiteSpace: "nowrap" }}
                            >
                          <li className="nav-item  custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link active tab-boxes"
                              id="faq_tab_1-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#faq_tab_1"
                              type="button"
                              role="tab"
                              aria-controls="faq_tab_1"
                              aria-selected="true"
                              style={{ margin: "0", padding: "2px", height: "60px", width: "160px" }}
                              >
                              <div className="d-flex flex-column servis-tabs py-1 ">
                                <span>Servis ke-1</span>
                                <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                              id="faq_tab_2-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#faq_tab_2"
                              type="button"
                              role="tab"
                              aria-controls="faq_tab_2"
                              aria-selected="false"
                              style={{ margin: "0", padding: "2px", height: "60px",width: "155px" }}
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-2</span>
                                <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                              id="faq_tab_3-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#faq_tab_3"
                              type="button"
                              role="tab"
                              aria-controls="faq_tab_3"
                              aria-selected="false"
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-3</span>
                                <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes tab-boxes"
                              id="faq_tab_4-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#faq_tab_4"
                              type="button"
                              role="tab"
                              aria-controls="faq_tab_4"
                              aria-selected="false"
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-4</span>
                                <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                              id="faq_tab_5-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#faq_tab_5"
                              type="button"
                              role="tab"
                              aria-controls="faq_tab_5"
                              aria-selected="false"
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-5</span>
                                 <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                              id="faq_tab_6-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#faq_tab_6"
                              type="button"
                              role="tab"
                              aria-controls="faq_tab_6"
                              aria-selected="false"
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-6</span>
                                 <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                              id="faq_tab_7-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#faq_tab_7"
                              type="button"
                              role="tab"
                              aria-controls="faq_tab_7"
                              aria-selected="false"
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-7</span>
                                 <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                              id="faq_tab_8-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#faq_tab_8"
                              type="button"
                              role="tab"
                              aria-controls="faq_tab_8"
                              aria-selected="false"
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-8</span>
                                 <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                              id="faq_tab_9-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#faq_tab_9"
                              type="button"
                              role="tab"
                              aria-controls="faq_tab_9"
                              aria-selected="false"
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-9</span>
                                 <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                              id="faq_tab_10-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#faq_tab_10"
                              type="button"
                              role="tab"
                              aria-controls="faq_tab_10"
                              aria-selected="false"
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-10</span>
                                 <span>FREE</span>
                              </div>
                            </button>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="tab-content container-fluid p-0"
                        id="myTabContent"
                      >
                        <div
                          className="tab-pane fade active show px-3 px-lg-0"
                          id="faq_tab_1"
                          role="tabpanel"
                          aria-labelledby="faq_tab_1-tab"
                        >
                          <div className="container mt-5">
                            <div className='servis-content mx-md5'>
                            <h1 className='servis-title'>Test GRATIS</h1>
                             <h1>Servis berkala setelah <span className='inline-text' >6 bulan</span> </h1>
                             <p className='text mt-3'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                            </div>
                            <div className='row mt-5'>
                          <div className='col-md-6'>
                              <div className='d-flex justify-content-center align-items-center mx-4'>
                                  <div>
                                      <img src="assets/Komponen Mesin.png" alt='' />
                                  </div>
                                  <p className='px-3 mb-0 text-nowrap'>Periksa Komponen Mesin</p> 
                              </div>
                              <div className='d-flex mt-4'>
                                  <div className='d-flex align-items-center'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Oli mesin</p>
                                  </div>
                                  <div className='d-flex align-items-center mx-md-5'>
                                      <img src="assets/Check.png" className='mx-md-5' alt='' />
                                      <p className='px-3 px-md-0 mb-0 text-nowrap '>Pipa gas buang</p> 
                                  </div>
                              </div>
                              <div className='d-flex mt-3'>
                                  <div className='d-flex align-items-center'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Sistem pendingin</p> 
                                  </div>
                                  <div className='d-flex align-items-center mx-md-4'>
                                      <img src="assets/Check.png" className='mx-md-1' alt='' />
                                      <p className='px-3 mb-0 text-nowrap' >Baterai 12 Volt</p> 
                                  </div>
                              </div>
                              <div className='d-flex justify-content-between mt-3'>
                                  <div className='d-flex align-items-center'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Cairan pendingin mesin & power control unit</p>
                                  </div>
                              </div>
                          </div>
                          <div className='col-md-6 mt-5 mt-md-0'>
                              <div className='d-flex justify-content-center align-items-center'>
                                  <div>
                                      <img src="assets/Komponen Mesin.png" alt='' />
                                  </div>
                                  <p className='px-3 mb-0 text-nowrap'>Periksa Komponen Mesin</p> 
                              </div>
                              <div className='d-flex  mt-3'>
                                  <div className='d-flex align-items-center'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Pedal rem</p> 
                                  </div>
                                  <div className='d-flex align-items-center mx-md-4'>
                                      <img src="assets/Check.png" className='mx-md-2' alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Ban</p>
                                  </div>
                              </div>
                              <div className='d-flex  mt-3'>
                                  <div className='d-flex align-items-center'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Minyak rem</p>
                                  </div>
                                  <div className='d-flex align-items-center mx-md-4'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Lampu, Klakson, Kaca Wiper</p>
                                  </div>
                              </div>
                              <div className='d-flex mt-3'>
                                  <div className='d-flex align-items-center'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Suspensi</p>
                                  </div>
                                  <div className='d-flex align-items-center mx-md-5'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Isi cairan AC</p>
                                  </div>
                              </div>
                          </div>
                      </div>      
                            <div className='row mx-md-5'>
                            <h1 className='fw-bold mt-5 mb-5'>Opsi Produk Toyota Lainnya</h1>
                            <div className='col-6 col-md'>
                            <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 mx-md-3 py-1 d-flex align-items-center justify-content-center'>
                            <div className='section-img'>
                              <img src="assets/value_icon_1.png" alt='' />
                            </div>   
                          </div>
                        </div>
                        <div className='col-6 col-md'>
                        <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 mx-md-3 py-1 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'rgba(215, 25, 33, 1)' }}>
                                <div className='section-img ' >
                                    <img src="assets/TMO-02.png" alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='col-6 col-md'>
                            <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 mx-md-3 mt-2 mt-md-0 py-1 d-flex align-items-center justify-content-center'>
                                <div className='section-img'>
                                    <img src="assets/location-icon.png" alt='' />
                                </div>
                            </div>
                        </div>
                            </div>
                            <div className='row mx-md-5 mt-4'>
                            <div className='col-6 col-md'>
                            <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 mx-md-3 py-4 d-flex flex-column align-items-center justify-content-center'>
                            <div className='section-img'>
                              <img src="assets/4L 5W-30 Gasoline.png" alt='' />
                            </div>   
                            <p className='pt-2'>Layanan Ban dari Toyota</p>
                          </div>
                        </div>
                        <div className='col-6 col-md'>
                        <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 py-4 mx-3  d-flex flex-column align-items-center justify-content-center'>
                                <div className='section-img ' >
                                    <img src="assets/Rectangle 87.png" alt='' />
                                </div>
                                <p className='pt-2'>Layanan Ban dari Toyota</p>
                            </div>
                        </div>
                        <div className='col-6 col-md'>
                            <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 mx-3 py-4 d-flex flex-column align-items-center justify-content-center'>
                                <div className='section-img'>
                                    <img src="assets/Engine Room Treatment 1.png" alt='' />
                                </div>
                                <p className='pt-2'>Layanan Ban dari Toyota</p>
                            </div>
                        </div>
                            </div>
                            <div className='row mx-5 mt-4'>
                            <div className='col-6 col-md'>
                            <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 mx-3 py-4 d-flex flex-column align-items-center justify-content-center'>
                            <div className='section-img'>
                              <img src="assets/4L 5W-30 Gasoline.png" alt='' />
                            </div>   
                            <p className='pt-2'>Cairan pembersih kaca/mika lampu yang kusam</p>
                          </div>
                        </div>
                        <div className='col-6 col-md'>
                        <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 py-4 mx-3  d-flex flex-column align-items-center justify-content-center'>
                                <div className='section-img ' >
                                    <img src="assets/4L 5W-30 Gasoline (2).png" alt='' />
                                </div>
                                <p className='pt-2'>Aerosol penghilang bakteri dan penyegar kabin</p>
                            </div>
                        </div>
                        <div className='col-6 col-md'>
                            <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 mx-3 py-4 d-flex flex-column align-items-center justify-content-center'>
                                <div className='section-img'>
                                    <img src="assets/4L 5W-30 Gasoline (4).png" alt='' />
                                </div>
                                <p className='pt-2'>Cairan pembersih injector & ruang bakar</p>
                            </div>
                        </div>
                            </div>
                            <button type="button" class="btn btn-outline-dark w-25 py-2 mt-5">Learn  more</button>

                          </div>
                        </div>
                        <div
                          className="tab-pane fade px-3 px-lg-0"
                          id="faq_tab_2"
                          role="tabpanel"
                          aria-labelledby="faq_tab_2-tab"
                        >
                          <div className="container ps-lg-5 pe-lg-5 mt-5">
                          <div className='servis-content mx-md-5'>
                            <h1 className='servis-title'>GRATIS</h1>
                             <h1>Servis berkala setelah <span className='inline-text' >6 bulan</span> </h1>
                             <p className='text mt-3'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                            </div>
                          </div>
                          <div className='container'>
                          <div className='d-flex justify-content-center'>
                            <div className='row mt-5'>
                                <div className='col-lg-6'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap'>TMO Oli Mesin</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Chasis & Bodi</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Komponen Mesin</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-0'>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Chasis & Bodi</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap text-start'>Saringan Oli</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap text-start'>Gasket Oli Mesin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                              <div className='d-flex justify-content-center'>
                                <div className='row mt-5'>
                                  <div className='col-lg-12'>
                                    <ul className="nav nav-pills nav-fill home-tab d-flex">
                                        <li className="nav-item mx-2">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 0 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(0)}>TMO Oli Mesin</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 1 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(1)}>Tambah Produk Lain</a>
                                        </li>
                                    </ul>
                                 </div>
                                </div>
                            </div>
                            {activeTab2 === 0 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-md-center tmo-oli'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                              <p className='mt-2 text-red d-none d-md-block text-nowrap' style={{ color: 'rgba(215, 25, 33, 1)', fontSize:'14px' }}>
                                *Power comparison merupakan <br/> perbandingan hp  (Horse Power)
                            </p>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         {activeTab2 === 1 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Test Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>Test TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-md-center tmo-oli'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         <p className='mt-2 d-block d-md-none' style={{ color: 'rgba(215, 25, 33, 1)'}}>*Power comparison merupakan perbandingan hp (Horse Power)</p>
                         </div>
                            
                        </div>
                        <div
                          className="tab-pane fade px-3 px-lg-0"
                          id="faq_tab_3"
                          role="tabpanel"
                          aria-labelledby="faq_tab_3-tab"
                        >
                          <div className="container ps-lg-5 pe-lg-5 mt-5">
                          <div className='servis-content mx-md-5'>
                            <h1 className='servis-title'>GRATIS</h1>
                             <h1>Servis berkala setelah <span className='inline-text' >6 bulan</span> </h1>
                             <p className='text mt-3'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                            </div>
                          </div>
                          <div className='container'>
                          <div className='d-flex justify-content-md-center tmo-oli'>
                            <div className='row mt-5'>
                                <div className='col-lg-6'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap'>TMO Oli Mesin</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Chasis & Bodi</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Komponen Mesin</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-0'>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Chasis & Bodi</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap text-start'>Saringan Oli</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap text-start'>Gasket Oli Mesin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                              <div className='d-flex justify-content-center'>
                                <div className='row mt-5'>
                                  <div className='col-lg-12'>
                                    <ul className="nav nav-pills nav-fill home-tab d-flex">
                                        <li className="nav-item mx-2">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 0 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(0)}>TMO Oli Mesin</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 1 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(1)}>Tambah Produk Lain</a>
                                        </li>
                                    </ul>
                                 </div>
                                </div>
                            </div>
                            {activeTab2 === 0 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-md-center tmo-oli'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         {activeTab2 === 1 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Test Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>Test TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-md-center tmo-oli'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         <p className='mt-2' style={{ color: 'rgba(215, 25, 33, 1)'}}>*Power comparison merupakan perbandingan hp (Horse Power)</p>
                         </div>
                            
                        </div>
                        <div
                          className="tab-pane fade px-3 px-lg-0"
                          id="faq_tab_4"
                          role="tabpanel"
                          aria-labelledby="faq_tab_4-tab"
                        >
                          <div className="container ps-lg-5 pe-lg-5 mt-5">
                          <div className='servis-content mx-md-5'>
                            <h1 className='servis-title'>GRATIS</h1>
                             <h1>Servis berkala setelah <span className='inline-text' >6 bulan</span> </h1>
                             <p className='text mt-3'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                            </div>
                          </div>
                          <div className='container'>
                          <div className='d-flex justify-content-center'>
                            <div className='row mt-5'>
                                <div className='col-lg-6'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap'>TMO Oli Mesin</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Chasis & Bodi</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Komponen Mesin</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-0'>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Chasis & Bodi</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap text-start'>Saringan Oli</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap text-start'>Gasket Oli Mesin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                              <div className='d-flex justify-content-center'>
                                <div className='row mt-5'>
                                  <div className='col-lg-12'>
                                    <ul className="nav nav-pills nav-fill home-tab d-flex">
                                        <li className="nav-item mx-2">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 0 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(0)}>TMO Oli Mesin</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 1 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(1)}>Tambah Produk Lain</a>
                                        </li>
                                    </ul>
                                 </div>
                                </div>
                            </div>
                            {activeTab2 === 0 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-center'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         {activeTab2 === 1 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Test Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>Test TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-center'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         <p className='mt-2' style={{ color: 'rgba(215, 25, 33, 1)'}}>*Power comparison merupakan perbandingan hp (Horse Power)</p>
                         </div>
                            
                        </div>
                        <div
                          className="tab-pane fade px-3 px-lg-0"
                          id="faq_tab_5"
                          role="tabpanel"
                          aria-labelledby="faq_tab_5-tab"
                        >
                          <div className="container ps-lg-5 pe-lg-5 mt-5">
                          <div className='servis-content mx-md-5'>
                            <h1 className='servis-title'>GRATIS</h1>
                             <h1>Servis berkala setelah <span className='inline-text' >6 bulan</span> </h1>
                             <p className='text mt-3'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                            </div>
                          </div>
                          <div className='container mx-mx-5'>
                          <div className='d-flex justify-content-center mx-5'>
                            <div className='row mt-5 mx-4'>
                                <div className='col-lg-4 d-none d-md-block'>
                                <div className='d-flex justify-content-between'>
                                <div className='d-flex align-items-start'>
                                    <img src="assets/Komponen Mesin.png" alt='' className="align-self-start" />
                                    <div className="d-flex flex-column ">
                                        <li className='px-3 fw-bold text-start'>TMO Oli Mesin</li>
                                        <li className='px-3 fw-bold text-start'>TMO Lubricant Manual <span className='ms-4'>Transmission Fluid</span></li>
                                        <li className='px-3 fw-bold text-start'>TMO Lubricant Differential Gear Oil</li>
                                        <li className='px-3 fw-bold text-start'>TMO Lubricant Transfer <span className='ms-4'></span>Gear Oil</li>
                                    </div>
                                </div>
                            </div>

                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex align-items-start mt-2 mt-md-4'>
                                            <img src="assets/Saringan Oli.png" alt='' />
                                            <li className='px-3 text-nowrap list-unstyled fw-bold'>Saringan Oli</li>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4 d-none d-md-block border-left'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex align-items-start mt-2 mt-md-0 '>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                           <div className='d-flex flex-column'>
                                           <li className='px-3 fw-bold text-start'>Gasket Oli Mesin </li>
                                            <li className='px-3 fw-bold text-start'>Gasket Plug </li>
                                           </div>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex align-items-start mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <li className='px-3 list-unstyled text-nowrap fw-bold text-start'>Saringan Udara Gasoline</li>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex align-items-start mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <li className=' list-unstyled px-3 text-nowrap fw-bold text-start'>Gasket Oli Mesin</li>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4'>

                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex align-items-start'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <li className='list-unstyled px-3 text-nowrap fw-bold text-start'>TMO Chemical Brake Fluid</li>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex align-items-start mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <li className='list-unstyled px-3 text-nowrap fw-bold text-start'>Periksa Komponen Mesin</li>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex align-items-start mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <li className='list-unstyled px-3 text-nowrap fw-bold text-start'>Periksa Chasis & Bodi</li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                              <div className='d-flex justify-content-center'>
                                <div className='row mt-5'>
                                  <div className='col-lg-12'>
                                    <ul className="nav nav-pills nav-fill home-tab d-flex">
                                        <li className="nav-item mx-2">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 0 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(0)}>TMO Oli Mesin</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 1 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(1)}>Tambah Produk Lain</a>
                                        </li>
                                    </ul>
                                 </div>
                                </div>
                            </div>
                            {activeTab2 === 0 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-center'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         {activeTab2 === 1 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Test Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>Test TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-center'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         <p className='mt-2' style={{ color: 'rgba(215, 25, 33, 1)'}}>*Power comparison merupakan perbandingan hp (Horse Power)</p>
                         </div>
                            
                        </div>
                        <div
                          className="tab-pane fade px-3 px-lg-0"
                          id="faq_tab_6"
                          role="tabpanel"
                          aria-labelledby="faq_tab_6-tab"
                        >
                          <div className="container ps-lg-5 pe-lg-5 mt-5">
                          <div className='servis-content mx-md-5'>
                            <h1 className='servis-title'>GRATIS</h1>
                             <h1>Servis berkala setelah <span className='inline-text' >6 bulan</span> </h1>
                             <p className='text mt-3'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                            </div>
                          </div>
                          <div className='container'>
                          <div className='d-flex justify-content-center'>
                            <div className='row mt-5'>
                                <div className='col-lg-6'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap'>TMO Oli Mesin</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Chasis & Bodi</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Komponen Mesin</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-0'>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Chasis & Bodi</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap text-start'>Saringan Oli</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap text-start'>Gasket Oli Mesin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                              <div className='d-flex justify-content-center'>
                                <div className='row mt-5'>
                                  <div className='col-lg-12'>
                                    <ul className="nav nav-pills nav-fill home-tab d-flex">
                                        <li className="nav-item mx-2">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 0 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(0)}>TMO Oli Mesin</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 1 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(1)}>Tambah Produk Lain</a>
                                        </li>
                                    </ul>
                                 </div>
                                </div>
                            </div>
                            {activeTab2 === 0 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-md-center tmo-oli'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                              <p className='mt-2 text-red d-none d-md-block text-nowrap' style={{ color: 'rgba(215, 25, 33, 1)', fontSize:'14px' }}>
                                *Power comparison merupakan <br/> perbandingan hp  (Horse Power)
                            </p>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         {activeTab2 === 1 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Test Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>Test TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-md-center tmo-oli'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         <p className='mt-2 d-block d-md-none' style={{ color: 'rgba(215, 25, 33, 1)'}}>*Power comparison merupakan perbandingan hp (Horse Power)</p>
                         </div>
                            
                        </div>
                        <div
                          className="tab-pane fade px-3 px-lg-0"
                          id="faq_tab_7"
                          role="tabpanel"
                          aria-labelledby="faq_tab_7-tab"
                        >
                          <div className="container ps-lg-5 pe-lg-5 mt-5">
                          <div className='servis-content mx-md-5'>
                            <h1 className='servis-title'>GRATIS</h1>
                             <h1>Servis berkala setelah <span className='inline-text' >6 bulan</span> </h1>
                             <p className='text mt-3'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                            </div>
                          </div>
                          <div className='container'>
                          <div className='d-flex justify-content-center'>
                            <div className='row mt-5'>
                                <div className='col-lg-6'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap'>TMO Oli Mesin</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Chasis & Bodi</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Komponen Mesin</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-0'>
                                            <img src="assets/Chasis Bodi.png" alt='' />
                                            <p className='px-3 text-nowrap'>Periksa Chasis & Bodi</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap text-start'>Saringan Oli</p>
                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex mt-2 mt-md-4'>
                                            <img src="assets/Komponen Mesin.png" alt='' />
                                            <p className='px-3 text-nowrap text-start'>Gasket Oli Mesin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                              <div className='d-flex justify-content-center'>
                                <div className='row mt-5'>
                                  <div className='col-lg-12'>
                                    <ul className="nav nav-pills nav-fill home-tab d-flex">
                                        <li className="nav-item mx-2">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 0 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(0)}>TMO Oli Mesin</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 1 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(1)}>Tambah Produk Lain</a>
                                        </li>
                                    </ul>
                                 </div>
                                </div>
                            </div>
                            {activeTab2 === 0 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-md-center tmo-oli'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                              <p className='mt-2 text-red d-none d-md-block text-nowrap' style={{ color: 'rgba(215, 25, 33, 1)', fontSize:'14px' }}>
                                *Power comparison merupakan <br/> perbandingan hp  (Horse Power)
                            </p>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         {activeTab2 === 1 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Test Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>Test TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-md-center tmo-oli'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         <p className='mt-2 d-block d-md-none' style={{ color: 'rgba(215, 25, 33, 1)'}}>*Power comparison merupakan perbandingan hp (Horse Power)</p>
                         </div>
                            
                        </div>
                        <div
                          className="tab-pane fade px-3 px-lg-0"
                          id="faq_tab_8"
                          role="tabpanel"
                          aria-labelledby="faq_tab_8-tab"
                        >
                          <div className="container ps-lg-5 pe-lg-5 mt-5">
                          <div className='servis-content mx-md-5'>
                            <h1 className='servis-title'>Rp 2,715,976,-</h1>
                             <h1>Servis berkala setelah <span className='inline-text' >6 bulan</span> </h1>
                             <p className='text text-start mt-5 mx-5'><span className='d-block'>1. Harga yang tertera hanya estimasi dengan menggunakan TMO 10W-30 (gasoline) dan TMO 15W-40 (diesel), untuk Raize & Voxy menggunakan TMO 5W-30 (gasoline), dan LC300 menggunakan TMO 5W-30 (diesel). Harga di dealer dapat berbeda sesuai layanan tambahan yang diberikan dealer dan permintaan pelanggan</span>
                             <span className='d-block'>2.Dalam satuan Rupiah </span>
                             <span className='d-block'>3.Per Oktober 2022 </span>
                             <span className='d-block'>4.Sudah termasuk Pajak </span>
                             </p>
                            </div>
                          </div>
                          <div className='container'>
                            {activeTab2 === 0 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <h1>TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-md-center tmo-oli'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>Standard</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                              <p className='pt-4 fw-bold standard d-none d-md-block'>Standard</p>
                              <div className='tmo-image'>
                                  <img src="assets/tmoBottle.png" alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                              <div className='tmo-image'>
                                  <img src="assets/Group 1597880427.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>                            
                          <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo bottle3.png " alt='' />
                              </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                              <div className='tmo-image '>
                                  <img src="assets/Molecule-0W-20.png" alt='' />
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>vs Standard</span>
                          </p> 
                              <div className='tmo-image pb-3 pb-md-0'>
                                  <img src="assets/tmo-bottle2.png" alt='' />
                              </div>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         </div>
                         <h1 className='mt-4'>Opsi Produk Toyota Lainnya</h1>
                         <div className='d-flex justify-content-center mt-5'>
                                <img src="assets/tire-solution.png" className='mx-4 px-2 py-3' alt='' style={{ borderRadius: '10px', border: '2px solid rgba(215, 25, 33, 1)' }} />
                                <img src="assets/tmo.png" className='mx-4 px-4 py-2' alt='' style={{ borderRadius: '10px', border: '2px solid rgba(215, 25, 33, 1)' }} />
                                <img src="assets/tgb.png" className='mx-4 px-4 py-2' alt='' style={{ borderRadius: '10px', border: '2px solid rgba(215, 25, 33, 1)' }} />
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                </div>}
            </div>
          </div>
        </div>
      <div className='section-3 mt-5'>
  <div className='container'>
    <h5 className='fw-bold title-2'>Hanya Bengkel Resmi Toyota yang mengerti </h5>
    <h5 className='fw-bold'> kendaraan Toyota Anda  </h5>
    <p className='mb-5'>Telusuri penawaran terbaik di bengkel Resmi kami!</p>
    <div className="row">
      <div className="col-sm-6 col-lg-4">
        <div className="card mt-4 mt-lg-0" style={{width: "18rem"}}>
          <img src="assets/services.png" className="card-img-top rounded-0" alt="..."/>
          <div className="card-body">
            <h4 className="card-title fw-bold">Services</h4>
            <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4">
        <div className="card mt-5 mt-lg-0" style={{width: "18rem"}}>
          <img src="assets/products-img.png" className="card-img-top rounded-0" alt="..."/>
          <div className="card-body">
            <h4 className="card-title fw-bold">Products</h4>
            <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4">
        <div className="card mt-5 mt-lg-0" style={{width: "18rem"}}>
          <img src="assets/warrenty-img.png" className="card-img-top rounded-0" alt="..."/>
          <div className="card-body">
            <h4 className="card-title fw-bold">Warrenty</h4>
            <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-sm-6 col-lg-4">
        <div className="card mt-5 mt-lg-0" style={{width: "18rem"}}>
          <img src="assets/T-care.png" className="card-img-top rounded-0" alt="t-care-img"/>
          <div className="card-body">
            <h5 className="card-title fw-bold">T-Care</h5>
            <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4">
        <div className="card mt-5 mt-lg-0" style={{width: "18rem"}}>
          <img src="assets/News-event.png" className="card-img-top rounded-0" alt="news-event-img"/>
          <div className="card-body">
            <h5 className="card-title fw-bold">News-Event</h5>
            <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4 mb-md-0">
        <div className="card mt-5  mt-lg-0" style={{width: "18rem"}}>
          <img src="assets/faq.png" className="card-img-top rounded-0" alt="faq-img"/>
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
