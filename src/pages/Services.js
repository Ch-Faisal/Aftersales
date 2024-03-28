import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "../css/services.css";
import { NavLink } from 'react-router-dom';
const Services = () => {
  // Function to scroll left
  const scrollLeft = () => {
    const myTab = document.getElementById("myTab");
    myTab.scrollTo({
      left: myTab.scrollLeft - 100, // Adjust scroll distance as needed
      behavior: "smooth", // Smooth scrolling behavior
    });
  };

  const scrollRight = () => {
    const myTab = document.getElementById("myTab");
    myTab.scrollTo({
      left: myTab.scrollLeft + 100, // Adjust scroll distance as needed
      behavior: "smooth", // Smooth scrolling behavior
    });
  };
  return (
    <div>
      <Header></Header>
      <div className="Banner_image"></div>
      <div className="mt-5 mb-5">
        <h1>Discover Our Service</h1>
        <div className="">
          <p className=" px-4 heading_discription">
            Layanan Servis berkualitas prima ,&nbsp;
            <span className="text-danger">
              agar performa Toyota Anda selalu optimal
            </span>
          </p>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12 p-0">
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
                <ul
                  className="nav nav-tabs custom-nav-tabs nav-fill custom-nav-fill ms-lg-0 ms-4 me-lg-0 me-4"
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
                    <div className="row d-flex justify-content-center">
                      <div className="col-12 d-lg-none d-block">
                        <p className="paraTag1">
                          TOYOTA SERVICE - GENERAL REPAIR
                        </p>
                        <h1>
                          Layanan Servis berkualitas prima, agar performa Toyota
                          Anda selalu optimal
                        </h1>
                      </div>
                      <div className="col-lg-6 col-md-10 col-12">
                        <img
                          src="assets/img.png"
                          className="img-fluid w-100 h-100"
                        />
                      </div>
                      <div className="col-lg-6 col-md-10 col-12 text-center text-lg-start">
                        <p className="paraTag1 d-lg-block d-none">
                          TOYOTA SERVICE - GENERAL REPAIR
                        </p>
                        <h1 className="d-lg-block d-none">
                          Layanan Servis berkualitas prima, agar performa Toyota
                          Anda selalu optimal
                        </h1>
                        <p className="Services_paragraph">
                          Percayakan perawatan dan perbaikan kendaraan
                          kesayangan Anda kepada bengkel resmi Toyota.
                        </p>
                        <p className="Services_paragraph">
                          Baik servis perawatan berkala ataupun perbaikan,
                          kendaraan Anda akan ditangani oleh teknisi
                          berpengalaman dan bersertifikat, serta menggunakan
                          Toyota Genuine Parts. Selama proses servis, para
                          teknisi didukung dengan peralatan yang lengkap dan
                          modern sesuai dengan standar kualitas Toyota.
                        </p>
                        <p className="Services_paragraph">
                          Karena kepuasan Anda adalah prioritas kami, masalah
                          pada kendaraan Anda akan didiagnosa oleh master
                          technician dan ditunjang oleh special tools untuk
                          menyelesaikan setiap permasalahan kendaraan Anda
                          dengan tepat dan akurat dengan jaminan hasil perbaikan
                          (warranty).
                        </p>
                        <button
                          type="button"
                          class="btn custom-btn-dark px-5 mt-4"
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
                  className="tab-pane fade px-3 px-lg-0"
                  id="faq_tab_2"
                  role="tabpanel"
                  aria-labelledby="faq_tab_2-tab"
                >
                  <div className="container ps-lg-5 pe-lg-5 mt-5">
                    <p className="paraTag1">Toyota SERVICE - Body & paint</p>
                    <h1>
                      Hadirkan ketenangan berkendara dengan layanan perbaikan
                      Bodi & Cat Toyota di tangan yang paling berpengalaman
                    </h1>
                    <p className="Services_paragraph">
                      Toyota memberikan layanan untuk perbaikan bodi kendaraan
                      Anda sehingga kembali ke kondisi semula melalui layanan
                      Bodi & Cat
                    </p>
                  </div>
                  <div className="container mt-5">
                    <div className="row align-items-center">
                      <div className="col-lg-7 text-lg-start">
                        <h1>
                          Dengan 81 cabang bengkel Bodi & Cat Toyota yang
                          tersebar di seluruh Indonesia,
                        </h1>
                        <p className="d-lg-block d-none Services_paragraph">
                          Toyota siap memberikan pelayanan tertinggi seperti :
                          fasilitas, material, teknisi, operasi, hingga jaminan
                          hasil perbaikan (warranty)
                        </p>
                      </div>
                      <div className="col-lg-5">
                        <img src="assets/map_view.png" className="w-100" />
                      </div>
                      <p className="col-12 d-lg-none d-bolck pt-lg-0 pt-4 Services_paragraph">
                        Toyota siap memberikan pelayanan tertinggi seperti :
                        fasilitas, material, teknisi, operasi, hingga jaminan
                        hasil perbaikan (warranty)
                      </p>
                    </div>
                  </div>
                  <div className="custom-bg-gray pb-5 pt-2 mt-lg-5 container-fluid">
                    <div className="container mt-5">
                      <div className="row">
                        <div className="col-12 d-lg-none d-block">
                          <h1>Servis dengan kualitas terbaik</h1>
                        </div>
                        <div className="col-lg-5">
                          <img
                            src="assets/rectangle.jpeg"
                            className="img-fluid w-100 pb-4 pt-4 pt-lg-0 pb-lg-0"
                          />
                        </div>
                        <div className="col-lg-7 text-start">
                          <div className="row">
                            <h1 className="d-lg-block d-none">
                              Servis dengan kualitas terbaik
                            </h1>
                            <div className="col-md-6">
                              <span className="d-flex align-items-center">
                                <span className="custom_font pe-lg-3 me-3 me-lg-0">
                                  1
                                </span>
                                <span className="custom_color_11">
                                  Fasilitas bengkel dan tools yang lengkap untuk
                                  menunjang kualitas perbaikan.
                                </span>
                              </span>
                              <span className="d-flex align-items-center">
                                <span className="custom_font me-2 me-lg-0">
                                  2
                                </span>
                                <span className="custom_color_11">
                                  Estimasi waktu dan biaya yang akurat serta
                                  transparan.
                                </span>
                              </span>
                              <span className="d-flex align-items-center">
                                <span className="custom_font me-2 me-lg-0">
                                  3
                                </span>
                                <span className="custom_color_11">
                                  Teknisi yang telah tersertifikasi oleh Toyota
                                  Astra Motor.
                                </span>
                              </span>
                            </div>
                            <div className="col-md-6">
                              <span className="d-flex align-items-center">
                                <span className="custom_font me-2 me-lg-0">
                                  4
                                </span>
                                <span className="custom_color_11">
                                  Jaminan suku cadang orisinal dari
                                  Toyota.
                                </span>
                              </span>
                              <span className="d-flex align-items-center">
                                <span className="custom_font me-2 me-lg-0">
                                  5
                                </span>
                                <span className="custom_color_11">
                                  Penggunaan material perbaikan dan cat sesuai
                                  standar.
                                </span>
                              </span>
                              <span className="d-flex align-items-center">
                                <span className="custom_font me-2 me-lg-0">
                                  6
                                </span>
                                <span className="custom_color_11">
                                  Garansi hasil perbaikan Bodi & Cat.
                                </span>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container mt-5">
                    <div className="row align-items-center">
                      <div className="col-lg-7 text-lg-start text-center pb-lg-0 pb-4">
                        <h1>
                          Bengkel resmi Toyota akan membantu dari proses
                          administrasi baik pelanggan tunai ataupun asuransi.
                        </h1>
                        <p className="d-lg-block d-none Services_paragraph">
                          Detail informasi mengenai layanan perbaikan kamu dapat
                          Anda akses melalui Halobeng pada M-Toyota atau jika
                          Anda memiliki asuransi, silahkan mengkonsultasikan
                          perbaikan pada call center dealer penjual Anda
                        </p>
                        <button
                          type="button"
                          class="btn custom-btn-dark px-5 mt-4 d-lg-block d-none"
                        >
                          Temukan Dealer Terdekat
                        </button>
                      </div>
                      <div className="col-lg-5">
                        <img src="assets/img1.jpg" className="w-100" />
                      </div>
                      <div className="d-lg-none d-block pt-4 pb-4">
                        <p>
                          Detail informasi mengenai layanan perbaikan kamu dapat
                          Anda akses melalui Halobeng pada M-Toyota atau jika
                          Anda memiliki asuransi, silahkan mengkonsultasikan
                          perbaikan pada call center dealer penjual Anda
                        </p>
                        <button
                          type="button"
                          class="btn custom-btn-dark px-5 mt-4"
                        >
                          Temukan Dealer Terdekat
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="container p-lg-5">
                    <h1>Frequently Asked Question</h1>
                    <div className="">
                        <NavLink to="/faq"
                          className="btn custom-btn-dark mt-4 ms-2"
                        >
                          Go to FAQ Page
                        </NavLink>
                      </div>
                  </div>
                  <div className="logos d-flex justify-content-center mt-5 mb-4">
                    <div className="mx-2">
                      <img src="assets/quality-service.png" alt="t-care-img" />
                    </div>
                    <div className="mx-2">
                      <img
                        src="assets/genuine-parts (1).png"
                        alt="t-care-img"
                      />
                    </div>
                    <div className="mx-2">
                      <img src="assets/bodypaint.png" alt="t-care-img" />
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade px-3 px-lg-0"
                  id="faq_tab_3"
                  role="tabpanel"
                  aria-labelledby="faq_tab_3-tab"
                >
                  <div className="container mt-5">
                    <div className="row d-flex justify-content-center">
                      <div className="col-lg-6 col-md-10 col-12">
                        <div className="d-lg-none d-block pb-4">
                          <p className="paraTag1">
                            Toyota SERVICES - toyota mobile service
                          </p>
                          <h1>
                            Layanan perawatan dan perbaikan Toyota yang siap
                            mengunjungi Anda
                          </h1>
                        </div>
                        <img
                          src="assets/Rectangle12.jpg"
                          className="img-fluid w-100 custom_height pb-4 pb-lg-0"
                        />
                      </div>
                      <div className="col-lg-6 col-md-10 col-12 text-lg-start">
                        <p className="paraTag1 d-lg-block d-none">
                          Toyota SERVICES - toyota mobile service
                        </p>
                        <h1 className="d-lg-block d-none">
                          Layanan perawatan dan perbaikan Toyota yang siap
                          mengunjungi Anda
                        </h1>
                        <p className="Services_paragraph">
                          Padatnya pekerjaan dan tuntutan mobilitas keseharian
                          Anda, terkadang menyebabkan Anda tidak sempat
                          meluangkan waktu untuk melakukan servis di bengkel
                          resmi Toyota. Jangan biarkan kendaraan Anda tidak
                          terawat karena dapat menyebabkan penurunan performa
                          kendaraan dan mesin tidak bekerja secara optimal.
                        </p>
                        <p className="Services_paragraph">
                          Toyota menghadirkan layanan Toyota Mobile Service
                          (TMS) untuk memberikan kemudahan servis berkala dan
                          perbaikan ringan seperti penggantian aki, wiper, brake
                          pad, v-belt, dan lampu, di lokasi dan waktu yang Anda
                          inginkan, seperti di rumah ataupun di kantor Anda.
                        </p>
                        <p className="Services_paragraph">
                          Tidak hanya kemudahan waktu dan lokasi, kualitas
                          pengerjaan TMS terjamin sama baiknya dengan pengerjaan
                          di bengkel Toyota tanpa adanya biaya tambahan.
                        </p>
                        <button
                          type="button"
                          class="btn custom-btn-dark px-5 mt-4"
                        >
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
                  className="tab-pane fade px-3 px-lg-0"
                  id="faq_tab_4"
                  role="tabpanel"
                  aria-labelledby="faq_tab_4-tab"
                >
                  <div className="container ps-lg-5 pe-lg-5 mt-5">
                    <p className="paraTag1">
                      Toyota SERVICES - EXPRESS MAINTENANCE
                    </p>
                    <h1>
                      Servis Cepat Akurat 1 Jam untuk Waktu Anda yang Berharga
                    </h1>
                  </div>
                  <div className="container text-start pt-5 d-none d-lg-block ">
                    <p className="Services_paragraph">
                      Jika Anda memiliki waktu yang terbatas untuk perawataan
                      berkala Toyota Anda, Anda tidak perlu lagi khawatir harus
                      menunggu lama. Gunakan Express Maintenance (EM)* dari
                      Toyota, yaitu servis cepat (60 menit) yang dikerjakan
                      lebih dari 1 teknisi.
                    </p>
                    <p className="Services_paragraph">
                      Selain cepat, Anda tidak perlu mengeluarkan biaya tambahan
                      dan Toyota menjamin kualitas layanan EM seperti halnya
                      servis regular. Untuk mendapatkan layanan ini, Anda dapat
                      melakukan booking servis terlebih dahulu di bengkel Toyota
                      yang telah memiliki fasilitas EM.
                    </p>
                    <img
                      src="/assets/Rectangle14.jpg"
                      alt=""
                      className="img-fluid pt-4"
                    />
                  </div>
                  <div className="container pt-5 d-block d-lg-none ">
                    <img
                      src="/assets/Rectangle14.jpg"
                      alt=""
                      className="img-fluid pb-4"
                    />
                    <p>
                      Jika Anda memiliki waktu yang terbatas untuk perawataan
                      berkala Toyota Anda, Anda tidak perlu lagi khawatir harus
                      menunggu lama. Gunakan Express Maintenance (EM)* dari
                      Toyota, yaitu servis cepat (60 menit) yang dikerjakan
                      lebih dari 1 teknisi.
                    </p>
                    <p>
                      Selain cepat, Anda tidak perlu mengeluarkan biaya tambahan
                      dan Toyota menjamin kualitas layanan EM seperti halnya
                      servis regular. Untuk mendapatkan layanan ini, Anda dapat
                      melakukan booking servis terlebih dahulu di bengkel Toyota
                      yang telah memiliki fasilitas EM.
                    </p>
                  </div>
                  <div className="logos d-flex justify-content-center mt-5 mb-4">
                    <div className="mx-2">
                      <img src="assets/quality-service.png" alt="t-care-img" />
                    </div>
                    <div className="mx-2">
                      <img
                        src="assets/genuine-parts (1).png"
                        alt="t-care-img"
                      />
                    </div>
                    <div className="mx-2">
                      <img src="assets/express.png" alt="t-care-img" />
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
