import Header from './layout/Header';
import Footer from './layout/Footer';
import React, { useState, useRef, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../css/products.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Virtual, Navigation, Pagination } from 'swiper/modules';

function Products() {
  const scrollLeft = () => {
    const myTab = document.getElementById("myTab");
    myTab.scrollTo({
        left: myTab.scrollLeft - 100, // Adjust scroll distance as needed
        behavior: 'smooth' // Smooth scrolling behavior
    });
};

const scrollRight = () => {
    const myTab = document.getElementById("myTab");
    myTab.scrollTo({
        left: myTab.scrollLeft + 100, // Adjust scroll distance as needed
        behavior: 'smooth' // Smooth scrolling behavior
    });
};
  const [swiperRef, setSwiperRef] = useState(null);
  const [slideContent, setSlides] = useState([
    { 
      title: 'TMO Evaporator Cleaner',
      text:'1',
      description: 'TMO Evaporator Cleaner membersihkan kotoran ringan pada Evaporator AC kendaraan untuk menjaga sistem AC tetap bekerja optimal & menyegarkan udara keluar dari AC di dalam kabin. Pembersihan dilakukan sesuai dengan standar operasional Toyota.',
      imageUrl: 'assets/Frame_874.png',
    },
    { 
      title: 'TMO Injector Cleaner',
      text:'2',
      description: 'Cairan yang diformulasi khusus yang dapat melindungi dan membersihkan ruang pembakaran, injector, katup pemasukan-pembuangan serta efektif mengembalikan proforma mesin serta menghemat konsumsi bahan bakar Toyota.',
      imageUrl: 'assets/Frame_875.png',
    },
    { 
      title: 'TMO Evaporator Cleaner',
      text:'3',
      description: 'TMO Evaporator Cleaner membersihkan kotoran ringan pada Evaporator AC kendaraan untuk menjaga sistem AC tetap bekerja optimal & menyegarkan udara keluar dari AC di dalam kabin. Pembersihan dilakukan sesuai dengan standar operasional Toyota.',
      imageUrl: 'assets/Frame_874.png',
    },
  ]);
  return (
    <div>
        <Header></Header>
        <div className='container-fluid px-0'>
        <img src="assets/Rectangle.png" className='w-100' alt='logo' />
        </div>
        <div className='container-fluid'>
            <div className='container mt-5'>
                <div className='row'>
                <div className="col-12">
        <h1 className='product_heading'>Discover Our Product</h1>
      </div>
      <div className='col-12'>
      <p className='product_sub_heading'>Layanan Servis berkualitas prima, <span className='inner-text'>agar performa Toyota Anda
selalu optimal</span></p>
      </div>
                </div>
                
            </div>
            </div>
        <div className='container-fluid px-0 overflow-x-hidden'>
            <div className="row mt-5 d-flex justify-content-center">
                <div className="bg-white">
                  <div className='container' style={{ position: "relative" }}>
                  <div className="scroll-buttons d-lg-none d-flex align-items-center">
                  <img
                    onClick={scrollRight}
                    className="ms-1 me-1 pe-2  mt-5 pt-2"
                    src="assets/frameright.svg"
                    alt=""
                    style={{
                      position: "absolute",
                      right: "10px",
                      marginRight: "10px",
                    }}
                  />
                  <img
                    className="ms-2 me-1 mt-4"
                    onClick={scrollLeft}
                    src="assets/frameleft.svg"
                    alt=""
                    style={{ position: "absolute", top: "0px" }}
                  />
                </div>
                    <div className='row'>
                    <div className='col-12'>
                  <ul
                    className="nav nav-tabs custom-nav-tabs nav-fill custom-nav-fill ms-4 me-4 ms-lg-0 me-lg-0"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item custom-nav-item" role="presentation">
                      <button
                        className="nav-link custom-nav-item active"
                        id="faq_tab_1-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#faq_tab_1"
                        type="button"
                        role="tab"
                        aria-controls="faq_tab_1"
                        aria-selected="true"
                      >
                        <div className="d-flex flex-column lh-lg">
                          <span>Service Parts</span>
                        </div>
                      </button>
                    </li>
                    <li className="nav-item custom-nav-item" role="presentation">
                      <button
                        className="nav-link custom-nav-item"
                        id="faq_tab_2-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#faq_tab_2"
                        type="button"
                        role="tab"
                        aria-controls="faq_tab_2"
                        aria-selected="false"
                      >
                        <div className="d-flex flex-column lh-lg">
                          <span>TMO</span>
                        </div>
                      </button>
                    </li>
                    <li className="nav-item custom-nav-item" role="presentation">
                      <button
                        className="nav-link custom-nav-item"
                        id="faq_tab_3-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#faq_tab_3"
                        type="button"
                        role="tab"
                        aria-controls="faq_tab_3"
                        aria-selected="false"
                      >
                        <div className="d-flex flex-column lh-lg">
                          <span>TGB</span>
                        </div>
                      </button>
                    </li>
                    <li className="nav-item custom-nav-item" role="presentation">
                      <button
                        className="nav-link custom-nav-item"
                        id="faq_tab_4-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#faq_tab_4"
                        type="button"
                        role="tab"
                        aria-controls="faq_tab_4"
                        aria-selected="false"
                      >
                        <div className="d-flex flex-column lh-lg">
                          <span>Tire Solution</span>
                        </div>
                      </button>
                    </li>
                  </ul>
                  </div>
                  </div>
                  </div>
                  <div className='container-fluid px-0'>
                    <div className='row'>
                    <div className='col-12'>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade active show"
                      id="faq_tab_1"
                      role="tabpanel"
                      aria-labelledby="faq_tab_1-tab"
                    >
            <div className='container mt-5 mb-5'>
            <div className='row'>
                            <div className='col-12'>
            <p className='product_title'>Toyota PRODUCT - service parts</p>
            <h1 className='product_heading'>Toyota Genuine Parts</h1>
            <p className='product_paragraph'>Toyota Genuine Parts yaitu suku cadang resmi dari Toyota dengan mendegepankan kualitas dan telah dirancang sesuai dengan spesifikasi dan kebutuhan kendaraan kesayangan anda.</p>
            <img src="assets/Rectangle-118.png" className='w-100' alt='logo' />
            </div>
            </div>
            </div>
            <div className='container mt-5'>
            <div className='row'>
                            <div className='col-12'>
            <p className='product_title'>Toyota PRODUCT - service parts</p>
            <h1 className='product_heading'>Market Valuable Parts (MVP)</h1>
            <p className='product_paragraph'>MVP adalah produk part Toyota yang khusus dikembangkan untuk menawarkan harga yang lebih kompetitif, dengan tetap memenuhi standard kualitas Toyota.</p>
            </div>
            </div>
            <div className='container'>
            <Swiper
        slidesPerView={3}
      breakpoints={{
        280: {
          slidesPerView: 1,
        },
        // When window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        // When window width is >= 992px
        992: {
          slidesPerView: 3,
        },
      }}
        spaceBetween={30}
        navigation={true} 
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="card">
          <div className="img"><img src="assets/Image.png"  alt="img" className='img-fluid' draggable="false" /></div>
          <div className='text-start'>
          <h4 className='card_heading'>Oil Filter</h4>
          <p className='card_paragraph'>Oil Filter, didesain khusus dengan harga yang kompetitif namun memenuhi standar Toyota. Tersedia 3 line up untuk model Old Kijang, Avanza, Rush, Agya, dan Calya.</p>
          <div className='mt-5'>
          <a className='card_link' href='#'>Keunggulan</a>
          <img className='ps-2' src='assets/CROSS.svg'/>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
          <div className="img"><img src="assets/Image-2.png" className='img-fluid'  alt="img" draggable="false" /></div>
          <div className='text-start'>
          <h4 className='card_heading'>Air Filter</h4>
          <p className='card_paragraph'>Air Filter, didesain khusus dengan harga yang kompetitif namun memenuhi standar Toyota. Tersedia 6 line up untuk model Old Kijang, Innova, Avanza, Agya dan Calya.</p>
          <div className='mt-5'>
          <a className='card_link' href='#'>Keunggulan</a>
          <img className='ps-2' src='assets/CROSS.svg'/>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
          <div className="img"><img src="assets/Image-3.png" className='img-fluid'  alt="img" draggable="false" /></div>
          <div className='text-start'>
          <h4 className='card_heading'>Brake Pad & Brake Shoe</h4>
          <p className='card_paragraph'>Brake pad & brake shoe, didesain khusus dengan harga yang kompetitif namun memenuhi standar Toyota. Tersedia 13 line up untuk model Old Kijang, Innova, Avanza, dan Calya.</p>
          <div className='mt-5'>
          <a className='card_link' href='#'>Keunggulan</a>
          <img className='ps-2' src='assets/CROSS.svg'/>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
          <div className="img"><img src="assets/Image.png"  alt="img" className='img-fluid' draggable="false" /></div>
          <div className='text-start'>
          <h4 className='card_heading'>Oil Filter</h4>
          <p className='card_paragraph'>Oil Filter, didesain khusus dengan harga yang kompetitif namun memenuhi standar Toyota. Tersedia 3 line up untuk model Old Kijang, Avanza, Rush, Agya, dan Calya.</p>
          <div className='mt-5'>
          <a className='card_link' href='#'>Keunggulan</a>
          <img className='ps-2' src='assets/CROSS.svg'/>
          </div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="card">
          <div className="img"><img src="assets/Image-2.png" className='img-fluid'  alt="img" draggable="false" /></div>
          <div className='text-start'>
          <h4 className='card_heading'>Air Filter</h4>
          <p className='card_paragraph'>Air Filter, didesain khusus dengan harga yang kompetitif namun memenuhi standar Toyota. Tersedia 6 line up untuk model Old Kijang, Innova, Avanza, Agya dan Calya.</p>
          <div className='mt-5'>
          <a className='card_link' href='#'>Keunggulan</a>
          <img className='ps-2' src='assets/CROSS.svg'/>
          </div>
          </div>
        </div>
        </SwiperSlide>
      </Swiper>
            </div>
            </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="faq_tab_2"
                      role="tabpanel"
                      aria-labelledby="faq_tab_2-tab"
                    >
                        <div className="container ps-5 pe-5 mt-5">
                          <div className='row'>
                            <div className='col-12'>
                        <p className='product_title'>Toyota PRODUCT -TMO</p>
            <h1 className='product_heading'>Lubricant - TMO Engine Oil</h1>
            <p className='product_paragraph'>Minyak pelumas yang digunakan untuk melumasi dan melindungi bagian-bagian mesin mobil.</p>
            </div>
            </div>
                        </div>
                        <div className="container">
  <div className='row'>
    <div className='col-lg-6 col-md-6 col-12'>
    <div className="card">
        <div className="img"><img src="assets/Image10.png"  alt="img" className='img-fluid' draggable="false" /></div>
        <div className='text-start ps-5 pe-5 ps-lg-0 pe-lg-0 ps-md-0 pe-md-0'>
          <h4 className='card_heading'>Synthetic</h4>
          <p className='card_2_text'>Memiliki keunggulannya tidak mudah menguap dan kemampuan pelumasannya lebih merata.</p>
          <div className='mt-5'>
            <a className='card_link' href='#'>Cek Produk</a>
            <img className='ps-2' src='assets/CROSS.svg'/>
          </div>
        </div>
      </div>
    </div>
    <div className='col-lg-6 col-md-6 col-12'>
    <div className="card card_2">
        <div className="img"><img src="assets/Image11.png" className='img-fluid'  alt="img" draggable="false" /></div>
        <div className='text-start ps-5 pe-5 ps-lg-0 pe-lg-0 ps-md-0 pe-md-0'>
          <h4 className='card_heading'>Full-Synthetic</h4>
          <p className='card_2_text'>Memiliki kemampuan pelumasan paling baik, tahan terhadap suhu tinggi dan mampu meningkatkan efisiensi konsumsi bahan bakar lebih hemat bahan bakar.</p>
          <div className='mt-5'>
            <a className='card_link' href='#'>Cek Produk</a>
            <img className='ps-2' src='assets/CROSS.svg'/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
                      <div className="container mt-5">
                      <div className='row'>
                            <div className='col-12'>
                        <p className='product_title'>Toyota PRODUCT -TMO</p>
            <h1 className='product_heading'>Lubricant - TMO Non Engine Oil</h1>
            <p className='product_paragraph'>Minyak pelumas yang digunakan untuk melumasi dan melindungi bagian-bagian selain mesin mobil</p>
            </div>
            </div>
            <div className="container">
        <OwlCarousel
            className="owl-theme"
            loop={true}
            center={true}
            responsive={{
                0: { items: 1 },
                600: { items: 1 },
                601: { items: 2 },
                1000: { items: 3 }
            }}
            nav={true}
            dots={false}
            navText={['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']}
        >
            <div className="item">
            <div className="card">
          <div className="img"><img src="assets/Image12.png"  alt="img" className='img-fluid' draggable="false" /></div>
          <div className='text-start'>
          <h4 className='card_heading'>TMO Differential Gear Oil</h4>
          <p className='card_2_text'>Pelumas oil gardan (differential) yang ditujukan untuk penggunaan kendaraan berpenggerak roda belakang (RWD)</p>
          </div>
        </div>
            </div>
            <div className="item">
            <div className="card">
          <div className="img"><img src="assets/Image13.png" className='img-fluid'  alt="img" draggable="false" /></div>
          <div className='text-start'>
          <h4 className='card_heading'>TMO Transfer Gear Oil</h4>
          <p className='card_2_text'>Pelumas yang digunakan pada kendaraan 4WD sebagai pelindung chain dan bearing. Tanpa adanya oli transfer, gigi akan sulit berputar dan mobil pun terasa berat saat dijalankan.</p>
          </div>
        </div>
            </div>
            <div className="item">
            <div className="card">
          <div className="img"><img src="assets/Image14.png" className='img-fluid'  alt="img" draggable="false" /></div>
          <div className='text-start'>
          <h4 className='card_heading'>TMO Manual Transmission Fluid</h4>
          <p className='card_2_text'>Pelumas yang dirancang khusus untuk memberikan pelumasan, mengurangi gesekan, dan mendinginkan komponen dalam transmisi manual.</p>
          </div>
        </div>
            </div>
            
        </OwlCarousel>
        
        </div>
                      </div>
                      <div className="container mt-5">
                      <div className='row'>
                            <div className='col-12'>
                        <p className='product_title'>Toyota PRODUCT -TMO</p>
            <h1 className='product_heading'>Chemical Care</h1>
            <p className='product_paragraph'>Hadirkan ketenangan dengan perbaikan Bodi TOYOTA di tangan yang paling berpengalaman Hadirkan ketenangan dengan perbaikan Bodi TOYOTA di tangan yang paling berpengalaman Hadirkan ketenangan dengan perbaikan Bodi TOYOTA di tangan yang paling berpengalaman</p>
            </div>
            </div>
            <div className='row custom_slide_design ms-4 me-4 ms-lg-0 me-lg-0 me-md-0 ms-md-0'>
            <Swiper
      modules={[Virtual, Navigation, Pagination]}
      onSwiper={setSwiperRef}
      slidesPerView={2.5}
      breakpoints={{
        280: {
          slidesPerView: 1,
        },
        // When window width is >= 768px
        768: {
          slidesPerView: 2,
        },
      }}
      centeredSlides={true}
      spaceBetween={30}
      navigation={true}
      pagination={{ clickable: true }}
      virtual
    >
      {slideContent.map((slideContent, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          <div className="card">
            <div className='custom_box_shadow'>
              <img className="card-img-top" src={slideContent.imageUrl} alt="Card image cap"/>
              <div className="card-body custom-color-body text-start">
                <div className='d-flex'>
                  <h3 className='ps-lg-4 ps-md-3 ps-sm-1 ps-0 card_custom_font_size'>{slideContent.text}</h3>
                  <h3 className="card-title ps-lg-5 ps-md-4 ps-3 card_custom_font_size">{slideContent.title}</h3>
                </div>
                <p className="card-text_3 text-start ps-lg-5 ps-3 pt-3">{slideContent.description}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
            </div>
            </div>
            <div className="container mt-5">
                      <div className='row'>
                            <div className='col-12'>
                        <p className='product_title'>Toyota PRODUCT -TMO</p>
            <h1 className='product_heading'>TMO TGRI</h1>
            <p className='product_paragraph'>General Repair atau biasa di singkat GR adalah sebuah perbaikan kendaraan yang lebih memperhatikan tentang kesehatan mesin mobil, baterai mobil dan komponen - komponen didalam mobil itu sendiri agar tetap sehat dan aman digunakan.</p>
            </div>
            </div>
            </div>
            <div className="container">
  <div className='row'>
    <div className='col-lg-6 col-md-6 col-12'>
      <div className="card">
        <div className="img"><img src="assets/Image16.png"  alt="img" className='img-fluid' draggable="false" /></div>
        <div className='text-lg-start text-md-start text-center'>
          <h4 className='card_heading'>TMO TGRI Motor Oil 0W-20 API-SP</h4>
          <p className='card_2_text'>Mendukung stabilitas performa mesin kendaraan dan memberikan performa maksimal untuk penggunaan racing dan harian kendaraan Toyota dengan bahan bakar bensin.</p>
        </div>
      </div>
    </div>
    <div className='col-lg-6 col-md-6 col-12'>
      <div className="card">
        <div className="img"><img src="assets/Image15.png" className='img-fluid'  alt="img" draggable="false" /></div>
        <div className='text-lg-start text-md-start text-center'>
          <h4 className='card_heading'>TMO TGRI Injector Cleaner Gasoline</h4>
          <p className='card_2_text'>Didukung dengan formula khusus untuk mengurangi serta membersihkan karbon dan endapan di dalam injektor dan ruang pembakaran.</p>
        </div>
      </div>
    </div>
  </div>
</div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="faq_tab_3"
                      role="tabpanel"
                      aria-labelledby="faq_tab_3-tab"
                    >
            <div className='container mt-5 mb-5'>
            <div className='row'>
                            <div className='col-12'>
            <p className='product_title'>Toyota PRODUCT - TGB</p>
            <h1 className='product_heading'>TGB Maintenance Free</h1>
            <p className='product_paragraph'>Toyota Genuine Battery Maintenance Free Type merupakan tipe aki kering untuk mobil Toyota dengan standard kualitas Toyota</p>
            <img src="assets/TGB-MF.png" className='img-fluid' alt='logo' />
            </div>
            </div>
            <div className='row pt-5'>
              <div className='col-12'>
                <h1 className='custom_color'>Keunggulan:</h1>
              </div>
              </div>
    <div className='row d-flex pt-3 text-start ms-lg-5 me-lg-5 custom_img_width'>
    <div className='col-sm-12 col-lg-6 col-md-6 d-flex align-items-center ps-5 pe-5 ps-lg-0 pe-lg-0 ps-md-0 pe-md-0'>
      <img src='assets/svg1.svg' alt='svg1'/>
      <p className='custom-padding'>Didesain khusus untuk iklim tropis Indonesia</p>
    </div>
    <div className='col-lg-6 pt-sm-3 pt-3 pt-md-0 pt-lg-0 col-md-6 col-sm-12 d-flex align-items-center ps-5 pe-5 ps-lg-2 pe-lg-0 ps-md-2 pe-md-0'>
      <img src='assets/svg4.svg' alt='svg2'/>
      <p className='custom-padding'>Tidak perlu lagi mengecek dan menambah air aki</p>
    </div>
</div>
    <div className='row d-flex pt-3 text-start ms-lg-5 me-lg-5 custom_img_width'>
    <div className='col-lg-6 col-md-6 col-sm-12 d-flex align-items-center ps-5 pe-5 ps-lg-0 pe-lg-0 ps-md-0 pe-md-0'>
      <img src='assets/svg3.svg' alt='svg3'/>
      <p className='custom-padding'>Daya start (CCA) tinggi & dapat menyimpan energi listrik lebih lama</p>
    </div>
    <div className='col-lg-6 pt-sm-3 pt-3 pt-md-0 pt-lg-0 col-md-6 col-sm-12 d-flex align-items-center ps-5 pe-5 ps-lg-2 pe-lg-0 ps-md-2 pe-md-0'>
      <img src='assets/svg2.svg' alt='svg4'/>
      <p className='custom-padding'>Bebas korosi/Karat</p>
    </div>
    </div>
    <div className='container mt-5'>
    <div className='row'>
                            <div className='col-12'>
            <p className='product_title'>Toyota PRODUCT - TGB</p>
            <h1 className='product_heading'>TGB Standard Type</h1>
            <p className='product_paragraph'>Toyota Genuine Battery Standard Type merupakan tipe aki basah untuk mobil Toyota dengan standard kualitas Toyota</p>
            <img src="assets/TGB_MF_1.png" className='img-fluid' alt='logo' />
            </div>
            </div>
            </div>
            </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="faq_tab_4"
                      role="tabpanel"
                      aria-labelledby="faq_tab_4-tab"
                    >
                          <div className='container mt-5'>
    <div className='row'>
                            <div className='col-12'>
            <p className='product_title'>Toyota PRODUCT</p>
            <h1 className='product_heading'>Tire Solution</h1>
            <p className='product_paragraph'>Layanan penggantian ban di outlet resmi Toyota dengan keunggulan <span className='custom_color_1'>produk ban bervariasi</span> (tersedia berbagai macam merk & tipe) serta memberikan <span className='custom_color_1'>kualitas ban terbaik</span> (usia produksi ban terbaru)</p>
            </div>
            </div>
            </div>
            <div className='container mt-5 custom-bg-color'>
              <div className='row mt-4'>
                <div className='col-12 mt-3 ms-md-3 me-md-3 ms-0 me-0'>
                  <h1 className='ms-3 me-3 product_heading'>Perhatikan ciri-ciri Ban Mobil yang Dapat Membahayakan di Perjalanan</h1>
                </div>
              </div>
              <div className='row ms-md-3 me-md-3 ms-0 me-0 ms-lg-5 me-lg-5 mt-4 mb-5'>
                <div className='col-lg-4 mb-0 col-md-6 col-sm-12 pt-0 pt-lg-0 mb-4'>
                  <div className='custom_border'>
                    <div className='d-flex custom_padding align-items-center text-start half_card'>
                      <h3 className='custom_color_3 custom_style ps-3'>1</h3>
                      <p className='custom_color_3 ps-3 pe-3 pt-2'>Usia ban yang sudah lama / Jarak tempuh ban yang sudah tinggi</p>
                    </div>
                    <div className='custom_color_card ps-3'>
                    <p className='custom_font_p ps-3 pe-3 pt-2 text-start'>
                    Beresiko mengalami penurunan elastisitas / kelenturan karet hingga menjadi getas dan mengeras yang berpotensi pecah di kondisi tertentu
                    </p>
                    <img src='assets/IG_TOYOTA_1.png' className='img-fluid'/>
                    <img src='assets/IG_TOYOTA_2.png' className='img-fluid'/>
                  </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 col-12 mb-4'>
                <div className='custom_border'>
                    <div className='d-flex custom_padding align-items-center text-start half_card'>
                      <h3 className='custom_color_3 custom_style ps-3'>2</h3>
                      <p className='custom_color_3 ps-3 pe-3 pt-2'>Ban Tipis /  Gundul</p>
                    </div>
                    <div className='custom_color_card ps-3'>
                    <p className='custom_font_p ps-3 pe-3 pt-2 text-start'>
                    Kedalaman kembangan ban 3mm beresiko mudah tertusuk benda tajam, daya cengkram berkurang saat pengereman, dan efek hydro /  aquaplaning*
                    </p>
                    <img src='assets/IG_TOYOTA_6.png' className='img-fluid'/>
                  </div>
                  </div>
</div>
<div className='col-lg-4 col-md-6 col-12 mb-4'>
<div className='custom_border'>
                    <div className='d-flex custom_padding align-items-center text-start half_card'>
                      <h3 className='custom_color_3 custom_style ps-3'>3</h3>
                      <p className='custom_color_3 ps-3 pe-3 pt-2'>Ban Sobek / Retak / Benjol /  Banyak Tambalan</p>
                    </div>
                    <div className='custom_color_card ps-3'>
                    <p className='custom_font_p ps-3 pe-3 pt-2 text-start'>
                    Kekuatan ban tidak optimal dan rentan pecah sewaktu-waktu di perjalanan (terutama saat melewati permukaan tidak rata)
                    </p>
                    <img src='assets/IG_TOYOTA_5.png' className='img-fluid'/>
                    <img src='assets/IG_TOYOTA_4.png' className='img-fluid'/>
                    <img src='assets/IG_TOYOTA_3.png' className='img-fluid'/>
                  </div>
                  </div>
</div>
              </div>
            </div>
            <div className='container'>
                            <div className='row mt-5'>
                <div className='col-12 custom_hide_display'>
                  <h1 className='product_heading'>Panjang Pengereman Terhadap Kedalaman Ban</h1>
                  <img src='assets/Asset_6.png' className='img-fluid mt-5 mb-5 image_1'/>
                  <img src='assets/Asset_6_mobile.png' className='img-fluid mt-5 mb-5 image_2'/>
                </div>
              </div>
            </div>
            <div className='container-fluid px-0 custom-bg-color'>
  <div className="container pt-5 pb-5">
    <div className='row'>
      <div className='col-12'>
        <h1 className='product_heading'>Keunggulan Mengganti Ban di Toyota</h1>
      </div>
    </div>
    <div className="row justify-content-center pt-3">
      <div className="col-lg-2 col-md-4 col-6">
        <div className="card cards_custom_design align-items-center">
          <img src="assets/card-icon-1.png" className='pt-2' alt="Logo"/>
          <p className='card_heading_3 pt-2'>Produk Ban Bervariasi</p>
          <p className='card_text_3 pb-4'>Tersedia berbagai macam merk & tipe</p>
        </div>
      </div>
      <div className=" col-lg-2 col-md-4 col-6">
        <div className="card cards_custom_design align-items-center">
          <img src="assets/card-icon-2.png" className='pt-2' alt="Logo"/>
          <p className='card_heading_3 pt-2'>Kualitas Ban Terbaik</p>
          <p className='card_text_3 pb-4'>Usia Produksi Ban Terbaru</p>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-6 pt-3 pt-lg-0 pt-md-0">
        <div className="card cards_custom_design align-items-center">
          <img src="assets/card-icon-3.png" className='pt-2' alt="Logo"/>
          <p className='card_heading_3 pt-2'>One Stop Service</p>
          <p className='card_text_3 pb-4'>Layanan pengecekan kendaraan & cuci mobil garansi produk ban*</p>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-6 pt-md-3 pt-lg-0 pt-3">
        <div className="card cards_custom_design align-items-center">
          <img src="assets/card-icon-4.png" className='pt-2' alt="Logo"/>
          <p className='card_heading_3 pt-2'>Bebas Biaya Tambahan</p>
          <p className='card_text_3 pb-4'>Gratis biaya pemasangan, balancing & pentil ban</p>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-6 pt-md-3 pt-lg-0 pt-3">
        <div className="card cards_custom_design align-items-center">
          <img src="assets/card-icon-5.png" className='pt-2' alt="Logo"/>
          <p className='card_heading_3 pt-2'>Ditangani oleh Teknisi Berpengalaman</p>
          <p className='card_text_3 pb-4'>Tersedia berbagai macam merk & tipe</p>
        </div>
        <p className='card_outer_text pt-2'>*Syarat & Ketentuan Berlaku</p>
      </div>
    </div>
  </div>
</div>
<div className='container mt-5'>
  <div className='row'>
    <div className='col-12'>
      <h1 className='product_heading'>Solusi Terpercaya untuk Ban Anda</h1>
    </div>
  </div>
  <div className='row pt-3 last_images'>
    <div className='col-4'>
      <img src='assets/Bridgestone_logo1.png' className='img-fluid' alt='Logo'/>
    </div>
    <div className='col-4'>
      <img src='assets/Bridgestone_logo2.png' className='img-fluid' alt='Logo'/>
    </div>
    <div className='col-4'>
      <img src='assets/Bridgestone_logo3.png' className='img-fluid' alt='Logo'/>
    </div>
  </div>
  <div className='row pt-3'>
    <div className='col-4'>
      <img src='assets/Bridgestone_logo4.png' className='img-fluid' alt='Logo'/>
    </div>
    <div className='col-4'>
      <img src='assets/Bridgestone_logo5.png' className='img-fluid' alt='Logo'/>
    </div>
    <div className='col-4'>
      <img src='assets/Bridgestone_logo6.png' className='img-fluid' alt='Logo'/>
    </div>
  </div>
  <div className='row justify-content-center pt-3'>
    <div className='col-4'>
      <img src='assets/Bridgestone_logo7.png' alt='Logo' className='text-center img-fluid'/>
    </div>
  </div>


</div>
                    </div>
                  </div>
                  </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
        <div className="logos d-flex justify-content-center mt-5 mb-4">
                          <div className="mx-2">
                            <img
                              src="assets/quality-service.png"
                              alt="t-care-img"
                              className='img-fluid'
                            />
                          </div>
                          <div className="mx-2">
                            <img
                              src="assets/genuine-parts (1).png"
                              alt="t-care-img"
                              className='img-fluid'
                            />
                          </div>
                          <div className="mx-2">
                            <img src="assets/tmo.png" alt="t-care-img" className='img-fluid' />
                          </div>
                        </div>
        <Footer></Footer>
    </div>
  );
}

export default Products;
