import React, { useState, useEffect} from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import axios from 'axios';
import { Oval } from 'react-loader-spinner'

import '../css/home.css';
function HomePage() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);
  const [carModels, setCarModels] = useState([]);
  const [carVariant, setCarVariant] = useState([]);
  const [selectedCar, setSelectedCar] = useState("All New Alphard");
  const [selectedCarImage, setSelectedCarImage] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState('');
  const [selectedCarId, setSelectedCarId] = useState(null); // State to hold the ID of the selected car
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [serviceDescriptions, setServiceDescriptions] = useState([]);
  const [serviceDisclaimer, setServiceDisclaimer] = useState('');
  const [packageNames, setPackageNames] = useState([]);
  const [packageImages, setPackageImages] = useState([]);
  const [moleculeImages, setMoleculeImages] = useState([]);
    const [moleculePhotos, setMoleculePhotos] = useState([]);
    const [moleculeTitles, setMoleculeTitles] = useState([]);
    const [showAlphardWrapper, setShowAlphardWrapper] = useState(false);
    const [activeServiceTab, setActiveServiceTab] = useState(1); 

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
      console.log('image:', defaultCarModel.image)
    }
  }, [carModels]);

  const fetchCarModels = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://aftersales-toyota-revamp.thriveagency.id/api/car',{
        headers: {
            'Authorization': 'Bearer OMN2FLG6hFY1QOUSB8WsEAl05JXV2XuZneARmOujoZsAq5wJO1qZ4rg4gTkE'
          }
      });
      setCarModels(response.data.data);
      setLoading(false); 
      console.log("responseCAR:", response.data)
    } catch (error) {
      console.error('Error fetching car models:', error);
      setLoading(false);
    }
  };
  const fetchVarients = async (carId) => {
    try{
        const response = await axios.get(`https://aftersales-toyota-revamp.thriveagency.id/api/variant?car_id=${carId}`, {
            headers: {
            'Authorization': 'Bearer OMN2FLG6hFY1QOUSB8WsEAl05JXV2XuZneARmOujoZsAq5wJO1qZ4rg4gTkE'
          }
      });
      setCarVariant(response.data.data);
      const serviceDescriptionsArray = response.data.data.map(variant => variant.services.map(service => service.service_description));
      console.log("Description:", serviceDescriptionsArray);
      setServiceDescriptions(serviceDescriptionsArray.flat());
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
        console.log("carimage:",selectedCarModel.image)
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
  let globalVariantId;

  const handleTabClick = async (variantId, index) => {
      setActiveTab(index);
      globalVariantId = variantId;
      console.log("variantid",globalVariantId);
      try {
        setLoading2(true);
          const response = await axios.get(`https://aftersales-toyota-revamp.thriveagency.id/api/combination`, {
            
              headers: {
                  'Authorization': 'Bearer OMN2FLG6hFY1QOUSB8WsEAl05JXV2XuZneARmOujoZsAq5wJO1qZ4rg4gTkE'
              }
          });
          if (response.data && response.data.data && response.data.data.length > 0)
          {
            setLoading2(false);
            console.log("responsevariant:", response.data.data);
          }
          else{
            setErrorMessage("No data found in the response.");
            setLoading2(false);
          }
          
      } catch (error) {
        setLoading2(false);
          console.error('Error fetching variant:', error);
      }
  };  
    
  const handleServiceTab = async (serviceNo) => {
    try {
           // Remove active class from all nav links
           const navLinks = document.querySelectorAll('.custom-nav-link');
           navLinks.forEach(link => link.classList.remove('active'));
           const clickedNavLink = document.querySelector(`.custom-nav-link[data-service="${serviceNo}"]`);
           if (clickedNavLink) {
               clickedNavLink.classList.add('active');
           }
      setLoading2(true);
    
        const response = await axios.get(`https://aftersales-toyota-revamp.thriveagency.id/api/combination`, {
            params: {
                variant_id: globalVariantId,
                service_no: serviceNo
            },
            headers: {
                'Authorization': 'Bearer OMN2FLG6hFY1QOUSB8WsEAl05JXV2XuZneARmOujoZsAq5wJO1qZ4rg4gTkE'
            }
        });
        setActiveServiceTab(serviceNo);
       
        if (response.data && response.data.data && response.data.data.length > 0) {
            const disclaimer = response.data.data[0].variant.car.disclaimer;
            setServiceDisclaimer(disclaimer);
            console.log("disclaimer:", disclaimer);
            debugger
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
      
            setLoading2(false);
            console.log("Package names:", packageNames);
            console.log("Package images:", images);
            console.log("molecile images:", moleculeImages);
            console.log("molecile photos:", moleculePhotos);
        } else {
          setServiceDisclaimer("");
          setPackageNames([]);
          setPackageImages([]);
          setMoleculeImages([]);
          setMoleculePhotos([]);
          setMoleculeTitles([]);
          setErrorMessage("No data found in the response.");
            setLoading2(false);
        }
    } catch (error) {
        console.error('Error fetching variant:', error);
    }
};
  const handleTab2Click = (index) => {
    setActiveTab2(index); 
};
    const scrollLeft = () => {
      document.getElementById("myTab").scrollLeft -= 100;
    };
  
    const scrollRight = () => {
      document.getElementById("myTab").scrollLeft += 100; // Adjust scroll distance as needed
    };
  return (
    <div>
      <Header></Header>
      <div className='section-1 p-0 ' id='section-1'>
      <div id="carouselExample" className="carousel slide d-none d-lg-block" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="assets/home-page-slider.png" className="d-block w-100" alt="Slide 1" />
        </div>
        <div className="carousel-item">
          <img src="assets/home-page-slider.png" className="d-block w-100" alt="Slide 2" />
        </div>
        <div className="carousel-item">
          <img src="assets/home-page-slider.png" className="d-block w-100" alt="Slide 3" />
        </div>
         <div className="carousel-item">
          <img src="assets/home-page-slider.png" className="d-block w-100" alt="Slide 3" />
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
        <img src='assets/showcase.png' alt='showcase' className='img-fluid w-100 '/>
    </div>
      </div>
      <div className='section-2 mt-5'>
        <div className='container px-0'>
        <div className='section-2-content px-0 px-md-5 mb-4'>
            <div className='main-heading text-center'>
                    <h2 className='fw-bold'>Meningkatkan Kenyamanan Para Customer dengan Aftersales Test</h2>
                </div>
                <div className='section-text'>
                    <p>After Sales Service Toyota dengan kualitas servis terjamin karena kendaraan Anda akan ditangani oleh teknisi yang berpengalaman dan bersertifikat. Layanan di bengkel resmi Toyota menggunakan Toyota Genuine Parts yaitu suku cadang resmi dari Toyota dengan mengedepankan kualitas dan telah dirancang sesuai dengan spesifikasi dan kebutuhan kendaraan kesayangan Anda. Jaringan luas dengan 297 bengkel perawatan dan perbaikan serta 80 bengkel Body & Paint yang tersebar di seluruh penjuru Nusantara.</p>
                </div>
            </div>
            <div className='px-lg-5 justify-content-center justify-content-lg-start mx-auto'>
          <div className='row mx-boxes align-items-stretch'>
          <div className='col-6 col-md'>
                  <div className='wrapper border-0 mb-4 mb-md-3 h-100'>
                      <div className='section-img'>
                        <img src="assets/value_icon_1.png" alt='' />
                    </div>
                    <div className='title mt-4'>
                        <h4 className='fw-bold text-dark'>Servis yang Berkualitas</h4>
                    </div>
                </div>
            </div>
            <div className='col-6 col-md w-50'>
                <div className='wrapper border-0 mb-4 mb-md-3 h-100'>
                    <div className='section-img'>
                        <img src="assets/value_icon_2.png" alt='' />
                    </div>
                    <div className='title mt-5'>
                        <h4 className='fw-bold text-dark'>Toyota Genuine Parts</h4>
                    </div>
                </div>
            </div>
            <div className='col-6 mx-auto col-md d-flex justify-content-center mt-4 mt-lg-0'>
                <div className='wrapper border-0 mb-4 mb-md-3 h-100'>
                    <div className='section-img'>
                        <img src="assets/location-icon.png" alt='' />
                    </div>
                    <div className='title mt-4'>
                        <h4 className='fw-bold px-md-4 text-dark'>Jaringan yang luas</h4>
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
            <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example"  value={selectedCar}
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
      wrapperStyle={{marginTop: '10%', marginBottom: '10%' }}
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
                            style={{ position: "absolute", top: "8px", left:"-4px" }}
                          />
                        </div>
                        <ul
                            className="nav custom-home-tabs custom-nav-tabs nav-fill custom-nav-fill"
                           
                            style={{ borderBottom: "none !important", whiteSpace: "nowrap" }}
                            >
                          <li className="nav-item  custom-nav-item" role="presentation">
                            <button
                            
                              className="nav-link custom-nav-link active tab-boxes"
                              style={{ margin: "0", padding: "2px", height: "60px", width: "160px" }}
                              onClick={() => handleServiceTab(1)}
                              data-service="1"
                              >
                              <div className="d-flex flex-column servis-tabs py-1 ">
                                <span>Servis ke-1</span>
                                <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                              style={{ margin: "0", padding: "2px", height: "60px",width: "155px" }}
                              onClick={() => handleServiceTab(2)}
                              data-service="2"
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-2</span>
                                <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                        
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                              onClick={() => handleServiceTab(3)}
                              data-service="3"
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-3</span>
                                <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes tab-boxes"
                           
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                              onClick={() => handleServiceTab(4)}
                              data-service="4"
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-4</span>
                                <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                              onClick={() => handleServiceTab(5)}
                              data-service="5"
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-5</span>
                                 <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                              onClick={() => handleServiceTab(6)}
                              data-service="6"
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-6</span>
                                 <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                             
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                              onClick={() => handleServiceTab(7)}
                              data-service="7"
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-7</span>
                                 <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                            
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                              onClick={() => handleServiceTab(8)}
                              data-service="8"
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-8</span>
                                 <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                            
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                              onClick={() => handleServiceTab(9)}
                              data-service="9"
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-9</span>
                                 <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                            
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                              onClick={() => handleServiceTab(10)}
                              data-service="10"
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-10</span>
                                 <span>FREE</span>
                              </div>
                            </button>
                          </li>
                          <li className="nav-item custom-nav-item" role="presentation">
                            <button
                              className="nav-link custom-nav-link tab-boxes"
                           
                              style={{ margin: "0", padding: "2px", height: "60px",width: "150px" }}
                              onClick={() => handleServiceTab(11)}
                              data-service="11"
                            >
                              <div className="d-flex flex-column py-1 servis-tabs">
                                <span>Servis ke-11</span>
                                 <span>FREE</span>
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
                        
                        >
                          {activeServiceTab === 1 && (
                          <div className="container mt-5">
                          <div className='servis-content mx-md-5'>
                                <h1 className='servis-title'>GRATIS</h1>
                                <h1>Servis berkala setelah <span className='inline-text' >6 bulan</span> </h1>
                                <p className='text mt-3'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                            </div>
                            <div className='row mt-5 mx-md-5'>
                          <div className='col-md-6'>
                              <div className='d-flex justify-content-center align-items-center mx-4'>
                                  <div>
                                      <img src="assets/Komponen Mesin.png" alt='' />
                                  </div>
                                  <p className='px-3 mb-0 text-nowrap'>Periksa Komponen Mesin</p> 
                              </div>
                              <div className='d-flex justify-content-between mt-4'>
                                  <div className='d-flex align-items-center'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Oli mesin</p>
                                  </div>
                                  <div className='d-flex align-items-center mx-md-5'>
                                      <img src="assets/Check.png" className='mx-md-5' alt='' />
                                      <p className='px-3 px-md-0 mb-0 text-nowrap '>Pipa gas buang</p> 
                                  </div>
                              </div>
                              <div className='d-flex mt-3'>
                                  <div className='d-flex align-items-center'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Sistem pendingin</p> 
                                  </div>
                                  <div className='d-flex align-items-center mx-md-4'>
                                      <img src="assets/Check.png" className='mx-md-1' alt='' />
                                      <p className='px-3 mb-0 text-nowrap' >Baterai 12 Volt</p> 
                                  </div>
                              </div>
                              <div className='d-flex justify-content-between mt-3'>
                                  <div className='d-flex align-items-center'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Cairan pendingin mesin & power control unit</p>
                                  </div>
                              </div>
                          </div>
                          <div className='col-md-6 mt-5 mt-md-0'>
                              <div className='d-flex justify-content-center align-items-center'>
                                  <div>
                                      <img src="assets/Komponen Mesin.png" alt='' />
                                  </div>
                                  <p className='px-3 mb-0 text-nowrap'>Periksa Komponen Mesin</p> 
                              </div>
                              <div className='d-flex mt-3'>
                                  <div className='d-flex align-items-center'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Pedal rem</p> 
                                  </div>
                                  <div className='d-flex align-items-center mx-md-4'>
                                      <img src="assets/Check.png" className=' ms-2 ms-md-2 mx-md-2' alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Ban</p>
                                  </div>
                              </div>
                              <div className='d-flex  mt-3'>
                                  <div className='d-flex align-items-center'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Minyak rem</p>
                                  </div>
                                  <div className='d-flex align-items-center mx-md-4'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Lampu, Klakson, Kaca Wiper</p>
                                  </div>
                              </div>
                              <div className='d-flex mt-3'>
                                  <div className='d-flex align-items-center'>
                                      <img src="assets/Check.png" alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Suspensi</p>
                                  </div>
                                  <div className='d-flex align-items-center mx-md-5'>
                                      <img src="assets/Check.png" className='ms-3 ms-md-0' alt='' />
                                      <p className='px-3 mb-0 text-nowrap'>Isi cairan AC</p>
                                  </div>
                              </div>
                          </div>
                      </div>      
                      <div className='d-none d-lg-block'>
                            <div className='row mx-md-5'>
                            <h1 className='fw-bold mt-5 mb-5'>Opsi Produk Toyota Lainnya</h1>
                            <div className='col-6 col-md'>
                            <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 mx-md-3 py-1 d-flex align-items-center justify-content-center'>
                            <div className='section-img'>
                              <img src="assets/value_icon_1.png" alt='' />
                            </div>   
                          </div>
                        </div>
                        <div className='col-6 col-md'>
                        <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 mx-md-3 py-1 d-flex align-items-center justify-content-center' style={{ backgroundColor: 'rgba(215, 25, 33, 1)' }}>
                                <div className='section-img ' >
                                    <img src="assets/TMO-02.png" alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='col-6 col-md'>
                            <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 mx-md-3 mt-2 mt-md-0 py-1 d-flex align-items-center justify-content-center'>
                                <div className='section-img'>
                                    <img src="assets/location-icon.png" alt='' />
                                </div>
                            </div>
                        </div>
                            </div>
                            <div className='row mx-md-5 mt-4'>
                            <div className='col-6 col-md'>
                            <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 mx-md-3 py-4 d-flex flex-column align-items-center justify-content-center'>
                            <div className='section-img'>
                              <img src="assets/4L 5W-30 Gasoline.png" alt='' />
                            </div>   
                            <p className='pt-2'>Layanan Ban dari Toyota</p>
                          </div>
                        </div>
                        <div className='col-6 col-md'>
                        <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 py-4 mx-3  d-flex flex-column align-items-center justify-content-center'>
                                <div className='section-img ' >
                                    <img src="assets/Rectangle 87.png" alt='' />
                                </div>
                                <p className='pt-2'>Layanan Ban dari Toyota</p>
                            </div>
                        </div>
                        <div className='col-6 col-md'>
                            <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 mx-3 py-4 d-flex flex-column align-items-center justify-content-center'>
                                <div className='section-img'>
                                    <img src="assets/Engine Room Treatment 1.png" alt='' />
                                </div>
                                <p className='pt-2'>Layanan Ban dari Toyota</p>
                            </div>
                        </div>
                            </div>
                            <div className='row mx-5 mt-4'>
                            <div className='col-6 col-md'>
                            <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 mx-3 py-4 d-flex flex-column align-items-center justify-content-center'>
                            <div className='section-img'>
                              <img src="assets/4L 5W-30 Gasoline.png" alt='' />
                            </div>   
                            <p className='pt-2'>Cairan pembersih kaca/mika lampu yang kusam</p>
                          </div>
                        </div>
                        <div className='col-6 col-md'>
                        <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 py-4 mx-3  d-flex flex-column align-items-center justify-content-center'>
                                <div className='section-img ' >
                                    <img src="assets/4L 5W-30 Gasoline (2).png" alt='' />
                                </div>
                                <p className='pt-2'>Aerosol penghilang bakteri dan penyegar kabin</p>
                            </div>
                        </div>
                        <div className='col-6 col-md'>
                            <div className='wrapper-servis border-0 mb-4 mb-md-3 h-100 mx-3 py-4 d-flex flex-column align-items-center justify-content-center'>
                                <div className='section-img'>
                                    <img src="assets/4L 5W-30 Gasoline (4).png" alt='' />
                                </div>
                                <p className='pt-2'>Cairan pembersih injector & ruang bakar</p>
                            </div>
                        </div>
                            </div>
                            <button type="button" class="btn btn-outline-dark w-25 py-2 mt-5">Learn  more</button>
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
                            {activeServiceTab >= 8 && ( 
                                  <h1 className='servis-title'>Rp 2,715,976,-</h1>
                              )}
                             <h1>Servis berkala setelah <span className='inline-text' >6 bulan</span> </h1>
                             {activeServiceTab >= 8 && (   
                             <p className='text mt-3'>{serviceDescriptions.length > 0 && serviceDescriptions[8] ? serviceDescriptions[8] : "No description available"}</p>)}
                             <p className='text mt-3'>{serviceDisclaimer}</p>
                            </div>
                            <div className='container'>
                          <div className='d-flex justify-content-center'>
                            <div className='row mt-5'>
                            <div className='col-lg-6'>
                                {packageNames.map((packageName, index) => (
                                    index % 2 === 0 && (
                                        <div key={index} className='d-flex justify-content-between mt-2 mt-md-4'>
                                            <div className='d-flex'>
                                                <img src="assets/Komponen Mesin.png" alt='' />
                                                {/* <img src={packageImages[index]} alt='' /> */}
                                                <p className='px-3 text-nowrap'>{packageName}</p>
                                                {/* {errorMessage && <p>{errorMessage}</p>} */}
                                            </div>
                                            {index + 1 < packageNames.length && (
                                                <div className='d-flex'>
                                                    <img src="assets/Komponen Mesin.png" alt='' />
                                                    <p className='px-3 text-nowrap'>{packageNames[index + 1]}</p>
                                                    {/* {errorMessage && <p>{errorMessage}</p>} */}
                                                </div>
                                            )}
                                        </div>
                                    )
                                ))}
                             </div>

                            </div>
                        </div>
                              <div className='d-flex justify-content-center'>
                                <div className='row mt-5'>
                                  <div className='col-lg-12'>
                                    <ul className="nav nav-pills nav-fill home-tab d-flex">
                                        <li className="nav-item mx-2">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 0 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(0)}>TMO Oli Mesin</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className={`nav-link text-nowrap rounded py-3 text-nowrap px-5 ${activeTab2 === 1 ? 'active' : ''}`} href="javascript:void(0)" onClick={() => handleTab2Click(1)}>Tambah Produk Lain</a>
                                        </li>
                                    </ul>
                                 </div>
                                </div>
                            </div>
                            {activeTab2 === 0 && <div>
                          <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text px-md-5'>Berlaku Program T-CARE sampai servis ke 7 atau 3 tahun untuk pembelian model baru mulai bulan Maret 2023</p>
                             <h1>TMO Oli Mesin</h1>
                             <p className='text-red'>Tingkat Kekentalan molekul</p>
                             </div>
                          </div>
                          <div className='container'>
                        <div className='row justify-content-md-center tmo-oli'> 
                        <div className='col-md-3 bg-grey mx-md-2 text-center d-flex flex-md-column'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-3 d-none d-md-block'>Oli Standar</p>
                              <p className='pt-3 fw-bold standard d-block d-md-none mb-4'>{moleculeTitles[0]}</p>
                              <p className='pt-md-3 pt-0'>10W-30</p>
                              <div className='tmo-image'>
                                  {moleculeImages[0] ? (
                                      <img src={moleculeImages[0]} alt='' />
                                  ) : (
                                      <p>{errorMessage}</p>
                                  )}
                              </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-3 d-block d-md-none'>Oli Standar</p>
                          <p className='pt-4 fw-bold standard d-none d-md-block'>
                              {moleculeTitles[0] ? moleculeTitles[0] : errorMessage}
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
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>{moleculeTitles[1]}</span>
                          </p>
                              <p className='pt-4'>SW-30</p>
                             <div className='tmo-image'>
                            <img src={moleculeImages[1]} alt='' />
                        </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>{moleculeTitles[1]}</span>
                          </p>                            
                              <div className='tmo-image molecule-photos pb-3 pb-md-0'>
                                <img src={moleculePhotos[1]} alt='' />
                            </div>
                          </div>
                      </div>
                      <div className='col-md-3 bg-pink text-center d-flex flex-md-column mt-2 mt-md-0'>
                          <div className='col-6 order-1 order-md-0'>
                              <p className='pt-4'>
                              <span className="d-block d-md-none">+0.8%</span>
                              <span className="d-block d-md-none mb-3" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>{moleculeTitles[2]}</span>
                          </p>
                              <p className='pt-4'>0W-20</p>
                             <div className='tmo-image'>
                                <img src={moleculeImages[2]} alt='' />
                            </div>
                          </div>
                          <div className='col-6 order-0 order-md-1'>
                          <p className='pt-4'>
                            <span className="d-block d-md-none"style={{ color: 'rgba(215, 25, 33, 1)', fontSize: '16px' }}>Opsi Upgrade Oli</span>
                              <span className="d-none d-md-block">+0.8%</span>
                              <span className="d-none d-md-block" style={{ color: 'rgba(22, 26, 29, 1)', fontSize: '14px' }}>{moleculeTitles[2]}</span>
                          </p> 
                                 <div className='tmo-image'>
                                    <img src={moleculePhotos[2]} alt='' />
                                </div>
                              <p className='mt-2 text-red d-none d-md-block text-nowrap' style={{ color: 'rgba(215, 25, 33, 1)', fontSize:'14px' }}>
                                *Power comparison merupakan <br/> perbandingan hp  (Horse Power)
                            </p>
                          </div>
                      </div>
                        </div>
                    </div>
                         </div>}
                         {activeTab2 === 1 && <div>
                         <div className='d-flex justify-content-center servis-2-tab'>
                             <div className='row mt-5'>
                             <p className='text-red pb-4'>REKOMENDASI PRODUK</p>
                             </div>
                          </div>
                          <div className='container'>
                            <div className='row'>
                              <div className='col-md-4 mx-md-5 text-center d-flex justify-content-end'>
                                <img src="assets/Brake Cleaner.png" alt='brake' />
                              </div>
                              <div className='col-md-6 mx-md-2'>
                                <h1 className='text-start'>TMO Brake Cleaner</h1>
                                <p className='text-start'>Menghindari brake failure yang diakibatkan oleh kotoran dan memberikan feeling pengereman yang lebih baik</p>
                                <div className='d-flex'>
                                <img src="assets/tyre.png" className='w-50' alt='brake' />
                                <img src="assets/tyre2.png" className='w-50' alt='brake' />
                                </div>
                              </div>
                              <h1 className='mt-4'>Opsi Produk Toyota Lainnya</h1>
                         <div className='d-flex justify-content-center mt-5'>
                                <img src="assets/tire-solution.png" className='mx-4 px-2 py-3' alt='' style={{ borderRadius: '10px', border: '2px solid rgba(215, 25, 33, 1)' }} />
                                <img src="assets/tmo.png" className='mx-4 px-4 py-2' alt='' style={{ borderRadius: '10px', border: '2px solid rgba(215, 25, 33, 1)' }} />
                                <img src="assets/tgb.png" className='mx-4 px-4 py-2' alt='' style={{ borderRadius: '10px', border: '2px solid rgba(215, 25, 33, 1)' }} />
                            </div>
                            </div>
                          </div>
                         </div>}
                         <p className='mt-2 d-block d-md-none' style={{ color: 'rgba(215, 25, 33, 1)'}}>*Power comparison merupakan perbandingan hp (Horse Power)</p>
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
        <div className="card mt-4 mt-lg-0" style={{width: "18rem"}}>
          <img src="assets/services.png" className="card-img-top rounded-0" alt="..."/>
          <div className="card-body">
            <h4 className="card-title fw-bold">Services</h4>
            <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4">
        <div className="card mt-5 mt-lg-0" style={{width: "18rem"}}>
          <img src="assets/products-img.png" className="card-img-top rounded-0" alt="..."/>
          <div className="card-body">
            <h4 className="card-title fw-bold">Products</h4>
            <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4">
        <div className="card mt-5 mt-lg-0" style={{width: "18rem"}}>
          <img src="assets/warrenty-img.png" className="card-img-top rounded-0" alt="..."/>
          <div className="card-body">
            <h4 className="card-title fw-bold">Warrenty</h4>
            <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
          </div>
        </div>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-sm-6 col-lg-4">
        <div className="card mt-5 mt-lg-0" style={{width: "18rem"}}>
          <img src="assets/T-care.png" className="card-img-top rounded-0" alt="t-care-img"/>
          <div className="card-body">
            <h5 className="card-title fw-bold">T-Care</h5>
            <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4">
        <div className="card mt-5 mt-lg-0" style={{width: "18rem"}}>
          <img src="assets/News-event.png" className="card-img-top rounded-0" alt="news-event-img"/>
          <div className="card-body">
            <h5 className="card-title fw-bold">News-Event</h5>
            <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-lg-4 mb-4 mb-md-0">
        <div className="card mt-5  mt-lg-0" style={{width: "18rem"}}>
          <img src="assets/faq.png" className="card-img-top rounded-0" alt="faq-img"/>
          <div className="card-body">
            <h5 className="card-title fw-bold">FAQ</h5>
            <button type="button" class="btn btn-outline-dark w-100 py-1 mt-4">Telusuri Sekarang</button>
          </div>
        </div>
      </div>
    </div>
    <div className='logos d-flex justify-content-center mt-5 mb-4'>
        <div className='mx-2'>
            <img src="assets/quality-service.png"  alt="t-care-img"/>
        </div>
        <div className='mx-2'>
        <img src="assets/genuine-parts (1).png"  alt="t-care-img"/>
        </div>
    </div>
  </div>
</div>


      <Footer></Footer>
    </div>
  );
}

export default HomePage;
