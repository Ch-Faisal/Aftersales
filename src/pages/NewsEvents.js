import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';

function NewsEvents() {
    return (
        <div>
            <Header></Header>
            <div className='container-fluid px-0 pb-5'>
                <img src="assets/newshero.png" className='w-100' alt='logo' />
            </div>
            <div className='container-fluid'>
                <div className='container custom-bg-gray p-5 text-start'>
                    <span className='text-danger'>NEWS, SERVICE BERKALA</span> <br />
                    <span>18/10/2023</span>
                    <h1>Servis Berkala di Bengkel Resmi Toyota
                        dengan T-CARE dan dapatkan promo menarik!</h1>
                    <p>
                        Hi Toyota Friends,
                        Sebentar lagi momen akhir tahun akan tiba, mobil yang aman pastinya sangat berdampak pada kenyamanan berkendaran Anda dalam menikmati momen ini bukan?
                        Jangan lupa manfaatkan program T-CARE untuk melakukan servis berkala ya,
                        Toyota Friends! Program ini membuat Anda tidak perlu mengeluarkan biaya jasa dan suku cadang sebanyak 7x servis selama 3 tahun/60.000 km beserta benefit
                        extended warranty 1 tahun/20.000 km jika Anda servis secara rutin. Kali ini, layanan After Sales Toyota juga memberikan promo menarik yaitu diskon potongan
                        harga 15% untuk Oli TMO 0W-16 dan Evaporator Cleaner* lho! Promo ini bisa Anda dapatkan di seluruh dealer resmi Toyota selama periode 1 Oktober-31 Desember 2023
                        dan bisa kalian dapatkan saat servis rutin dengan menghubungi dealer langsung, booking lewat mToyota, atau melalui TARRA.
                    </p>
                    <b>
                        Mobil Aman, Perjalanan Pasti Nyaman!
                    </b>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default NewsEvents;
