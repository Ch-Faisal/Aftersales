import React, { useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "../css/t-care.css";

function TCare() {
  const [activeTab, setActiveTab] = useState(0); // Initialize state for active tab
  const [activeCircle, setActiveCircle] = useState(0);
  const handleTabClick = (index) => {
    console.log("Clicked tab index:", index); // Debugging statement
    setActiveTab(index); // Set the active tab
    setActiveCircle(0);
  };
  const handleCircleClick = (index) => {
    console.log("Clicked circle index:", index); // Debugging statement
    setActiveCircle(index); // Set the active circle
  };
  const handleLanjutClick = () => {
    if (activeCircle < 2) {
      setActiveCircle(activeCircle + 1);
    }
  };

  return (
    <div>
      <Header></Header>

      <div className="container-fluid px-0 pb-5">
        <img src="assets/Rectangle 3.png" className="w-100" alt="logo" />
      </div>
      <div className="container-fluid p-0 ">
        <div className="container px-lg-5">
          <div className="section-1">
            <div className="row">
              <div class="col-md-5 d-flex">
                <div class="section-image my-auto">
                  <img src="assets/logo-tcare 1.png" alt="logo" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="section-content">
                  <p className="text-start">
                    Toyota sangat peduli terhadap keamanan dan kenyamanan Anda
                    saat berkendara<strong> T-Care</strong> memberikan Anda{" "}
                    <strong>
                      Bebas Biaya Jasa Servis Berkala dan Suku Cadang*
                    </strong>{" "}
                    sebanyak 7x servis selama 3 tahun.
                  </p>
                  <p>
                    {" "}
                    Dengan rutin servis berkala setiap 6 bulan, Anda juga dapat
                    menikmati reward berupa{" "}
                    <strong>Extended Warranty 1 tahun/20.000 km!**</strong>
                  </p>
                  <p> Apakah kendaraan Toyota Anda dalam program T-Care? </p>
                  <p>
                    {" "}
                    Cek nomor rangka kendaraan Anda dan dapatkan sertifikat
                    elektroniknya!{" "}
                  </p>
                  <p> *sesuai ketentuan yang tertera pada buku servis </p>
                  <p>
                    *khusus model LCGC hanya berlaku bebas biaya jasa servis
                    berkala*
                  </p>
                  <p> *total warranty menjadi 4 tahun/120.000 km</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-lg-5">
          <div className="section-2 mt-5">
            <div className="row">
              <div class="col-md-6 d-flex">
                <div class="section-content text-start my-auto">
                  <p className="Check">Check your</p>
                  <h1>Certificate & Service Record!</h1>
                  <p>
                    Cek nomor rangka kendaraan Anda dan dapatkan sertifikat
                    elektroniknya serta catatan servisnya untuk program{" "}
                    <strong>T-CARE, T-CARE Lite, Extended Warranty,</strong> dan{" "}
                    <strong>GBSB</strong>.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <ul className="nav nav-pills nav-fill">
                  <li className="nav-item">
                    <a
                      className={`tabs sertifikat nav-link py-3 ${
                        activeTab === 0 ? "active" : ""
                      }`}
                      href="javascript:void(0)"
                      onClick={() => handleTabClick(0)}
                    >
                      Sertifikat Elektronik
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`tabs cataten nav-link py-3 ${
                        activeTab === 1 ? "active" : ""
                      }`}
                      href="javascript:void(0)"
                      onClick={() => handleTabClick(1)}
                    >
                      Catatan Servis
                    </a>
                  </li>
                </ul>
                <div
                  className="tabs-section"
                  style={{ display: activeTab === 0 ? "block" : "none" }}
                >
                  <div class="circle-tabs pt-4">
                    <a
                      href="javascript:void(0)"
                      className={`mx-3 ${activeCircle === 0 ? "active" : ""}`}
                      onClick={() => handleCircleClick(0)}
                    >
                      <img src="assets/mdi_car-side.png" alt="" />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className={`mx-4  ${activeCircle === 1 ? "active" : ""}`}
                      onClick={() => handleCircleClick(1)}
                    >
                      <img src="assets/Group (2).png" alt="" />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className={`mx-3  ${activeCircle === 2 ? "active" : ""}`}
                      onClick={() => handleCircleClick(2)}
                    >
                      <img src="assets/Group (3).png" alt="" />
                    </a>
                  </div>
                  {activeCircle === 0 && (
                    <div
                      style={{ display: activeCircle === 0 ? "block" : "none" }}
                    >
                      <div className="d-md-flex justify-content-between mt-4 mx-4 text-start mx-md-5">
                        <p>Validasi Nomor Rangka</p>
                        <p className="text-danger">Langkah 1 - 3</p>
                      </div>
                      <div className="tab-content mx-4 mx-md-5 text-start">
                        <p style={{ color: "black", fontWeight: 300 }}>
                          Nomor Rangka kendaraan Anda dapat ditemukan pada STNK
                          atau BPKB kendaraan Anda
                        </p>
                      </div>
                      <div className="form-group mx-5">
                        <input
                          type="email"
                          className="form-control Masukkan"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Masukkan 17 Digit No. Rangka Kendaraan"
                        />
                      </div>
                      <button
                        className="btn btn-primary Lanjut mt-4"
                        onClick={handleLanjutClick}
                      >
                        Lanjut
                      </button>
                    </div>
                  )}
                  {activeCircle === 1 && (
                    <div
                      style={{ display: activeCircle === 1 ? "block" : "none" }}
                    >
                      <div className="d-md-flex justify-content-between mt-4 mx-2 mx-md-5">
                        <p> Nomor Rangka</p>
                        <p className="text-danger">Langkah 1 - 3</p>
                      </div>
                      <div className="tab-content mx-2 mx-md-5 text-start">
                        <p style={{ color: "black", fontWeight: 300 }}>
                          ditemukan pada STNK atau BPKB kendaraan Anda
                        </p>
                      </div>
                      <div className="form-group mx-5">
                        <input
                          type="email"
                          className="form-control Masukkan"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Masukkan 17 Digit No. Rangka Kendaraan"
                        />
                      </div>
                      <button
                        className="btn btn-primary Lanjut mt-4"
                        onClick={handleLanjutClick}
                      >
                        Lanjut
                      </button>
                    </div>
                  )}
                  {activeCircle === 2 && (
                    <div
                      style={{ display: activeCircle === 2 ? "block" : "none" }}
                    >
                      <div className="d-flex justify-content-between mt-4 mx-2 mx-md-5">
                        <p> Rangka</p>
                        <p className="text-danger">Langkah 1 - 3</p>
                      </div>
                      <div className="tab-content mx-2 mx-md-5 text-start">
                        <p style={{ color: "black", fontWeight: 300 }}>
                          ditemukan pada STNK atau BPKB kendaraan Anda
                        </p>
                      </div>
                      <div className="form-group mx-5">
                        <input
                          type="email"
                          className="form-control Masukkan"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Masukkan 17 Digit No. Rangka Kendaraan"
                        />
                      </div>
                      <button
                        className="btn btn-primary Lanjut mt-4"
                        onClick={handleLanjutClick}
                      >
                        Lanjut
                      </button>
                    </div>
                  )}
                </div>
                <div
                  className="tabs-section"
                  style={{ display: activeTab === 1 ? "block" : "none" }}
                >
                  <div className="circle-tabs pt-4">
                    <a
                      href="javascript:void(0)"
                      className={`mx-3 ${activeCircle === 0 ? "active" : ""}`}
                      onClick={() => handleCircleClick(0)}
                    >
                      <img src="assets/mdi_car-side.png" alt="" />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className={`mx-4  ${activeCircle === 1 ? "active" : ""}`}
                      onClick={() => handleCircleClick(1)}
                    >
                      <img src="assets/Group (2).png" alt="" />
                    </a>
                    <a
                      href="javascript:void(0)"
                      className={`mx-3  ${activeCircle === 2 ? "active" : ""}`}
                      onClick={() => handleCircleClick(2)}
                    >
                      <img src="assets/Group (3).png" alt="" />
                    </a>
                  </div>
                  {activeCircle === 0 && (
                    <div
                      style={{ display: activeCircle === 0 ? "block" : "none" }}
                    >
                      <div className="d-md-flex justify-content-between mt-4 mx-4 text-start mx-md-5">
                        <p> Test Validasi Nomor Rangka</p>
                        <p className="text-danger">Langkah 1 - 5</p>
                      </div>
                      <div className="tab-content mx-4 mx-md-5 text-start">
                        <p style={{ color: "black", fontWeight: 300 }}>
                          Nomor itemukan pada STNK atau BPKB kendaraan Anda
                        </p>
                      </div>
                      <div className="form-group mx-5">
                        <input
                          type="email"
                          className="form-control Masukkan"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Digit No. Rangka Kendaraan"
                        />
                      </div>
                      <button
                        className="btn btn-primary Lanjut mt-4"
                        onClick={handleLanjutClick}
                      >
                        Lanjut
                      </button>
                    </div>
                  )}
                  {activeCircle === 1 && (
                    <div
                      style={{ display: activeCircle === 1 ? "block" : "none" }}
                    >
                      <div className="d-md-flex justify-content-between mt-4 mx-2 mx-md-5">
                        <p> Rangka</p>
                        <p className="text-danger">Langkah 1 - 3</p>
                      </div>
                      <div className="tab-content mx-2 mx-md-5 text-start">
                        <p style={{ color: "black", fontWeight: 300 }}>
                          {" "}
                          STNK atau BPKB kendaraan Anda
                        </p>
                      </div>
                      <div className="form-group mx-5">
                        <input
                          type="email"
                          className="form-control Masukkan"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Masukkan 17 Digit No. Rangka Kendaraan"
                        />
                      </div>
                      <button
                        className="btn btn-primary Lanjut mt-4"
                        onClick={handleLanjutClick}
                      >
                        Lanjut
                      </button>
                    </div>
                  )}
                  {activeCircle === 2 && (
                    <div
                      style={{ display: activeCircle === 2 ? "block" : "none" }}
                    >
                      <div className="d-flex justify-content-between mt-4 mx-2 mx-md-5">
                        <p> Rangka</p>
                        <p className="text-danger">Langkah 1 - 3</p>
                      </div>
                      <div className="tab-content mx-2 mx-md-5 text-start">
                        <p style={{ color: "black", fontWeight: 300 }}>
                          STNK atau BPKB kendaraan Anda
                        </p>
                      </div>
                      <div className="form-group mx-5">
                        <input
                          type="email"
                          className="form-control Masukkan"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Masukkan 17 Digit No. Rangka Kendaraan"
                        />
                      </div>
                      <button
                        className="btn btn-primary Lanjut mt-4"
                        onClick={handleLanjutClick}
                      >
                        Lanjut
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-md-5 mt-5">
          <img src="assets/video layout.png" className="w-100" />
        </div>
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-5">
              <img src="assets/twocars.png" className="w-100" />
            </div>
            <div className="col-12 col-md-7 text-start">
              <h1 className="d-none d-lg-block">Extended Warranty</h1>
              <b className="d-none d-lg-block">
                12 bulan (1 tahun) / 20.000 km
              </b>
              <p className="text-center text-md-start">
                Berlaku untuk pelanggan yang melakukan servis ke-1 maksimum 1
                bulan dari bulan penyerahan kendaraan dan selanjutnya servis
                rutin pada servis ke-2 hingga ke-7 setiap maksimum 6 bulan
                sekali.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-7 text-md-start">
              <p className="text-danger">Toyota SERVICE</p>
              <h1>Manfaatkan T-Care dengan program Express Maintenance</h1>
              <button
                type="button"
                class="btn btn-outline-dark d-md-block d-none express w-md-50 mt-4"
              >
                Telurusi Express Maintenance
              </button>
            </div>
            <div className="col-12 col-md-5 mt-md-0 mt-4">
              <img src="assets/map view.png" className="w-100" />
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                class="btn btn-outline-dark d-md-none d-block px-5 w-auto mt-4"
              >
                Telurusi Express Maintenance
              </button>
            </div>
          </div>
        </div>
        <div className="container p-lg-5 mt-5 mt-md-3">
          <h1>Frequently Asked Question</h1>
          <div className="faq">
            <div class="accordions mt-5" id="accordionExample">
              <div class="accordion-item back_color_set mb-2">
                <h2 class="accordion-header">
                  <hr />
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="true"
                    aria-controls="collapseSix"
                  >
                    <b>Apakah Program T-CARE itu?</b>
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p class="iner_contect text-start">
                      Haha no, our goal is to rank you on the top of the first
                      page of Google. Arbitrarily writing blog posts and rolling
                      the dice on your content won’t achieve that.
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item mt-2 back_color_set">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <b>Benefit apa yang didapat pada program ini?</b>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p class="iner_contect text-start">
                      We will get industry and company insights from you, and
                      then send you a questionnaire. Once you fill that out:
                      <br />
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item mt-2 back_color_set">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <b>
                      Apa perbedaan program T-CARE dari Program Gratis Biaya
                      Servis Berkala?
                    </b>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p class="iner_contect text-start">
                      Put your feet on your desk and relax. We’ll take care of
                      everything. All you need to do is upload them, which we
                      can handle too for a fee.
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item mt-2 back_color_set">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <b>
                      Bagaimana saya dikategorikan Servis Berkala tepat waktu?
                    </b>
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p class="iner_contect text-start">
                      Yes, we don’t believe in slowly dripping out your
                      solution. We will work at lightning speeds to get all your
                      content to you ASAP.
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item mt-2 back_color_set">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    <b>
                      Bagaimana cara saya mengetahui ketepatan waktu servis ke-1
                      sampai ke-7?
                    </b>
                  </button>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4 mb-5">
          <h1>Informasi Program Gratis Biaya Servis Berkala (GBSB)</h1>
          <p> silahkan download disini</p>
          <button type="button" class="btn btn-outline-dark w-25">
            Download
          </button>
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
      </div>
      <Footer></Footer>
    </div>
  );
}

export default TCare;
