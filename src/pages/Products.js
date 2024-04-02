import Header from "./layout/Header";
import Footer from "./layout/Footer";
import React, { useState, useRef, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../css/products.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Virtual, Navigation, Pagination, FreeMode } from "swiper/modules";
import { useSelector } from "react-redux";

function Products() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const [isVisible1, setIsVisible1] = useState(false);

  const toggleVisibility1 = () => {
    setIsVisible1(!isVisible1);
  };
  const [isVisible2, setIsVisible2] = useState(false);

  const toggleVisibility2 = () => {
    setIsVisible2(!isVisible2);
  };
  const [isVisible3, setIsVisible3] = useState(false);

  const toggleVisibility3 = () => {
    setIsVisible3(!isVisible3);
  };
  const [isVisible4, setIsVisible4] = useState(false);

  const toggleVisibility4 = () => {
    setIsVisible4(!isVisible4);
  };
  const [isVisible5, setIsVisible5] = useState(false);

  const toggleVisibility5 = () => {
    setIsVisible5(!isVisible5);
  };
  const [isVisible6, setIsVisible6] = useState(false);

  const toggleVisibility6 = () => {
    setIsVisible6(!isVisible6);
  };
  const value = useSelector((state) => state.value);
  const scrollLeft = () => {
    const myTab = document.getElementById("myTab");
    myTab.scrollTo({
      left: myTab.scrollLeft - 100,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const myTab = document.getElementById("myTab");
    myTab.scrollTo({
      left: myTab.scrollLeft + 100,
      behavior: "smooth",
    });
  };
  const [swiperRef, setSwiperRef] = useState(null);
  const [slideContent, setSlides] = useState([
    {
      title: "TMO Evaporator Cleaner",
      text: "1",
      description:
        "TMO Evaporator Cleaner membersihkan kotoran ringan pada Evaporator AC kendaraan untuk menjaga sistem AC tetap bekerja optimal & menyegarkan udara keluar dari AC di dalam kabin. Pembersihan dilakukan sesuai dengan standar operasional Toyota.",
      imageUrl: "assets/Frame_874.png",
    },
    {
      title: "TMO Injector Cleaner",
      text: "2",
      description:
        "Cairan yang diformulasi khusus yang dapat melindungi dan membersihkan ruang pembakaran, injector, katup pemasukan-pembuangan serta efektif mengembalikan proforma mesin serta menghemat konsumsi bahan bakar Toyota.",
      imageUrl: "assets/Frame_875.png",
    },
    {
      title: "TMO Brake Cleaner",
      text: "3",
      description:
        "Aerosol untuk membersihkan komponen pengereman dari debu, grease, oli, pada saat periodic maintenance.",
      imageUrl: "assets/Frame 874_1.png",
    },
    {
      title: "TMO Engine Room Treatment",
      text: "3",
      description:
        "Produk berbahan dasar air yang didesain khusus dengan formula terbaru yang lebih optimal untuk membersihkan & mengkilapkan lebih efektif pada kompartemen ruang mesin mobil. Pembersihan dilakukan sesuai dengan standar operasional Toyota.",
      imageUrl: "assets/Frame 874_2.png",
    },
    {
      title: "TMO Glass Cleaner",
      text: "3",
      description:
        "Cairan untuk membersihkan kaca mobil dari kotoran dan jamur (waterspot). Membantu meningkatkan visibilitas saat berkendara.",
      imageUrl: "assets/Frame 874_3.png",
    },
    {
      title: "TMO Wiper Fluid",
      text: "3",
      description:
        "Cairan pembersih kaca mobil & pencegah jamur",
      imageUrl: "assets/Frame 874_4.png",
    },
    {
      title: "TMO Cabin Disinfectant",
      text: "3",
      description:
        "Aerosol penghilang bakteri* hingga 99,99%* (teruji) dan penyegar kabin.",
      imageUrl: "assets/Frame 874_5.png",
    },
  ]);
  const [slideContents, setSlidess] = useState([
    {
      title: "TMO Differential Gear Oil",
      text: "1",
      description:" Pelumas oil gardan (differential) yang ditujukan untuk penggunaan kendaraan berpenggerak roda belakang (RWD).",
      imageUrl: "assets/Image12.png",
    },
    {
      title: "TMO Transfer Gear Oil",
      text: "2",
      description:"Pelumas yang digunakan pada kendaraan 4WD sebagai pelindung chain dan bearing. Tanpa adanya oli transfer, gigi akan sulit berputar dan mobil pun terasa berat saat dijalankan.",
      imageUrl: "assets/Image13.png",
    },
    {
      title: "TMO Manual Transmission Fluid",
      text: "3",
      description:"Pelumas yang dirancang khusus untuk memberikan pelumasan, mengurangi gesekan, dan mendinginkan komponen dalam transmisi manual.",
      imageUrl: "assets/Image14.png",
    },
    {
      title: "TMO Automatic Transmission Fluid",
      text: "3",
      description:"Pelumas yang dirancang khusus untuk digunakan dalam pelumasan, pendinginan, dan transmisi daya yang efisien dalam transmisi otomatis.",
      imageUrl: "assets/Image203.png",
    },
  ]);
  return (
    <div>
      <Header></Header>
      <div className="container-fluid px-0">
        <img src="assets/Rectangle.png" className="w-100" alt="logo" />
      </div>
      <div className="container-fluid">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <h1 className="product_heading">Discover Our Product</h1>
            </div>
            <div className="col-12">
              <p className="product_sub_heading">
                Layanan Servis berkualitas prima,{" "}
                <span className="inner-text">
                  agar performa Toyota Anda selalu optimal
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 overflow-x-hidden">
        <div className="row mt-5 d-flex justify-content-center">
          <div className="bg-white">
            <div className="container" style={{ position: "relative" }}>
              <div className="scroll-buttons d-lg-none d-flex align-items-center">
                <img
                  onClick={scrollRight}
                  className="ms-1 me-1 pe-2  mt-5 pt-2"
                  src="assets/Frameright.svg"
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
                  src="assets/Frameleft.svg"
                  alt=""
                  style={{ position: "absolute", top: "0px" }}
                />
              </div>
              <div className="row">
                <div className="col-12">
                  <ul
                    className="nav nav-tabs custom-nav-tabs nav-fill custom-nav-fill ms-4 me-4 ms-lg-0 me-lg-0"
                    id="myTab"
                    role="tablist"
                  >
                    <li
                      className="nav-item custom-nav-item"
                      role="presentation"
                    >
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
                    <li
                      className="nav-item custom-nav-item"
                      role="presentation"
                    >
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
                    <li
                      className="nav-item custom-nav-item"
                      role="presentation"
                    >
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
                    <li
                      className="nav-item custom-nav-item"
                      role="presentation"
                    >
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
            <div className="container-fluid px-0">
              <div className="row">
                <div className="col-12">
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade active show"
                      id="faq_tab_1"
                      role="tabpanel"
                      aria-labelledby="faq_tab_1-tab"
                    >
                      <div className="container mt-5 mb-5">
                        <div className="row">
                          <div className="col-12">
                            <p className="product_title">
                              Toyota PRODUCT - service parts
                            </p>
                            <h1 className="product_heading">
                              Toyota Genuine Parts
                            </h1>
                            <p className="product_paragraph">
                              Toyota Genuine Parts yaitu suku cadang resmi dari
                              Toyota dengan mendegepankan kualitas dan telah
                              dirancang sesuai dengan spesifikasi dan kebutuhan
                              kendaraan kesayangan anda.
                            </p>
                            <img
                              src="assets/Rectangle-118.png"
                              className="w-100"
                              alt="logo"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="container mt-5">
                        <div className="row">
                          <div className="col-12">
                            <p className="product_title">
                              Toyota PRODUCT - service parts
                            </p>
                            <h1 className="product_heading">
                              Market Valuable Parts (MVP)
                            </h1>
                            <p className="product_paragraph">
                              MVP adalah produk part Toyota yang khusus
                              dikembangkan untuk menawarkan harga yang lebih
                              kompetitif, dengan tetap memenuhi standard
                              kualitas Toyota.
                            </p>
                          </div>
                        </div>
                        <div className="container">
                          <Swiper
                            slidesPerView={3}
                            breakpoints={{
                              280: {
                                slidesPerView: 1,
                              },
                              768: {
                                slidesPerView: 2,
                              },
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
                                <div className="img">
                                  <img
                                    src="assets/Image.png"
                                    alt="img"
                                    className="img-fluid"
                                    draggable="false"
                                  />
                                </div>
                                <div className="text-start card_customm_padding">
                                  <h4 className="card_heading">Oil Filter</h4>
                                  <p className="card_paragraph">
                                      Oil Filter, didesain khusus dengan harga yang kompetitif
                                    namun memenuhi standar Toyota. Tersedia 3
                                    line up untuk model Old Kijang, Avanza,
                                    Rush, Agya, dan Calya.
                                  </p>
                                  <div className="mt-5">
                                    <a onClick={toggleVisibility} className="card_link">
                                      Keunggulan
                                      <img
                                      className="ps-2"
                                      src="assets/CROSS.svg"
                                    />
                                    </a>
                                  </div>
                                  {isVisible && (
                                  <div className="card_background_image_1 mt-4 d-flex align-items-center">
                                      <img src='assets/Vector.png' className="img-notepad_1"/>
                                    <p className="notePad_text me-3 mt-3 ps-3">Tahan terhadap tekanan tinggi</p>
                                    
                                  </div>
                                  )}
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="card">
                                <div className="img">
                                  <img
                                    src="assets/Image-2.png"
                                    className="img-fluid"
                                    alt="img"
                                    draggable="false"
                                  />
                                </div>
                                <div className="text-start card_customm_padding">
                                  <h4 className="card_heading">Air Filter</h4>
                                  <p className="card_paragraph">
                                      Air Filter, didesain khusus dengan harga yang kompetitif
                                    namun memenuhi standar Toyota. Tersedia 6
                                    line up untuk model Old Kijang, Innova,
                                    Avanza, Agya dan Calya.
                                  </p>
                                  <div className="mt-5">
                                    <a onClick={toggleVisibility1} className="card_link">
                                      Keunggulan
                                      <img
                                      className="ps-2"
                                      src="assets/CROSS.svg"
                                    />
                                    </a>
                                  </div>
                                  {isVisible1 && (
                                  <div className="card_background_image_2 mt-4 d-flex align-items-center">
                                      <img src='assets/Asset 2.svg' className="ms-3 margin_of_2"/>
                                    <p className="notePad_text me-3 mt-3 ps-3">Performa filtrasi yang tinggi dibanding kompetitor</p>
                                    
                                  </div>
                                  )}
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="card">
                                <div className="img">
                                  <img
                                    src="assets/Image-3.png"
                                    className="img-fluid"
                                    alt="img"
                                    draggable="false"
                                  />
                                </div>
                                <div className="text-start card_customm_padding">
                                  <h4 className="card_heading">
                                    Brake Pad & Brake Shoe
                                  </h4>
                                  <p className="card_paragraph">
                                      Brake pad & brake shoe, didesain khusus dengan harga yang kompetitif
                                    namun memenuhi standar Toyota. Tersedia 13
                                    line up untuk model Old Kijang, Innova,
                                    Avanza, dan Calya.
                                  </p>
                                  <div className="mt-5">
                                    <a onClick={toggleVisibility2} className="card_link">
                                      Keunggulan
                                      <img
                                      className="ps-2"
                                      src="assets/CROSS.svg"
                                    />
                                    </a>
                                  </div>
                                  {isVisible2 && (
                                  <div className="card_background_image_3 mt-4 d-flex flex-column">
                                    <div className="">
                                      <div className="d-flex align-items-center"><img src='assets/Asset 2.svg' className="ms-3 third_double_image"/>
                                    <p className="notePad_text text_334 me-3 mt-3 ps-3">Durabilitas lebih tinggi dibanding kompetitor, dapat dipakai hingga 45.000 KM.</p>
                                    </div>
                                    </div>
                                    <div className="d-flex align-items-center custom_border_23 double_color_image" >
                                    <img src='assets/Layer 2.svg' className="ms-3 image_334"/>
                                    <p className="notePad_text me-3 mt-3 ps-3 text_336">Menggunakan material non asbestos yang ramah lingkungan.</p>
                                    </div>
                                    
                                  </div>
                                  )}
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="card">
                                <div className="img">
                                  <img
                                    src="assets/Image_card_4.png"
                                    alt="img"
                                    className="img-fluid"
                                    draggable="false"
                                  />
                                </div>
                                <div className="text-start card_customm_padding">
                                  <h4 className="card_heading">Disc Clutch</h4>
                                  <p className="card_paragraph">
                                    Didesain khusus dengan harga yang kompetitif namun memenuhi standar Toyota. Tersedia 3 line up untuk model Avanza, Rush, Calya.
                                  </p>
                                  <div className="mt-5">
                                    <a onClick={toggleVisibility3} className="card_link">
                                      Keunggulan
                                      <img
                                      className="ps-2"
                                      src="assets/CROSS.svg"
                                    />
                                    </a>
                                  </div>
                                  {isVisible3 && (
                                 <div className="card_background_image_3 mt-4">
                                 <div className="custom_grey_background d-flex flex-column">
                                   <div className="d-flex align-items-center"><img src='assets/Asset 5.svg' className="ms-3 image_338"/>
                                 <p className="notePad_text me-3 mt-3 ps-3 text_338">Fitur additional damper untuk mencegah noise.</p>
                                 </div>
                                 <div className="d-flex align-items-center custom_border_23 double_color_image_1">
                                 <img src='assets/Layer 3.svg' className="ms-3"/>
                                 <p className="notePad_text me-3 mt-3 ps-3 text-339">Memiliki durabilitas yang tinggi, tahan kondisi ekstrem.</p>
                                 </div>
                                 </div>
                                 
                               </div>
                                  )}
                                </div>
                              </div>
                            </SwiperSlide>
                            <SwiperSlide>
                              <div className="card">
                                <div className="img">
                                  <img
                                    src="assets/Image_card_5.png"
                                    className="img-fluid"
                                    alt="img"
                                    draggable="false"
                                  />
                                </div>
                                <div className="text-start card_customm_padding">
                                  <h4 className="card_heading">Rear Absorber</h4>
                                  <p className="card_paragraph">
                                    Didesain khusus dengan harga yang kompetitif namun memenuhi standar Toyota. Tersedia 5 line up untuk model Old Kijang, Innova, Avanza, Agya dan Calya.
                                  </p>
                                  <div className="mt-5">
                                    <a onClick={toggleVisibility4} className="card_link">
                                      Keunggulan
                                      <img
                                      className="ps-2"
                                      src="assets/CROSS.svg"
                                    />
                                    </a>
                                  </div>
                                  {isVisible4 && (
 <div className="card_background_image_3 mt-4">
 <div className="custom_grey_background d-flex flex-column">
   <div className="d-flex align-items-center"><img src='assets/Layer 5.svg' className="ms-3 image_338 image_340"/>
 <p className="notePad_text me-3 mt-3 ps-3 text_338 text_340">Damping force yang optimal sehingga stabil saat mengendara.</p>
 </div>
 <div className="d-flex align-items-center custom_border_23 double_color_image_1 double_color_image_2">
 <img src='assets/Layer 3.svg' className="ms-3 image_341"/>
 <p className="notePad_text me-3 mt-3 ps-3 text-339 text_341">Durabilitas yang tinggi, lebih awet dan tahan lama.</p>
 </div>
 </div>
 
</div>
                                  )}
                                </div>
                              </div>
                            </SwiperSlide>
                          </Swiper>
                        </div>
                      </div>
                      <div className="logos d-flex justify-content-center mt-5 mb-4">
        <div className="mx-2">
          <img
            src="assets/quality-service.png"
            alt="t-care-img"
            className="img-fluid"
          />
        </div>
        <div className="mx-2">
          <img
            src="assets/genuine-parts (1).png"
            alt="t-care-img"
            className="img-fluid"
          />
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
                        <div className="row">
                          <div className="col-12">
                            <p className="product_title">Toyota PRODUCT -TMO</p>
                            <h1 className="product_heading">
                              Lubricant - TMO Engine Oil
                            </h1>
                            <p className="product_paragraph">
                              Minyak pelumas yang digunakan untuk melumasi dan
                              melindungi bagian-bagian mesin mobil.
                            </p>
                            <img src="assets/video layout.png" className="img-fluid mt-2"/>
                          </div>
                        </div>
                      </div>
                      <div className="container">
                        <div className="row new_slider d-flex justify-content-center">
                          <div className="col-lg-8 col-md-10 col-12">
                            <Swiper
                              slidesPerView={2}
                              breakpoints={{
                                280: {
                                  slidesPerView: 1,
                                },
                                768: {
                                  slidesPerView: 2,
                                },
                              }}
                              spaceBetween={30}
                              freeMode={true}
                              navigation={true}
                              modules={[FreeMode, Navigation]}
                              className="mySwiper"
                            >
                              <SwiperSlide>
                                {" "}
                                <div className="card">
                                  <div className="img">
                                    <img
                                      src="assets/Image10.png"
                                      alt="img"
                                      className="img-fluid"
                                      draggable="false"
                                    />
                                  </div>
                                  <div className="text-start ps-5 pe-5 ps-lg-0 pe-lg-0 ps-md-0 pe-md-0">
                                    <h4 className="card_heading">Synthetic</h4>
                                    <p className="card_2_text">
                                      Memiliki keunggulannya tidak mudah menguap
                                      dan kemampuan pelumasannya lebih merata.
                                    </p>
                                    <div className="mt-5">
                                      <a className="card_link" onClick={toggleVisibility5}>
                                        Cek Produk
                                        <img
                                        className="ps-2"
                                        src="assets/CROSS.svg"
                                      />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                {" "}
                                <div className="card card_2">
                                  <div className="img">
                                    <img
                                      src="assets/Image11.png"
                                      className="img-fluid"
                                      alt="img"
                                      draggable="false"
                                    />
                                  </div>
                                  <div className="text-start ps-5 pe-5 ps-lg-0 pe-lg-0 ps-md-0 pe-md-0">
                                    <h4 className="card_heading">
                                      Full-Synthetic
                                    </h4>
                                    <p className="card_2_text">
                                      Memiliki kemampuan pelumasan paling baik,
                                      tahan terhadap suhu tinggi dan mampu
                                      meningkatkan efisiensi konsumsi bahan
                                      bakar lebih hemat bahan bakar.
                                    </p>
                                    <div className="mt-5">
                                      <a className="card_link" onClick={toggleVisibility6}>
                                        Cek Produk
                                        <img
                                        className="ps-2"
                                        src="assets/CROSS.svg"
                                      />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                            </Swiper>
                            {isVisible5 && (
                            <div className="row mt-3">
                              <div className="col-6">
                            <div className="show_cards_1">
                                  <div className="text-center">
                                    <h4 className="card_heading_233">10W-40 Gasoline</h4>
                                  </div>
                                  <div className="img">
                                    <img
                                      src="assets/4L 5W-30 Gasoline_111.png"
                                      alt="img"
                                    />
                                  </div>
                                </div>
                                </div>
                                <div className="col-6">
                                <div className="show_cards_2">
                                  <div className="text-center">
                                    <h4 className="card_heading_233">15W-40 Diesel</h4>
                                  </div>
                                  <div className="img">
                                    <img
                                      src="assets/10W-30.png"
                                      alt="img"
                                    />
                                  </div>
                                </div>
                                </div>
                                </div>
                            )}
                          </div>
                          {isVisible6 && (
                          <div className="row mt-3">
                              <div className="col-lg-4 col-6">
                            <div className="show_cards_3">
                                  <div className="text-center">
                                    <h4 className="card_heading_233">5W-30 Gasoline</h4>
                                  </div>
                                  <div className="img">
                                    <img
                                      src="assets/4L 5W-30 Gasoline12.png"
                                      alt="img"
                                    />
                                  </div>
                                </div>
                                </div>
                                <div className="col-lg-4 col-6">
                                <div className="show_cards_3">
                                  <div className="text-center">
                                    <h4 className="card_heading_233">0W-20 Gasoline</h4>
                                  </div>
                                  <div className="img">
                                    <img
                                      src="assets/4L 5W-30 Gasoline13.png"
                                      alt="img"
                                    />
                                  </div>
                                </div>
                                </div>
                                <div className="col-lg-4 col-6 mt-lg-0 mt-3 mx-auto mx-lg-0">
                                <div className="show_cards_3">
                                  <div className="text-center">
                                    <h4 className="card_heading_233">0W-16 Gasoline</h4>
                                  </div>
                                  <div className="img">
                                    <img
                                      src="assets/4L 5W-30 Gasoline14.png"
                                      alt="img"
                                    />
                                  </div>
                                </div>
                                </div>
                                </div>
                          )}
                        </div>
                      </div>
                      <div className="container mt-5">
<div className="row">
  <div className="col-12">
    <h2 className="circle-Tabs-heading">Lakukan pengecekan keaslian oli dengan scan QR pada kemasan TMO:</h2>
  <div class="circle-tabs mt-5">
    <div className="d-flex flex-lg-column flex-md-column remove-svg w-100 align-items-center ms-5 ms-lg-0 ms-md-0">
                      <div>
                      <a href="javascript:void(0)" className={`class_1`}>
                        1
                      </a>
                      </div>
                      <div className="mt-md-3 mt-lg-3 text-lg-center text-md-center text-start me-5 me-lg-0 me-md-0">
                      <p>Congkel segel tutup botol TMO.</p>
                      </div>
                      </div>
                      <div className="d-flex flex-lg-column flex-md-column w-100 mt-lg-0 mt-md-0 mt-3 align-items-center ms-5 ms-lg-0 ms-md-0">
                      <div>
                      <a href="javascript:void(0)" className={`class_1`}>
                        2
                      </a>
                      </div>
                      <div className="mt-md-3 mt-lg-3 text-lg-center text-md-center text-start me-5 me-lg-0 me-md-0">
                      <p>Cabut penutup plastik tutup botol TMO.</p>
                      </div>
                      </div>
                      <div className="d-flex flex-lg-column flex-md-column w-100 mt-lg-0 mt-md-0 mt-3 align-items-center ms-5 ms-lg-0 ms-md-0">
                      <div >
                      <a href="javascript:void(0)" className={`class_1`}>
                        3
                      </a>
                      </div>
                      <div className="mt-md-3 mt-lg-3 text-lg-center text-md-center text-start me-5 me-lg-0 me-md-0">
                      <p>Copot kepingan kertas pelindung seal aluminium TMO.</p>
                      </div>
                      </div>
                      <div className="d-flex flex-lg-column flex-md-column align-items-center w-100 remove-svg-2 mt-lg-0 mt-md-0 mt-3 ms-5 ms-lg-0 ms-md-0">
                      <div>
                      <a href="javascript:void(0)" className={`class_1`}>
                        4
                      </a>
                      </div>
                      <div className="mt-md-3 mt-lg-3 text-start text-lg-center text-md-center me-5 me-lg-0 me-md-0">
                      <p>Cek keaslian dengan scan kode QR yang terdapat pada seal aluminium TMO.</p>
                      </div>
                      </div>
                    </div>
  </div>
</div>
                      </div>
                      <div className="container mt-5">
                        <div className="row">
                          <div className="col-12">
                            <p className="product_title">Toyota PRODUCT -TMO</p>
                            <h1 className="product_heading">
                              Lubricant - TMO Non Engine Oil
                            </h1>
                            <p className="product_paragraph">
                              Minyak pelumas yang digunakan untuk melumasi dan
                              melindungi bagian-bagian selain mesin mobil
                            </p>
                          </div>
                        </div>
                        <div className="container">
                        <div className="row custom_slide_design ms-4 me-4 ms-lg-0 me-lg-0 me-md-0 ms-md-0">
                           <Swiper
                           modules={[Virtual, Navigation, Pagination]}
                           onSwiper={setSwiperRef}
                           slidesPerView={3}
                           breakpoints={{
                             280: {
                               slidesPerView: 1,
                             },
                             768: {
                               slidesPerView: 1.5,
                             },
                             1280: {
                               slidesPerView: 2.5,
                             },
                             1400: {
                               slidesPerView: 3,
                             },
                           }}
                           centeredSlides={true}
                           spaceBetween={30}
                           navigation={true}
                           pagination={{ clickable: true }}
                           virtual
                         >
                           {slideContents.map((slideContents, index) => (
                             <SwiperSlide key={index} virtualIndex={index}>
                              <div className="card">
                                  <div className="custom_box_shadow">
                                    <img
                                      className="card-img-top img-fluid"
                                      src={slideContents.imageUrl}
                                      alt="Card image cap"
                                    />
                                    <div className="card-body custom-color-body">
                                      <div className="d-flex justify-content-center">
                                        <h3 className="card-title ps-3 card_custom_font_size">
                                          {slideContents.title}
                                        </h3>
                                      </div>
                                      <p className="card-text_3 ps-2 pe-2 text-start pt-3">
                                        {slideContents.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                             </SwiperSlide>
                           ))}
                         </Swiper>
                         </div>
                        </div>
                      </div>
                      <div className="container mt-5">
                        <div className="row">
                          <div className="col-12">
                            <p className="product_title">Toyota PRODUCT -TMO</p>
                            <h1 className="product_heading">Chemical Care</h1>
                            <p className="product_paragraph">
                              Hadirkan ketenangan dengan perbaikan Bodi TOYOTA
                              di tangan yang paling berpengalaman Hadirkan
                              ketenangan dengan perbaikan Bodi TOYOTA di tangan
                              yang paling berpengalaman Hadirkan ketenangan
                              dengan perbaikan Bodi TOYOTA di tangan yang paling
                              berpengalaman
                            </p>
                          </div>
                        </div>
                        <div className="row custom_slide_design ms-4 me-4 ms-lg-0 me-lg-0 me-md-0 ms-md-0">
                          <Swiper
                            modules={[Virtual, Navigation, Pagination]}
                            onSwiper={setSwiperRef}
                            slidesPerView={3}
                            breakpoints={{
                              280: {
                                slidesPerView: 1,
                              },
                              768: {
                                slidesPerView: 1.5,
                              },
                              1280: {
                                slidesPerView: 2.5,
                              },
                              1400: {
                                slidesPerView: 3,
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
                                  <div className="custom_box_shadow_1">
                                    <img
                                      className="card-img-top img-fluid"
                                      src={slideContent.imageUrl}
                                      alt="Card image cap"
                                    />
                                    <div className="card-body custom-color-body text-start">
                                      <div className="d-flex">
                                        <h3 className="card-title ps-3 card_custom_font_size">
                                          {slideContent.title}
                                        </h3>
                                      </div>
                                      <p className="card-text_3 text-start ps-2 pe-2 pt-3">
                                        {slideContent.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </SwiperSlide>
                            ))}
                          </Swiper>
                        </div>
                      </div>
                      <div className="container mt-5">
                        <div className="row">
                          <div className="col-12">
                            <p className="product_title">Toyota PRODUCT -TMO</p>
                            <h1 className="product_heading">TMO TGRI</h1>
                            <p className="product_paragraph">
                              General Repair atau biasa di singkat GR adalah
                              sebuah perbaikan kendaraan yang lebih
                              memperhatikan tentang kesehatan mesin mobil,
                              baterai mobil dan komponen - komponen didalam
                              mobil itu sendiri agar tetap sehat dan aman
                              digunakan.
                            </p>
                            <img src="assets/video layout.png" className="img-fluid mt-2"/>
                          </div>
                        </div>
                      </div>
                      <div className="container">
                      <div className="row new_slider d-flex justify-content-center mt-5">
                          <div className="col-lg-8 col-md-10 col-12">
                            <Swiper
                              slidesPerView={2}
                              breakpoints={{
                                280: {
                                  slidesPerView: 1,
                                },
                                768: {
                                  slidesPerView: 2,
                                },
                              }}
                              spaceBetween={30}
                              freeMode={true}
                              navigation={true}
                              modules={[FreeMode, Navigation]}
                              className="mySwiper"
                            >
                              <SwiperSlide>
                                {" "}
                                <div className="card">
                                  <div className="img">
                                    <img
                                      src="assets/Image16.png"
                                      alt="img"
                                      className="img-fluid"
                                      draggable="false"
                                    />
                                  </div>
                                  <div className="text-start ps-5 pe-5 ps-lg-0 pe-lg-0 ps-md-0 pe-md-0">
                                  <h4 className="card_heading">
                                  TMO TGRI Motor Oil 0W-20 API-SP
                                </h4>
                                <p className="card_2_text">
                                  Mendukung stabilitas performa mesin kendaraan
                                  dan memberikan performa maksimal untuk
                                  penggunaan racing dan harian kendaraan Toyota
                                  dengan bahan bakar bensin.
                                </p>
                                  </div>
                                </div>
                              </SwiperSlide>
                              <SwiperSlide>
                                {" "}
                                <div className="card card_2">
                                  <div className="img">
                                    <img
                                      src="assets/Image15.png"
                                      className="img-fluid"
                                      alt="img"
                                      draggable="false"
                                    />
                                  </div>
                                  <div className="text-start ps-5 pe-5 ps-lg-0 pe-lg-0 ps-md-0 pe-md-0">
                                  <h4 className="card_heading">
                                  TMO TGRI Injector Cleaner Gasoline
                                </h4>
                                <p className="card_2_text">
                                  Didukung dengan formula khusus untuk
                                  mengurangi serta membersihkan karbon dan
                                  endapan di dalam injektor dan ruang
                                  pembakaran.
                                </p>
                                  </div>
                                </div>
                              </SwiperSlide>
                            </Swiper>
                          </div>
                        </div>
                      </div>
                      <div className="logos d-flex justify-content-center mt-5 mb-4">
        <div className="mx-2">
          <img
            src="assets/quality-service.png"
            alt="t-care-img"
            className="img-fluid"
          />
        </div>
        <div className="mx-2">
          <img
            src="assets/genuine-parts (1).png"
            alt="t-care-img"
            className="img-fluid"
          />
        </div>
        <div className="mx-2">
          <img src="assets/tmo.png" alt="t-care-img" className="img-fluid" />
        </div>
      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="faq_tab_3"
                      role="tabpanel"
                      aria-labelledby="faq_tab_3-tab"
                    >
                      <div className="container mt-5 mb-5">
                        <div className="row">
                          <div className="col-12">
                            <p className="product_title">
                              Toyota PRODUCT - TGB
                            </p>
                            <h1 className="product_heading">
                              TGB Maintenance Free
                            </h1>
                            <p className="product_paragraph">
                              Toyota Genuine Battery Maintenance Free Type
                              merupakan tipe aki kering untuk mobil Toyota
                              dengan standard kualitas Toyota
                            </p>
                            <img
                              src="assets/TGB-MF.png"
                              className="img-fluid"
                              alt="logo"
                            />
                          </div>
                        </div>
                        <div className="row pt-5">
                          <div className="col-12">
                            <h1 className="custom_color">Keunggulan:</h1>
                          </div>
                        </div>
                        <div className="row d-flex pt-3 text-start ms-lg-5 me-lg-5 custom_img_width">
                          <div className="col-sm-12 col-lg-6 col-md-6 d-flex align-items-center ps-5 pe-5 ps-lg-0 pe-lg-0 ps-md-0 pe-md-0">
                            <img src="assets/svg1.svg" alt="svg1" />
                            <p className="custom-padding">
                              Didesain khusus untuk iklim tropis Indonesia
                            </p>
                          </div>
                          <div className="col-lg-6 pt-sm-3 pt-3 pt-md-0 pt-lg-0 col-md-6 col-sm-12 d-flex align-items-center ps-5 pe-5 ps-lg-2 pe-lg-0 ps-md-2 pe-md-0">
                            <img src="assets/svg4.svg" alt="svg2" />
                            <p className="custom-padding">
                              Tidak perlu lagi mengecek dan menambah air aki
                            </p>
                          </div>
                        </div>
                        <div className="row d-flex pt-3 text-start ms-lg-5 me-lg-5 custom_img_width">
                          <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center ps-5 pe-5 ps-lg-0 pe-lg-0 ps-md-0 pe-md-0">
                            <img src="assets/svg3.svg" alt="svg3" />
                            <p className="custom-padding">
                              Daya start (CCA) tinggi & dapat menyimpan energi
                              listrik lebih lama
                            </p>
                          </div>
                          <div className="col-lg-6 pt-sm-3 pt-3 pt-md-0 pt-lg-0 col-md-6 col-sm-12 d-flex align-items-center ps-5 pe-5 ps-lg-2 pe-lg-0 ps-md-2 pe-md-0">
                            <img src="assets/svg2.svg" alt="svg4" />
                            <p className="custom-padding">Bebas korosi/Karat</p>
                          </div>
                        </div>
                        <div className="row d-flex pt-3 text-start ms-lg-5 me-lg-5 custom_img_width">
                          <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center ps-5 pe-5 ps-lg-0 pe-lg-0 ps-md-0 pe-md-0">
                            <img src="assets/JaminanKualitas.svg" alt="svg3" />
                            <p className="custom-padding">
                            Warranty 1 tahun*
                            </p>
                          </div>
                        </div>
                        <div className="row text-start ms-lg-5 me-lg-5 ms-0 me-0 mt-3">
                        <div className="col-12">
                        <p className="Keunggulan_p">*Berlaku di seluruh dealer resmi Toyota & beberapa partshop partner Toyota tertentu.</p>
                        </div>
                        </div>
                        <div className="container mt-5">
                          <div className="row">
                            <div className="col-12">
                              <p className="product_title">
                                Toyota PRODUCT - TGB
                              </p>
                              <h1 className="product_heading">
                                TGB Standard Type
                              </h1>
                              <p className="product_paragraph">
                                Toyota Genuine Battery Standard Type merupakan
                                tipe aki basah untuk mobil Toyota dengan
                                standard kualitas Toyota
                              </p>
                              <img
                                src="assets/TGB_MF_1.png"
                                className="img-fluid"
                                alt="logo"
                              />
                              <p className="product_paragraph mt-3">Warranty 1 tahun di seluruh dealer resmi Toyota.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="logos d-flex justify-content-center mt-5 mb-4">
        <div className="mx-2">
          <img
            src="assets/quality-service.png"
            alt="t-care-img"
            className="img-fluid"
          />
        </div>
        <div className="mx-2">
          <img
            src="assets/genuine-parts (1).png"
            alt="t-care-img"
            className="img-fluid"
          />
        </div>
        <div className="mx-2">
          <img src="assets/logo-tmo (1) 1.png" alt="t-care-img" className="img-fluid" />
        </div>
      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="faq_tab_4"
                      role="tabpanel"
                      aria-labelledby="faq_tab_4-tab"
                    >
                      <div className="container mt-5">
                        <div className="row">
                          <div className="col-12">
                            <p className="product_title">Toyota PRODUCT</p>
                            <h1 className="product_heading">Tire Solution</h1>
                            <p className="product_paragraph">
                              Layanan penggantian ban di outlet resmi Toyota
                              dengan keunggulan{" "}
                              <span className="custom_color_1">
                                produk ban bervariasi
                              </span>{" "}
                              (tersedia berbagai macam merk & tipe) serta
                              memberikan{" "}
                              <span className="custom_color_1">
                                kualitas ban terbaik
                              </span>{" "}
                              (usia produksi ban terbaru)
                            </p>
                            <img src="assets/video layout_1.png" className="img-fluid"/>
                          </div>
                        </div>
                      </div>
                      <div className="container mt-5 custom-bg-color">
                        <div className="row mt-4">
                          <div className="col-12 mt-3 ms-md-3 me-md-3 ms-0 me-0">
                            <h1 className="ms-3 me-3 product_heading">
                              Perhatikan ciri-ciri Ban Mobil yang Dapat
                              Membahayakan di Perjalanan
                            </h1>
                          </div>
                        </div>
                        <div className="row ms-md-3 me-md-3 ms-0 me-0 ms-lg-5 me-lg-5 mt-4 mb-5">
                          <div className="col-lg-4 mb-0 col-md-6 col-sm-12 pt-0 pt-lg-0 mb-4">
                            <div className="custom_border">
                              <div className="d-flex custom_padding align-items-center text-start half_card">
                                <h3 className="custom_color_3 custom_style ps-3">
                                  1
                                </h3>
                                <p className="custom_color_3 custom_style_2  ps-3 pe-3 pt-2">
                                  Usia ban yang sudah lama / Jarak tempuh ban
                                  yang sudah tinggi
                                </p>
                              </div>
                              <div className="custom_color_card ps-3">
                                <p className="custom_font_p ps-3 pe-3 pt-2 text-start">
                                  Beresiko mengalami penurunan elastisitas /
                                  kelenturan karet hingga menjadi getas dan
                                  mengeras yang berpotensi pecah di kondisi
                                  tertentu
                                </p>
                                <img
                                  src="assets/IG_TOYOTA_1.png"
                                  className="img-fluid"
                                />
                                <img
                                  src="assets/IG_TOYOTA_2.png"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-12 mb-4">
                            <div className="custom_border">
                              <div className="d-flex custom_padding align-items-center text-start half_card">
                                <h3 className="custom_color_3 custom_style ps-3">
                                  2
                                </h3>
                                <p className="custom_color_3 custom_style_2  ps-3 pe-3 pt-2">
                                  Ban Tipis / Gundul
                                </p>
                              </div>
                              <div className="custom_color_card ps-3">
                                <p className="custom_font_p ps-3 pe-3 pt-2 text-start">
                                  Kedalaman kembangan ban 3mm beresiko mudah
                                  tertusuk benda tajam, daya cengkram berkurang
                                  saat pengereman, dan efek hydro / aquaplaning*
                                </p>
                                <img
                                  src="assets/IG_TOYOTA_6.png"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-6 col-12 mb-4">
                            <div className="custom_border">
                              <div className="d-flex custom_padding align-items-center text-start half_card">
                                <h3 className="custom_color_3 custom_style ps-3">
                                  3
                                </h3>
                                <p className="custom_color_3 custom_style_2  ps-3 pe-3 pt-2">
                                  Ban Sobek / Retak / Benjol / Banyak Tambalan
                                </p>
                              </div>
                              <div className="custom_color_card ps-3">
                                <p className="custom_font_p ps-3 pe-3 pt-2 text-start">
                                  Kekuatan ban tidak optimal dan rentan pecah
                                  sewaktu-waktu di perjalanan (terutama saat
                                  melewati permukaan tidak rata)
                                </p>
                                <img
                                  src="assets/IG_TOYOTA_5.png"
                                  className="img-fluid"
                                />
                                <img
                                  src="assets/IG_TOYOTA_4.png"
                                  className="img-fluid"
                                />
                                <img
                                  src="assets/IG_TOYOTA_3.png"
                                  className="img-fluid"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container">
                        <div className="row mt-5">
                          <div className="col-12 custom_hide_display">
                            <h1 className="product_heading">
                              Panjang Pengereman Terhadap Kedalaman Ban
                            </h1>
                            <img
                              src="assets/Asset_6.png"
                              className="img-fluid mt-5 mb-5 image_1"
                            />
                            <img
                              src="assets/Asset_6_mobile.png"
                              className="img-fluid mt-5 mb-5 image_2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="container-fluid px-0 custom-bg-color">
                        <div className="container pt-5 pb-5">
                          <div className="row">
                            <div className="col-12">
                              <h1 className="product_heading">
                                Keunggulan Mengganti Ban di Toyota
                              </h1>
                            </div>
                          </div>
                          <div className="row justify-content-center pt-3">
                            <div className="col-lg-2 col-md-4 col-6">
                              <div className="card cards_custom_design align-items-center">
                                <img
                                  src="assets/card-icon-1.png"
                                  className="pt-2"
                                  alt="Logo"
                                />
                                <h5 className="card_heading_3 pt-2">
                                  Produk Ban Bervariasi
                                </h5>
                                <p className="card_text_3 pb-4">
                                  Tersedia berbagai macam merk & tipe
                                </p>
                              </div>
                            </div>
                            <div className=" col-lg-2 col-md-4 col-6">
                              <div className="card cards_custom_design align-items-center">
                                <img
                                  src="assets/card-icon-2.png"
                                  className="pt-2"
                                  alt="Logo"
                                />
                                <h5 className="card_heading_3 pt-2">
                                  Kualitas Ban Terbaik
                                </h5>
                                <p className="card_text_3 pb-4">
                                  Usia Produksi Ban Terbaru
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 pt-3 pt-lg-0 pt-md-0">
                              <div className="card cards_custom_design align-items-center">
                                <img
                                  src="assets/card-icon-3.png"
                                  className="pt-2"
                                  alt="Logo"
                                />
                                <h5 className="card_heading_3 pt-2">
                                  One Stop Service
                                </h5>
                                <p className="card_text_3 pb-4">
                                  Layanan pengecekan kendaraan & cuci mobil
                                  garansi produk ban*
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 pt-md-3 pt-lg-0 pt-3">
                              <div className="card cards_custom_design align-items-center">
                                <img
                                  src="assets/card-icon-4.png"
                                  className="pt-2"
                                  alt="Logo"
                                />
                                <h5 className="card_heading_3 pt-2">
                                  Bebas Biaya Tambahan
                                </h5>
                                <p className="card_text_3 pb-4">
                                  Gratis biaya pemasangan, balancing & pentil
                                  ban
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-6 pt-md-3 pt-lg-0 pt-3">
                              <div className="card cards_custom_design align-items-center">
                                <img
                                  src="assets/card-icon-5.png"
                                  className="pt-2"
                                  alt="Logo"
                                />
                                <h5 className="card_heading_3 pt-2">
                                  Ditangani oleh Teknisi Berpengalaman
                                </h5>
                                <p className="card_text_3 pb-4">
                                  Tersedia berbagai macam merk & tipe
                                </p>
                              </div>
                              <p className="card_outer_text pt-2">
                                *Syarat & Ketentuan Berlaku
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="container mt-5">
                        <div className="row">
                          <div className="col-12">
                            <h1 className="product_heading">
                              Solusi Terpercaya untuk Ban Anda
                            </h1>
                          </div>
                        </div>
                        <div className="row pt-3 last_images mx-5">
                          <div className="col-4">
                            <img
                              src="assets/Bridgestone_logo1.png"
                              className="img-fluid"
                              alt="Logo"
                            />
                          </div>
                          <div className="col-4 skaj">
                            <img
                              src="assets/Bridgestone_logo 3.png"
                              className="img-fluid"
                              alt="Logo"
                            />
                          </div>
                          <div className="col-4">
                            <img
                              src="assets/Bridgestone_logo3.png"
                              className="img-fluid"
                              alt="Logo"
                            />
                          </div>
                        </div>
                        <div className="row pt-3 mx-5">
                          <div className="col-4">
                            <img
                              src="assets/Bridgestone_logo4.png"
                              className="img-fluid"
                              alt="Logo"
                            />
                          </div>
                          <div className="col-4">
                            <img
                              src="assets/Bridgestone_logo5.png"
                              className="img-fluid"
                              alt="Logo"
                            />
                          </div>
                          <div className="col-4">
                            <img
                              src="assets/Bridgestone_logo6.png"
                              className="img-fluid"
                              alt="Logo"
                            />
                          </div>
                        </div>
                        <div className="row justify-content-center pt-3 mx-5">
                          <div className="col-4">
                            <img
                              src="assets/Bridgestone_logo7.png"
                              alt="Logo"
                              className="text-center img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="logos d-flex justify-content-center mt-5 mb-4">
        <div className="mx-2">
          <img
            src="assets/quality-service.png"
            alt="t-care-img"
            className="img-fluid"
          />
        </div>
        <div className="mx-2">
          <img
            src="assets/genuine-parts (1).png"
            alt="t-care-img"
            className="img-fluid"
          />
        </div>
        <div className="mx-2">
          <img src="assets/toyota tire-01 1.png" alt="t-care-img" className="img-fluid" />
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
      <Footer></Footer>
    </div>
  );
}

export default Products;
