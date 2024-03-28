import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "../css/faq.css";
import { NavLink } from 'react-router-dom';
const Faq = () => {
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
    <div className="main_container" id="navbar_top">
      <Header />
      <div className="container pt-5 my-5">
        <h1>FAQs testing</h1>
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
      <div className="bg-white">
        <div className="container mb-5" style={{ position: "relative" }}>
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
            className="nav nav-tabs custom-nav-tabs nav-fill custom-nav-fill ms-lg-0 ms-4 me-lg-0 me-4 mx-lg-5"
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
                  <span>General</span>
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
                  <span>T-CARE</span>
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
                  <span>Body & Paint</span>
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
            <div className="container px-lg-5">
              <div className="faq">
                <div class="accordions px-lg-5" id="accordionExample">
                  <div class="accordion-item back_color_set">
                    <h2 class="accordion-header">
                      <button
                        id="accordion-button"
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseA"
                        aria-expanded="true"
                        aria-controls="collapseA"
                      >
                        <b className="custom_add_b_fonts_faqs text-start " >Kenapa harus servis di bengkel resmi?</b>
                      </button>
                    </h2>
                    <div
                      id="collapseA"
                      class="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body text-start ">
                        <ol className="pt-3">
                          <li>Kualitas servis yang tinggi karena dikerjakan oleh teknisi yang disertifikasi.</li>
                          <li>Suku cadang Toyota yang terjamin keasliannya.</li>
                          <li>Fasilitas bengkel yang mumpuni dan peralatan sesuai standar Toyota.</li>
                          <li>Dilayani oleh Service Advisor yang dapat menjadi konsultan kebutuhan servis kendaraan Toyota Anda.</li>
                          <li>Dilengkapi ruang tunggu yang nyaman bagi customer untuk menunggu selama waktu servis.</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item  back_color_set">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseB"
                        aria-expanded="false"
                        aria-controls="collapseB"
                      >
                        <b className="custom_add_b_fonts_faqs text-start" >Kenapa harus servis berkala?</b>
                      </button>
                    </h2>
                    <div
                      id="collapseB"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p class="iner_contect text-start pt-3">
                          Servis Berkala bertujuan untuk memastikan bahwa kondisi kendaraan dalam keadaan sesuai standard dan bekerja atau berfungsi secara optimal
                          <br />
                          setelah digunakan pelanggan. Selain itu, hal tersebut dlakukan agar kendaraan tetap prima, membuat aman dan nyaman saat dikendarai, menjaga
                          <br />
                          efisiensi pemakaian bahan bakar dan membuat unsur kendaraan menjadi lebih tahan lama
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
                        data-bs-target="#collapseC"
                        aria-expanded="false"
                        aria-controls="collapseC"
                      >
                        <b className="custom_add_b_fonts_faqs text-start text-start" >
                          Kenapa servis berkala secara rutin 6 bulan sekali itu sangat penting?
                        </b>
                      </button>
                    </h2>
                    <div
                      id="collapseC"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body text-start">
                        <ol className="pt-3">
                          <li>Kondisi oli yang tidak rutin diganti dalam waktu 6 bulan dapat mempengaruhi performa kendaraan Toyota Anda.</li>
                          <li>Saringan oli yang tidak rutin dibersihkan dalam waktu 6 bulan akan mempengaruhi mesin sehingga munculnya kebisingan pada mesin Toyota Anda.</li>
                          <li>Lapisan saringan udara yang terlalu lama tidak dibersihkan dapat tersumbat kotoran dan partikel lainnya sehingga berakibat borosnya bahan bakar.</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item  back_color_set">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseD"
                        aria-expanded="false"
                        aria-controls="collapseD"
                      >
                        <b className="text-start  custom_add_b_fonts_faqs">
                          Kenapa servis setiap 6 bulan penting walaupun kilometer 10,000 km belum tercapai?
                        </b>
                      </button>
                    </h2>
                    <div
                      id="collapseD"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body text-start">
                        <p className="cusotm_text_size mt-4">1. Mobil sering terkena macet</p>
                        <ul>
                          <li className="cusotm_text_size">Oli Rentan Teroksidasi</li>
                        </ul>
                        <p>Dalam keadaan macet, mesin tetap bekerja sehingga suhu mesin menjadi relatif lebih tinggi. Hal ini menyebabkan oli rentan teroksidasi dan kinerja pelumasan menjadi menurun.</p>
                        <ul>
                          <li className="cusotm_text_size">Saringan Oli Kotor</li>
                        </ul>
                        <p>Saat kondisi macet oli akan lebih cepat kotor, kotoran akan menempel pada saringan oli sehingga berdampak pada kinerja pelumasan. Oleh karena itu perlu dilakukan penggantian secara periodik.</p>
                        <ul><li className="cusotm_text_size">Kinerja Rem Menurun</li></ul>
                        <p> Pada kondisi stop‘n go, frekuensi penggunaan rem akan meningkat sehingga suhu di komponen pengereman menjadi tinggi. Dampaknya, kinerja pengereman menurun dan berpotensi deformasi pada piringan rem.</p>
                        <p className="cusotm_text_size">2. Mobil Jarang Digunakan</p>
                        <ul><li className="cusotm_text_size">Mobil Sulit Dinyalakan</li></ul>
                        <p>
                          Walaupun mesin mati, beberapa komponen mobil masih menggunakan daya dari aki. Jika tidak digunakan dalam waktu yang lama, aki rentan soak dan menyebabkan mobil susah dinyalakan.</p>
                        <ul><li className="cusotm_text_size">Suara Mesin Kasar</li></ul>
                        <p>Saat tidak digunakan dalam waktu yang lama, lapisan oli pada komponen mesin akan menipis sehingga suara mesin menjadi kasar saat dinyalakan dan berpotensi menyebabkan keausan.</p>
                        <ul><li className="cusotm_text_size">Rem Menjadi Macet</li></ul>
                        <p>Saat jarang digunakan, kanvas rem akan menempel pada piringan rem di satu posisi yang sama dalam jangka waktu yang lama sehingga rem berpotensi macet. Kondisi ini akan diperparah jika timbul karat pada komponen rem.</p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item  back_color_set">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseE"
                        aria-expanded="false"
                        aria-controls="collapseE"
                      >
                        <b className="text-start  custom_add_b_fonts_faqs">
                          Kilometer kendaraan mencapai 10,000 km sebelum 6 bulan. Apakah harus tetap servis setiap 6 bulan?
                        </b>
                      </button>
                    </h2>
                    <div
                      id="collapseE"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body text-start">
                        <p class="iner_contect text-start mt-4">
                          Saat mobil digunakan untuk perjalanan jauh, kelipatan 10.000 kilometer akan tercapai lebih cepat dari 6 bulan. Hal ini menyebabkan performa komponen
                        </p>
                        <p>mesin seperti oli, saringan oli, saringan udara, dan sistem pengereman menurun sehingga servis perlu segera dilakukan tanpa harus menunggu 6 bulan.</p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item  back_color_set">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseF"
                        aria-expanded="false"
                        aria-controls="collapseF"
                      >
                        <b className="custom_add_b_fonts_faqs text-start" >Hal apa saja yang dilakukan saat Servis Berkala?</b>
                      </button>
                    </h2>
                    <div
                      id="collapseF"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body text-start">
                        <ol className="mt-4">
                          <li>Pemeriksaan Sistem Penggerak, Kelistrikan, Kemudi, Rem, dan Kerja AC.</li>
                          <li>Pemeriksaan Mesin, Lampu-lampu, Klakson, dan Wiper / Washer</li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item back_color_set">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseG"
                        aria-expanded="false"
                        aria-controls="collapseG"
                      >
                        <b className="text-start  custom_add_b_fonts_faqs">
                          Apakah boleh saya bawa sendiri oli merk lain selain Toyota ke bengkel resmi?
                        </b>
                      </button>
                    </h2>
                    <div
                      id="collapseG"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body text-start">
                        <ol className="mt-4">
                          <li>Untuk menjaga performance kendaraan Toyota Anda, kami sangat menganjurkan penggunaan sparepart dan lubricant genuine yang direkomendasikan oleh Toyota.</li>
                          <li>Toyota tidak dapat menjamin kualitas oli selain merk punya Toyota. Oleh karena itu, Toyota sudah menyiapkan spesifikasi oli yang tepat untuk menjaga performance kendaraan Toyota.</li>
                          <li>Hanya merk TMO, oli yang telah kami siapkan sesuai dengan spesifikasi standar manufaktur dan buku panduan perawatan pemilik yang dapat memenuhi kebutuhan pergantian oli kendaraan Toyota anda.</li>
                        </ol>
                      </div>
                    </div>
                  </div>
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
            <div className="container px-lg-5">
              <div className="faq">
                <div class="accordions px-lg-5" id="accordionExample">

                  <div class="accordion-item  back_color_set">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseBa"
                        aria-expanded="false"
                        aria-controls="collapseBa"
                      >
                        <b className="custom_add_b_fonts_faqs text-start" >Benefit apa yang didapat pada program ini?</b>
                      </button>
                    </h2>
                    <div
                      id="collapseBa"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body text-start">
                        <p class="iner_contect text-start mt-4">
                          Pelanggan Toyota mendapatkan benefit:
                        </p>
                        <ul className="pb-4 text-start">
                          <li>Bebas Biaya Jasa s/d Servis Berkala ke-7 (Maks. 3 tahun / 60.000 km)*</li>
                          <li>Bebas Biaya Suku Cadang s/d Servis Berkala ke-7 (Maks. 3 tahun / 60.000 km)*</li>
                          <li>Extended Warranty** 1 tahun / 20.000 km jika pelanggan servis berkala secara tepat waktu</li>
                        </ul>
                        <p> *mana yang tercapai lebih dahulu *khusus model LCGC hanya berlaku bebas biaya jasa servis berkala<br /> **ketentuan warranty berlaku sesuai informasi warranty yang terdapat di buku servis/owner’s manual</p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item  back_color_set">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseCa"
                        aria-expanded="false"
                        aria-controls="collapseCa"
                      >
                        <b className="custom_add_b_fonts_faqs text-start" >
                          Apa perbedaan program T-CARE dari Program Gratis Biaya Servis Berkala?
                        </b>
                      </button>
                    </h2>
                    <div
                      id="collapseCa"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body text-start">
                        <div className="section-content mt-3">
                          <p className="text-start">
                            Cakupan Bebas Biaya Jasa dan Biaya Suku Cadang pada program<strong> T-Care</strong> adalah sampai Servis Berkala
                            <strong>
                              ke-7 (Maks. 3 tahun / 60.000 km),
                            </strong>
                            Dengan kata lain, T-CARE memberikan benefit tambahan 1 kali servis berkala dengan cakupan periode yang lebih singkat sebanyak 1 tahun menjadi 3 tahun.
                          </p>
                          <p>
                            Pelanggan Toyota yang berhak mengikuti program T-CARE dan melakukan servis secara tepat waktu, dapat menikmati reward berupa  <strong>Extended Warranty 1 tahun/20.000 km!**</strong> (1 tahun / 20.000 km) sehingga total cakupan warranty Toyota menjadi 4 tahun / 120.000 km.

                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item  back_color_set">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseDa"
                        aria-expanded="false"
                        aria-controls="collapseDa"
                      >
                        <b className="custom_add_b_fonts_faqs text-start" >
                          Bagaimana saya dikategorikan Servis Berkala tepat waktu?
                        </b>
                      </button>
                    </h2>
                    <div
                      id="collapseDa"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body text-start mt-4">
                        <p>Pelanggan Toyota dinyatakan Servis Berkala tepat  <strong> tepat waktu jika servis ke-1 dilakukan maksimum 1 bulan dari bulan penyerahan kendaraan dan untuk servis ke-2 hingga servis ke-7 dilakukan maksimum 6 bulan untuk setiap servisnya dimulai dari bulan penyerahan kendaraan.
                        </strong></p>
                        <p>Berikut adalah batas maksimal interval servis dari bulan penyerahan kendaraan:</p>
                        <p>Servis ke-1 = Maksimum <strong>1 bulan</strong> dari bulan penyerahan kendaraan* <br />Servis ke-2 = Maksimum <strong>6 bulan</strong> dari bulan penyerahan kendaraan <br />Servis ke-3 = Maksimum <strong>12 bulan</strong> dari bulan penyerahan kendaraan <br />Servis ke-4 = Maksimum <strong>18 bulan</strong> dari bulan penyerahan kendaraan <br />Servis ke-5 = Maksimum <strong>24 bulan</strong> dari bulan penyerahan kendaraan <br />Servis ke-6 = Maksimum <strong>30 bulan</strong> dari bulan penyerahan kendaraan <br />Servis ke-7 = Maksimum <strong>36 bulan</strong> dari bulan penyerahan kendaraan </p>

                        <p>*peraturan berlaku per penyerahan kendaraan <strong>Oktober 2022</strong> dan seterusnya. Untuk kendaraan penyerahan <strong>Juli-September 2022,</strong> peraturan hanya berlaku untuk servis ke-2 hingga ke-7 untuk mendapatkan Extended Warranty.</p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item  back_color_set">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed "
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseEa"
                        aria-expanded="false"
                        aria-controls="collapseEa"
                      >
                        <b className="custom_add_b_fonts_faqs text-start" >
                          Bagaimana cara saya mengetahui ketepatan waktu servis ke-1 sampai ke-7?
                        </b>
                      </button>
                    </h2>
                    <div
                      id="collapseEa"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p class="iner_contect text-start mt-4">
                          Pelanggan Toyota dapat memeriksa buku servis atau bertanya kepada salesman (saat unit pertama kali diterima) atau service advisor (saat servis berkala).
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
                        data-bs-target="#collapseFa"
                        aria-expanded="false"
                        aria-controls="collapseFa"
                      >
                        <b className="text-start  custom_add_b_fonts_faqs">Apakah terdapat masa tenggang atau grace period jika saya agak telat saat servis ke-1 sampai ke-7?</b>
                      </button>
                    </h2>
                    <div
                      id="collapseFa"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body text-start">
                        <p class="iner_contect text-start mt-4">
                          Reward Extended Warranty (1 tahun / 20.000 km) hanya diberikan sesuai ketentuan ketepatan waktu Servis Berkala ke-1 hingga ke-7*
                        </p>
                        <p>*untuk kendaraan penyerahan <strong>Juli-September 2022,</strong> peraturan hanya berlaku untuk servis ke-2 hingga ke-7 untuk mendapatkan Extended Warranty.</p>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item back_color_set">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseGa"
                        aria-expanded="false"
                        aria-controls="collapseGa"
                      >
                        <b className="text-start  custom_add_b_fonts_faqs">
                          Jika saya Servis Berkala secara tidak tepat waktu, apakah saya tetap bisa mendapatkan benefit T-CARE?
                        </b>
                      </button>
                    </h2>
                    <div
                      id="collapseGa"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p class="iner_contect text-start mt-4">
                          Pelanggan Toyota tetap dapat menikmati benefit bebas biaya jasa dan bebas biaya suku cadang selama 3 tahun, tetapi tidak dapat menerima reward Extended Warranty (1 tahun / 20.000 km).
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
                        data-bs-target="#collapseHa"
                        aria-expanded="false"
                        aria-controls="collapseHa"
                      >
                        <b className="custom_add_b_fonts_faqs text-start" >
                          Siapa saja yang dapat menikmati program ini?
                        </b>
                      </button>
                    </h2>
                    <div
                      id="collapseHa"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <table class="table mt-4 table-striped table-hover">
                          <thead>
                            <tr className="custom_color_bg">
                              <th scope="col">Segmen</th>
                              <th scope="col">Model</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Electrified</td>
                              <td>Corolla Cross Hybrid, C-HR Hybrid, Camry Hybrid, Corolla Altis Hybrid, bZ4X, Innova Zenix Hybrid, Yaris Cross Hybrid</td>
                            </tr>
                            <tr>
                              <td>Pure Sports</td>
                              <td>Toyota 86, Supra</td>
                            </tr>
                            <tr>
                              <td>MPV</td>
                              <td>Alphard, Vellfire, Avanza, Veloz, Sienta, Voxy, Innova Reborn, Innova Zenix</td>
                            </tr>
                            <tr>
                              <td>SUV</td>
                              <td>Corolla Cross, Fortuner, LG-300, Raize, Rush, Yaris Cross</td>
                            </tr>
                            <tr>
                              <td>Hatchback</td>
                              <td>Yaris, All New Agya GR</td>
                            </tr>
                            <tr>
                              <td>Sedan</td>
                              <td>Camry, Corolla Altis, Vios</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div class="accordion-item back_color_set">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseIa"
                        aria-expanded="false"
                        aria-controls="collapseIa"
                      >
                        <b className="custom_add_b_fonts_faqs text-start" >
                          Item suku cadang apa saja yang didapat pada program ini?
                        </b>
                      </button>
                    </h2>
                    <div
                      id="collapseIa"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <table class="table mt-4 table-striped table-hover">
                          <thead>
                            <tr className="custom_color_bg">
                              <th scope="col" rowSpan={2}>Item Suku Cadang</th>
                              <th scope="col" colSpan={6}>Rekomendasi Periode Servis Berkala ke-</th>
                              <th></th>

                            </tr>
                            <tr className="custom_color_bg">
                              <th scope="col" >1 <br /> 1 Bulan</th>
                              <th scope="col" >2 <br /> 6 Bulan</th>
                              <th scope="col" >3 <br /> 12 Bulan</th>
                              <th scope="col" >4 <br /> 18 Bulan</th>
                              <th scope="col" >5 <br /> 24 Bulan</th>
                              <th scope="col" >6 <br /> 30 Bulan</th>
                              <th scope="col" >7 <br /> 36 Bulan</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>TMO Lubricant Engine Oil</td>
                              <td></td>
                              <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00011 14.7502C11.7281 14.7502 14.7502 11.7281 14.7502 8.00011C14.7502 4.27213 11.7281 1.25 8.00011 1.25C4.27213 1.25 1.25 4.27213 1.25 8.00011C1.25 11.7281 4.27213 14.7502 8.00011 14.7502ZM11.8866 6.79414C12.153 6.5116 12.1399 6.06659 11.8574 5.80019C11.5748 5.53379 11.1298 5.54687 10.8634 5.82942L7.13211 9.78689L5.13652 7.67036C4.87012 7.38781 4.42511 7.37472 4.14256 7.64113C3.86002 7.90753 3.84693 8.35253 4.11333 8.63508L6.21124 10.8601C6.71082 11.39 7.55339 11.39 8.05298 10.8601L11.8866 6.79414Z" fill="#D71921" />
                              </svg></td>
                              <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00011 14.7502C11.7281 14.7502 14.7502 11.7281 14.7502 8.00011C14.7502 4.27213 11.7281 1.25 8.00011 1.25C4.27213 1.25 1.25 4.27213 1.25 8.00011C1.25 11.7281 4.27213 14.7502 8.00011 14.7502ZM11.8866 6.79414C12.153 6.5116 12.1399 6.06659 11.8574 5.80019C11.5748 5.53379 11.1298 5.54687 10.8634 5.82942L7.13211 9.78689L5.13652 7.67036C4.87012 7.38781 4.42511 7.37472 4.14256 7.64113C3.86002 7.90753 3.84693 8.35253 4.11333 8.63508L6.21124 10.8601C6.71082 11.39 7.55339 11.39 8.05298 10.8601L11.8866 6.79414Z" fill="#D71921" />
                              </svg></td>
                              <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00011 14.7502C11.7281 14.7502 14.7502 11.7281 14.7502 8.00011C14.7502 4.27213 11.7281 1.25 8.00011 1.25C4.27213 1.25 1.25 4.27213 1.25 8.00011C1.25 11.7281 4.27213 14.7502 8.00011 14.7502ZM11.8866 6.79414C12.153 6.5116 12.1399 6.06659 11.8574 5.80019C11.5748 5.53379 11.1298 5.54687 10.8634 5.82942L7.13211 9.78689L5.13652 7.67036C4.87012 7.38781 4.42511 7.37472 4.14256 7.64113C3.86002 7.90753 3.84693 8.35253 4.11333 8.63508L6.21124 10.8601C6.71082 11.39 7.55339 11.39 8.05298 10.8601L11.8866 6.79414Z" fill="#D71921" />
                              </svg></td>
                              <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00011 14.7502C11.7281 14.7502 14.7502 11.7281 14.7502 8.00011C14.7502 4.27213 11.7281 1.25 8.00011 1.25C4.27213 1.25 1.25 4.27213 1.25 8.00011C1.25 11.7281 4.27213 14.7502 8.00011 14.7502ZM11.8866 6.79414C12.153 6.5116 12.1399 6.06659 11.8574 5.80019C11.5748 5.53379 11.1298 5.54687 10.8634 5.82942L7.13211 9.78689L5.13652 7.67036C4.87012 7.38781 4.42511 7.37472 4.14256 7.64113C3.86002 7.90753 3.84693 8.35253 4.11333 8.63508L6.21124 10.8601C6.71082 11.39 7.55339 11.39 8.05298 10.8601L11.8866 6.79414Z" fill="#D71921" />
                              </svg></td>
                              <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00011 14.7502C11.7281 14.7502 14.7502 11.7281 14.7502 8.00011C14.7502 4.27213 11.7281 1.25 8.00011 1.25C4.27213 1.25 1.25 4.27213 1.25 8.00011C1.25 11.7281 4.27213 14.7502 8.00011 14.7502ZM11.8866 6.79414C12.153 6.5116 12.1399 6.06659 11.8574 5.80019C11.5748 5.53379 11.1298 5.54687 10.8634 5.82942L7.13211 9.78689L5.13652 7.67036C4.87012 7.38781 4.42511 7.37472 4.14256 7.64113C3.86002 7.90753 3.84693 8.35253 4.11333 8.63508L6.21124 10.8601C6.71082 11.39 7.55339 11.39 8.05298 10.8601L11.8866 6.79414Z" fill="#D71921" />
                              </svg></td>
                              <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00011 14.7502C11.7281 14.7502 14.7502 11.7281 14.7502 8.00011C14.7502 4.27213 11.7281 1.25 8.00011 1.25C4.27213 1.25 1.25 4.27213 1.25 8.00011C1.25 11.7281 4.27213 14.7502 8.00011 14.7502ZM11.8866 6.79414C12.153 6.5116 12.1399 6.06659 11.8574 5.80019C11.5748 5.53379 11.1298 5.54687 10.8634 5.82942L7.13211 9.78689L5.13652 7.67036C4.87012 7.38781 4.42511 7.37472 4.14256 7.64113C3.86002 7.90753 3.84693 8.35253 4.11333 8.63508L6.21124 10.8601C6.71082 11.39 7.55339 11.39 8.05298 10.8601L11.8866 6.79414Z" fill="#D71921" />
                              </svg></td>
                            </tr>
                            <tr>
                              <td>Saringan Oli</td>
                              <td></td>
                              <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00011 14.7502C11.7281 14.7502 14.7502 11.7281 14.7502 8.00011C14.7502 4.27213 11.7281 1.25 8.00011 1.25C4.27213 1.25 1.25 4.27213 1.25 8.00011C1.25 11.7281 4.27213 14.7502 8.00011 14.7502ZM11.8866 6.79414C12.153 6.5116 12.1399 6.06659 11.8574 5.80019C11.5748 5.53379 11.1298 5.54687 10.8634 5.82942L7.13211 9.78689L5.13652 7.67036C4.87012 7.38781 4.42511 7.37472 4.14256 7.64113C3.86002 7.90753 3.84693 8.35253 4.11333 8.63508L6.21124 10.8601C6.71082 11.39 7.55339 11.39 8.05298 10.8601L11.8866 6.79414Z" fill="#D71921" />
                              </svg></td>
                              <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00011 14.7502C11.7281 14.7502 14.7502 11.7281 14.7502 8.00011C14.7502 4.27213 11.7281 1.25 8.00011 1.25C4.27213 1.25 1.25 4.27213 1.25 8.00011C1.25 11.7281 4.27213 14.7502 8.00011 14.7502ZM11.8866 6.79414C12.153 6.5116 12.1399 6.06659 11.8574 5.80019C11.5748 5.53379 11.1298 5.54687 10.8634 5.82942L7.13211 9.78689L5.13652 7.67036C4.87012 7.38781 4.42511 7.37472 4.14256 7.64113C3.86002 7.90753 3.84693 8.35253 4.11333 8.63508L6.21124 10.8601C6.71082 11.39 7.55339 11.39 8.05298 10.8601L11.8866 6.79414Z" fill="#D71921" />
                              </svg></td>
                              <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00011 14.7502C11.7281 14.7502 14.7502 11.7281 14.7502 8.00011C14.7502 4.27213 11.7281 1.25 8.00011 1.25C4.27213 1.25 1.25 4.27213 1.25 8.00011C1.25 11.7281 4.27213 14.7502 8.00011 14.7502ZM11.8866 6.79414C12.153 6.5116 12.1399 6.06659 11.8574 5.80019C11.5748 5.53379 11.1298 5.54687 10.8634 5.82942L7.13211 9.78689L5.13652 7.67036C4.87012 7.38781 4.42511 7.37472 4.14256 7.64113C3.86002 7.90753 3.84693 8.35253 4.11333 8.63508L6.21124 10.8601C6.71082 11.39 7.55339 11.39 8.05298 10.8601L11.8866 6.79414Z" fill="#D71921" />
                              </svg></td>
                              <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00011 14.7502C11.7281 14.7502 14.7502 11.7281 14.7502 8.00011C14.7502 4.27213 11.7281 1.25 8.00011 1.25C4.27213 1.25 1.25 4.27213 1.25 8.00011C1.25 11.7281 4.27213 14.7502 8.00011 14.7502ZM11.8866 6.79414C12.153 6.5116 12.1399 6.06659 11.8574 5.80019C11.5748 5.53379 11.1298 5.54687 10.8634 5.82942L7.13211 9.78689L5.13652 7.67036C4.87012 7.38781 4.42511 7.37472 4.14256 7.64113C3.86002 7.90753 3.84693 8.35253 4.11333 8.63508L6.21124 10.8601C6.71082 11.39 7.55339 11.39 8.05298 10.8601L11.8866 6.79414Z" fill="#D71921" />
                              </svg></td>
                              <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00011 14.7502C11.7281 14.7502 14.7502 11.7281 14.7502 8.00011C14.7502 4.27213 11.7281 1.25 8.00011 1.25C4.27213 1.25 1.25 4.27213 1.25 8.00011C1.25 11.7281 4.27213 14.7502 8.00011 14.7502ZM11.8866 6.79414C12.153 6.5116 12.1399 6.06659 11.8574 5.80019C11.5748 5.53379 11.1298 5.54687 10.8634 5.82942L7.13211 9.78689L5.13652 7.67036C4.87012 7.38781 4.42511 7.37472 4.14256 7.64113C3.86002 7.90753 3.84693 8.35253 4.11333 8.63508L6.21124 10.8601C6.71082 11.39 7.55339 11.39 8.05298 10.8601L11.8866 6.79414Z" fill="#D71921" />
                              </svg></td>
                              <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00011 14.7502C11.7281 14.7502 14.7502 11.7281 14.7502 8.00011C14.7502 4.27213 11.7281 1.25 8.00011 1.25C4.27213 1.25 1.25 4.27213 1.25 8.00011C1.25 11.7281 4.27213 14.7502 8.00011 14.7502ZM11.8866 6.79414C12.153 6.5116 12.1399 6.06659 11.8574 5.80019C11.5748 5.53379 11.1298 5.54687 10.8634 5.82942L7.13211 9.78689L5.13652 7.67036C4.87012 7.38781 4.42511 7.37472 4.14256 7.64113C3.86002 7.90753 3.84693 8.35253 4.11333 8.63508L6.21124 10.8601C6.71082 11.39 7.55339 11.39 8.05298 10.8601L11.8866 6.79414Z" fill="#D71921" />
                              </svg></td>
                            </tr>
                            <tr>
                              <td>Gasket Oli Mesin</td>
                              <td></td>
                              <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00011 14.7502C11.7281 14.7502 14.7502 11.7281 14.7502 8.00011C14.7502 4.27213 11.7281 1.25 8.00011 1.25C4.27213 1.25 1.25 4.27213 1.25 8.00011C1.25 11.7281 4.27213 14.7502 8.00011 14.7502ZM11.8866 6.79414C12.153 6.5116 12.1399 6.06659 11.8574 5.80019C11.5748 5.53379 11.1298 5.54687 10.8634 5.82942L7.13211 9.78689L5.13652 7.67036C4.87012 7.38781 4.42511 7.37472 4.14256 7.64113C3.86002 7.90753 3.84693 8.35253 4.11333 8.63508L6.21124 10.8601C6.71082 11.39 7.55339 11.39 8.05298 10.8601L11.8866 6.79414Z" fill="#D71921" />
                              </svg></td>
                              <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00011 14.7502C11.7281 14.7502 14.7502 11.7281 14.7502 8.00011C14.7502 4.27213 11.7281 1.25 8.00011 1.25C4.27213 1.25 1.25 4.27213 1.25 8.00011C1.25 11.7281 4.27213 14.7502 8.00011 14.7502ZM11.8866 6.79414C12.153 6.5116 12.1399 6.06659 11.8574 5.80019C11.5748 5.53379 11.1298 5.54687 10.8634 5.82942L7.13211 9.78689L5.13652 7.67036C4.87012 7.38781 4.42511 7.37472 4.14256 7.64113C3.86002 7.90753 3.84693 8.35253 4.11333 8.63508L6.21124 10.8601C6.71082 11.39 7.55339 11.39 8.05298 10.8601L11.8866 6.79414Z" fill="#D71921" />
                              </svg></td>
                              <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00011 14.7502C11.7281 14.7502 14.7502 11.7281 14.7502 8.00011C14.7502 4.27213 11.7281 1.25 8.00011 1.25C4.27213 1.25 1.25 4.27213 1.25 8.00011C1.25 11.7281 4.27213 14.7502 8.00011 14.7502ZM11.8866 6.79414C12.153 6.5116 12.1399 6.06659 11.8574 5.80019C11.5748 5.53379 11.1298 5.54687 10.8634 5.82942L7.13211 9.78689L5.13652 7.67036C4.87012 7.38781 4.42511 7.37472 4.14256 7.64113C3.86002 7.90753 3.84693 8.35253 4.11333 8.63508L6.21124 10.8601C6.71082 11.39 7.55339 11.39 8.05298 10.8601L11.8866 6.79414Z" fill="#D71921" />
                              </svg></td>
                              <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00011 14.7502C11.7281 14.7502 14.7502 11.7281 14.7502 8.00011C14.7502 4.27213 11.7281 1.25 8.00011 1.25C4.27213 1.25 1.25 4.27213 1.25 8.00011C1.25 11.7281 4.27213 14.7502 8.00011 14.7502ZM11.8866 6.79414C12.153 6.5116 12.1399 6.06659 11.8574 5.80019C11.5748 5.53379 11.1298 5.54687 10.8634 5.82942L7.13211 9.78689L5.13652 7.67036C4.87012 7.38781 4.42511 7.37472 4.14256 7.64113C3.86002 7.90753 3.84693 8.35253 4.11333 8.63508L6.21124 10.8601C6.71082 11.39 7.55339 11.39 8.05298 10.8601L11.8866 6.79414Z" fill="#D71921" />
                              </svg></td>
                              <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00011 14.7502C11.7281 14.7502 14.7502 11.7281 14.7502 8.00011C14.7502 4.27213 11.7281 1.25 8.00011 1.25C4.27213 1.25 1.25 4.27213 1.25 8.00011C1.25 11.7281 4.27213 14.7502 8.00011 14.7502ZM11.8866 6.79414C12.153 6.5116 12.1399 6.06659 11.8574 5.80019C11.5748 5.53379 11.1298 5.54687 10.8634 5.82942L7.13211 9.78689L5.13652 7.67036C4.87012 7.38781 4.42511 7.37472 4.14256 7.64113C3.86002 7.90753 3.84693 8.35253 4.11333 8.63508L6.21124 10.8601C6.71082 11.39 7.55339 11.39 8.05298 10.8601L11.8866 6.79414Z" fill="#D71921" />
                              </svg></td>
                              <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00011 14.7502C11.7281 14.7502 14.7502 11.7281 14.7502 8.00011C14.7502 4.27213 11.7281 1.25 8.00011 1.25C4.27213 1.25 1.25 4.27213 1.25 8.00011C1.25 11.7281 4.27213 14.7502 8.00011 14.7502ZM11.8866 6.79414C12.153 6.5116 12.1399 6.06659 11.8574 5.80019C11.5748 5.53379 11.1298 5.54687 10.8634 5.82942L7.13211 9.78689L5.13652 7.67036C4.87012 7.38781 4.42511 7.37472 4.14256 7.64113C3.86002 7.90753 3.84693 8.35253 4.11333 8.63508L6.21124 10.8601C6.71082 11.39 7.55339 11.39 8.05298 10.8601L11.8866 6.79414Z" fill="#D71921" />
                              </svg></td>
                            </tr>
                            <tr>
                              <td>Saringan Udara</td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>

                              <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00011 14.7502C11.7281 14.7502 14.7502 11.7281 14.7502 8.00011C14.7502 4.27213 11.7281 1.25 8.00011 1.25C4.27213 1.25 1.25 4.27213 1.25 8.00011C1.25 11.7281 4.27213 14.7502 8.00011 14.7502ZM11.8866 6.79414C12.153 6.5116 12.1399 6.06659 11.8574 5.80019C11.5748 5.53379 11.1298 5.54687 10.8634 5.82942L7.13211 9.78689L5.13652 7.67036C4.87012 7.38781 4.42511 7.37472 4.14256 7.64113C3.86002 7.90753 3.84693 8.35253 4.11333 8.63508L6.21124 10.8601C6.71082 11.39 7.55339 11.39 8.05298 10.8601L11.8866 6.79414Z" fill="#D71921" />
                              </svg></td>
                              <td></td>
                              <td></td>

                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item back_color_set">
                    <h2 class="accordion-header">
                      <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseJa"
                        aria-expanded="false"
                        aria-controls="collapseJa"
                      >
                        <b className="custom_add_b_fonts_faqs text-start" >
                          Apakah model LCGC tidak berlaku bebas biaya suku cadang?
                        </b>
                      </button>
                    </h2>
                    <div
                      id="collapseJa"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p class="iner_contect text-start mt-4">
                          Betul, saat ini hanya berlaku bebas biaya jasa sampai servis ke-7 (Maks. 3 tahun / 60.000 km) & reward Extended Warranty 1 tahun / 20.000 km jika pelanggan servis berkala tepat waktu. Jika ada perubahan program akan diinformasikan ke pelanggan.
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
                        data-bs-target="#collapseKa"
                        aria-expanded="false"
                        aria-controls="collapseKa"
                      >
                        <b className="custom_add_b_fonts_faqs text-start" >
                          Dimana saja program ini dilaksanakan?
                        </b>
                      </button>
                    </h2>
                    <div
                      id="collapseKa"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p class="iner_contect text-start mt-4">
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
                        id="accordion-button"
                        class="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseSix"
                        aria-expanded="true"
                        aria-controls="collapseSix"
                      >
                        <b className="custom_add_b_fonts_faqs text-start" >Bengkel BP Toyota menerima perbaikan apa saja?</b>
                      </button>
                    </h2>
                    <div
                      id="collapseSix"
                      class="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p class="iner_contect mt-4 text-start">
                          Bengkel BP Toyota menerima perbaikan unit. Toyota yang mengalami kerusakan pada bodi dan cat. Perbaikan yang dilakukan bertujuan untuk mengembalikan fungsi dan tampilan unit seperti sebelum terjadi keerusakan.
                          <br />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade px-3 px-lg-0"
            id="faq_tab_3"
            role="tabpanel"
            aria-labelledby="faq_tab_3-tab"
          >
            <div className="container px-lg-5">
              <div className="faq">
                <div class="accordions px-lg-5" id="accordionExample">
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
                        <b className="custom_add_b_fonts_faqs text-start" >Bagaimana jika jarak ke bengkel BP Toyota sangat jauh?</b>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p class="iner_contect text-start mt-4">
                          Jika lokasi Anda jauh dengan bengkel BP Toyota, Anda dapat menghubungi outlet terdekat. Beberapa outlet Toyota yang tidak memiliki bengkel BP tetap dapat memberikan pelayanan penerimaan dan penyerahan perbaikan bodi dan cat.
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
                        <b className="text-start  custom_add_b_fonts_faqs">
                          Apakah semua jenis asuransi dapat melakukan perbaikan di bengkel BP Toyota?
                        </b>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body text-start ">
                        <ol className="mt-4">
                          <li>Comprehensive/All Risk: Menjamin risiko karena kerugian sebagian (partial loss) dan keseluruhan (total loss)</li>
                          <li>Total Loss Only: Menjamin risiko karena kerugian keseluruhan (total loss)</li>
                          <li> Jenis asuransi yang dapat melakukan perbaikan di bengkel BP Toyota adalah Comprehensive/All Risk.</li>
                        </ol>

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
                        <b className="custom_add_b_fonts_faqs text-start" >
                          Berapa lama waktu perbaikan di bengkel BP Toyota?
                        </b>
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p class="iner_contect text-start mt-4">
                          Tergantung tingkat kerusakan dan perbaikan yang dikerjakan. Petugas penerimaan di bengkel BP Toyota akan mengestimasi lama waktu perbaikan dengan akurat.
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
                        <b className="text-start  custom_add_b_fonts_faqs">
                          Apakah perlu membawa Surat Perintah Kerja (SPK) dari asuransi sebelum melakukan perbaikan di bengkel BP Toyota?
                        </b>
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p class="iner_contect text-start mt-4">
                          Perbaikan di bengkel BP Toyota dengan pertanggungan asuransi membutuhkan persetujuan SPK. Beberapa outlet Toyota dan asuransi yang bekerja sama, siap membantu Anda untuk memperoleh persetujuan SPK dengan mudah.
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
                        <b className="custom_add_b_fonts_faqs text-start" >Apakah bengkel BP Toyota menyediakan jasa towing?</b>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      <div class="accordion-body">
                        <p class="iner_contect text-start mt-4">
                          Beberapa bengkel BP Toyota dan rekanan asuransi yang bekerja sama menyediakan jasa Towing, jika Anda membutuhkan layanan tersebut.
                        </p>
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
