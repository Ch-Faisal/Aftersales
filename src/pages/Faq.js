import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "../css/faq.css";
const Faq = () => {
  return (
    <div className="main_container">
      <Header />
      <div className="container m-5">
        <h1>FAQs</h1>
      </div>
      <div className="container mb-5">
        <div class="form-group has-search">
          <span class="fa fa-search form-control-feedback pt-1"></span>
          <input
            type="text"
            class="form-control form-controll"
            placeholder="Type your questions"
          />
        </div>
      </div>
      <div className="container px-lg-5">
        <div className="faq" id="faq">
          <div class="accordions px-lg-5" id="accordionExample">
            <div class="accordion-item back_color_set">
              <h2 class="accordion-header">
                <button
                  id="accordion-button"
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="true"
                  aria-controls="collapseSix"
                >
                  <b>Kenapa harus servis di bengkel resmi?</b>
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

            <div class="accordion-item  back_color_set">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  <b>Kenapa harus servis berkala?</b>
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p class="iner_contect text-start">
                    We will get industry and company insights from you, and then
                    send you a questionnaire. Once you fill that out:
                    <br />
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item  back_color_set">
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
                    Kenapa servis berkala secara rutin 6 bulan sekali itu sangat
                    penting?
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
                    everything. All you need to do is upload them, which we can
                    handle too for a fee.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item  back_color_set">
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
                    Kenapa servis setiap 6 bulan penting walaupun kilometer
                    10,000 km belum tercapai?
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
                    Yes, we don’t believe in slowly dripping out your solution.
                    We will work at lightning speeds to get all your content to
                    you ASAP.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item  back_color_set">
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
                    Kilometer kendaraan mencapai 10,000 km sebelum 6 bulan.
                    Apakah harus tetap servis setiap 6 bulan?
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
                    The topics are derived directly from your closest
                    competitors online. And before you say it, yes you do have
                    competitors online otherwise you’d already be on the first
                    page of Google for thousands of targeted keywords and not
                    reading this page.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item  back_color_set">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <b>Hal apa saja yang dilakukan saat Servis Berkala?</b>
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p class="iner_contect text-start">
                    Clicks and impressions to your site generally start going up
                    within a month of posting your content. Although it may take
                    3-6 months to mature completely.
                  </p>
                </div>
              </div>
            </div>

            <div class="accordion-item back_color_set">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseseven"
                  aria-expanded="false"
                  aria-controls="collapseseven"
                >
                  <b>
                    Apakah boleh saya bawa sendiri oli merk lain selain Toyota
                    ke bengkel resmi?
                  </b>
                </button>
              </h2>
              <div
                id="collapseseven"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p class="iner_contect text-start">
                    Clicks and impressions to your site generally start going up
                    within a month of posting your content. Although it may take
                    3-6 months to mature completely.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <Footer />
    </div>
  );
};

export default Faq;
