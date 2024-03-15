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
                    className="nav nav-tabs custom-nav-tabs nav-fill custom-nav-fill"
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
                          <span>General Repair</span>
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
                          <span>Body & Paint</span>
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
                          <span>Toyota Mobile Service</span>
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
                        <div className="row">
                          <div className="col-5">
                            <img src="assets/img.png" className="img-fluid w-100 h-100" />
                          </div>
                          <div className="col-7 text-start">
                            <p className="paraTag1">
                              toyota service - General Repair
                            </p>
                            <h1>
                              Layanan Servis berkualitas prima, agar performa
                              Toyota Anda selalu optimal
                            </h1>
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
                              Temukan Dealer Terdekat
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
                        <div className="container ps-5 pe-5 mt-5">
                            <p className="paraTag1">Toyota SERVICE - Body & paint</p>
                            <h1>Hadirkan ketenangan berkendara dengan layanan perbaikan Bodi & Cat Toyota di tangan yang paling berpengalaman</h1>
                            <p>Toyota memberikan layanan untuk perbaikan bodi kendaraan Anda sehingga kembali ke kondisi semula melalui layanan Bodi & Cat</p>
                        </div>
                      <div className="container mt-5">
                        <div className="row align-items-center">
                          <div className="col-7 text-start">
                            <h1>
                              Dengan 80 cabang bengkel Bodi & Cat Toyota yang
                              tersebar di seluruh Indonesia,
                            </h1>
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
                      <div className="container mt-5">
                        <div className="row align-items-center">
                          <div className="col-7 text-start">
                            <h1>
                            Bengkel resmi Toyota akan membantu dari proses administrasi baik pelanggan tunai ataupun asuransi.
                            </h1>
                            <p>
                            Detail informasi mengenai layanan perbaikan kamu dapat Anda akses melalui Halobeng pada M-Toyota atau jika Anda memiliki asuransi, silahkan mengkonsultasikan perbaikan pada call center dealer penjual Anda
                            </p>
                            <button
                              type="button"
                              class="btn btn-dark px-5 mt-4"
                            >
                              Temukan Dealer Terdekat
                            </button>
                          </div>
                          <div className="col-5">
                            <img src="assets/img1.jpg" className="w-100" />
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
                      <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas in felis dignissim, imperdiet nulla vitae, condimentum nulla. Ut scelerisque a nisl sit amet facilisis. Etiam blandit iaculis tellus, vitae condimentum leo congue a. Vivamus in vehicula massa. Pellentesque libero libero, commodo lacinia volutpat non, tincidunt at lectus. Maecenas ipsum turpis, viverra vitae lacus eu, fringilla ultricies erat. Aenean hendrerit maximus sodales.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Quisque sapien augue, ornare id leo a, tristique elementum justo. Praesent non nulla sagittis, sollicitudin justo id, varius erat. Nunc sed pharetra nisl. Cras et suscipit felis, in lacinia sapien. Integer venenatis sagittis massa, eu eleifend nibh venenatis in. Pellentesque a aliquet urna. Curabitur tortor metus, ultrices sed mi at, sagittis imperdiet turpis. Suspendisse nec luctus nunc. Fusce in arcu quis lacus mollis ultrices.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        Praesent nec ipsum scelerisque dui condimentum pellentesque eu at lectus. Vivamus purus purus, bibendum in vestibulum ac, pharetra sit amet sapien. Nunc luctus, orci vel luctus cursus, nibh nisl ullamcorper ipsum, eu malesuada arcu augue id nisi. In auctor mi ac ante tincidunt tincidunt.
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
