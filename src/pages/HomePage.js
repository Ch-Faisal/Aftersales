import React, { useState, useEffect } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import axios from 'axios';
import { Oval } from 'react-loader-spinner'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Virtual, Navigation, Pagination, FreeMode } from "swiper/modules";

import '../css/home.css';
import { NavLink } from 'react-router-dom';
function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);
  const [activeTab3, setActiveTab3] = useState(1);
  const [activeTab4, setActiveTab4] = useState(2);
  const [carModels, setCarModels] = useState([]);
  const [carVariant, setCarVariant] = useState([]);
  const [selectedCar, setSelectedCar] = useState("All New Alphard");
  const [selectedCarImage, setSelectedCarImage] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [selectedCarId, setSelectedCarId] = useState(null); // State to hold the ID of the selected car
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(false);
  const [serviceDescriptions, setServiceDescriptions] = useState([]);
  const [serviceDisclaimer, setServiceDisclaimer] = useState('');
  const [serviceCost, setServiceCost] = useState([]);
  const [serviceCost2, setServiceCost2] = useState([]);
  const [packageNames, setPackageNames] = useState([]);
  const [packageImages, setPackageImages] = useState([]);
  const [moleculeImages, setMoleculeImages] = useState([]);
  const [moleculePhotos, setMoleculePhotos] = useState([]);
  const [moleculeTitles, setMoleculeTitles] = useState([]);
  const [recommendationsName, setRecommendationsName] = useState();
  const [OptionalsName, setOptionalsName] = useState();
  const [OptionalsTagline, setOptionalsTagline] = useState();
  const [OptionalsImage, setOptionalsImage] = useState([]);
  const [recommendationRemark, setRecommendationsRemark] = useState([]);
  const [imageComparation, setImageComparation] = useState([]);
  const [recommendationImage, setRecommendationImage] = useState([]);
  const [showAlphardWrapper, setShowAlphardWrapper] = useState(false);
  const [activeServiceTab, setActiveServiceTab] = useState(1);
  const [disclaimerMolecule, setDisclaimerMolecule] = useState('');
  const [dataNull, setDataNull] = useState(false);
  const [variantIdParent, setVariantIdParent] = useState(0);
  const [filteredOptionalsItem, setFilteredOptionalsItem] = useState([]);
  const [services, setServices] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchCarModels();
  }, []);
 

  useEffect(() => {
    if (carModels.length > 0) {
      const defaultCarModel = carModels[0];
      setSelectedCar(defaultCarModel.name);
      setSelectedCarImage(defaultCarModel.image);
      setSelectedCarId(defaultCarModel.id); // Set the ID of the first car model
      fetchVarients(defaultCarModel.id);
    }
  }, [carModels]);

  useEffect(() => {
    if (selectedCarId && variantIdParent) {
      handleTabClick(variantIdParent, activeTab);
    }
  }, [selectedCarId, variantIdParent, activeTab]);

  const fetchCarModels = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://aftersales-toyota-revamp.thriveagency.id/api/car', {
        headers: {
          'Authorization': 'Bearer OMN2FLG6hFY1QOUSB8WsEAl05JXV2XuZneARmOujoZsAq5wJO1qZ4rg4gTkE'
        }
      });
      setCarModels(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching car models:', error);
      setLoading(false);
    }
  };
  const fetchVarients = async (carId) => {
    try {
      const response = await axios.get(`https://aftersales-toyota-revamp.thriveagency.id/api/variant?car_id=${carId}`, {
        headers: {
          'Authorization': 'Bearer OMN2FLG6hFY1QOUSB8WsEAl05JXV2XuZneARmOujoZsAq5wJO1qZ4rg4gTkE'
        }
      });
      console.log("response service cost first call:", response.data.data)
      setCarVariant(response.data.data);
      setVariantIdParent(response.data.data[0].id)
      const serviceDescriptionsArray = response.data.data.map(variant => variant.services.map(service => service.service_description));
      console.log("Description:", serviceDescriptionsArray);
      setServiceDescriptions(serviceDescriptionsArray.flat());

      const serviceCost = response.data.data.map(variant => variant.services.map(service => service.service_cost));
      console.log("serviceCost2:", serviceCost)
      setServiceCost2(serviceCost);
      console.log("responseservicecost:", serviceCost)
      console.log("responsevarient:", response.data.data)
    } catch (error) {
      console.error('Error fetching car models:', error);
    }
  }
  
  const handleCarChange = (event) => {
    setLoading(true);
    const selectedCarName = event.target.value;
    const selectedCarModel = carModels.find(carModel => carModel.name === selectedCarName);
    if (selectedCarModel) {
      console.log("ssss", selectedCarModel)
      setSelectedCar(selectedCarModel.name);
      setSelectedCarImage(selectedCarModel.image);
      console.log("carimage:", selectedCarModel.image)
      setSelectedCarId(selectedCarModel.id);
      fetchVarients(selectedCarModel.id);
      console.log("selcted car id:", selectedCarModel.id)
    } else {
      console.error(`Car model with name '${selectedCarName}' not found.`);
    }
    setLoading(false);
  };

  const handleButtonClick = (event) => {
    handleCarChange(event);
    setShowAlphardWrapper(true);
  };

  const handleTabClick = async (variantId, index) => {
    try {
      setLoading2(true);
      const response = await axios.get(`https://aftersales-toyota-revamp.thriveagency.id/api/variant?car_id=${selectedCarId}&id=${variantId}`, {
        headers: {
          'Authorization': 'Bearer OMN2FLG6hFY1QOUSB8WsEAl05JXV2XuZneARmOujoZsAq5wJO1qZ4rg4gTkE'
        }
      });
      console.log("serviscostusingvariant:", response.data.data);

       const servicesData = response.data.data[0].services;
       console.log("servicescostData:", servicesData);
       setServices(servicesData);
      // Handle the API response
      setVariantIdParent(variantId);
      console.log("variantidahsan", variantIdParent);
      setLoading2(false);
      setActiveTab(index);
      return response.data.data;
    } catch (error) {
      console.error('Error fetching service cost using variant:', error);
      setLoading2(false); // Set loading state in case of error
      throw error; // Throw the error to handle it in the calling function
    }
  };
  const handleServiceTab = async (serviceNo) => {
    try {
      const navLinks = document.querySelectorAll('.custom-nav-link');
      navLinks.forEach(link => link.classList.remove('active'));
      const clickedNavLink = document.querySelector(`.custom-nav-link[data-service="${serviceNo}"]`);
      if (clickedNavLink) {
        clickedNavLink.classList.add('active');
      }
      setActiveServiceTab(serviceNo);
      setLoading2(true);
      const response = await axios.get(`https://aftersales-toyota-revamp.thriveagency.id/api/combination`, {
        params: {
          variant_id: variantIdParent,
          service_no: serviceNo
        },
        headers: {
          'Authorization': 'Bearer OMN2FLG6hFY1QOUSB8WsEAl05JXV2XuZneARmOujoZsAq5wJO1qZ4rg4gTkE'
        }
      });

      if (response.data && response.data.data && response.data.data.length > 0) {
        const disclaimerMolecule = response.data.data[0].disclaimer_molecule;
        setDisclaimerMolecule(disclaimerMolecule);
        const disclaimer = response.data.data[0].variant.car.disclaimer;
        setServiceDisclaimer(disclaimer);
        const packages = response.data.data[0].packages;
        const packageNames = packages.map(pkg => pkg.name);
        setPackageNames(packageNames);

        const images = packages.map(pkg => pkg.image);
        setPackageImages(images);

        const molecules = response.data.data[0].molecules;
        const moleculeImages = molecules.map(molecule => molecule.molecule.image);
        setMoleculeImages(moleculeImages);

        const moleculePhotos = molecules.map(molecule => molecule.molecule.photo);
        setMoleculePhotos(moleculePhotos);

        const moleculeTitles = molecules.map(molecule => molecule.molecule.title);
        setMoleculeTitles(moleculeTitles);

        const recommendations = response.data.data[0].recommendations;
        const recommendationsName = recommendations.map(recommendation => recommendation.product.name);
        setRecommendationsName(recommendationsName);

        const recommendationsRemark = recommendations.map(recommendation => recommendation.product.remark);
        setRecommendationsRemark(recommendationsRemark);

        const recommendationsComparison = recommendations.map(recommendation => recommendation.product.image_comparation);
        setImageComparation(recommendationsComparison);

        const recommendationsImage = recommendations.map(recommendation => recommendation.product.image);
        setRecommendationImage(recommendationsImage);

        const optionals = response.data.data[0].optionals;
        const filteredOptionals = optionals.filter(optional => optional.product.product_category_id === activeTab4);

        const OptionalName = filteredOptionals.map(optional => optional.product.name);
        setOptionalsName(OptionalName);

        const OptionalsTagline = filteredOptionals.map(optional => optional.product.tagline);
        setOptionalsTagline(OptionalsTagline);

        const OptionalsImage = filteredOptionals.map(optional => optional.product.image);
        setOptionalsImage(OptionalsImage);

        setLoading2(false);

      } else {
        setDataNull(true);
        console.log("nulllllllllllllll")
        setServiceDisclaimer("");
        setPackageNames([]);
        setPackageImages([]);
        setMoleculeTitles([]);
        setErrorMessage("No data found in the response.");
        setLoading2(false);
      }
      await handleVariantService(variantIdParent, serviceNo);
    } catch (error) {
      console.error('Error fetching variant:', error);
    }
  };

  const handleVariantService = async (variantId, serviceNo) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://aftersales-toyota-revamp.thriveagency.id/api/variantService`, {
        params: {
          variant_id: variantId,
          service_no: serviceNo
        },
        headers: {
          'Authorization': 'Bearer OMN2FLG6hFY1QOUSB8WsEAl05JXV2XuZneARmOujoZsAq5wJO1qZ4rg4gTkE'
        }
      });
      console.log("variantttttttttttttt:", variantId)
      console.log("responsevarientvariantservice:", response.data.data);
      const serviceCostMap = {};
      response.data.data.forEach(item => {
        serviceCostMap[item.service_no] = item.service_cost;
      });
      setServiceCost(serviceCostMap);
      handleOptionalTabs(variantId, serviceNo)
      console.log("Service costs:", serviceCostMap);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching variant service:', error);
    }
  };

  const handleTab2Click = (index) => {
    setActiveTab2(index);
  };
  const handleTab3Click = (index) => {
    setActiveTab3(index);
  };

  const handleOptionalTabs = async (variantId, serviceNo) => {
    try {
      // setvariantIdParent(variantId)
      setLoading3(true);
      const response = await axios.get(`https://aftersales-toyota-revamp.thriveagency.id/api/combination`, {
        params: {
          variant_id: variantId,
          service_no: serviceNo
        },
        headers: {
          'Authorization': 'Bearer OMN2FLG6hFY1QOUSB8WsEAl05JXV2XuZneARmOujoZsAq5wJO1qZ4rg4gTkE'
        }
      });

      if (response.data && response.data.data && response.data.data.length > 0) {
        const optionals = response.data.data[0].optionals;
        setFilteredOptionalsItem(optionals);
        setLoading3(false);
      } else {
        setErrorMessage("No data found in the response.");
        setLoading3(false);
      }
    } catch (error) {
      console.error('Error fetching variant:', error);
    }
  }
  const handleTab4Click = async (index) => {
    setActiveTab4(index);
    await handleOptionalTabs(variantIdParent, activeServiceTab)
  }


  const scrollLeft = () => {
    document.getElementById("myTab").scrollLeft -= 100;
  };

  const scrollRight = () => {
    document.getElementById("myTab").scrollLeft += 100;
  };
  return (
    <div id='navbar_top'>
      <Header></Header>
      <div className='section-1 p-0 ' id='section-1'>
        <div id="carouselExample" className="carousel slide d-none d-lg-block" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="assets/home-page-slider.png" className="d-block w-100 h-100" alt="Slide 1" />
            </div>
            <div className="carousel-item">
              <img src="assets/home-page-slider.png" className="d-block w-100 h-100" alt="Slide 2" />
            </div>
            <div className="carousel-item">
              <img src="assets/home-page-slider.png" className="d-block w-100 h-100" alt="Slide 3" />
            </div>
            <div className="carousel-item">
              <img src="assets/home-page-slider.png" className="d-block w-100 h-100" alt="Slide 3" />
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span aria-hidden="true">
              <i className="fas fa-chevron-left"></i>
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span aria-hidden="true">
              <i className="fas fa-chevron-right"></i>
            </span>
            <span className="visually-hidden">Next</span>
          </button>

          <ol className="carousel-indicators">
            <li data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#carouselExample" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExample" data-bs-slide-to="2"></li>
            <li data-bs-target="#carouselExample" data-bs-slide-to="3"></li>
          </ol>
        </div>
        <div className='d-block d-lg-none'>
          <img src='assets/showcase.png' alt='showcase' className='img-fluid w-100 ' />
        </div>
      </div>
      <div className='section-2 mt-5'>
        <div className='container px-0'>
          <div className='section-2-content px-0 px-md-5 mb-4'>
            <div className='main-heading text-center'>
              <h2 className='fw-bold'>Meningkatkan Kenyamanan Para Customer dengan Aftersales</h2>
            </div>
            <div className='section-text'>
              <p>After Sales Service Toyota dengan kualitas servis terjamin karena kendaraan Anda akan ditangani oleh teknisi yang berpengalaman dan bersertifikat. Layanan di bengkel resmi Toyota menggunakan Toyota Genuine Parts yaitu suku cadang resmi dari Toyota dengan mengedepankan kualitas dan telah dirancang sesuai dengan spesifikasi dan kebutuhan kendaraan kesayangan Anda. Jaringan luas dengan 297 bengkel perawatan dan perbaikan serta 81 bengkel Body & Paint yang tersebar di seluruh penjuru Nusantara.</p>
            </div>
          </div>
          <div className='px-lg-5 justify-content-center justify-content-lg-start mx-auto'>
            <div className='row mx-boxes align-items-stretch'>
              <div className='col-6 col-xl d-flex flex-column'>
                <div className='wrapper border-0 mb-4'>
                  <div className='section-img'>
                    <img src="assets/value_icon_1.png" className='w-75' alt='' />
                  </div>
                  <div className='title mt-3 d-flex align-items-center'>
                    <h4 className='fw-bold text-dark'>Servis yang Berkualitas</h4>
                  </div>
                </div>
              </div>
              <div className='col-6 col-xl d-flex flex-column'>
                <div className='wrapper border-0 mb-4 mb-md-3'>
                  <div className='section-img toyota'>
                    <img src="assets/value_icon_2.png" className='w-100' alt='' />
                  </div>
                  <div className='title mt-3 d-flex align-items-center'>
                    <h4 className='fw-bold text-dark'>Toyota Genuine Parts</h4>
                  </div>
                </div>
              </div>
              <div className='col-6 mx-auto col-xl d-flex flex-column justify-content-center mt-4 mt-lg-0'>
                <div className='wrapper border-0 mb-4 mb-md-3'>
                  <div className='section-img'>
                    <img src="assets/location-icon.png" className='w-75' alt='' />
                  </div>
                  <div className='title mt-3 d-flex align-items-center'>
                    <h4 className='fw-bold px-md-4 text-dark'>Jaringan yang Luas</h4>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className='container'>
        <h4 className='terbaik mb-4 mb-md-4'>Rekomendasi Terbaik untuk Kendaraanmu</h4>
        <div className="row justify-content-center Terbaik ">
          <div className="d-md-flex mb-3 w-75 custom-select-container">
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" value={selectedCar}
              onChange={handleCarChange} >
              {carModels.map((carModel, index) => (
                <option key={index} value={carModel.name}>{carModel.name}</option>
              ))}
            </select>
            <button
              className='btn Servis px-3 py-1 mx-2'
              style={{ whiteSpace: 'nowrap' }}
              onClick={(event) => handleButtonClick(event)}
            >
              Lihat Servis
            </button>
          </div>
        </div>
      </div>
      {showAlphardWrapper && (
        <div className='alphard-wrapper'>
          <div className='all-new-alphard py-2'>
            <img src={selectedCarImage} alt={selectedCar} />
            {loading && (
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
            )}
            <p className='text-center'>{selectedCar}</p>
          </div>
          <div className='container-fluid'>
            <div className='container'>
              <div className='new-alphard mt-5'>
                <ul className="nav nav-pills nav-fill d-flex">
                  {carVariant.map((variant, index) => (
                    <li className="nav-item" key={index}>
                      <a
                        className={`nav-link text-nowrap ${activeTab === index ? 'active' : ''}`}
                        onClick={() => handleTabClick(variant.id, index)}
                        href="javascript:void(0)">
                        {variant.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="container">
                  <div className="row d-flex justify-content-center mt-4">
                    <div className="col-md-12">
                      <div className="bg-white">
                        <div className="container" style={{ position: "relative" }}>
                          <div className="scroll-buttons d-flex align-items-center">
                            <img
                              onClick={scrollRight}
                              className="ms-5 cursor-pointer"
                              src="/assets/Frameright.svg"
                              alt=""
                              style={{
                                position: "absolute",
                                right: "-4px",
                                marginRight: "0px",
                                top: "20px"
                              }}
                            />
                            <img
                              className="mt-3 cursor-pointer"
                              onClick={scrollLeft}
                              src="/assets/Frameleft.svg"
                              alt=""
                              style={{ position: "absolute", top: "8px", left: "-4px" }}
                            />
                          </div>
                          <ul
                            className="nav custom-home-tabs custom-nav-tabs nav-fill custom-nav-fill"
                            id="myTab"
                            style={{ borderBottom: "none !important", whiteSpace: "nowrap" }}
                          >
                            <li className="nav-item  custom-nav-item" role="presentation">
                              <button

                                className="nav-link custom-nav-link active tab-boxes"
                                style={{ margin: "0", padding: "2px", height: "60px", width: "160px" }}
                                onClick={() => handleServiceTab(1)}
                                data-service="1"
                              >
                               <div className={`d-flex flex-column servis-tabs py-1 ${services[0].service_cost > 0 ? 'bg-gray' : ''}`}>
                                <span>Servis ke-1</span>
                                <span>FREE</span>
                              </div>
                              </button>
                            </li>
                            <li className="nav-item custom-nav-item" role="presentation">
                              <button
                                className="nav-link custom-nav-link tab-boxes"
                                style={{ margin: "0", padding: "2px", height: "60px", width: "155px" }}
                                onClick={() => handleServiceTab(2)}
                                data-service="2"
                              >
                                <div className={`d-flex flex-column servis-tabs py-1 ${services[1].service_cost > 0 ? 'bg-gray' : ''}`}>
                                      <span>Servis ke-2</span>
                                      <span>FREE</span>
                                    </div>
                              </button>
                            </li>
                            <li className="nav-item custom-nav-item" role="presentation">
                              <button
                                className="nav-link custom-nav-link tab-boxes"

                                style={{ margin: "0", padding: "2px", height: "60px", width: "150px" }}
                                onClick={() => handleServiceTab(3)}
                                data-service="3"
                              >
                               <div className={`d-flex flex-column servis-tabs py-1 ${services[2].service_cost > 0 ? 'bg-gray' : ''}`}>
                                <span>Servis ke-3</span>
                                <span>FREE</span>
                              </div>
                              </button>
                            </li>
                            <li className="nav-item custom-nav-item" role="presentation">
                              <button
                                className="nav-link custom-nav-link tab-boxes tab-boxes"

                                style={{ margin: "0", padding: "2px", height: "60px", width: "150px" }}
                                onClick={() => handleServiceTab(4)}
                                data-service="4"
                              >
                               <div className={`d-flex flex-column servis-tabs py-1 ${services[3].service_cost > 0 ? 'bg-gray' : ''}`}>
                                <span>Servis ke-4</span>
                                <span>FREE</span>
                              </div>
                              </button>
                            </li>
                            <li className="nav-item custom-nav-item" role="presentation">
                              <button
                                className="nav-link custom-nav-link tab-boxes"
                                style={{ margin: "0", padding: "2px", height: "60px", width: "150px" }}
                                onClick={() => handleServiceTab(5)}
                                data-service="5"
                              >
                               <div className={`d-flex flex-column servis-tabs py-1 ${services[4].service_cost > 0 ? 'bg-gray' : ''}`}>
                                <span>Servis ke-5</span>
                                <span>FREE</span>
                              </div>
                              </button>
                            </li>
                            <li className="nav-item custom-nav-item" role="presentation">
                              <button
                                className="nav-link custom-nav-link tab-boxes"
                                style={{ margin: "0", padding: "2px", height: "60px", width: "150px" }}
                                onClick={() => handleServiceTab(6)}
                                data-service="6"
                              >
                               <div className={`d-flex flex-column servis-tabs py-1 ${services[5].service_cost > 0 ? 'bg-gray' : ''}`}>
                                <span>Servis ke-6</span>
                                <span>FREE</span>
                              </div>
                              </button>
                            </li>
                            <li className="nav-item custom-nav-item" role="presentation">
                              <button
                                className="nav-link custom-nav-link tab-boxes"

                                style={{ margin: "0", padding: "2px", height: "60px", width: "150px" }}
                                onClick={() => handleServiceTab(7)}
                                data-service="7"
                              >
                               <div className={`d-flex flex-column servis-tabs py-1 ${services[6].service_cost > 0 ? 'bg-gray' : ''}`}>
                                  <span>Servis ke-7</span>
                                  <span>FREE</span>
                                </div>
                              </button>
                            </li>
                            <li className="nav-item custom-nav-item" role="presentation">
                              <button
                                className="nav-link custom-nav-link tab-boxes"

                                style={{ margin: "0", padding: "2px", height: "60px", width: "150px" }}
                                onClick={() => handleServiceTab(8)}
                                data-service="8"
                              >
                               <div className={`d-flex flex-column py-1 servis-tabs ${services[7].service_cost > 0 ? 'bg-gray' : ''}`}>
                                  <span>Servis ke-8</span>
                                  <span>{services[7].service_cost}</span>
                                </div>
                              </button>
                            </li>
                            <li className="nav-item custom-nav-item" role="presentation">
                              <button
                                className="nav-link custom-nav-link tab-boxes"

                                style={{ margin: "0", padding: "2px", height: "60px", width: "150px" }}
                                onClick={() => handleServiceTab(9)}
                                data-service="9"
                              >
                               <div className={`d-flex flex-column py-1 servis-tabs ${services[8].service_cost > 0 ? 'bg-gray' : ''}`}>
                                  <span>Servis ke-9</span>
                                  <span>{services[8].service_cost}</span>
                                </div>
                              </button>
                            </li>
                            <li className="nav-item custom-nav-item" role="presentation">
                              <button
                                className="nav-link custom-nav-link tab-boxes"

                                style={{ margin: "0", padding: "2px", height: "60px", width: "150px" }}
                                onClick={() => handleServiceTab(10)}
                                data-service="10"
                              >
                                <div className={`d-flex flex-column py-1 servis-tabs ${services[9].service_cost > 0 ? 'bg-gray' : ''}`}>
                                  <span>Servis ke-10</span>
                                  <span>{services[9].service_cost}</span>
                                </div>

                              </button>
                            </li>
                            <li className="nav-item custom-nav-item" role="presentation">
                              <button
                                className="nav-link custom-nav-link tab-boxes"

                                style={{ margin: "0", padding: "2px", height: "60px", width: "150px" }}
                                onClick={() => handleServiceTab(11)}
                                data-service="11"
                              >
                               <div className={`d-flex flex-column py-1 servis-tabs ${services[10].service_cost > 0 ? 'bg-gray' : ''}`}>
                                  <span>Servis ke-11</span>
                                  <span>{services[10].service_cost}</span>
                                </div>
                              </button>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="tab-content container-fluid p-0"
                        >
                          <div
                            className="tab-pane fade active show px-3 px-lg-0"
                          >
                            {activeServiceTab === 1 && (
                              <div className="container mt-5 " id='servis-1'>
                                <div className='servis-content mx-md-5'>
                                  <h1 className='servis-title'>GRATIS</h1>
                                  <h1>Servis berkala setelah <span className='inline-text' >1 Bulan</span> </h1>
                                  <p className='text mt-3  servis-desc'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                                </div>
                                <div className='row mt-5 mx-md-5'>
                                  <div class='col-md-6 mt-5 mt-md-0'>
                                    <div class='d-flex justify-content-center justify-content-md-center align-items-center'>
                                      <div>
                                        <img src="assets/Chasis Bodi.png" alt='' />
                                      </div>
                                      <p class='px-3 mb-0 text-nowrap fw-bold'>Periksa Komponen Mesin</p>
                                    </div>
                                    <div class='row mt-3 ms-md-2'>
                                      <div class='col-6 d-flex align-items-center'>
                                        <img src="assets/Check.png" alt='' />
                                        <p class='px-3 mb-0 text-nowrap fw-bold'>Oli mesin</p>
                                      </div>
                                      <div class='col-6 d-flex align-items-center'>
                                        <img src="assets/Check.png" class='ms-2 ms-md-0' alt='' />
                                        <p class='px-3 mb-0 text-md-nowrap fw-bold'>Pipa gas buang</p>
                                      </div>
                                    </div>
                                    <div class='row mt-3 ms-2'>
                                      <div class='col-6 d-flex align-items-center'>
                                        <img src="assets/Check.png" alt='' />
                                        <p class='px-3 mb-0 text-nowrap fw-bold'>Sistem pendingin</p>
                                      </div>
                                      <div class='col-6 d-flex align-items-center'>
                                        <img src="assets/Check.png" alt='' />
                                        <p class='px-3 mb-0 text-nowrap fw-bold'>Baterai 12 Volt</p>
                                      </div>
                                    </div>
                                    <div class='row mt-3 ms-2'>
                                      <div class='col-12 d-flex align-items-center'>
                                        <img src="assets/Check.png" alt='' />
                                        <p class='px-3 mb-0 text-nowrap fw-bold'>Cairan pendingin  mesin & power control unit</p>
                                      </div>
                                    </div>
                                  </div>
                                  <div className='col-md-6 mt-5 mt-md-0'>
                                    <div className='d-flex justify-content-center justify-content-md-start align-items-center'>
                                      <div>
                                        <img src="assets/Chasis Bodi.png" alt='' />
                                      </div>
                                      <p className='px-3 mb-0 text-nowrap fw-bold'>Periksa Chasis & Bodi</p>
                                    </div>
                                    <div className='d-flex mt-3'>
                                      <div className='d-flex align-items-center'>
                                        <img src="assets/Check.png" alt='' />
                                        <p className='px-3 mb-0 text-nowrap fw-bold'>Pedal rem</p>
                                      </div>
                                      <div className='d-flex align-items-center mx-md-4'>
                                        <img src="assets/Check.png" className='ms-2 ms-md-2 mx-md-2' style={{ marginLeft: '13px !important' }} alt='' />
                                        <p className='px-3 mb-0 text-nowrap fw-bold'>Ban</p>
                                      </div>
                                    </div>
                                    <div className='d-flex  mt-3'>
                                      <div className='d-flex align-items-center'>
                                        <img src="assets/Check.png" alt='' />
                                        <p className='px-3 mb-0 text-nowrap fw-bold'>Minyak rem</p>
                                      </div>
                                      <div className='d-flex align-items-center mx-md-3'>
                                        <img src="assets/Check.png" className='ms-3 ms-md-1' alt='' />
                                        <p className='px-3 mb-0 text-nowrap fw-bold'>Lampu, Klakson, Kaca Wiper</p>
                                      </div>
                                    </div>
                                    <div className='d-flex mt-3'>
                                      <div className='d-flex align-items-center'>
                                        <img src="assets/Check.png" alt='' />
                                        <p className='px-3 mb-0 text-nowrap fw-bold'>Suspensi</p>
                                      </div>
                                      <div className='d-flex align-items-center mx-md-5'>
                                        <img src="assets/Check.png" className='ms-3 ms-md-0' alt='' />
                                        <p className='px-3 mb-0 text-nowrap fw-bold'>Isi cairan AC</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className='d-none d-lg-block'>
                                  <div className='row mx-md-4'>
                                    <h1 className='fw-bold mt-5 mb-5'>Opsi Produk Toyota Lainnya</h1>
                                    <div className='col-6 col-md'>
                                      <div className={`wrapper-servis px-4 border-0 mb-4 mb-md-3 h-100 mx-md-3 py-1 d-flex align-items-center justify-content-center ${activeTab3 === 1 ? 'active-tab' : ''}`} onClick={() => handleTab3Click(1)}>
                                        <div className='section-img d-flex justify-content-center pointer'>
                                          <img src="assets/tire-solution.png" className={activeTab3 === 1 ? 'd-none' : 'd-block'} alt='d-block' />
                                          <img src="assets/Tire Solution (1).png" className={activeTab3 === 1 ? 'd-block w-75' : 'd-none'} alt='' />
                                        </div>
                                      </div>
                                    </div>
                                    <div className='col-6 col-md'>
                                      <div className={`wrapper-servis px-4 border-0 mb-4 mb-md-3 h-100 mx-md-3 py-1 d-flex align-items-center justify-content-center ${activeTab3 === 2 ? 'active-tab' : ''}`} onClick={() => handleTab3Click(2)} >
                                        <div className='section-img pointer' >
                                          <img src="assets/tmo.png" className={activeTab3 === 2 ? 'd-none' : 'd-block'} alt='' />
                                          <img src="assets/TMO-02.png" className={activeTab3 === 2 ? 'd-block' : 'd-none'} alt='' />
                                        </div>
                                      </div>
                                    </div>
                                    <div className='col-6 col-md'>
                                      <div className={`wrapper-servis px-4 border-0 mb-4 mb-md-3 h-100 mx-md-3 py-1 d-flex align-items-center justify-content-center ${activeTab3 === 3 ? 'active-tab' : ''}`} onClick={() => handleTab3Click(3)}>
                                        <div className='section-img pointer'>
                                          <img src="assets/TGB.png" className={activeTab3 === 3 ? 'd-none' : 'd-block'} alt='' />
                                          <img src="assets/TGB-3.png" className={activeTab3 === 3 ? 'd-block' : 'd-none'} alt='' />
                                        </div>
                                      </div>
                                    </div>
                                    {/* Content rendering based on active tab */}
                                    {activeTab3 === 1 && (
                                      <div className="container mx-4">
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
                                              slidesPerView: 1,
                                            },
                                          }}
                                          spaceBetween={0}
                                          navigation={true}
                                          modules={[Navigation]}
                                          className="mySwiper"
                                        >
                                          <SwiperSlide>
                                            <div className="card">
                                              <div className="img">
                                                <img
                                                  src="assets/produk.png"
                                                  alt="img"
                                                  className="img-fluid w-25"
                                                  draggable="false"
                                                />
                                              </div>
                                              <div className="text-center card_customm_padding ms-5">
                                                <h4 className="card_heading">Tyre Solution.</h4>
                                                <p className="card_paragraph">
                                                  <span className="italic_text">
                                                    Layanan Ban dari Toyota,
                                                  </span>{" "}
                                                </p>
                                              </div>
                                            </div>
                                          </SwiperSlide>
                                        
                                        </Swiper>
                                        <button type="button" class="btn btn-outline-dark custom-btn w-25 mb-5">Learn  more</button>
                                      </div>
                                    )}
                                    {activeTab3 === 2 && (
                                      <div className="container mt-5 mx-4">
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
                                              slidesPerView: 3,
                                            },
                                          }}
                                          spaceBetween={0}
                                          navigation={true}
                                          modules={[Navigation]}
                                          className="mySwiper"
                                        >
                                          <SwiperSlide>
                                            <div className="card">
                                              <div className="img">
                                                <img
                                                  src="assets/4L 5W-30 Gasoline (2).png"
                                                  alt="img"
                                                  className="img-fluid w-50"
                                                  draggable="false"
                                                />
                                              </div>
                                              <div className="text-start card_customm_padding ms-5">
                                                <h4 className="card_heading mt-5">TMO Wiper Fluid.</h4>
                                                <p className="card_paragraph">
                                                  <span className="italic_text">
                                                    TMO Wiper Fluid,
                                                  </span>{" "}
                                                  Cairan pembersih kaca mobil & pencegah jamur..
                                                </p>
                                              </div>
                                            </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                            <div className="card">
                                              <div className="img">
                                                <img
                                                  src="assets/4L 5W-30 Gasoline (3).png"
                                                  className="img-fluid w-50"
                                                  alt="img"
                                                  draggable="false"
                                                />
                                              </div>
                                              <div className="text-start card_customm_padding mt-5 ms-5">
                                                <h4 className="card_heading">TMO Cabin Disinfectant</h4>
                                                <p className="card_paragraph">
                                                  <span className="italic_text">
                                                    Air Filter,
                                                  </span>{" "}
                                                  Aerosol penghilang bakteri dan penyegar kabin.
                                                </p>
                                              </div>
                                            </div>
                                          </SwiperSlide>
                                          <SwiperSlide>
                                            <div className="card">
                                              <div className="img">
                                                <img
                                                  src="assets/4L 5W-30 Gasoline (4).png"
                                                  className="img-fluid w-50"
                                                  alt="img"
                                                  draggable="false"
                                                />
                                              </div>
                                              <div className="text-start card_customm_padding mt-5 ms-5">
                                                <h4 className="card_heading mt-4">
                                                  TMO Injector Cleaner
                                                </h4>
                                                <p className="card_paragraph">
                                                  <span className="italic_text">
                                                    Cairan pembersih injector & ruang bakar.
                                                  </span>{" "}
                                                </p>
                                              </div>
                                            </div>
                                          </SwiperSlide>

                                          <SwiperSlide>
                                            <div className="card">
                                              <div className="img">
                                                <img
                                                  src="assets/4L 5W-30 Gasoline.png"
                                                  className="img-fluid w-50 mt-4"
                                                  alt="img"
                                                  draggable="false"
                                                />
                                              </div>
                                              <div className="text-start card_customm_padding mt-5 ms-5">
                                                <h4 className="card_heading mt-3">Rear Absorber</h4>
                                                <p className="card_paragraph">
                                                  <span className="italic_text">
                                                    Didesain khusus
                                                  </span>{" "}
                                                  dengan harga yang kompetitif namun memenuhi  Avanza, Agya dan Calya.
                                                </p>
                                              </div>
                                            </div>
                                          </SwiperSlide>
                                        </Swiper>
                                        <button type="button" class="btn btn-outline-dark custom-btn w-25 py-2 mt-5">Learn  more</button>

                                      </div>
                                    )}
                                    {activeTab3 === 3 && (
                                      <div className="container mx-4 mt-5">
                                        <Swiper
                                          slidesPerView={3}
                                          breakpoints={{
                                            280: {
                                              slidesPerView: 1,
                                            },
                                            // When window width is >= 768px
                                            768: {
                                              slidesPerView: 1,
                                            },
                                            // When window width is >= 992px
                                            992: {
                                              slidesPerView: 1,
                                            },
                                          }}
                                          spaceBetween={0}
                                          navigation={true}
                                          modules={[Navigation]}
                                          className="mySwiper"
                                        >
                                          <SwiperSlide>
                                            <div className="card">
                                              <div className="img">
                                                <img
                                                  src="assets/TGB-MF.png"
                                                  alt="img"
                                                  className="img-fluid w-25"
                                                  draggable="false"
                                                />
                                              </div>
                                              <div className="text-center card_customm_padding ms-5">
                                                <h4 className="card_heading">TGB Maintenance Free.</h4>
                                                <p className="card_paragraph">
                                                  <span className="italic_text">
                                                    Produk Aki Toyota
                                                  </span>
                                                </p>
                                              </div>
                                            </div>
                                          </SwiperSlide>
                                    
                                        </Swiper>
                                        <button type="button" class="btn btn-outline-dark custom-btn w-25 mb-3">Learn  more</button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>

                            )}
                            {loading2 ? (
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
                              <>
                                {activeServiceTab !== 1 && (
                                  <div className="container ps-lg-5 pe-lg-5 mt-5">
                                    <div className='servis-content mx-md-5'>
                                      <h1 className='servis-title'>GRATIS</h1>
                                      {activeServiceTab >= 8 && serviceCost && (
                                        <h1 className='servis-title'>
                                          Rp {serviceCost[activeServiceTab]}
                                        </h1>
                                      )}
                                      <h1>Servis berkala setelah <span className='inline-text' >{activeServiceTab >= 2 && activeServiceTab <= 11 && (activeServiceTab - 1) * 6} Bulan </span> </h1>
                                      
                              {activeServiceTab >= 8 && (
                                  <div className='text text-start mt-3'>
                                      {serviceDescriptions.length > 0 && serviceDescriptions[8] ? 
                                          serviceDescriptions[8].match(/.{1,123}/g).map((substring, index) => (
                                              <React.Fragment key={index}>
                                                  {substring}
                                                  <br /> {/* Add line break after every 123 characters */}
                                              </React.Fragment>
                                          )) : 
                                          "No description available"
                                      }
                                  </div>
                              )}
                                      <p className='text mt-3'>{serviceDisclaimer}</p>
                                    </div>

                                    <div className='container'>
                                      <div className='d-flex justify-content-center'>
                                        <div className='d-flex justify-content-center'>
                                          <div className='row mt-5'>
                                          <div className={`col-12${activeServiceTab === 5 ? ' col-lg-8 mx-auto text-start' : ''}`}>
                                            {packageNames.map((packageName, index) => (
                                              index % 2 === 0 && (
                                                <div key={index} className='d-flex justify-content-between mt-2 mt-md-4'>
                                                  <div className='d-flex'>
                                                    {/* <img src="assets/Komponen Mesin.png" alt='' /> */}
                                                    <img src={packageImages[index]} alt='' style={activeServiceTab === 5 && index < 2 ? { width: '81px', height: '41px' } : {}} />
                                                    <div className="px-3 font-bold" style={{ fontWeight: 600 }}>
                                                      {packageName.split(',').map((item, i) => (
                                                        <div key={i}>
                                                          {i === 0 ? item : `\u2022 ${item}`} {/* First item without bullet, rest with bullet */}
                                                        </div>
                                                      ))}
                                                    </div>
                                                    {/* {errorMessage && <p>{errorMessage}</p>} */}
                                                  </div>
                                                  {index + 1 < packageNames.length && (
                                                    <div className='d-flex'>
                                                      {/* <img src="assets/Komponen Mesin.png" alt='' /> */}
                                                      <img src={packageImages[index + 1]} alt='' style={activeServiceTab === 5 && index < 2 ? { width: '81px', height: '41px' } : {}} />
                                                      <div className="px-3" style={{ fontWeight: 600 }}>
                                                        {packageNames[index + 1].split(',').map((item, i) => (
                                                          <div key={i}>
                                                            {i === 0 ? item : `\u2022 ${item}`}
                                                          </div>
                                                        ))}
                                                      </div>
                                                    </div>
                                                  )}
                                                </div>
                                              )
                                            ))}
                                          </div>
                                        </div>
                                        </div>
                                      </div>
                                      <div className='d-flex justify-content-center'>
                                        <div className='row mt-5'>
                                          <div className='col-lg-12'>
                                            <ul className="nav nav-pills nav-fill home-tab d-flex">
                                              <li className="nav-item mx-2">
                                                <a className={`nav-link text-nowrap rounded text-nowrap px-5 ${activeTab2 === 0 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(0)}>Opsi Upgrade TMO Oli Mesin</a>
                                              </li>
                                              <li className="nav-item">
                                                <a className={`nav-link text-nowrap rounded  text-nowrap px-5  ${activeTab2 === 1 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(1)}>Opsi Tambah Produk Lain</a>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                      <div className={`{dataNull ? 'd-none' : ''}`}>
                                        {activeTab2 === 0 && (
                                          <div id='hide-div'>
                                            <div className='d-flex justify-content-center servis-2-tab'>
                                              <div className='row mt-5'>
                                                <h1>TMO Oli Mesin</h1>
                                                <p className='text-red'>TINGKAT KEKENTALAN MOLEKUL</p>
                                              </div>
                                            </div>
                                            <div className='container'>
                                              <div className={'row justify-content-md-center tmo-oli'}>
                                                <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column '>
                                                  <div className='col-12 order-1 order-md-0'>
                                                    <p className='pt-3 d-none d-md-block'>Oli Basic</p>
                                                    <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>{moleculeTitles[0]}</p>
                                                    <p className='pt-md-3 pt-0 text-center fw-bold'>10W-30</p>
                                                    <div className='tmo-image'>
                                                      {moleculeImages[0] ? (
                                                        <img src={moleculeImages[0]} alt='' />
                                                      ) : (
                                                        <p>{errorMessage}</p>
                                                      )}
                                                    </div>
                                                  </div>
                                                  <div className='col-12 order-0 order-md-1'>
                                                    <p className='pt-3 d-block d-md-none'>Oli Basic</p>
                                                    <p className='pt-4 fw-bold standard d-none d-md-block mt-5'>
                                                      {moleculeTitles[0] ? (
                                                        <div dangerouslySetInnerHTML={{ __html: moleculeTitles[0] }} />
                                                      ) : (
                                                        errorMessage
                                                      )}
                                                    </p>
                                                    <div className='tmo-image'>
                                                      {moleculeImages[0] ? (
                                                        <img src={moleculePhotos[0]} alt='' />
                                                      ) : (
                                                        <p>{errorMessage}</p>
                                                      )}
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className='col-md-6 bg-pink'>
                                                <p className='pt-3 text-center text-red'>Opsi Upgrade Oli</p>
                                                <div className='d-flex wrapper-pink-bg'>
                                                <div className='col-md-6 text-center d-flex flex-md-column mt-2 mt-md-0'>
                                                  <div className='col-12 order-1 order-md-0'>
                                                    <p className='pt-4'>
                                                      <span className="d-block d-md-none">+0.8%</span>
                                                      <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '16px' }}>{moleculeTitles[1]}</span>
                                                    </p>
                                                    <p className='text-center fw-bold'>SW-30</p>
                                                    <div className='tmo-image'>
                                                      <img src={moleculeImages[1]} alt='' />
                                                    </div>
                                                  </div>
                                                  <div className='col-12 order-0 order-md-1'>
                                                    <p className='pt-4'>
                                                      <span className="d-block d-md-none" style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                                                      {moleculeTitles[1] ? (
                                                        <span className="d-none d-md-block mt-2" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '16px' }} dangerouslySetInnerHTML={{ __html: moleculeTitles[1] }} />
                                                      ) : null}
                                                    </p>
                                                    <div className='tmo-image molecule-photos pb-3 pb-md-0'>
                                                      <img src={moleculePhotos[1]} alt='' />
                                                    </div>
                                                  </div>
                                                </div>
                                                <div className='col-md-6 text-center d-flex flex-md-column mt-2 mt-md-0'>
                                                  <div className='col-12 order-1 order-md-0'>
                                                    <p className='pt-4'>
                                                      <span className="d-block d-md-none">+0.8%</span>
                                                      <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '16px' }}>{moleculeTitles[2]}</span>
                                                    </p>
                                                    <p className='text-center fw-bold'>0W-20</p>
                                                    <div className='tmo-image'>
                                                      <img src={moleculeImages[2]} alt='' />
                                                    </div>
                                                  </div>
                                                  <div className='col-12 order-0 order-md-1'>
                                                    <p className='pt-4 text-center'>
                                                      <span className="d-block d-md-none" style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                                                      <span className="d-none d-md-block mt-2" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '16px' }} dangerouslySetInnerHTML={{ __html: moleculeTitles[2] }} />
                                                    </p>
                                                    <div className='tmo-image tmo-2'>
                                                      <img src={moleculePhotos[2]} alt='' />
                                                    </div>
                                                    <p className=' disclaimer mt-2 text-red d-none d-md-block text-wrap' style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '12px', fontWeight: '600' }}>
                                                      <span dangerouslySetInnerHTML={{ __html: disclaimerMolecule }} />
                                                    </p>
                                                  </div>
                                                </div>
                                                </div>
                                                </div>
                                              
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </div>

                                      {activeTab2 === 1 && <div>
                                        <div className='d-flex justify-content-center servis-2-tab'>
                                          <div className='row mt-5'>
                                            <p className='text-red pb-4'>REKOMENDASI PRODUK</p>
                                          </div>
                                        </div>
                                        <div className='container'>
                                          <div className='row'>
                                            <div className='col-md-4 mx-md-5 text-center d-flex justify-content-center'>
                                              <img src={recommendationImage} className='w-100' alt='brake' />
                                            </div>
                                            <div className='col-md-6 mx-md-2'>
                                              <h1 className='text-start'>{recommendationsName}</h1>
                                              <p className='text-start' dangerouslySetInnerHTML={{ __html: recommendationRemark }} />
                                              <div className='d-flex'>
                                                <img src={imageComparation} className='w-100' alt='brake' />
                                                {/* <img src="assets/tyre2.png" className='w-50' alt='brake' /> */}
                                              </div>
                                            </div>
                                            <h1 className='mt-4 mb-5'>Opsi Produk Toyota Lainnya</h1>
                                            {/* <p className='text-start' dangerouslySetInnerHTML={{ __html: OptionalsTagline }} /> */}
                                            <div className='col-6 col-md'>
                                              <div className={`wrapper-servis px-4 border-0 mb-4 mb-md-3 h-100 mx-md-3 py-1 d-flex align-items-center justify-content-center ${activeTab4 === 1 ? 'active-tab' : ''}`} onClick={() => handleTab4Click(1)}>
                                                <div className='section-img d-flex pointer justify-content-center'>
                                                  <img src="assets/tire-solution.png" className={activeTab4 === 1 ? 'd-none' : 'd-block'} alt='d-block' />
                                                  <img src="assets/Tire Solution (1).png" className={activeTab4 === 1 ? 'd-block w-75' : 'd-none'} alt='' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='col-6 col-md'>
                                              <div className={`wrapper-servis px-4 border-0 mb-4 mb-md-3 h-100 mx-md-3 py-1 d-flex align-items-center justify-content-center ${activeTab4 === 2 ? 'active-tab' : ''}`} onClick={() => handleTab4Click(2)} >
                                                <div className='section-img pointer' >
                                                  <img src="assets/tmo.png" className={activeTab4 === 2 ? 'd-none' : 'd-block'} alt='' />
                                                  <img src="assets/TMO-02.png" className={activeTab4 === 2 ? 'd-block' : 'd-none'} alt='' />
                                                </div>
                                              </div>
                                            </div>
                                            <div className='col-6 col-md'>
                                              <div className={`wrapper-servis px-4 border-0 mb-4 mb-md-3 h-100 mx-md-3 py-1 d-flex align-items-center justify-content-center ${activeTab4 === 3 ? 'active-tab' : ''}`} onClick={() => handleTab4Click(3)}>
                                                <div className='section-img pointer'>
                                                  <img src="assets/TGB.png" className={activeTab4 === 3 ? 'd-none' : 'd-block'} alt='' />
                                                  <img src="assets/TGB-3.png" className={activeTab4 === 3 ? 'd-block' : 'd-none'} alt='' />
                                                </div>
                                              </div>
                                            </div>
                                            {/* Content rendering based on active tab */}
                                            {activeTab4 === 1 && (
                                              <div className="container mx-4">
                                                {loading3 ? ( // Conditionally render loader if loading3 state is true
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
                                                  <Swiper
                                                    slidesPerView={3}
                                                    breakpoints={{
                                                      280: {
                                                        slidesPerView: 1,
                                                      },
                                                      // When window width is >= 768px
                                                      768: {
                                                        slidesPerView: 1,
                                                      },
                                                      // When window width is >= 992px
                                                      992: {
                                                        slidesPerView: 3,
                                                      },
                                                    }}
                                                    spaceBetween={0}
                                                    navigation={true}
                                                    modules={[Navigation]}
                                                    className="mySwiper"
                                                    centeredSlides={true}
                                                  >
                                                    {filteredOptionalsItem && filteredOptionalsItem.length > 0 ? (
                                                      filteredOptionalsItem.map((item, index) => (
                                                        item.product.product_category_id === 1 && (
                                                          <SwiperSlide key={index}>
                                                          <div className="card text-center">
                                                            <div className="img">
                                                              <img
                                                                src={item.product.image}
                                                                alt="img"
                                                                className="img-fluid w-75" // Assuming you want the image to take full width
                                                                draggable="false"
                                                              />
                                                            </div>
                                                            <div className="text-center card_customm_padding ms-5">
                                                              <h4 className="card_heading">{item.product.name}</h4>
                                                              <p className="card_paragraph">
                                                                <span className="italic_text">{item.product.tagline}</span>
                                                              </p>
                                                            </div>
                                                          </div>
                                                        </SwiperSlide>
                                                        
                                                        )
                                                      ))
                                                    ) : null}
                                                  </Swiper>
                                                )}
                                                <button type="button" className="btn btn-outline-dark custom-btn w-25 mb-5">Learn more</button>
                                              </div>
                                            )}
                                            {activeTab4 === 2 && (
                                              <div className="container mt-5 mx-4">
                                                {loading3 ? ( // Conditionally render loader if loading3 state is true
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
                                                  <Swiper
                                                    slidesPerView={3}
                                                    breakpoints={{
                                                      280: {
                                                        slidesPerView: 1,
                                                      },
                                                      // When window width is >= 768px
                                                      768: {
                                                        slidesPerView: 1,
                                                      },
                                                      // When window width is >= 992px
                                                      992: {
                                                        slidesPerView: 3,
                                                      },
                                                    }}
                                                    spaceBetween={0}
                                                    navigation={true}
                                                    modules={[Navigation]}
                                                    className="mySwiper"
                                                  >
                                                    {filteredOptionalsItem && filteredOptionalsItem.length > 0 ? (
                                                      filteredOptionalsItem.map((item, index) => (
                                                        item.product.product_category_id === 2 && (
                                                          <SwiperSlide key={index}>
                                                            <div className="card">
                                                              <div className="img">
                                                                <img
                                                                  src={item.product.image}
                                                                  alt="img"
                                                                  className="img-fluid w-75" // Assuming you want the image to take full width
                                                                  draggable="false"
                                                                />
                                                              </div>
                                                              <div className="text-center card_customm_padding ms-5">
                                                                <h4 className="card_heading">{item.product.name}</h4>
                                                                <p className="card_paragraph">
                                                                  <span className="italic_text">{item.product.tagline}</span>
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </SwiperSlide>
                                                        )
                                                      ))
                                                    ) : null}
                                                  </Swiper>
                                                )}
                                                <button type="button" className="btn btn-outline-dark custom-btn w-25 py-2 mt-5">Learn more</button>
                                              </div>
                                            )}
                                            {activeTab4 === 3 && (
                                              <div className="container mx-4 mt-5">
                                                {loading3 ? ( // Conditionally render loader if loading3 state is true
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
                                                  <Swiper
                                                    slidesPerView={3}
                                                    breakpoints={{
                                                      280: {
                                                        slidesPerView: 1,
                                                      },
                                                      // When window width is >= 768px
                                                      768: {
                                                        slidesPerView: 1,
                                                      },
                                                      // When window width is >= 992px
                                                      992: {
                                                        slidesPerView: 1,
                                                      },
                                                    }}
                                                    spaceBetween={0}
                                                    navigation={true}
                                                    modules={[Navigation]}
                                                    className="mySwiper"
                                                    centeredSlides={true}
                                                  >
                                                    {filteredOptionalsItem && filteredOptionalsItem.length > 0 ? (
                                                      filteredOptionalsItem.map((item, index) => (
                                                        item.product.product_category_id === 3 && (
                                                          <SwiperSlide key={index}>
                                                            <div className="card">
                                                              <div className="img">
                                                                <img
                                                                  src={item.product.image}
                                                                  alt="img"
                                                                  className="img-fluid w-25" // Assuming you want the image to take full width
                                                                  draggable="false"
                                                                />
                                                              </div>
                                                              <div className="text-center card_customm_padding ms-5">
                                                                <h4 className="card_heading">{item.product.name}</h4>
                                                                <p className="card_paragraph">
                                                                  <span className="italic_text">{item.product.tagline}</span>
                                                                </p>
                                                              </div>
                                                            </div>
                                                          </SwiperSlide>
                                                        )
                                                      ))
                                                    ) : null}
                                                  </Swiper>
                                                )}
                                                <button type="button" className="btn btn-outline-dark custom-btn w-25 mb-3">Learn more</button>
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      </div>}
                                      <p className='mt-2 d-block d-md-none' style={{ color: 'rgba(215, 25, 33, 1)' }}>*Power comparison merupakan perbandingan hp (Horse Power)</p>
                                    </div>
                                  </div>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>)}
      <div className='section-3 mt-5'>
        <div className='container'>
          <h5 className='fw-bold title-2'>Hanya Bengkel Resmi Toyota yang mengerti </h5>
          <h5 className='fw-bold'> kendaraan Toyota Anda  </h5>
          <p className='mb-5'>Telusuri penawaran terbaik di bengkel Resmi kami!</p>
          <div className="row">
            <div className="col-sm-6 col-lg-4">
              <div className="card custom_box_shadow mt-4 mt-lg-0">
                <img src="assets/services.png" className="rounded-0" alt="..." />
                <div className="card-body">
                  <h4 className="card-title service_card_title fw-bold">Services</h4>
                  <NavLink to="/services">
                    <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
                  </NavLink>

                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card custom_box_shadow mt-5 mt-lg-0">
                <img src="assets/home-card-img2.png" className="rounded-0" alt="..." />
                <div className="card-body">
                  <h4 className="card-title service_card_title  fw-bold">Products</h4>
                  <NavLink to="/products">
                    <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card custom_box_shadow mt-5 mt-lg-0">
                <img src="assets/warrenty-img.png" className="rounded-0" alt="..." />
                <div className="card-body">
                  <h4 className="card-title service_card_title  fw-bold">Warranty</h4>
                  <NavLink to="/warranty">
                    <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-sm-6 col-lg-4">
              <div className="card custom_box_shadow mt-5 mt-lg-0">
                <img src="assets/T-care.png" className="rounded-0" alt="t-care-img" />
                <div className="card-body">
                  <h5 className="card-title service_card_title  fw-bold">T-CARE</h5>
                  <NavLink to="/t-care">
                    <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="card custom_box_shadow mt-5 mt-lg-0">
                <img src="assets/News-event.png" className="rounded-0" alt="news-event-img" />
                <div className="card-body">
                  <h5 className="card-title service_card_title  fw-bold">News & Events</h5>
                  <NavLink to="/news-information">
                    <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 mb-4 mb-md-0">
              <div className="card custom_box_shadow mt-5  mt-lg-0">
                <img src="assets/home-card-img1.png" className="rounded-0" alt="faq-img" />
                <div className="card-body">
                  <h5 className="card-title service_card_title fw-bold">FAQ</h5>
                  <NavLink to="/faq">
                    <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className='logos d-flex justify-content-center mt-5 mb-4'>
            <div className='mx-2'>
              <img src="assets/quality-service.png" alt="t-care-img" />
            </div>
            <div className='mx-2'>
              <img src="assets/genuine-parts (1).png" alt="t-care-img" />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
