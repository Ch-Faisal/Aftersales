import React, { useState } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import '../css/t-care.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/free-mode';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, } from 'swiper/modules';
function TCare() {
    const [activeTab, setActiveTab] = useState(0); // Initialize state for active tab
    const [activeCircle, setActiveCircle] = useState(0);
    const handleTabClick = (index) => {
        console.log("Clicked tab index:", index); // Debugging statement
        setActiveTab(index); // Set the active tab
        setActiveCircle(0);
      };
// Attach click event listeners to circles when DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
  const circles = document.querySelectorAll('.circle-tabs a');

  circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
      handleCircleClick(index);
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const circles = document.querySelectorAll('.circle-tabers a');

  circles.forEach((circle, index) => {
    circle.addEventListener('click', () => {
      handleCircleClick(index);
    });
  });
});
// Function to handle circle click
const handleCircleClick = (index) => {
  console.log("Clicked circle index:", index); 

  // Remove 'active' class from all circles
  const circles1 = document.querySelectorAll('.circle-tabers a');
  circles1.forEach((c) => c.classList.remove('active'));

  // Add 'active' class to clicked circle
  circles1[index].classList.add('active');

  // Add 'before-active' class to circles before the clicked one
  for (let i = 0; i < index; i++) {
    circles1[i].classList.add('before-active');
  }
  const circles = document.querySelectorAll('.circle-tabs a');
  circles.forEach((c) => c.classList.remove('active'));

  // Add 'active' class to clicked circle
  circles[index].classList.add('active');

  // Add 'before-active' class to circles before the clicked one
  for (let i = 0; i < index; i++) {
    circles[i].classList.add('before-active');
  }

  // Set the active circle index
  setActiveCircle(index);
};

    // Assuming you have a variable to track the active index like activeIndex


    const handleLanjutClick = () => {
      if (activeCircle < 2) {
          setActiveCircle(activeCircle + 1);
      }
  };
    
    return (
        <div>
            <Header></Header>
            
            <div className='container-fluid px-0 pb-5'>
                <img src="assets/Rectangle 3.png" className='w-100' alt='logo' />
            </div>
            <div className='container-fluid p-0 '>
                <div className='container px-lg-5'>
                    <div className='section-1'>
                            <div className='row'>
                            <div class='col-md-5 d-flex'>
                                <div class='section-image my-auto'>
                                    <img src="assets/logo-tcare 1.png" alt='logo' />
                                </div>
                            </div>
                                <div className='col-md-7'>
                                    <div className='section-content'>
                                        <p className='text-start'>
                                        Toyota sangat peduli terhadap keamanan dan kenyamanan Anda saat berkendara<strong> T-Care</strong> memberikan Anda <strong>Bebas Biaya Jasa Servis Berkala dan Suku Cadang*</strong> sebanyak 7x servis selama 3 tahun.</p>
                                        <p> Dengan rutin servis berkala setiap 6 bulan, Anda juga dapat menikmati reward berupa <strong>Extended Warranty 1 tahun/20.000 km!**</strong></p>
                                        <p> Apakah kendaraan Toyota Anda dalam program T-Care? </p>
                                         <p> Cek nomor rangka kendaraan Anda dan dapatkan sertifikat elektroniknya! </p>
                                          <p> *sesuai ketentuan yang tertera pada buku servis </p> 
                                          <p>*khusus model LCGC hanya berlaku bebas biaya jasa servis berkala*</p>
                                          <p> *total warranty menjadi 4 tahun/120.000 km
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className='container px-lg-5'>
                    <div className='section-2 mt-5'>
                            <div className='row'>
                            <div class='col-md-6 d-flex'>
                                <div class='section-content text-start my-auto'>
                                    <p className='Check'>Check your</p>
                                    <h1>Certificate & Service Record!</h1>
                                    <p>Cek nomor rangka kendaraan Anda dan dapatkan sertifikat elektroniknya serta catatan servisnya untuk program <strong>T-CARE, T-CARE Lite, Extended Warranty,</strong> dan <strong>GBSB</strong>.</p>
                                </div>
                            </div>
                            <div className='col-md-6'>
                        <ul className="nav nav-pills nav-fill">
                            <li className="nav-item">
                                <a className={`tabs sertifikat nav-link py-3 li_text_1 ${activeTab === 0 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTabClick(0)}>Sertifikat Elektronik</a>
                            </li>
                            <li className="nav-item">
                                <a className={`tabs cataten nav-link py-3 li_text_1 ${activeTab === 1 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTabClick(1)}>Catatan Servis</a>
                            </li>
                        </ul>
                     <div className='tabs-section' style={{ display: activeTab === 0 ? 'block' : 'none' }}>
                        <div class="circle-tabs pt-4">
                        <a href="javascript:void(0)" className={`mx-3 ${activeCircle === 0 ? 'active' : ''}`} onClick={() => handleCircleClick(0)}><img src="assets/mdi_car-side.png" alt='' /></a>
                        <a href="javascript:void(0)" className={`mx-4  ${activeCircle === 1 ? 'active' : ''}`} onClick={() => handleCircleClick(1)}><img src="assets/Group (2).png" alt='' /></a>
                        <a href="javascript:void(0)" className={`mx-3  ${activeCircle === 2 ? 'active' : ''}`} onClick={() => handleCircleClick(2)}><img src="assets/Group (3).png" alt='' /></a>
                        </div>
                        {activeCircle === 0 && (
                        <div style={{ display: activeCircle === 0 ? 'block' : 'none' }}>
                        <div className='d-md-flex justify-content-between mt-4 mx-4 text-start mx-md-5'>
                        <p className='tab-bold-p'>Validasi Nomor Rangka</p>
                        <p className='text-danger Langkah_side_text' >Langkah 1 - 3</p>
                        </div>
                        <div className='tab-content mx-4 mx-md-5 text-start'>
                        <p className='tab-light-bold-p'>Nomor Rangka kendaraan Anda dapat ditemukan pada STNK atau BPKB kendaraan Anda</p>
                        </div>
                        <div className="form-group mx-4 mx-md-5 ">
                          <input type="email" className="form-control Masukkan" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Masukkan 17 Digit No. Rangka Kendaraan" />
                        </div>
                        <button className='btn btn-primary Lanjut mt-4 mb-4' onClick={handleLanjutClick}>Lanjut</button>
                        </div>
                          )}
                           {activeCircle === 1 && (
                        <div style={{ display: activeCircle === 1 ? 'block' : 'none' }}>
                        <div className='d-md-flex justify-content-between mt-4 mx-2 mx-md-5'>
                        <p className='tab-bold-p'> Nomor Rangka</p>
                        <p className='text-danger Langkah_side_text'>Langkah 1 - 3</p>
                        </div>
                        <div className='tab-content mx-2 mx-md-5 text-start'>
                            <p className='tab-light-bold-p'>ditemukan pada STNK atau BPKB kendaraan Anda</p>
                        </div>
                        <div className='Masukkan py-1 mx-2 mx-md-5 px-2'>
                            <p className='text-start pt-2'>Masukkan 17 Digit No. Rangka Kendaraan</p>
                        </div>
                        <button className='btn btn-primary Lanjut mt-4 mb-4' onClick={handleLanjutClick}>Lanjut</button>
                        </div>
                           )}
                            {activeCircle === 2 && (
                        <div style={{ display: activeCircle === 2 ? 'block' : 'none' }}>
                        <div className='d-flex justify-content-between mt-4 mx-2 mx-md-5'>
                        <p className='tab-bold-p'> Rangka</p>
                        <p className='text-danger Langkah_side_text'>Langkah 1 - 3</p>
                        </div>
                        <div className='tab-content mx-2 mx-md-5 text-start'>
                            <p className='tab-light-bold-p'>ditemukan pada STNK atau BPKB kendaraan Anda</p>
                        </div>
                        <div className='Masukkan py-1 mx-2 mx-md-5 px-2'>
                            <p className='text-start pt-2'>Masukkan 17 Digit No. Rangka Kendaraan</p>
                        </div>
                        <button className='btn btn-primary Lanjut mt-4 mb-4' onClick={handleLanjutClick}>Lanjut</button>
                        </div>
                            )}
                     </div>
                     <div className='tabs-section' style={{ display: activeTab === 1 ? 'block' : 'none' }}>
                     <div className="circle-tabers pt-4">
                     <a href="javascript:void(0)" className={`mx-3 ${activeCircle === 0 ? 'active' : ''}`} onClick={() => handleCircleClick(0)}><img src="assets/mdi_car-side.png" alt='' /></a>
                        <a href="javascript:void(0)" className={`mx-4  ${activeCircle === 1 ? 'active' : ''}`} onClick={() => handleCircleClick(1)}><img src="assets/Group (2).png" alt='' /></a>
                        <a href="javascript:void(0)" className={`mx-3  ${activeCircle === 2 ? 'active' : ''}`} onClick={() => handleCircleClick(2)}><img src="assets/Group (3).png" alt='' /></a>
                    </div>
                    {activeCircle === 0 && (
                        <div style={{ display: activeCircle === 0 ? 'block' : 'none' }}>
                        <div className='d-md-flex justify-content-between mt-4 mx-4 text-start mx-md-5'>
                        <p className='tab-bold-p'> Test Validasi Nomor Rangka</p>
                        <p className='text-danger Langkah_side_text' >Langkah 1 - 5</p>
                        </div>
                        <div className='tab-content mx-4 mx-md-5 text-start'>
                        <p className='tab-light-bold-p'>Nomor itemukan pada STNK atau BPKB kendaraan Anda</p>
                        </div>
                        <div className="form-group mx-5">
                          <input type="email" className="form-control Masukkan" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Digit No. Rangka Kendaraan" />
                        </div>
                        <button className='btn btn-primary Lanjut mt-4 mb-4' onClick={handleLanjutClick}>Lanjut</button>
                        </div>
                          )}
                           {activeCircle === 1 && (
                        <div style={{ display: activeCircle === 1 ? 'block' : 'none' }}>
                        <div className='d-md-flex justify-content-between mt-4 mx-2 mx-md-5'>
                        <p className='tab-bold-p'> Rangka</p>
                        <p className='text-danger Langkah_side_text'>Langkah 1 - 3</p>
                        </div>
                        <div className='tab-content mx-2 mx-md-5 text-start'>
                            <p className='tab-light-bold-p'> STNK atau BPKB kendaraan Anda</p>
                        </div>
                        <div className='Masukkan py-1 mx-2 mx-md-5 px-2'>
                            <p className='text-start pt-2'>loremm Masukkan 17 Digit No. Rangka Kendaraan</p>
                        </div>
                        <button className='btn btn-primary Lanjut mb-4 mt-4' onClick={handleLanjutClick}>Lanjut</button>
                        </div>
                           )}
                            {activeCircle === 2 && (
                        <div style={{ display: activeCircle === 2 ? 'block' : 'none' }}>
                        <div className='d-flex justify-content-between mt-4 mx-2 mx-md-5'>
                        <p className='tab-bold-p'> Rangka</p>
                        <p className='text-danger Langkah_side_text'>Langkah 1 - 3</p>
                        </div>
                        <div className='tab-content mx-2 mx-md-5 text-start'>
                            <p className='tab-light-bold-p'>STNK atau BPKB kendaraan Anda</p>
                        </div>
                        <div className='Masukkan py-1 mx-2 mx-md-5 px-2'>
                            <p className='text-start pt-2'>Masukk Digit No. Rangka Kendaraan</p>
                        </div>
                        <button className='btn btn-primary Lanjut mt-4 mb-4' onClick={handleLanjutClick}>Lanjut</button>
                        </div>
                            )}
                     </div>
                    </div>
                            </div>
                        </div>
                </div>
                <div className='container px-lg-5 mt-5'>
                  <div className='row mt-5'>
                  <Swiper
        slidesPerView={3}
      breakpoints={{
        280: {
          slidesPerView: 1,
        },
        // When window width is >= 768px
        768: {
          slidesPerView: 2,
        },
        // When window width is >= 992px
        992: {
          slidesPerView: 2,
        },
      }}
        spaceBetween={30}
        navigation={true} 
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div>
                        <ul className="nav nav-pills nav-fill">
                            <li className="nav-item">
                                <a className={`tabs sertifikat nav-link py-3 active li_text_1`} href="javascript:void(0)" onClick={() => handleTabClick(0)}>Sertifikat Elektronik</a>
                            </li>
                            <li className="nav-item">
                                <a className={`tabs cataten nav-link py-3 li_text_1`} href="javascript:void(0)">Catatan Servis</a>
                            </li>
                        </ul>
                     <div className='tabs-section'>
                        <div class="circle-tab pt-4">
                        <a href="javascript:void(0)" className={`mx-3 active`}><img src="assets/mdi_car-side.png" alt='' /></a>
                        <a href="javascript:void(0)" className={`mx-4`}><img src="assets/Group (2).png" alt='' /></a>
                        <a href="javascript:void(0)" className={`mx-3`}><img src="assets/Group (3).png" alt='' /></a>
                        </div>
                        <div>
                        <div className='d-md-flex justify-content-between mt-4 mx-4 text-start mx-md-5'>
                        <p className='tab-bold-p'>Validasi Nomor Rangka</p>
                        <p className='text-danger Langkah_side_text' >Langkah 1 - 3</p>
                        </div>
                        <div className='tab-content mx-4 mx-md-5 text-start'>
                        <p className='tab-light-bold-p'>Nomor Rangka kendaraan Anda dapat ditemukan pada STNK atau BPKB kendaraan Anda</p>
                        </div>
                        <div className="form-group mx-5">
                          <input type="email" className="form-control Masukkan" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Masukkan 17 Digit No. Rangka Kendaraan" />
                        </div>
                        <button className='btn btn-primary Lanjut mt-4 mb-4' onClick={handleLanjutClick}>Lanjut</button>
                        </div>
                     </div>
                    </div>
          </SwiperSlide>
          <SwiperSlide>
          <div>
                        <ul className="nav nav-pills nav-fill">
                            <li className="nav-item">
                                <a className={`tabs sertifikat nav-link py-3 active li_text_1`} href="javascript:void(0)" onClick={() => handleTabClick(0)}>Sertifikat Elektronik</a>
                            </li>
                            <li className="nav-item">
                                <a className={`tabs cataten nav-link py-3 li_text_1 `} href="javascript:void(0)">Catatan Servis</a>
                            </li>
                        </ul>
                     <div className='tabs-section'>
                        <div class="circle-tab pt-4">
                        <a href="javascript:void(0)" className={`mx-3 active`}><img src="assets/mdi_car-side.png" alt='' /></a>
                        <a href="javascript:void(0)" className={`mx-4 active`}><img src="assets/Group (2).png" alt='' /></a>
                        <a href="javascript:void(0)" className={`mx-3`}><img src="assets/Group (3).png" alt='' /></a>
                        </div>
                        <div>
                        <div className='d-md-flex justify-content-between mt-4 mx-4 text-start mx-md-5'>
                        <p className='tab-bold-p'>Validasi Nomor Rangka</p>
                        <p className='text-danger Langkah_side_text' >Langkah 2 - 3</p>
                        </div>
                        <div>
                          <img src='assets/T-Care-1.png' className='img-fluid'/>
                          <p className='tab-bold-p'>MROBB3CD4P5812581</p>
                          </div>
                          <div className='text-start mx-4 mx-md-5'>
                            <p className='tab-bold-p'>Hai!<br/>Bapak/Ibu Iky.</p>
                            <p className='tab-bold-p'>Mobil Anda Sudah Terdaftar di Program T-Care!</p>
                            <p className='tab-bold-p'>HILUX 2.4V DOUBLE CABIN 4X4 A/T(GUN125R-DDTHXD)<span className='tab-light-bold-p'> dengan warna kendaraan</span> ATTITUDE BLACK METALIC</p>
                            <p style={{color:'#D71921'}} className='tab-bold-p'>Ingin ubah data diri anda?</p>
                          </div>
                        <div className='mb-4'>
                        <button className='btn btn-primary lihat_Diri mt-4' onClick={handleLanjutClick}>Lihat Data Diri</button>
                        <button className='btn btn-primary Lanjut mt-4 ms-2' onClick={handleLanjutClick}>Lanjut</button>
                        </div>
                        </div>
                     </div>
                    </div>
          </SwiperSlide>
          <SwiperSlide>
          <div>
                        <ul className="nav nav-pills nav-fill">
                            <li className="nav-item">
                                <a className={`tabs sertifikat nav-link py-3 active li_text_1`} href="javascript:void(0)" onClick={() => handleTabClick(0)}>Sertifikat Elektronik</a>
                            </li>
                            <li className="nav-item">
                                <a className={`tabs cataten nav-link py-3 li_text_1`} href="javascript:void(0)">Catatan Servis</a>
                            </li>
                        </ul>
                     <div className='tabs-section'>
                        <div class="circle-tab pt-4">
                        <a href="javascript:void(0)" className={`mx-3 active`}><img src="assets/mdi_car-side.png" alt='' /></a>
                        <a href="javascript:void(0)" className={`mx-4 active`}><img src="assets/Group (2).png" alt='' /></a>
                        <a href="javascript:void(0)" className={`mx-3 active`}><img src="assets/Group (3).png" alt='' /></a>
                        </div>
                        <div>
                        <div className='d-md-flex justify-content-between mt-4 mx-4 text-start mx-md-5'>
                        <p></p>
                        <p className='text-danger Langkah_side_text' >Langkah 3 - 3</p>
                        </div>
                        <div>
                        <p className='tab-bold-p'>Terima Kasih<br/>Bapak/Ibu Iky</p>
                          </div>
                          <div className='text-start mx-4 mx-md-5'>
                            <p className='tab-light-bold-p'>Untuk mendapatkan sertifikat <span className='tab-bold-p'>“T-Care”</span>, silakan lakukan download melalui:</p>
                          </div>
                          <div className='d-flex justify-content-center custom_size_of_font buttons_custom_gap mx-5'>
                            <div className='d-flex flex-column'>
                            <button className='download_pdf_buttons'><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.8825 32.5445L35.0865 22.3404L32.2294 19.3812L26.9233 24.6873V8.05469H22.8416L22.8416 24.6873L17.5355 19.3812L14.6784 22.3404L24.8825 32.5445ZM37.1274 40.7077C38.2498 40.7077 39.2103 40.3084 40.009 39.5098C40.8076 38.7111 41.2076 37.7499 41.209 36.6261V30.5037H37.1274V36.6261H12.6376V30.5037H8.55592V36.6261C8.55592 37.7486 8.95524 38.7098 9.75388 39.5098C10.5525 40.3098 11.5137 40.7091 12.6376 40.7077H37.1274Z" fill="white"/>
</svg></button>
<p className='mt-2 tab-bold-p' style={{color: '#DF1D1D' }}>Download PDF</p>
</div>
<div className='d-flex flex-column'>
                            <button className='download_pdf_buttons'><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M37.9437 36.8978C38.8416 36.8978 39.6101 36.5784 40.249 35.9395C40.8879 35.3006 41.2079 34.5316 41.209 33.6325V14.0407C41.209 13.1427 40.889 12.3743 40.249 11.7354C39.609 11.0965 38.8405 10.7765 37.9437 10.7754L11.8212 10.7754C10.9233 10.7754 10.1543 11.0954 9.51429 11.7354C8.87429 12.3754 8.55484 13.1438 8.55593 14.0407V33.6325C8.55593 34.5305 8.87538 35.2995 9.51429 35.9395C10.1532 36.5795 10.9222 36.8989 11.8212 36.8978H37.9437ZM24.8825 25.4693L37.9437 17.306V33.6325H11.8212L11.8212 17.306L24.8825 25.4693ZM24.8825 22.204L11.8212 14.0407L37.9437 14.0407L24.8825 22.204ZM37.9437 17.306V14.0407V33.6325V17.306Z" fill="white"/>
</svg> </button>
<p className='mt-2 tab-bold-p' style={{color: '#DF1D1D' }}>Email</p>
</div>
<div className='d-flex flex-column'>
                            <button className='download_pdf_buttons'><svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3518 17.5773V12.6794L31.4131 12.6794V17.5773H34.6784V9.41406L15.0865 9.41406V17.5773H18.3518ZM15.0865 24.9243C14.624 24.9243 14.2359 24.7675 13.9225 24.4541C13.609 24.1406 13.4528 23.7531 13.4539 23.2916C13.4539 22.829 13.6106 22.4415 13.9241 22.1292C14.2376 21.8168 14.625 21.66 15.0865 21.659C15.5491 21.659 15.9366 21.8157 16.249 22.1292C16.5614 22.4426 16.7181 22.8301 16.7192 23.2916C16.7192 23.7542 16.5625 24.1422 16.249 24.4557C15.9355 24.7692 15.548 24.9254 15.0865 24.9243ZM18.3518 35.5365V29.0059L31.4131 29.0059L31.4131 35.5365H18.3518ZM15.0865 38.8018H34.6784V32.2712H41.209V22.4753C41.209 21.0875 40.7328 19.9245 39.7804 18.9863C38.828 18.0481 37.6716 17.5784 36.311 17.5773L13.4539 17.5773C12.0661 17.5773 10.9026 18.047 9.96328 18.9863C9.02396 19.9256 8.55484 21.0886 8.55593 22.4753V32.2712H15.0865V38.8018ZM11.8212 29.0059L11.8212 22.4753C11.8212 22.0127 11.978 21.6252 12.2914 21.3128C12.6049 21.0005 12.9924 20.8437 13.4539 20.8426L36.311 20.8426C36.7736 20.8426 37.1611 20.9994 37.4735 21.3128C37.7859 21.6263 37.9426 22.0138 37.9437 22.4753V29.0059H34.6784V25.7406L15.0865 25.7406V29.0059H11.8212Z" fill="white"/>
</svg> </button>
<p className='mt-2 tab-bold-p' style={{color: '#DF1D1D' }}>Print</p>
</div>
                          </div>
                        <div className='mb-4'>
                        <button className='btn btn-primary lihat_Diri_1 mt-4' onClick={handleLanjutClick}><img src='assets/Left.png' className='pe-2'/>Kembali ke Halaman Awal</button>
                        </div>
                        </div>
                     </div>
                    </div>
          </SwiperSlide>
          <SwiperSlide>
          <div>
                        <ul className="nav nav-pills nav-fill">
                            <li className="nav-item">
                                <a className={`tabs sertifikat nav-link py-3 active li_text_1`} href="javascript:void(0)" onClick={() => handleTabClick(0)}>Sertifikat Elektronik</a>
                            </li>
                            <li className="nav-item">
                                <a className={`tabs cataten nav-link py-3 li_text_1 `} href="javascript:void(0)">Catatan Servis</a>
                            </li>
                        </ul>
                     <div className='tabs-section'>
                        <div class="circle-tab pt-4">
                        <a href="javascript:void(0)" className={`mx-3 active`}><img src="assets/mdi_car-side.png" alt='' /></a>
                        <a href="javascript:void(0)" className={`mx-4 active`}><img src="assets/Group (2).png" alt='' /></a>
                        <a href="javascript:void(0)" className={`mx-3`}><img src="assets/Group (3).png" alt='' /></a>
                        </div>
                        <div>
                        <div className='d-md-flex justify-content-between mt-4 mx-4 text-start mx-md-5'>
                        <p className='tab-bold-p'>Validasi Nomor Rangka</p>
                        <p className='text-danger Langkah_side_text' >Langkah 2 - 3</p>
                        </div>
                        <div>
                          <img src='assets/T-Care-1.png' className='img-fluid'/>
                          <p className='tab-bold-p'>MROBB3CD4P5812581</p>
                          </div>
                          <div className='text-start mx-4 mx-md-5'>
                            <p className='tab-bold-p'>Selamat! Mobil Anda Terdaftar!</p>
                            <p className='tab-bold-p'>INNOVA 10R-BRXMBD 2.0 V HV CVT<span className='tab-light-bold-p'> dengan warna kendaraan</span> ATTITUDE BLACK</p>
                            <p style={{color:'#D71921'}} className='tab-bold-p'>Silakan tekan lanjut untuk mendapatkan sertifikat elektronik</p>
                          </div>
                        <div className='mb-4'>
                        <button className='btn btn-primary Lanjut mt-4 ms-2' onClick={handleLanjutClick}>Lanjut</button>
                        </div>
                        </div>
                     </div>
                    </div>
          </SwiperSlide>
          </Swiper>
                    </div>
                </div>
                <div className='container px-md-5 mt-5'>
                <img src="assets/video layout.png" className='w-100' />
                </div>
                <div className='container mt-5'>
                    <div className='row align-items-center'>
                        <div className='col-12 col-md-5'>
                            <img src="assets/twocars.png" className='w-100' />
                        </div>
                        <div className='col-12 col-md-7 text-start'>
                            <h1 className='d-none d-lg-block'>Extended Warranty</h1>
                            <b className='d-none d-lg-block'>12 bulan (1 tahun) / 20.000 km</b>
                            <p className='text-center text-md-start'>
                            Berlaku untuk pelanggan yang melakukan servis ke-1 maksimum 1 bulan dari bulan penyerahan kendaraan dan selanjutnya servis rutin pada servis ke-2 hingga ke-7 setiap maksimum 6 bulan sekali.                            </p>
                        </div>
                    </div>

                </div>
                <div className="container mt-5">
                      <div className="row align-items-center">
                        <div className="col-6 col-md-7 text-start">
                            <p className='text-danger'>Toyota SERVICE</p>
                          <h1>
                          Manfaatkan T-Care dengan program Express Maintenance
                          </h1>
                          <button type="button" class="btn btn-outline-dark express w-md-50 mt-4">Telurusi Express Maintenance</button>
                        </div>
                        <div className="col-6 col-md-5">
                          <img src="assets/map view.png" className="w-100" />
                        </div>
                      </div>
                    </div>
                    <div className="container p-lg-5 mt-5 mt-md-3">
                      <h1>Frequently Asked Question</h1>
                      <div className='faq'>
                      <div class="accordions mt-5" id="accordionExample">
                        <div class="accordion-item back_color_set mb-2">
                          <h2 class="accordion-header">
                          <hr/>
                            <button
                              class="accordion-button"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#collapseSix"
                              aria-expanded="true"
                              aria-controls="collapseSix"
                            >
                              <b>
                              Apakah Program T-CARE itu?
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
                              Benefit apa yang didapat pada program ini?
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
                              Apa perbedaan program T-CARE dari Program Gratis Biaya Servis Berkala?
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
                              Bagaimana cara saya mengetahui ketepatan waktu servis ke-1 sampai ke-7?
                              </b>
                            </button>
                          </h2>
                        </div>
                      </div>
                      </div>
                    </div>
                    <div className='container mt-4 mb-5'>
                        <h1>Informasi Program Gratis Biaya Servis Berkala (GBSB)</h1>
                        <p> silahkan download disini</p>
                        <button type="button" class="btn btn-outline-dark w-25">Download</button>
                    </div>
                    <div className='container mt-5 mb-5'>
                        <div className='logos d-flex justify-content-center mt-5 mb-4'>
                            <div className='mx-2'>
                                <img src="assets/quality-service.png" alt="t-care-img" />
                            </div>
                            <div className='mx-2'>
                                <img src="assets/genuine-parts (1).png" alt="t-care-img" />
                            </div>
                            <div className='mx-2'>
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
