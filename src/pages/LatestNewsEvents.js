import React, { useEffect, useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { initMDB, Tab } from "mdb-ui-kit";
import "../css/news-event.css";
import { useSelector } from 'react-redux';
import { Oval } from 'react-loader-spinner'
import axios from 'axios';
function LatestNewsEvents() {
  const [activeTab, setActiveTab] = useState('ex1-tabs-1'); // Default active tab
  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);
  const token = useSelector(state => state.value);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  useEffect(() => {
    const fetchNewsData = async () => {
      setLoading(true);
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
        const response = await axios.get('https://aftersales-toyota-revamp.thriveagency.id/api/news', config);
        console.log('Response data of news:', response.data.data);
        setNewsData(response.data.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching news data:', error);
      }
    };
    fetchNewsData();
  }, [token]); 

  useEffect(() => {
    initMDB({ Tab });
  }, []);

  return (
    <div>
      <Header />
      <div>
      {loading ? ( // Display loader if loading state is true
       <div className='spinner-overlay'>
<Oval
   height="60"
   width="60"
   radius="9"
   color="black"
   ariaLabel="three-dots-loading"
   secondaryColor="grey" 
   wrapperStyle={{marginTop: '10%', marginBottom: '10%' }}
/>
     </div>
      ) : (
        <div>
          {Object.keys(newsData).length === 0 ? (
        <div className="mt-5 mb-5">
        <p>No content available</p></div>
) : (
  <div className="news-item">
    <div className="section-1 p-0 " id="section-1">
        <div
          id="carouselExample"
          className="carousel slide d-none d-lg-block"
          data-bs-ride="carousel"
        >
<div className="carousel-inner">
  {Object.keys(newsData).map((id, index) => (
    <div key={id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
      <img src={newsData[id].featured_banner} className="d-block img-fluid" alt={`Slide ${index + 1}`} />
    </div>
  ))}
</div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span aria-hidden="true">
              <i className="fas fa-chevron-left"></i>
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span aria-hidden="true">
              <i className="fas fa-chevron-right"></i>
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="d-block d-lg-none">
          <img
            src="assets/showcase.png"
            alt="showcase"
            className="img-fluid w-100 "
          />
        </div>
      </div>
            <div className="container-fluid">
        <div className="container mt-5">
          <h1>Latest News & Events</h1>
          <div className="event-tabs ">
            <div className="d-flex justify-content-center">
              <ul
                className="nav nav-tabs d-flex justify-content-center mb-3"
                id="ex1"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <a
                onClick={() => handleTabClick('ex1-tabs-1')}
                className={`nav-link ${activeTab === 'ex1-tabs-1' ? 'active' : ''}`}
                role="tab"
                aria-selected={activeTab === 'ex1-tabs-1' ? 'true' : 'false'}
                  >
                    All
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                  onClick={() => handleTabClick('ex1-tabs-2')}
                  className={`nav-link ${activeTab === 'ex1-tabs-2' ? 'active' : ''}`}
                  role="tab"
                  aria-selected={activeTab === 'ex1-tabs-2' ? 'true' : 'false'}
                  >
                    Gazoo Racing
                  </a>
                </li>
                <li className="nav-item" role="presentation">
                  <a
                     onClick={() => handleTabClick('ex1-tabs-3')}
                     className={`nav-link ${activeTab === 'ex1-tabs-3' ? 'active' : ''}`}
                     role="tab"
                     aria-selected={activeTab === 'ex1-tabs-3' ? 'true' : 'false'}
                  >
                    Electrified
                  </a>
                </li>
                <li className="nav-item d-none d-md-block" role="presentation">
                  <a
                     onClick={() => handleTabClick('ex1-tabs-4')}
                     className={`nav-link ${activeTab === 'ex1-tabs-4' ? 'active' : ''}`}
                     role="tab"
                     aria-selected={activeTab === 'ex1-tabs-4' ? 'true' : 'false'}
                  >
                    Press Release
                  </a>
                </li>
                <li className="nav-item d-none d-md-block" role="presentation">
                  <a
                     onClick={() => handleTabClick('ex1-tabs-5')}
                     className={`nav-link ${activeTab === 'ex1-tabs-5' ? 'active' : ''}`}
                     role="tab"
                     aria-selected={activeTab === 'ex1-tabs-5' ? 'true' : 'false'}
                  >
                    Event
                  </a>
                </li>
              </ul>
            </div>
            <div className="tab-content" id="ex1-content">
              <div
                className={`tab-pane fade ${activeTab === 'ex1-tabs-1' ? 'show active' : ''}`} id="ex1-tabs-1"
              >
                
                <div className="row mt-5 d-flex justify-content-center">
                {Object.keys(newsData).map((id, index) => (
                  <div className="col-sm-10 col-md-6 col-lg-4 col-12">
                    <div className="card custom_body_boder h-100 mt-4 mt-lg-0 h-100 ">
                      <img
                       src={newsData[id].desktop_banner} 
                        className="  rounded-0"
                        alt="..."
                      />
                              
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div className="tips-event mt-2">
                        <p className="text-start title-color">
                          {newsData[Object.keys(newsData)[id]].category.name}
                          </p>
                          <p className="text-start">{newsData[Object.keys(newsData)[id]].posted_at}</p>
                        </div>
                        <p className="card-title fw-bold text-start mb-4">
                          {newsData[id].title}
                        </p>
                        <button
                          type="button"
                          class="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                        <button
                          type="button"
                          class="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                        >
                          Find Out More{" "}
                          <span className="d-block d-md-none">
                            <i className="fas fa-chevron-right bg-white"></i>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
              
              <div
               className={`tab-pane fade ${activeTab === 'ex1-tabs-2' ? 'show active' : ''}`} id="ex1-tabs-2"
              >
 <div className="row mt-5 d-flex justify-content-center">
                {Object.keys(newsData).map((id, index) => (
                  newsData[id].category.name === 'Aftersales' && (
                    <div className="col-sm-10 col-md-6 col-lg-4 col-12" key={id}>
                        <div className="card custom_body_boder h-100 mt-4 mt-lg-0 h-100 ">
                          <img
                            src={newsData[id].desktop_banner}
                            className="  rounded-0"
                            alt="..."
                          />
                          <div className="card-body d-flex flex-column justify-content-between">
                            <div className="tips-event mt-2">
                              <p className="text-start title-color">{newsData[id].category.name}</p>
                              <p className="text-start">{newsData[id].posted_at}</p>
                            </div>
                            <p className="card-title fw-bold text-start mb-4">
                            {newsData[id].title}
                            </p>
                            <button type="button" className="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center">
                              Find Out More <span className="d-block d-md-none"><i className="fas fa-chevron-right bg-white"></i></span>
                            </button>
                            <button type="button" className="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center">
                              Find Out More <span className="d-block d-md-none"><i className="fas fa-chevron-right bg-white"></i></span>
                            </button>
                          </div>
                        </div>
                    </div>
                    )
                ))}
              </div>
              </div>
              <div
                className={`tab-pane fade ${activeTab === 'ex1-tabs-3' ? 'show active' : ''}`} id="ex1-tabs-3"
              >
                 <div className="row mt-5 d-flex justify-content-center">
                {Object.keys(newsData).map((id, index) => (
                  newsData[id].category.name === 'T-Care' && (
                    <div className="col-sm-10 col-md-6 col-lg-4 col-12" key={id}>
                        <div className="card custom_body_boder h-100 mt-4 mt-lg-0 h-100 ">
                          <img
                            src={newsData[id].desktop_banner}
                            className="  rounded-0"
                            alt="..."
                          />
                          <div className="card-body d-flex flex-column justify-content-between">
                            <div className="tips-event mt-2">
                              <p className="text-start title-color">{newsData[id].category.name}</p>
                              <p className="text-start">{newsData[id].posted_at}</p>
                            </div>
                            <p className="card-title fw-bold text-start mb-4">
                            {newsData[id].title}
                            </p>
                            <button type="button" className="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center">
                              Find Out More <span className="d-block d-md-none"><i className="fas fa-chevron-right bg-white"></i></span>
                            </button>
                            <button type="button" className="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center">
                              Find Out More <span className="d-block d-md-none"><i className="fas fa-chevron-right bg-white"></i></span>
                            </button>
                          </div>
                        </div>
                    </div>
                    )
                ))}
              </div>
              </div>
              <div
                className={`tab-pane fade ${activeTab === 'ex1-tabs-4' ? 'show active' : ''}`} id="ex1-tabs-4"
              >
                <p>No content</p>
              </div>
              <div
                className={`tab-pane fade ${activeTab === 'ex1-tabs-5' ? 'show active' : ''}`} id="ex1-tabs-5"
              >
<p>No content</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-5">
        <div className="d-flex justify-content-center">
          <button
            type="button"
            class="btn  btn-outline-dark px-5 py-2 mt-3 d-block"
          >
            Show More
          </button>
        </div>
      </div>
      </div>
      <div className="container mt-5 mb-5">
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
      </div>
    </div>
    )}
      </div>
      )}
      </div>
      <Footer />
    </div>
  );
}

export default LatestNewsEvents;
