import React, { useEffect, useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { initMDB, Tab } from "mdb-ui-kit";
import "../css/news-event.css";
import { useSelector } from 'react-redux';
import { Oval } from 'react-loader-spinner'
import axios from 'axios';
import { NavLink } from "react-router-dom";
function LatestNewsEvents() {
  const [activeTab, setActiveTab] = useState('ex1-tabs-1');
  const [loading, setLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);
  const token = useSelector(state => state.value);
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  const scrollLeft = () => {
    const myTab1 = document.getElementById("ex1");
    myTab1.scrollTo({
      left: myTab1.scrollLeft - 100,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    const myTab = document.getElementById("ex1");
    myTab.scrollTo({
      left: myTab.scrollLeft + 100,
      behavior: "smooth",
    });
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
        const sortedNewsData = response.data.data.sort((a, b) => new Date(b.posted_at) - new Date(a.posted_at));
        setNewsData(sortedNewsData);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchNewsData();
  }, [token]);

  useEffect(() => {
    initMDB({ Tab });
  }, []);

  return (
    <div id="navbar_top">
      <Header />
      <div>
        {loading ? (
          <div className='spinner-overlay'>
            <Oval
              height="60"
              width="60"
              radius="9"
              color="black"
              ariaLabel="three-dots-loading"
              secondaryColor="grey"
              wrapperStyle={{ marginTop: '10%', marginBottom: '10%' }}
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
                    <div className="carousel-inner latest-news-wrapper">
                      <div className="carousel-item active">
                        <img src="assets/news-event-1.jpeg" className=" d-block img-fluid w-100 h-100" />
                      </div>
                      <div className="carousel-item">
                        <img src="assets/news-event-2.jpeg" className="d-block img-fluid w-100 h-100" />
                      </div>
                      {/* {Object.keys(newsData).map((id, index) => (
                        <div key={id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                          <img src={newsData[id].featured_banner} className="d-block img-fluid" alt={`Slide ${index + 1}`} />
                        </div>
                      ))} */}
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
                      <div className="scroll-buttons d-lg-none d-sm-none d-md-none d-flex align-items-center" style={{ position: "relative" }}>
                        <img
                          onClick={scrollRight}
                          className="ms-1 me-1 pe-2  mt-5 pt-2"
                          src="assets/Frameright.svg"
                          alt=""
                          style={{
                            position: "absolute",
                            right: "-25px",
                            marginRight: "10px",
                          }}
                        />
                        <img
                          className="ms-2 me-1 mt-4"
                          onClick={scrollLeft}
                          src="assets/Frameleft.svg"
                          alt=""
                          style={{ position: "absolute", top: "0px", left: "-25px", }}
                        />
                      </div>
                      <div className="custom-nav-tabs_1">
                        <ul
                          className="nav nav-tabs d-flex justify-content-center mb-3 custom-nav-tabs custom-nav-tabss"
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
                              Aftersales
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a
                              onClick={() => handleTabClick('ex1-tabs-3')}
                              className={`nav-link text-nowrap ${activeTab === 'ex1-tabs-3' ? 'active' : ''}`}
                              role="tab"
                              aria-selected={activeTab === 'ex1-tabs-3' ? 'true' : 'false'}
                            >
                              T-CARE
                            </a>
                          </li>
                          <li className="nav-item" role="presentation">
                            <a
                              onClick={() => handleTabClick('ex1-tabs-4')}
                              className={`nav-link text-nowrap ${activeTab === 'ex1-tabs-4' ? 'active' : ''}`}
                              role="tab"
                              aria-selected={activeTab === 'ex1-tabs-4' ? 'true' : 'false'}
                            >
                              News and Event
                            </a>
                          </li>
                          {/* <li className="nav-item d-none d-md-block" role="presentation">
                  <a
                     onClick={() => handleTabClick('ex1-tabs-5')}
                     className={`nav-link ${activeTab === 'ex1-tabs-5' ? 'active' : ''}`}
                     role="tab"
                     aria-selected={activeTab === 'ex1-tabs-5' ? 'true' : 'false'}
                  >
                    Event
                  </a>
                </li> */}
                        </ul>
                      </div>
                      <div className="tab-content" id="ex1-content">
                        <div
                          className={`tab-pane fade ${activeTab === 'ex1-tabs-1' ? 'show active' : ''}`} id="ex1-tabs-1"
                        >

                          <div className="row d-flex justify-content-center">
                            {Object.keys(newsData).map((id, index) => (
                              <div className="col-sm-10 col-md-6 col-lg-4 col-12 mt-3" style={{ marginTop: '15px', marginBottom: '20px' }}>
                                <div className="card custom_body_boder h-100 mt-4 mt-lg-0 h-100 ">
                                  <img
                                    src={newsData[id].desktop_banner}
                                    className="fixed_height  rounded-0"
                                    alt="..."
                                  />

                                  <div className="card-body d-flex flex-column justify-content-between">
                                    <div className="tips-event mt-2">
                                      <p className="text-start title-color">
                                        {newsData[Object.keys(newsData)[id]].category.name}
                                      </p>
                                      <p className="text-start">{newsData[Object.keys(newsData)[id]].posted_at}</p>
                                    </div>
                                    <p className="card-title fw-bold text-start mb-lg-4 mb-md-4 mb-0">
                                      {newsData[id].title}
                                    </p>
                                    <NavLink
                                      to={{
                                        pathname: `/news-information/read/${newsData[id].slug}`,
                                      }}
                                    >
                                      <button
                                        type="button"
                                        class="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                                      >
                                        Find Out More{" "}
                                        <span className="d-block d-md-none">
                                          <i className="fas fa-chevron-right bg-white"></i>
                                        </span>
                                      </button>
                                    </NavLink>
                                    <NavLink
                                      to={{
                                        pathname: `/news-information/read/${newsData[id].slug}`,
                                      }}
                                    >
                                      <button
                                        type="button"
                                        class="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center"
                                      >
                                        Find Out More{" "}
                                        <span className="d-block d-md-none">
                                          <i className="fas fa-chevron-right bg-white"></i>
                                        </span>
                                      </button>
                                    </NavLink>
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
                                <div className="col-sm-10 col-md-6 col-lg-4 col-12" style={{ marginTop: '15px', marginBottom: '20px' }} key={id}>
                                  <div className="card custom_body_boder h-100 mt-4 mt-lg-0 h-100 ">
                                    <img
                                      src={newsData[id].desktop_banner}
                                      className="fixed_height  rounded-0"
                                      alt="..."
                                    />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                      <div className="tips-event mt-2">
                                        <p className="text-start title-color">{newsData[id].category.name}</p>
                                        <p className="text-start">{newsData[id].posted_at}</p>
                                      </div>
                                      <p className="card-title fw-bold text-start mb-lg-4 mb-md-4 mb-0">
                                        {newsData[id].title}
                                      </p>
                                      <NavLink
                                        to={{
                                          pathname: `/news-information/read/${newsData[id].slug}`,
                                        }}
                                      >
                                        <button type="button" className="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center">
                                          Find Out More <span className="d-block d-md-none"><i className="fas fa-chevron-right bg-white"></i></span>
                                        </button>
                                      </NavLink>
                                      <NavLink
                                        to={{
                                          pathname: `/news-information/read/${newsData[id].slug}`,
                                        }}
                                      >
                                        <button type="button" className="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center">
                                          Find Out More <span className="d-block d-md-none"><i className="fas fa-chevron-right bg-white"></i></span>
                                        </button>
                                      </NavLink>
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
                              newsData[id].category.name === 'T-CARE' && (
                                <div className="col-sm-10 col-md-6 col-lg-4 col-12" style={{ marginTop: '15px', marginBottom: '20px' }} key={id}>
                                  <div className="card custom_body_boder h-100 mt-4 mt-lg-0 h-100 ">
                                    <img
                                      src={newsData[id].desktop_banner}
                                      className="fixed_height  rounded-0"
                                      alt="..."
                                    />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                      <div className="tips-event mt-2">
                                        <p className="text-start title-color">{newsData[id].category.name}</p>
                                        <p className="text-start">{newsData[id].posted_at}</p>
                                      </div>
                                      <p className="card-title fw-bold text-start mb-lg-4 mb-md-4 mb-0">
                                        {newsData[id].title}
                                      </p>
                                      <NavLink
                                        to={{
                                          pathname: `/news-information/read/${newsData[id].slug}`,
                                        }}
                                      >
                                        <button type="button" className="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center">
                                          Find Out More <span className="d-block d-md-none"><i className="fas fa-chevron-right bg-white"></i></span>
                                        </button>
                                      </NavLink>
                                      <NavLink
                                        to={{
                                          pathname: `/news-information/read/${newsData[id].slug}`,
                                        }}
                                      >
                                        <button type="button" className="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center">
                                          Find Out More <span className="d-block d-md-none"><i className="fas fa-chevron-right bg-white"></i></span>
                                        </button>
                                      </NavLink>
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
                          <div className="row mt-5 d-flex justify-content-center">
                            {Object.keys(newsData).map((id, index) => (
                              newsData[id].category.name === 'News and Event' && (
                                <div className="col-sm-10 col-md-6 col-lg-4 col-12" style={{ marginTop: '15px', marginBottom: '20px' }} key={id}>
                                  <div className="card custom_body_boder h-100 mt-4  mt-lg-0 h-100 ">
                                    <img
                                      src={newsData[id].desktop_banner}
                                      className="fixed_height  rounded-0"
                                      alt="..."
                                    />
                                    <div className="card-body d-flex flex-column justify-content-between">
                                      <div className="tips-event mt-2">
                                        <p className="text-start title-color">{newsData[id].category.name}</p>
                                        <p className="text-start">{newsData[id].posted_at}</p>
                                      </div>
                                      <p className="card-title fw-bold text-start mb-lg-4 mb-md-4 mb-0">
                                        {newsData[id].title}
                                      </p>
                                      <NavLink
                                        to={{
                                          pathname: `/news-information/read/${newsData[id].slug}`,
                                        }}
                                      >
                                        <button type="button" className="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center">
                                          Find Out More <span className="d-block d-md-none"><i className="fas fa-chevron-right bg-white"></i></span>
                                        </button>
                                      </NavLink>
                                      <NavLink
                                        to={{
                                          pathname: `/news-information/read/${newsData[id].slug}`,
                                        }}
                                      >
                                        <button type="button" className="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center">
                                          Find Out More <span className="d-block d-md-none"><i className="fas fa-chevron-right bg-white"></i></span>
                                        </button>
                                      </NavLink>
                                    </div>
                                  </div>
                                </div>
                              )
                            ))}
                          </div>
                        </div>
                        {/* <div
                className={`tab-pane fade ${activeTab === 'ex1-tabs-5' ? 'show active' : ''}`} id="ex1-tabs-5"
              >
 <div className="row mt-5 d-flex justify-content-center">
                {Object.keys(newsData).map((id, index) => (
                  newsData[id].category.name === 'Event' && (
                    <div className="col-sm-10 col-md-6 col-lg-4 col-12" style={{marginTop:'15px',marginBottom:'20px'}} key={id}>
                        <div className="card custom_body_boder h-100 mt-4 mt-lg-0 h-100 ">
                          <img
                            src={newsData[id].desktop_banner}
                            className="fixed_height  rounded-0"
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
                            <NavLink
                  to={{
                    pathname: `/news-information/read/${newsData[id].slug}`,
                  }}
                >
                            <button type="button" className="btn d-md-block d-none  btn-outline-dark d-flex w-100 py-1 mt-2 mt-md-5 text-md-center">
                              Find Out More <span className="d-block d-md-none"><i className="fas fa-chevron-right bg-white"></i></span>
                            </button>
                            </NavLink>
                            <NavLink
                  to={{
                    pathname: `/news-information/read/${newsData[id].slug}`,
                  }}
                >
                            <button type="button" className="btn d-md-none custom_button_forcolor d-flex w-100 py-1 mt-2 mt-md-5 text-md-center">
                              Find Out More <span className="d-block d-md-none"><i className="fas fa-chevron-right bg-white"></i></span>
                            </button>
                            </NavLink>
                          </div>
                        </div>
                    </div>
                    )
                ))}
              </div>
              </div> */}
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
