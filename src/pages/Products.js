import Header from './layout/Header';
import Footer from './layout/Footer';
import React, { useState, useRef, useEffect } from 'react';
import '../css/products.css';
function Products() {
    const wrapperRef = useRef(null);
  const carouselRef = useRef(null);
  const [firstCardWidth, setFirstCardWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  let startX, startScrollLeft, timeoutId;

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const carousel = carouselRef.current;

    if (carousel) {
      const firstCard = carousel.querySelector(".card");
      if (firstCard) {
        setFirstCardWidth(firstCard.offsetWidth);
      }
    }
  }, []);

  useEffect(() => {
    const handleDragStart = (e) => {
      setIsDragging(true);
      carouselRef.current.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carouselRef.current.scrollLeft;
    };

    const handleDragging = (e) => {
      if (!isDragging) return;
      carouselRef.current.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const handleDragStop = () => {
      setIsDragging(false);
      carouselRef.current.classList.remove("dragging");
    };

    const handleInfiniteScroll = () => {
      const carousel = carouselRef.current;
      const wrapper = wrapperRef.current;

      if (carousel) {
        if (carousel.scrollLeft === 0) {
          carousel.classList.add("no-transition");
          carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
          carousel.classList.remove("no-transition");
        } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
          carousel.classList.add("no-transition");
          carousel.scrollLeft = carousel.offsetWidth;
          carousel.classList.remove("no-transition");
        }
      }

      clearTimeout(timeoutId);
      if (!wrapper.matches(":hover")) {
        autoPlay();
      }
    };

    const autoPlay = () => {
      const carousel = carouselRef.current;
      const wrapper = wrapperRef.current;

      if (window.innerWidth < 800 || !isAutoPlay) return;
      
      timeoutId = setTimeout(() => {
        if (carousel) {
          carousel.scrollLeft += firstCardWidth;
        }
      }, 2500);
    };

    document.addEventListener("mouseup", handleDragStop);
    carouselRef.current.addEventListener("mousedown", handleDragStart);
    carouselRef.current.addEventListener("mousemove", handleDragging);
    carouselRef.current.addEventListener("scroll", handleInfiniteScroll);
    wrapperRef.current.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapperRef.current.addEventListener("mouseleave", autoPlay);

    return () => {
      document.removeEventListener("mouseup", handleDragStop);
      carouselRef.current.removeEventListener("mousedown", handleDragStart);
      carouselRef.current.removeEventListener("mousemove", handleDragging);
      carouselRef.current.removeEventListener("scroll", handleInfiniteScroll);
      wrapperRef.current.removeEventListener("mouseenter", () => clearTimeout(timeoutId));
      wrapperRef.current.removeEventListener("mouseleave", autoPlay);
    };
  }, [firstCardWidth, isAutoPlay]);

  const handleLeftClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= firstCardWidth;
    }
  };

  const handleRightClick = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += firstCardWidth;
    }
  };
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
            <div className='container mt-5 mb-5'>
            <p className='title'>Toyota PRODUCT - service parts</p>
            <h2>Market Valuable Parts (MVP)Toyota Genuine Parts</h2>
            <p>Toyota Genuine Parts yaitu suku cadang resmi dari Toyota dengan mendegepankan kualitas dan telah dirancang sesuai dengan spesifikasi dan kebutuhan kendaraan kesayangan anda.</p>
            <img src="assets/Rectangle-118.png" className='w-100' alt='logo' />
            </div>
            <div className='container mt-5'>
            <p className='title'>Toyota PRODUCT - service parts</p>
            <h2>Market Valuable Parts (MVP)</h2>
            <p>MVP adalah produk part Toyota yang khusus dikembangkan untuk menawarkan harga yang lebih kompetitif, dengan tetap memenuhi standard kualitas Toyota.</p>
            <div className="wrapper" ref={wrapperRef}>
      <i id="left" className="fa-solid fa-angle-left" onClick={handleLeftClick}></i>
      <ul className="carousel" ref={carouselRef}>
        <li className="card">
          <div className="img"><img src="/assets/image.png" alt="img" draggable="false" /></div>
          <div className='text-start'>
          <h3>Oil Filter</h3>
          <p>Oil Filter, didesain khusus dengan harga yang kompetitif namun memenuhi standar Toyota. Tersedia 3 line up untuk model Old Kijang, Avanza, Rush, Agya, dan Calya.</p>
          <div className='mt-5'>
          <a href='#'>Keunggulan</a>
          <img className='ps-2' src='/assets/CROSS.svg'/>
          </div>
          </div>
        </li>
        <li className="card">
          <div className="img"><img src="/assets/image-2.png" alt="img" draggable="false" /></div>
          <div className='text-start'>
          <h3>Air Filter</h3>
          <p>Air Filter, didesain khusus dengan harga yang kompetitif namun memenuhi standar Toyota. Tersedia 6 line up untuk model Old Kijang, Innova, Avanza, Agya dan Calya.</p>
          <div className='mt-5'>
          <a href='#'>Keunggulan</a>
          <img className='ps-2' src='/assets/CROSS.svg'/>
          </div>
          </div>
        </li>
        <li className="card">
          <div className="img"><img src="/assets/image-3.png" alt="img" draggable="false" /></div>
          <div className='text-start'>
          <h3>Brake Pad & Brake Shoe</h3>
          <p>Brake pad & brake shoe, didesain khusus dengan harga yang kompetitif namun memenuhi standar Toyota. Tersedia 13 line up untuk model Old Kijang, Innova, Avanza, dan Calya.</p>
          <div className='mt-5'>
          <a href='#'>Keunggulan</a>
          <img className='ps-2' src='/assets/CROSS.svg'/>
          </div>
          </div>
        </li>
        <li className="card">
          <div className="img"><img src="/assets/image.png" alt="img" draggable="false" /></div>
          <div className='text-start'>
          <h3>Oil Filter</h3>
          <p>Oil Filter, didesain khusus dengan harga yang kompetitif namun memenuhi standar Toyota. Tersedia 3 line up untuk model Old Kijang, Avanza, Rush, Agya, dan Calya.</p>
          <div className='mt-5'>
          <a href='#'>Keunggulan</a>
          <img className='ps-2' src='/assets/CROSS.svg'/>
          </div>
          </div>
        </li>
        <li className="card">
          <div className="img"><img src="/assets/image-3.png" alt="img" draggable="false" /></div>
          <div className='text-start'>
          <h3>Brake Pad & Brake Shoe</h3>
          <p>Brake pad & brake shoe, didesain khusus dengan harga yang kompetitif namun memenuhi standar Toyota. Tersedia 13 line up untuk model Old Kijang, Innova, Avanza, dan Calya.</p>
          <div className='mt-5'>
          <a href='#'>Keunggulan</a>
          <img className='ps-2' src='/assets/CROSS.svg'/>
          </div>
          </div>
        </li>
      </ul>
      <i id="right" className="fa-solid fa-angle-right" onClick={handleRightClick}></i>
            </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
  );
}

export default Products;
