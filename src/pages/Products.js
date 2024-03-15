import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import ReactCardSlider from 'react-card-slider-component';
function Products() {
    const slides = [
        {
          image: "/assets/image.png",
          title: "Oil Filter",
          description: "Oil Filter, didesain khusus dengan harga yang kompetitif namun memenuhi standar Toyota. Tersedia 3 line up untuk model Old Kijang, Avanza, Rush, Agya, dan Calya.",
          descriptionn:"rezad",
          clickEvent: sliderClick
        },
        {
          image: "/assets/image-2.png",
          title: "Air Filter",
          description: "Air Filter, didesain khusus dengan harga yang kompetitif namun memenuhi standar Toyota. Tersedia 6 line up untuk model Old Kijang, Innova, Avanza, Agya dan Calya.",
          clickEvent: sliderClick
        },
        {
            image: "/assets/image-3.png",
            title: "Brake Pad & Brake Shoe",
            description: "Brake pad & brake shoe, didesain khusus dengan harga yang kompetitif namun memenuhi standar Toyota. Tersedia 13 line up untuk model Old Kijang, Innova, Avanza, dan Calya.",
            clickEvent: sliderClick
          },
          
      ];
    
      // Click event handler
      function sliderClick() {
        // Implement your click event logic here
        console.log("Slider card clicked!");
      }
  return (
    <div>
        <Header></Header>
        <div className='container-fluid px-0'>
        <img src="assets/Rectangle.png" className='w-100' alt='logo' />
        </div>
        <div className='container-fluid'>
            <div className='container mt-5'>
                <div className='row'>
                <div className="col-12">
        <h2>Discover Our Product</h2>
        <p>Layanan Servis berkualitas prima, <span className='inner-text'>agar performa Toyota Anda
selalu optimal</span></p>
      </div>
                </div>
                
            </div>
            </div>
        <div className='container-fluid'>
            <div className='container mt-5'>
            <p className='title'>Toyota PRODUCT - service parts</p>
            <h2>Market Valuable Parts (MVP)Toyota Genuine Parts</h2>
            <p>Toyota Genuine Parts yaitu suku cadang resmi dari Toyota dengan mendegepankan kualitas dan telah dirancang sesuai dengan spesifikasi dan kebutuhan kendaraan kesayangan anda.</p>
            <img src="assets/Rectangle-118.png" className='w-100' alt='logo' />
            </div>
            <div className='container mt-5'>
            <p className='title'>Toyota PRODUCT - service parts</p>
            <h2>Market Valuable Parts (MVP)</h2>
            <p>MVP adalah produk part Toyota yang khusus dikembangkan untuk menawarkan harga yang lebih kompetitif, dengan tetap memenuhi standard kualitas Toyota.</p>
            <ReactCardSlider slides={slides}>
        {slides.map((slide, index) => (
          <div key={index} className="card">
            <img src={slide.image} alt={slide.title} />
            <div>
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
              <a>{slide.descriptionn}</a>
            </div>
          </div>
        ))}
      </ReactCardSlider>
            </div>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default Products;
