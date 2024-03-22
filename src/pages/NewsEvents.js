import React, { useState,useEffect } from "react";
import Header from './layout/Header';
import Footer from './layout/Footer';
import '../css/news-event.css';
function NewsEvents() {
    // const [newsData, setNewsData] = useState([]);

//   useEffect(() => {
    // Function to fetch news data
    // const fetchNewsData = async () => {
    //   try {
    //     const response = await axios.get('https://aftersales-toyota-revamp.thriveagency.id/api/news');
    //     console.log('Response data:', response.data);
    //     setNewsData(response.data);
    //   } catch (error) {
    //     console.error('Error fetching news data:', error);
    //   }
    // };

//     // Call the fetchNewsData function
//     fetchNewsData();
//   }, []); 
    return (
        <div>
            <Header></Header>
            <div className='container-fluid px-0 pb-5'>
                <img src="assets/newshero.png" className='w-100' alt='logo' />
            </div>
            <div className='container-fluid p-0 mb-5'>
                <div className='container custom-bg-gray p-5 text-start'>
                    <p className='text-danger mb-1'>NEWS, SERVICE BERKALA</p>
                    <p className='mb-3'>18/10/2023</p>
                    <h1 className='custom_heading_weight'>Servis Berkala di Bengkel Resmi Toyota
                        dengan T-CARE dan dapatkan promo menarik!</h1>
                        <p className='m-md-0'>Hi Toyota Friends,</p>
                        <p className='m-md-0'>Sebentar lagi momen akhir tahun akan tiba, mobil yang aman pastinya sangat berdampak pada kenyamanan berkendaran Anda dalam menikmati momen ini bukan?</p>
                        <p className='m-md-0'>Jangan lupa manfaatkan program T-CARE untuk melakukan servis berkala ya,</p>
                        <p className='m-md-0'>Toyota Friends! Program ini membuat Anda tidak perlu mengeluarkan biaya jasa dan suku cadang sebanyak 7x servis selama 3 tahun/60.000 km beserta benefit</p>
                        <p className='m-md-0'>extended warranty 1 tahun/20.000 km jika Anda servis secara rutin. Kali ini, layanan After Sales Toyota juga memberikan promo menarik yaitu diskon potongan</p>
                        <p className='m-md-0'>harga 15% untuk Oli TMO 0W-16 dan Evaporator Cleaner* lho! Promo ini bisa Anda dapatkan di seluruh dealer resmi Toyota selama periode 1 Oktober-31 Desember 2023</p>
                        <p> className='m-0'dan bisa kalian dapatkan saat servis rutin dengan menghubungi dealer langsung, booking lewat mToyota, atau melalui TARRA.</p>
                    <b className='custom-b-weight'>
                        Mobil Aman, Perjalanan Pasti Nyaman!
                    </b>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default NewsEvents;
