import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "./services.css";
const Services = () => {
  return (
    <div>
      <Header></Header>
      <div className="Banner_image"></div>
      <div className="mt-5 mb-5">
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
                      className="nav-link custom-nav-link active"
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
                      className="nav-link custom-nav-link"
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
                      className="nav-link custom-nav-link"
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
                      className="nav-link custom-nav-link"
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
                        <div className="col-6">
                          <img
                            src="assets/img.png"
                            className="img-fluid w-100 h-100"
                          />
                        </div>
                        <div className="col-6 text-start">
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
                            Karena kepuasan Anda adalah prioritas kami, masalah
                            pada kendaraan Anda akan didiagnosa oleh master
                            technician dan ditunjang oleh special tools untuk
                            menyelesaikan setiap permasalahan kendaraan Anda
                            dengan tepat dan akurat dengan jaminan hasil
                            perbaikan (warranty).
                          </p>
                          <button type="button" class="btn btn-dark px-5 mt-4">
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
                      <h1>
                        Hadirkan ketenangan berkendara dengan layanan perbaikan
                        Bodi & Cat Toyota di tangan yang paling berpengalaman
                      </h1>
                      <p>
                        Toyota memberikan layanan untuk perbaikan bodi kendaraan
                        Anda sehingga kembali ke kondisi semula melalui layanan
                        Bodi & Cat
                      </p>
                    </div>
                    <div className="container mt-5">
                      <div className="row align-items-center">
                        <div className="col-7 text-start">
                          <h1>
                            Dengan 80 cabang bengkel Bodi & Cat Toyota yang
                            tersebar di seluruh Indonesia,
                          </h1>
                          <p>
                            Toyota siap memberikan pelayanan tertinggi seperti :
                            fasilitas, material, teknisi, operasi, hingga
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
                        <div className="col-5">
                          <img
                            src="assets/Rectangle117.jpg"
                            className="img-fluid w-100 h-100"
                          />
                        </div>
                        <div className="col-7 text-start">
                          <div className="row">
                            <h1>Servis dengan kualitas terbaik</h1>
                            <div className="col-6">
                              <span className="d-flex align-items-center">
                                <span className="custom_font">1</span>
                                <p>
                                  Fasilitas bengkel dan tools yang lengkap untuk
                                  menunjang kualitas perbaikan.
                                </p>
                              </span>
                              <span className="d-flex align-items-center">
                                <span className="custom_font">2</span>
                                <p>
                                  Estimasi waktu dan biaya yang akurat serta
                                  transparan.
                                </p>
                              </span>
                              <span className="d-flex align-items-center">
                                <span className="custom_font">3</span>
                                <p>
                                  Teknisi yang telah tersertifikasi oleh Toyota
                                  Astra Motor.
                                </p>
                              </span>
                            </div>
                            <div className="col-6">
                              <span className="d-flex align-items-center">
                                <span className="custom_font">4</span>
                                <p>
                                  Jaminan suku cadang orisinal dari Toyota.
                                </p>
                              </span>
                              <span className="d-flex align-items-center">
                                <span className="custom_font">5</span>
                                <p>
                                  Penggunaan material perbaikan dan cat sesuai
                                  standar.
                                </p>
                              </span>
                              <span className="d-flex align-items-center">
                                <span className="custom_font">6</span>
                                <p>Garansi hasil perbaikan Bodi & Cat.</p>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container mt-5">
                      <div className="row align-items-center">
                        <div className="col-7 text-start">
                          <h1>
                            Bengkel resmi Toyota akan membantu dari proses
                            administrasi baik pelanggan tunai ataupun asuransi.
                          </h1>
                          <p>
                            Detail informasi mengenai layanan perbaikan kamu
                            dapat Anda akses melalui Halobeng pada M-Toyota atau
                            jika Anda memiliki asuransi, silahkan
                            mengkonsultasikan perbaikan pada call center dealer
                            penjual Anda
                          </p>
                          <button type="button" class="btn btn-dark px-5 mt-4">
                            Temukan Dealer Terdekat
                          </button>
                        </div>
                        <div className="col-5">
                          <img src="assets/img1.jpg" className="w-100" />
                        </div>
                      </div>
                    </div>
                    <div className="container p-lg-5">
                      <h1>Frequently Asked Question</h1>
                      <div class="accordions mt-5" id="accordionExample">
                        <div class="accordion-item back_color_set mb-2">
                          <h2 class="accordion-header">
                            <button
                              class="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSix"
                              aria-expanded="true"
                              aria-controls="collapseSix"
                            >
                              <b>
                                Bengkel BP Toyota menerima perbaikan apa saja?
                              </b>
                            </button>
                          </h2>
                          <div
                            id="collapseSix"
                            class="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <p class="iner_contect text-start">
                                Haha no, our goal is to rank you on the top of
                                the first page of Google. Arbitrarily writing
                                blog posts and rolling the dice on your content
                                won’t achieve that.
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
                              <b>
                                Bagaimana jika jarak ke bengkel BP Toyota sangat
                                jauh?
                              </b>
                            </button>
                          </h2>
                          <div
                            id="collapseOne"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <p class="iner_contect text-start">
                                We will get industry and company insights from
                                you, and then send you a questionnaire. Once you
                                fill that out:
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
                                Apakah semua jenis asuransi dapat melakukan
                                perbaikan di bengkel BP Toyota?
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
                                Put your feet on your desk and relax. We’ll take
                                care of everything. All you need to do is upload
                                them, which we can handle too for a fee.
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
                                Berapa lama waktu perbaikan di bengkel BP
                                Toyota?
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
                                Yes, we don’t believe in slowly dripping out
                                your solution. We will work at lightning speeds
                                to get all your content to you ASAP.
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
                                Apakah perlu membawa Surat Perintah Kerja (SPK)
                                dari asuransi sebelum melakukan perbaikan di
                                bengkel BP Toyota?
                              </b>
                            </button>
                          </h2>
                          <div
                            id="collapseFive"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <p class="iner_contect text-start">
                                The topics are derived directly from your
                                closest competitors online. And before you say
                                it, yes you do have competitors online otherwise
                                you’d already be on the first page of Google for
                                thousands of targeted keywords and not reading
                                this page.
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
                              data-bs-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              <b>
                                Apakah bengkel BP Toyota menyediakan jasa
                                towing?
                              </b>
                            </button>
                          </h2>
                          <div
                            id="collapseTwo"
                            class="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                          >
                            <div class="accordion-body">
                              <p class="iner_contect text-start">
                                Clicks and impressions to your site generally
                                start going up within a month of posting your
                                content. Although it may take 3-6 months to
                                mature completely.
                              </p>
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
                  <div
                    className="tab-pane fade"
                    id="faq_tab_3"
                    role="tabpanel"
                    aria-labelledby="faq_tab_3-tab"
                  >
                     <div className="container mt-5">
                      <div className="row">
                        <div className="col-6">
                          <img
                            src="assets/Rectangle12.jpg"
                            className="img-fluid w-100 h-100"
                          />
                        </div>
                        <div className="col-6 text-start">
                          <p className="paraTag1">
                          Toyota SERVICES - toyota mobile service
                          </p>
                          <h1>
                          Layanan perawatan dan perbaikan
Toyota yang siap mengunjungi Anda
                          </h1>
                          <p>
                          Padatnya pekerjaan dan tuntutan mobilitas keseharian Anda, terkadang menyebabkan Anda tidak sempat meluangkan waktu untuk melakukan servis di bengkel resmi Toyota. Jangan biarkan kendaraan Anda tidak terawat karena dapat menyebabkan penurunan performa kendaraan dan mesin tidak bekerja secara optimal.
                          </p>
                          <p>
                          Toyota menghadirkan layanan Toyota Mobile Service (TMS) untuk memberikan kemudahan servis berkala dan perbaikan ringan seperti penggantian aki, wiper, brake pad, v-belt, dan lampu, di lokasi dan waktu yang Anda inginkan, seperti di rumah ataupun di kantor Anda.

                          </p>
                          <p>
                          Tidak hanya kemudahan waktu dan lokasi, kualitas pengerjaan TMS terjamin sama baiknya dengan pengerjaan di bengkel Toyota tanpa adanya biaya tambahan.
                          </p>
                          <button type="button" class="btn btn-dark px-5 mt-4">
                          Temukan Dealer Terdekat
                          </button>
                        </div>
                      </div>
                      <div className="logos d-flex justify-content-center mt-5 mb-4">
                        <div className="mx-2">
                          <img
                            src="assets/Mobile-Service1.png"
                            alt="t-care-img"
                          />
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
                    id="faq_tab_4"
                    role="tabpanel"
                    aria-labelledby="faq_tab_4-tab"
                  >
                    <div>
                        demy text
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
