import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import "../css/warranty.css";
function Warranty() {
    return (
        <div>
            <Header></Header>
            <div className='container-fluid px-0 pb-5'>
                <img src="assets/Rectangle-3.png" className='w-100' alt='logo' />
            </div>
            <div className='container-fluid p-0'>
                <div className='container mt-5'>
                    <div className='d-block mx-auto d-lg-none mb-3'>
                        <h1>Vehicle Warranty</h1>
                        <b>36 bulan (3 tahun) / 100.000 km</b>
                    </div>
                    <div className='row align-items-center'>
                        <div className='col-12 col-md-5'>
                            <img src="assets/twocars.png" className='w-100' />
                        </div>
                        <div className='col-12 col-md-7 text-start'>
                            <h1 className='d-none d-lg-block'>Vehicle Warranty</h1>
                            <b className='d-none d-lg-block'>36 bulan (3 tahun) / 100.000 km</b>
                            <p className='text-center text-md-start custom_text_colors'>
                                Tuntutan warranty akan dikabulkan dengan syarat pemilik kendaraan melakukan servis secara berkesinambungan di <span className='fw-bold'>Bengkel Resmi Toyota</span> mulai servis ke-1 (1 bulan atau 1.000 KM) hingga servis ke-11 (36 Bulan atau 100.000 KM)
                            </p>
                        </div>
                    </div>

                </div>
                <div className='container mt-5'>
                    <div className='row align-items-center custom-bg-gray-dark'>
                        <div className='col-12 col-md-4 custom-bg-gray-dark d-flex justify-content-center align-items-center py-3 py-md-0'>
                            <span className='custom-font-light-one-rem'>Aturan Dasar</span>
                        </div>
                        <div className='col-12 col-md-8 text-start custom-bg-gray p-3 p-md-5'>
                            <ul className='custom-list-style-number custom-font-light-one-rem'>
                                <li>Kebijakan dasar warranty kendaraan baru Toyota berlaku 36 bulan atau 100.000 km, yang mana tercapai terlebih dahulu
                                </li>
                                <li>Tuntutan warranty akan dikabulkan dengan syarat antara lain pemilik pertama dan/atau pemilik berikutnya melaksanakan kewajiban servis berkala secara berkesinambungan di bengkel resmi Toyota, dan menunjukkan bukti-bukti pelaksanaan servis berkala tersebut kepada petugas yang menangani Warranty Toyota.
                                </li>
                                <li>Untuk menjamin kelanjutan sisa masa berlakunya Warranty, pemilik berikutnya berkewajiban untuk melaporkan bukti kepemilikan kendaraan barunya kepada Dealer Toyota</li>
                            </ul>
                        </div>
                    </div>
                    <div className='row align-items-center custom-bg-gray mt-3 mt-md-0'>
                        <div className='col-12 col-md-4 custom-bg-gray d-flex justify-content-center align-items-center px-5 py-3 py-md-0'>
                            <span className='custom-font-light-one-rem'>Hal-hal dan Komponen yang Tidak Ditanggung Warranty</span>
                        </div>
                        <div className='col-12 col-md-8 text-start custom-bg-gray-dark p-3 p-md-5'>
                            <ul className='custom-list-style-number custom-font-light-one-rem'>
                                <li>Biaya perbaikan yang diperlukan sebagai akibat dari modifikasi, kerusakan yang disebabkan oleh pemakaian suku cadang yang bukan suku cadang asli, kecelakaan, pemakaian yang tidak semestinya, ketidakpedulian, keteledoran pemakaian
                                </li>
                                <li>Faktor-faktor yang sulit dikontrol oleh pabrik

                                </li>
                                <li>Kesalahan perawatan atau kesalahan penggunaan bahan bakar, oli pelumas, minyak (fluida)
                                </li>
                                <li>Biaya jasa dari pekerjaan pre-delivery dan servis berkala
                                </li>
                                <li>Bahan-bahan dan komponen servis berkala
                                </li>
                                <li>Bunyi, getaran, berisik, dan perubahan bentuk yang tidak normal
                                </li>
                                <li>Biaya ekstra
                                </li>
                                <li>Mengubah odometer
                                </li>
                                <li>Pemilik kendaraan tidak melaksanakan gratis servis berkala selama periode warranty</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className='container-fluid mt-5'>
                    <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col-12 col-md-6 text-start'>
                                <h1 className='mb-4 text-center text-md-start'>Battery Warranty</h1>
                                <table class="table table-striped table-hover">

                                    <tbody className='text-center'>
                                        <tr>
                                            <td className='fw-light'>Regular</td>
                                            <td className='test'>1 Tahun / 20.000 km*</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-light'>Hybrid</td>
                                            <td className=''>8 Tahun / 160.000 km*</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-light'>Electric</td>
                                            <td className=''>8 Tahun / 160.000 km*</td>
                                        </tr>

                                    </tbody>
                                </table>
                                <p className='custom_text_colors'>
                                    * Mana yang tercapai lebih dahulu. <br />
                                    ** Khusus untuk hybrid battery/aki, warranty berlaku selama 8 tahun dengan 3 tahun pertama sesuai ketentuan manufaktur dan tambahan 5 tahun sesuai ketentuan Toyota Astra Motor.
                                </p>
                            </div>
                            <div className='col-12 col-md-6 mt-3 mt-md-0'>
                                <img src="assets/hidecar.png" className='w-75' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='container mt-5'>
                        <div className='row align-items-center'>
                            <div className='col-12 col-md-5'>
                                <img src="assets/partss.jpeg" className='w-100' />
                            </div>
                            <div className='col-12 col-md-7 text-start mt-3 mt-md-0'>
                                <h1>Parts Warranty</h1>
                                <b>3 Tahun / 100.000 km</b>
                                <p className='custom_text_colors'>
                                    Tuntutan warranty akan dikabulkan dengan syarat pemilik kendaraan melakukan servis secara berkesinambungan di <span className='fw-bold'>Bengkel Resmi Toyota</span> mulai servis ke-1 (1 bulan atau 1.000 KM) hingga servis ke-11 (36 Bulan atau 100.000 KM)
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className='container mt-5'>
                        <div className='row align-items-center custom-bg-gray-dark'>
                            <div className='col-12 col-md-4 custom-bg-gray-dark d-flex justify-content-center align-items-center py-3 py-md-0'>
                                <span className='custom-font-light-one-rem'>Aturan Dasar</span>
                            </div>
                            <div className='col-12 col-md-8 text-start custom-bg-gray p-3 p-md-5'>
                                <ul className='custom-list-style-number custom-font-light-one-rem'>
                                    <li>Kebijakan dasar warranty kendaraan baru Toyota berlaku 36 bulan atau 100.000 km, yang mana tercapai terlebih dahulu
                                    </li>
                                    <li>Tuntutan warranty akan dikabulkan dengan syarat antara lain pemilik pertama dan/atau pemilik berikutnya melaksanakan kewajiban servis berkala secara berkesinambungan di bengkel resmi Toyota, dan menunjukkan bukti-bukti pelaksanaan servis berkala tersebut kepada petugas yang menangani Warranty Toyota.
                                    </li>
                                    <li>Untuk menjamin kelanjutan sisa masa berlakunya Warranty, pemilik berikutnya berkewajiban untuk melaporkan bukti kepemilikan kendaraan barunya kepada Dealer Toyota</li>
                                </ul>
                            </div>
                        </div>
                        <div className='row align-items-center custom-bg-gray mt-3 mt-md-0'>
                            <div className='col-12 col-md-4 custom-bg-gray d-flex justify-content-center align-items-center px-5 py-3 py-md-0'>
                                <span className='custom-font-light-one-rem'>Hal-hal dan Komponen yang Tidak Ditanggung Warranty</span>
                            </div>
                            <div className='col-12 col-md-8 text-start custom-bg-gray-dark p-3 p-md-5'>
                                <ul className='custom-list-style-number custom-font-light-one-rem'>
                                    <li>Biaya perbaikan yang diperlukan sebagai akibat dari modifikasi, kerusakan yang disebabkan oleh pemakaian suku cadang yang bukan suku cadang asli, kecelakaan, pemakaian yang tidak semestinya, ketidakpedulian, keteledoran pemakaian
                                    </li>
                                    <li>Faktor-faktor yang sulit dikontrol oleh pabrik

                                    </li>
                                    <li>Kesalahan perawatan atau kesalahan penggunaan bahan bakar, oli pelumas, minyak (fluida)
                                    </li>
                                    <li>Biaya jasa dari pekerjaan pre-delivery dan servis berkala
                                    </li>
                                    <li>Bahan-bahan dan komponen servis berkala
                                    </li>
                                    <li>Bunyi, getaran, berisik, dan perubahan bentuk yang tidak normal
                                    </li>
                                    <li>Biaya ekstra
                                    </li>
                                    <li>Mengubah odometer
                                    </li>
                                    <li>Pemilik kendaraan tidak melaksanakan gratis servis berkala selama periode warranty</li>
                                </ul>
                            </div>
                        </div>

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
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Warranty;
