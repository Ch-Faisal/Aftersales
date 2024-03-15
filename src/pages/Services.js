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
                      <div class="accordions mt-5" id="accordionExample">
              <div class="accordion-item back_color_set mb-2 text-white">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button back_color_set text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="true"
                    aria-controls="collapseSix"
                  >
                    Question: Do you just write blog posts?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  class="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p class="iner_contect">
                      Haha no, our goal is to rank you on the top of the first
                      page of Google. Arbitrarily writing blog posts and rolling
                      the dice on your content won’t achieve that.
                      <br />
                    </p>
                    <ul class="list-group-numbered iner_contect">
                      <li>
                        We expertly research over 800 high demand low supply
                        keywords to write about
                      </li>
                      <li>Provide 10 - 30 high quality backlinks</li>
                      <li>
                        Manually optimize each post for over 350 variables
                      </li>
                      <li>
                        Do a competitor and SERP analysis on each keyword to
                        further optimize your post
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="accordion-item mt-2 back_color_set">
                <h2 class="accordion-header back_color_set">
                  <button
                    class="accordion-button collapsed back_color_set text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Question: Do I get all my blog posts at once?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p class="iner_contect">
                      We will get industry and company insights from you, and
                      then send you a questionnaire. Once you fill that out:
                      <br />
                    </p>
                    <ul class="list-group-numbered iner_contect">
                      <li>
                        We will get industry and company insights from you, and
                        then send you a questionnaire. Once you fill that out:
                      </li>
                      <li>
                        We’ll conduct keyword mapping to find high demand, low
                        supply topics.
                      </li>
                      <li>
                        Conduct a SERP (Search Engine Results Page) analysis per
                        keyword we’re writing about. Basically a competitor
                        analysis
                      </li>
                      <li>
                        Use that competitor analysis to write a better piece of
                        content than the top ranking articles.
                      </li>
                      <li>
                        Publish your post and drive backlinks to your website
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="accordion-item mt-2 back_color_set">
                <h2 class="accordion-header back_color_set">
                  <button
                    class="accordion-button collapsed back_color_set text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Question: What do I have to do for each post?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p class="iner_contect">
                      Put your feet on your desk and relax. We’ll take care of
                      everything. All you need to do is upload them, which we
                      can handle too for a fee.
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item mt-2 back_color_set">
                <h2 class="accordion-header back_color_set">
                  <button
                    class="accordion-button collapsed back_color_set text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Question: Do I get all my blog posts at once?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p class="iner_contect">
                      Yes, we don’t believe in slowly dripping out your
                      solution. We will work at lightning speeds to get all your
                      content to you ASAP.
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item mt-2 back_color_set">
                <h2 class="accordion-header back_color_set">
                  <button
                    class="accordion-button collapsed back_color_set text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Question: How are you making sure the blog posts are
                    relevant content?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p class="iner_contect">
                      The topics are derived directly from your closest
                      competitors online. And before you say it, yes you do have
                      competitors online otherwise you’d already be on the first
                      page of Google for thousands of targeted keywords and not
                      reading this page.
                    </p>
                  </div>
                </div>
              </div>

              <div class="accordion-item mt-2 back_color_set">
                <h2 class="accordion-header back_color_set">
                  <button
                    class="accordion-button collapsed back_color_set text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Question: How soon can we expect results?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p class="iner_contect">
                      Clicks and impressions to your site generally start going
                      up within a month of posting your content. Although it may
                      take 3-6 months to mature completely.
                    </p>
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
