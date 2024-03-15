import React from "react";
import Header from './layout/Header';
import Footer from './layout/Footer';
import './services.css';
const Services = () => {
  return (
      <div>
      <Header></Header>
        <div className="Banner_image"></div>
        <div>
          <h1>Discover Our Service</h1>
          <div className="paraTag1">
            <p className="paraTag">
              Layanan Servis berkualitas prima,
              <span className="paraTag1">
                agar performa Toyota Anda selalu optimal
              </span>
            </p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-md-12">
                <div className="bg-white">
                  <ul
                    className="nav nav-tabs nav-fill"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="faq_tab_1-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#faq_tab_1"
                        type="button"
                        role="tab"
                        aria-controls="faq_tab_1"
                        aria-selected="true"
                      >
                        <div className="d-flex flex-column lh-lg">
                          <span>General Repair</span>
                        </div>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="faq_tab_2-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#faq_tab_2"
                        type="button"
                        role="tab"
                        aria-controls="faq_tab_2"
                        aria-selected="false"
                      >
                        <div className="d-flex flex-column lh-lg">
                          <span>Body & Paint</span>
                        </div>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="faq_tab_3-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#faq_tab_3"
                        type="button"
                        role="tab"
                        aria-controls="faq_tab_3"
                        aria-selected="false"
                      >
                        <div className="d-flex flex-column lh-lg">
                          <span>Toyota Mobile Service</span>
                        </div>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="faq_tab_4-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#faq_tab_4"
                        type="button"
                        role="tab"
                        aria-controls="faq_tab_4"
                        aria-selected="false"
                      >
                        <div className="d-flex flex-column lh-lg">
                          <span>Express Maintenance</span>
                        </div>
                      </button>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div
                      className="tab-pane fade active show"
                      id="faq_tab_1"
                      role="tabpanel"
                      aria-labelledby="faq_tab_1-tab"
                    >
                      <div className="container mt-5">
                        <div className="row align-items-center">
                          <div className="col-5">
                            <img src="assets/img.png" className="w-100" />
                          </div>
                          <div className="col-7 text-start">
                            <p className="paraTag1">
                              {" "}
                              toyota service - General Repair
                            </p>
                            <h2>
                              Layanan Servis berkualitas prima, agar performa
                              Toyota Anda selalu optimal
                            </h2>
                            <p>
                              Percayakan perawatan dan perbaikan kendaraan
                              kesayangan Anda kepada bengkel resmi Toyota.
                            </p>
                            <p>
                              Baik servis perawatan berkala ataupun perbaikan,
                              kendaraan Anda akan ditangani oleh teknisi
                              berpengalaman dan bersertifikat, serta menggunakan
                              Toyota Genuine Parts. Selama proses servis, para
                              teknisi didukung dengan peralatan yang lengkap dan
                              modern sesuai dengan standar kualitas Toyota.
                            </p>
                            <p>
                              Karena kepuasan Anda adalah prioritas kami,
                              masalah pada kendaraan Anda akan didiagnosa oleh
                              master technician dan ditunjang oleh special tools
                              untuk menyelesaikan setiap permasalahan kendaraan
                              Anda dengan tepat dan akurat dengan jaminan hasil
                              perbaikan (warranty).
                            </p>
                            <button
                              type="button"
                              class="btn btn-dark px-5 mt-4"
                            >
                              Telusuri Sekarang
                            </button>
                          </div>
                        </div>
                        <div className="logos d-flex justify-content-center mt-5 mb-4">
                          <div className="mx-2">
                            <img
                              src="assets/quality-service.png"
                              alt="t-care-img"
                            />
                          </div>
                          <div className="mx-2">
                            <img
                              src="assets/genuine-parts (1).png"
                              alt="t-care-img"
                            />
                          </div>
                          <div className="mx-2">
                            <img src="assets/tmo.png" alt="t-care-img" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="faq_tab_2"
                      role="tabpanel"
                      aria-labelledby="faq_tab_2-tab"
                    >
                        <div className="container mt-5">
                            <p className="paraTag1">Toyota SERVICE - Body & paint</p>
                            <h1>Hadirkan ketenangan berkendara dengan layanan perbaikan Bodi & Cat Toyota di tangan yang paling berpengalaman</h1>
                            <p>Toyota memberikan layanan untuk perbaikan bodi kendaraan Anda sehingga kembali ke kondisi semula melalui layanan Bodi & Cat</p>
                        </div>
                      <div className="container mt-5">
                        <div className="row align-items-center">
                          <div className="col-7 text-start">
                            <h2>
                              Dengan 80 cabang bengkel Bodi & Cat Toyota yang
                              tersebar di seluruh Indonesia,
                            </h2>
                            <p>
                              Toyota siap memberikan pelayanan tertinggi seperti
                              : fasilitas, material, teknisi, operasi, hingga
                              jaminan hasil perbaikan (warranty)
                            </p>
                          </div>
                          <div className="col-5">
                            <img src="assets/map_view.png" className="w-100" />
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
                      <div className="container p-3 mt-4">
                        <div className="input-group mb-3">
                          {" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search hotels..."
                          />{" "}
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Location"
                          />{" "}
                        </div>
                        <div className="input-group mb-3">
                          {" "}
                          <select
                            className="form-select form-control"
                            id="inputGroupSelect02"
                          >
                            <option selected>Rooms</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3+</option>
                          </select>{" "}
                          <select
                            className="form-select form-control"
                            id="inputGroupSelect02"
                          >
                            <option selected>Members</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="3">Four</option>
                            <option value="3">Five</option>
                          </select>{" "}
                        </div>
                        <div className="mt-4 d-flex justify-content-end">
                          {" "}
                          <button className="btn btn-success custom-button px-5">
                            Search Hotels
                          </button>{" "}
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="faq_tab_4"
                      role="tabpanel"
                      aria-labelledby="faq_tab_4-tab"
                    >
                      <div className="container p-3">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-group mb-3">
                              {" "}
                              <select
                                className="form-select form-control"
                                id="inputGroupSelect02"
                              >
                                <option selected>Select Airline</option>
                                <option value="1">Indigo</option>
                                <option value="2">Air India</option>
                                <option value="3">Air Asthana</option>
                              </select>{" "}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-group mb-3">
                              {" "}
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Flight Number"
                              />{" "}
                              <button
                                className="btn btn-outline-secondary custom-button"
                                type="button"
                              >
                                Search
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
          </div>
        </div>
        <Footer></Footer>
      </div>
  );
};

export default Services;
