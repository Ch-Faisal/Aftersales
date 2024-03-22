import React, { useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { initMDB, Tab } from "mdb-ui-kit";
import "../css/news-event.css";

function LatestNewsEvents() {
  useEffect(() => {
    initMDB({ Tab });
  }, []);

  return (
    <div>
      <Header />
      <div className="container-fluid px-0 pb-5">
        <img src="assets/newshero.png" className="w-100" alt="logo" />
      </div>
      <div className="container-fluid">
        <div className="container">
          <h1>Latest News & Events</h1>
          <div className="event-tabs ">
            <div className="d-flex justify-content-center">
              <ul
                className="nav nav-tabs d-flex justify-content-center mb-3"
                id="ex1"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                    data-mdb-tab-init
                    className="nav-link active mx-md-3"
                    id="ex1-tab-1"
                    href="#ex1-tabs-1"
                    role="tab"
                    aria-controls="ex1-tabs-1"
                    aria-selected="true"
                  >
                    All
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    data-mdb-tab-init
                    className="nav-link mx-md-3"
                    id="ex1-tab-2"
                    href="#ex1-tabs-2"
                    role="tab"
                    aria-controls="ex1-tabs-2"
                    aria-selected="false"
                  >
                    Gazoo Racing
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                    data-mdb-tab-init
                    className="nav-link mx-md-3"
                    id="ex1-tab-3"
                    href="#ex1-tabs-3"
                    role="tab"
                    aria-controls="ex1-tabs-3"
                    aria-selected="false"
                  >
                    Electrified
                  </a>
                </li>
                <li className="nav-item d-none d-md-block" role="presentation">
                  <a
                    data-mdb-tab-init
                    className="nav-link mx-md-3"
                    id="ex1-tab-4"
                    href="#ex1-tabs-4"
                    role="tab"
                    aria-controls="ex1-tabs-4"
                    aria-selected="false"
                  >
                    Press Release
                  </a>
                </li>
                <li className="nav-item d-none d-md-block" role="presentation">
                  <a
                    data-mdb-tab-init
                    className="nav-link mx-md-3"
                    id="ex1-tab-5"
                    href="#ex1-tabs-5"
                    role="tab"
                    aria-controls="ex1-tabs-5"
                    aria-selected="false"
                  >
                    Event
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="ex1-content">
              <div
                className="tab-pane fade show active"
                id="ex1-tabs-1"
                role="tabpanel"
                aria-labelledby="ex1-tab-1"
              >
                <div className="row mt-5 d-flex justify-content-center">
                  <div className="col-sm-10 col-md-6 col-lg-4 col-12">
                    <div className="card custom_body_boder h-100 mt-4 mt-lg-0 h-100 ">
                      <img
                        src="assets/beyond exterior 800x600_2 1.png"
                        className="  rounded-0"
                        alt="..."
                      />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div className="tips-event mt-2">
                          <p className="text-start title-color">
                            News & Event, Gazoo Racing
                          </p>
                          <p className="text-start">13/06/2023</p>
                        </div>
                        <p className="card-title fw-bold text-start mb-4">
                          Sempurnakan GR010 HYBRID, TOYOTA GAZOO Racing Siap
                          Cetak Rekor Baru di Edisi 100 Tahun Le Mans 24 Jam
                        </p>
                        <button
                          type="button"
                          class="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-10 col-md-6 col-lg-4 col-12 mt-4 mt-md-0">
                    <div className="card custom_body_boder h-100 mt-4 mt-lg-0">
                      <img
                        src="assets/beyond exterior 800x600_2 1 (1).png"
                        className="  rounded-0"
                        alt="..."
                      />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div className="tips-event mt-2">
                          <p className="text-start title-color">
                            News & Event, Gazoo Racing
                          </p>
                          <p className="text-start">07/07/2023</p>
                        </div>
                        <p className="card-title fw-bold text-start">
                          Konsisten Raih Podium, Toyota GAZOO Racing Indonesia
                          Pertahankan Puncak Klasemen di Kelas Bergengsi A & F
                          pada Seri ke-3 MLDSPOT Autokhana Kejurnas Slalom 2023
                        </p>
                        <button
                          type="button"
                          class="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-10 col-md-6 col-lg-4 col-12 mt-4 mt-md-0 pt-4 pt-lg-0">
                    <div className="card custom_body_boder h-100 mt-sm-4 mt-lg-0">
                      <img
                        src="assets/beyond exterior 800x600_2 1 (2).png"
                        className="  rounded-0"
                        alt="..."
                      />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div className="tips-event mt-2">
                          <p className="text-start title-color">TIPS , EVENT</p>
                          <p className="text-start">07/07/2023</p>
                        </div>
                        <p className="card-title fw-bold text-start">
                          Wujudkan Peace of Mind, Toyota Himbau Pemilik Veloz,
                          Avanza, dan Raize dengan Tahun Produksi Tertentu Untuk
                          Mengecek dan Mengganti ECU Airbag di Dealer Resmi
                          Toyota
                        </p>
                        <button
                          type="button"
                          class="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-3">
                  <div className="col-sm-10 col-md-6 col-lg-4 col-12">
                    <div className="card custom_body_boder h-100 mt-4 mt-lg-0">
                      <img
                        src="assets/beyond exterior 800x600_2 1 (3).png"
                        className="  rounded-0"
                        alt="..."
                      />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div className="tips-event mt-2">
                          <p className="text-start title-color">TIPS , EVENT</p>
                          <p className="text-start">07/07/2023</p>
                        </div>
                        <p className="card-title fw-bold text-start">
                          Liburan Pakai Mobil, Waspada Sumber Masalah Saat
                          Mengemudi Mobil di Jalan Tol
                        </p>
                        <button
                          type="button"
                          class="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-10 col-md-6 col-lg-4 col-12 mt-4 mt-md-0">
                    <div className="card custom_body_boder h-100 mt-4 mt-lg-0">
                      <img
                        src="assets/beyond exterior 800x600_2 1 (4).png"
                        className="  rounded-0"
                        alt="..."
                      />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div className="tips-event mt-2">
                          <p className="text-start title-color">TIPS , EVENT</p>
                          <p className="text-start">10/07/2023</p>
                        </div>
                        <p className="card-title fw-bold text-start">
                          Bahaya Adu Banteng, Pahami Alasan Dilarang Menyalip
                          Kendaraan Lain di Tikungan
                        </p>
                        <button
                          type="button"
                          class="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-10 col-md-6 col-lg-4 col-12 mt-sm-4 mt-md-0 pt-4 pt-lg-0">
                    <div className="card custom_body_boder h-100 mt-4 mt-lg-0">
                      <img
                        src="assets/beyond exterior 800x600_2 1 (5).png"
                        className="  rounded-0"
                        alt="..."
                      />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div className="tips-event mt-2">
                          <p className="text-start title-color">TIPS , EVENT</p>
                          <p className="text-start"> 09/07/2023</p>
                        </div>
                        <p className="card-title fw-bold text-start">
                          Gejala Kinerja dan Kualitas Cairan Rem Mobil Turun dan
                          Wajib Segera Diganti
                        </p>
                        <button
                          type="button"
                          class="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center mt-3 pb-2 mb-4 mb-lg-0">
                  <div className="col-sm-10 col-md-6 col-lg-4 col-12">
                    <div className="card custom_body_boder h-100 mt-4 mt-lg-0">
                      <img
                        src="assets/beyond exterior 800x600_2 1 (6).png"
                        className="  rounded-0"
                        alt="..."
                      />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div className="tips-event mt-2">
                          <p className="text-start title-color">TIPS , EVENT</p>
                          <p className="text-start">09/07/2023</p>
                        </div>
                        <p className="card-title fw-bold text-start">
                          Tanda-Tanda Rem Mobil Bermasalah, Segera Cek Untuk
                          Cegah Rem Blong
                        </p>
                        <button
                          type="button"
                          class="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-10 col-md-6 col-lg-4 col-12 mt-4 mt-md-0">
                    <div className="card custom_body_boder h-100 mt-4 mt-lg-0">
                      <img
                        src="assets/beyond exterior 800x600_2 1 (7).png"
                        className="  rounded-0"
                        alt="..."
                      />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div className="tips-event mt-2">
                          <p className="text-start title-color">
                            News & Event, Gazoo Racing
                          </p>
                          <p className="text-start">03 Jul 2023</p>
                        </div>
                        <p className="card-title fw-bold text-start">
                          TOYOTA GAZOO Racing Raih Podium Pertama Monza 6 Jam
                          yang Sangat Ketat Hingga Lap Terakhir
                        </p>
                        <button
                          type="button"
                          class="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-10 col-md-6 col-lg-4 col-12 mt-sm-4 mt-md-0 pt-4 pt-lg-0">
                    <div className="card custom_body_boder h-100 mt-4 mt-lg-0">
                      <img
                        src="assets/beyond exterior 800x600_2 1 (8).png"
                        className="  rounded-0"
                        alt="..."
                      />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div className="tips-event mt-2">
                          <p className="text-start title-color">
                            News & Event, Gazoo Racing
                          </p>
                          <p className="text-start">17 Jul 2023</p>
                        </div>
                        <p className="card-title fw-bold text-start">
                          TOYOTA GAZOO Racing Raih Podium Pertama Monza 6 Jam
                          yang Sangat Ketat Hingga Lap Terakhir
                        </p>
                        <button
                          type="button"
                          class="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="ex1-tabs-2"
                role="tabpanel"
                aria-labelledby="ex1-tab-2"
              >
                <div className="row d-flex justify-content-center mt-5 pb-2 mb-4 mb-lg-0">
                  <div className="col-sm-10 col-md-6 col-lg-4 col-12">
                    <div className="card custom_body_boder h-100 mt-4 mt-lg-0">
                      <img
                        src="assets/beyond exterior 800x600_2 1 (7).png"
                        className="  rounded-0"
                        alt="..."
                      />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div className="tips-event mt-2">
                          <p className="text-start">TIPS , EVENT</p>
                          <p className="text-start">07/07/2023</p>
                        </div>
                        <p className="card-title fw-bold text-start">
                          Persiapan Menuju Dakar Rally 2024, Pembalap TOYOTA
                          GAZOO Racing Raih Podium Kedua Baja Italy
                        </p>
                        <button
                          type="button"
                          class="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-10 col-md-6 col-lg-4 col-12 mt-4 mt-md-0">
                    <div className="card custom_body_boder h-100 mt-4 mt-lg-0">
                      <img
                        src="assets/beyond exterior 800x600_2 1 (8).png"
                        className="  rounded-0"
                        alt="..."
                      />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div className="tips-event mt-2">
                          <p className="text-start">
                            News & Event, Gazoo Racing
                          </p>
                          <p className="text-start">17 Jul 2023</p>
                        </div>
                        <p className="card-title fw-bold text-start">
                          TOYOTA GAZOO Racing Raih Podium Pertama Monza 6 Jam
                          yang Sangat Ketat Hingga Lap Terakhir
                        </p>
                        <button
                          type="button"
                          class="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="#col-sm-10 col-md-6 col-lg-4 col-12 mt-4 mt-md-0 pt-4 pt-lg-0">
                    <div className="card custom_body_boder h-100 mt-sm-4 mt-lg-0">
                      <img
                        src="assets/beyond exterior 800x600_2 1.png"
                        className="  rounded-0"
                        alt="..."
                      />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div className="tips-event mt-2">
                          <p className="text-start">
                            News & Event, Gazoo Racing
                          </p>
                          <p className="text-start">13/06/2023</p>
                        </div>
                        <p className="card-title fw-bold text-start mb-3">
                          Sempurnakan GR010 HYBRID, TOYOTA GAZOO Racing Siap
                          Cetak Rekor Baru di Edisi 100 Tahun Le Mans 24 Jam
                        </p>
                        <button
                          type="button"
                          class="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="ex1-tabs-3"
                role="tabpanel"
                aria-labelledby="ex1-tab-3"
              >
                <div className="row d-flex justify-content-center mt-5 pb-2 mb-4 mb-lg-0">
                  <div className="col-sm-10 col-md-6 col-lg-4 col-12">
                    <div className="card custom_body_boder h-100 mt-4 mt-lg-0">
                      <img
                        src="assets/beyond exterior 800x600_2 1 (3).png"
                        className="  rounded-0"
                        alt="..."
                      />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div className="tips-event mt-2">
                          <p className="text-start">TIPS , EVENT</p>
                          <p className="text-start">07/07/2023</p>
                        </div>
                        <p className="card-title fw-bold text-start">
                          Liburan Pakai Mobil, Waspada Sumber Masalah Saat
                          Mengemudi Mobil di Jalan Tol
                        </p>
                        <button
                          type="button"
                          class="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-10 col-md-6 col-lg-4 col-12 mt-4 mt-md-0">
                    <div className="card custom_body_boder h-100 mt-4 mt-lg-0">
                      <img
                        src="assets/beyond exterior 800x600_2 1 (6).png"
                        className="  rounded-0"
                        alt="..."
                      />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div className="tips-event mt-2">
                          <p className="text-start">TIPS , EVENT</p>
                          <p className="text-start">07/07/2023</p>
                        </div>
                        <p className="card-title fw-bold text-start">
                          Liburan Pakai Mobil, Waspada Sumber Masalah Saat
                          Mengemudi Mobil di Jalan Tol
                        </p>
                        <button
                          type="button"
                          class="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="ex1-tabs-4"
                role="tabpanel"
                aria-labelledby="ex1-tab-4"
              >
                <div className="row d-flex justify-content-center mt-5 pb-2 mb-4 mb-lg-0">
                  <div className="col-sm-10 col-md-6 col-lg-4 col-12">
                    <div className="card custom_body_boder h-100 mt-4 mt-lg-0">
                      <img
                        src="assets/beyond exterior 800x600_2 1 (3).png"
                        className="  rounded-0"
                        alt="..."
                      />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div className="tips-event mt-2">
                          <p className="text-start">TIPS , EVENT</p>
                          <p className="text-start">07/07/2023</p>
                        </div>
                        <p className="card-title fw-bold text-start">
                          Liburan Pakai Mobil, Waspada Sumber Masalah Saat
                          Mengemudi Mobil di Jalan Tol
                        </p>
                        <button
                          type="button"
                          class="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-10 col-md-6 col-lg-4 col-12 mt-4 mt-md-0">
                    <div className="card custom_body_boder h-100 mt-4 mt-lg-0">
                      <img
                        src="assets/beyond exterior 800x600_2 1 (1).png"
                        className="  rounded-0"
                        alt="..."
                      />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div className="tips-event mt-2">
                          <p className="text-start">TIPS , EVENT</p>
                          <p className="text-start">07/07/2023</p>
                        </div>
                        <p className="card-title fw-bold text-start">
                          Liburan Pakai Mobil, Waspada Sumber Masalah Saat
                          Mengemudi Mobil di Jalan Tol
                        </p>
                        <button
                          type="button"
                          class="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="ex1-tabs-5"
                role="tabpanel"
                aria-labelledby="ex1-tab-5"
              >
                <div className="row d-flex justify-content-center mt-5 pb-2 mb-4 mb-lg-0">
                  <div className="col-sm-10 col-md-6 col-lg-4 col-12">
                    <div className="card  custom_body_boder h-100 mt-4 mt-lg-0">
                      <img
                        src="assets/beyond exterior 800x600_2 1 (2).png"
                        className="  rounded-0"
                        alt="..."
                      />
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div className="tips-event mt-2">
                          <p className="text-start">TIPS , EVENT</p>
                          <p className="text-start">07/07/2023</p>
                        </div>
                        <p className="card-title fw-bold text-start">
                          Liburan Pakai Mobil, Waspada Sumber Masalah Saat
                          Mengemudi Mobil di Jalan Tol
                        </p>
                        <button
                          type="button"
                          class="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="d-flex justify-content-center">
          <button
            type="button"
            class="btn  btn-outline-dark px-5 py-2 mt-3 d-block"
          >
            Show More
          </button>
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="logos d-flex justify-content-center mt-5 mb-4">
          <div className="mx-2">
            <img src="assets/quality-service.png" alt="t-care-img" />
          </div>
          <div className="mx-2">
            <img src="assets/genuine-parts (1).png" alt="t-care-img" />
          </div>
          <div className="mx-2">
            <img src="assets/tmo.png" alt="t-care-img" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LatestNewsEvents;
