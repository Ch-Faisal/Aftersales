import React, { useState, useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { NavLink } from 'react-router-dom';
import "../css/t-care.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/free-mode";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import axios from "axios";
import "toastr/build/toastr.min.css"; // Import toastr CSS
import toastr from "toastr";
import { Oval } from "react-loader-spinner";
function TCare() {
  const [downloadWarranty, setDownloadWarranty] = useState(null);
  const [loading, setLoading] = useState(false);
  const [downloadCertificate, setDownloadCertificate] = useState(null);
  const [download, setDownload] = useState(null);
  const [type, setType] = useState(1);
  const [vin, setVinInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [kendaraan, setkendaraan] = useState("");
  const [warna, setwarna] = useState("");
  const [hidebutton, sethidebutton] = useState(0);
  const [guideline, setguideline] = useState("");
  const [tagline, settagline] = useState("");
  const [color, setcolor] = useState("");
  const [product, setproduct] = useState("");
  const [timerValue, setTimerValue] = useState(60); // Initialize timer value
  const [uname, setName] = useState("");
  const [uemail, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [register, setregister] = useState();
  const [tableData, settableData] = useState([]);
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");
  const [WrongVin, setWrongVin] = useState("");
  const handleInputChange = (event) => {
    setVinInput(event.target.value);
    setWrongVin('')
  };
  const [selectedMonth, setSelectedMonth] = useState(""); // State to store the selected month

  const [activeTab, setActiveTab] = useState(0);
  const [activeTab1, setActiveTab1] = useState(0);
  const [secondtab, setsecondtab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  const handleTabClick1 = (index) => {
    setActiveTab1(index); // Set the active tab
    if (index == 0) {
      setDownload(downloadCertificate);
      setType(1);
    }
    if (index == 1) {
      setDownload(downloadWarranty);
      setType(2);
    }
  };
  // Assuming you have a variable to track the active index like activeIndex
  const handleregister = (valueChannge) => {
    setsecondtab(valueChannge);
  };
  const goBack = (index1) => {
    setActive_tab1(index1);
  };

  const handleLanjutClick = async () => {
    setLoading(true);
    setDownloadWarranty("");
    setDownloadCertificate("");
    setDownload("");
    setName("");
    setEmail("");
    setPhoneNumber("");

    if (vin.length < 1) {
      toastr.error("Enter the Vin");
      setLoading(false);
      return;
    }
    try {
      const token =
        "OMN2FLG6hFY1QOUSB8WsEAl05JXV2XuZneARmOujoZsAq5wJO1qZ4rg4gTkE";
      const response = await axios.post(
        "https://aftersales-toyota-revamp.thriveagency.id/api/checkVin",
        { vin },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setcolor(response.data.data.color);
      setproduct(response.data.data.color);
      setImageUrl(response.data.imgUrl);
      settagline(response.data.tagline);
      setguideline(response.data.tagline);
      setDownloadCertificate(response.data.download_certificate);
      setDownloadWarranty(response.data.download_warranty);
      setDownload(response.data.download_certificate);
      if(downloadWarranty.length<1)
      {
        sethidebutton(1);
      }
      setLoading(false);
      setsecondtab(2);
      setregister(2);
      // setActiveCircle(activeCircle + 1);
    } catch (error) {
      // Handle error here
      setLoading(false);
      if (error.response) {
        if(error.response.data.message == 'Server Error')
        {
          toastr.error(error.response.data.message);
          setWrongVin('')
        }
        else
        {
          toastr.error(error.response.data.message);
          setWrongVin(error.response.data.message)
        }
      }
      else
      {
        toastr.error('Not Found.')
      }
      // setsecondtab(1);
      setregister(1);
    }
  };
  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value); // Update selected month when the dropdown value changes
  };
  const [selectedYear, setSelectedYear] = useState(""); // State to store the selected year

  useEffect(() => {
    const currentYear = new Date().getFullYear(); // Get the current year
    const years = Array.from(
      { length: currentYear - 1999 },
      (_, index) => 2000 + index
    ); // Create an array of years from 2000 to the current year
    setSelectedYear(currentYear.toString()); // Set the default selected year to the current year
  }, []); // Run this effect only once when the component mounts

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value); // Update selected year when the dropdown value changes
  };
  const monthMap = {
    Month: "",
    January: "1",
    February: "2",
    March: "3",
    April: "4",
    May: "5",
    June: "6",
    July: "7",
    August: "8",
    September: "9",
    October: "10",
    November: "11",
    December: "12",
  };
  const submitData = async () => {
    setLoading(true);
    const selectedMonthValue = monthMap[selectedMonth];
    if (
      uname.length < 1 ||
      uemail.length < 1 ||
      phoneNumber.length < 1 ||
      !monthMap[selectedMonth] ||
      selectedYear.length < 1
    ) {
      toastr.success("Fill all Field");
      setLoading(false);
      return;
    }
    try {
      const name = uname;
      const email = uemail;
      const phone = phoneNumber;
      const buy_month = selectedMonthValue;
      const buy_year = selectedYear;
      const token =
        "OMN2FLG6hFY1QOUSB8WsEAl05JXV2XuZneARmOujoZsAq5wJO1qZ4rg4gTkE";
      const response = await axios.post(
        "https://aftersales-toyota-revamp.thriveagency.id/api/submitData",
        {
          vin,
          name,
          email,
          phone,
          buy_month,
          buy_year,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setkendaraan(response.data.kendaraan);
      setName(response.data.name)
      setEmail(response.data.email)
      setPhoneNumber(response.data.telepon)
      setVinInput(response.data.vin)
      setwarna(response.data.warna)
      setSelectedYear(response.data.buy_year)
      setSelectedMonth(response.data.buy_month)
      setLoading(false);
      setsecondtab(4);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        toastr.error(error.response.data.message);
      }
    }
  };
  const submitRegister = async () => {
    setLoading(true);
    const selectedMonthValue = monthMap[selectedMonth];
    try {
      const name = uname;
      const email = uemail;
      const phone = phoneNumber;
      const buy_month = selectedMonthValue;
      const buy_year = selectedYear;
      const token =
        "OMN2FLG6hFY1QOUSB8WsEAl05JXV2XuZneARmOujoZsAq5wJO1qZ4rg4gTkE";
      const response = await axios.post(
        "https://aftersales-toyota-revamp.thriveagency.id/api/submitRegister",
        {
          vin,
          name,
          email,
          phone,
          buy_month,
          buy_year,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);
      setsecondtab(5);
      setTimerValue(60);
      countdown()
    } catch (error) {
      setLoading(false);
      if (error.response) {
        toastr.error(error.response.data.message);
      }
    }
  };
  const submitOtp = async () => {
    setLoading(true);
    const selectedMonthValue = monthMap[selectedMonth];
    const otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
    try {
      const token =
        "OMN2FLG6hFY1QOUSB8WsEAl05JXV2XuZneARmOujoZsAq5wJO1qZ4rg4gTkE";
      const response = await axios.post(
        "https://aftersales-toyota-revamp.thriveagency.id/api/submitOtp",
        {
          otp,
          vin,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDownloadWarranty(response.data.download_warranty);
      setDownloadCertificate(response.data.download_certificate);
      setDownload(response.data.download_certificate);
      setLoading(false);
      if (response.data.vin) {
        setsecondtab(6);
      }
    } catch (error) {
      setLoading(false);
      toastr.error(error.response.data.message);
      setOtp1(""); // Empty the value of otp1
      setOtp2(""); // Empty the value of otp2
      setOtp3(""); // Empty the value of otp3
      setOtp4(""); // Empty the value of otp4
      setOtp5(""); // Empty the value of otp5
      setOtp6("");
    }
  };

 
const countdown =() =>
{
  let intervalId;
  const startTimer = () => {
    intervalId = setInterval(() => {
      setTimerValue(prevTimerValue => {
        if (prevTimerValue === 0) {
          clearInterval(intervalId);
          return 0; // Reset timer to 60 seconds
        }
        return prevTimerValue - 1;
      });
    }, 1000);
  };

  // Start the timer initially
  startTimer();

  // Clean up the timer on component unmount
  return () => clearInterval(intervalId);
}
 

  const sendEmail = async () => {
    setLoading(true);
    try {
      const token =
        "OMN2FLG6hFY1QOUSB8WsEAl05JXV2XuZneARmOujoZsAq5wJO1qZ4rg4gTkE";
      const response = await axios.post(
        "https://aftersales-toyota-revamp.thriveagency.id/api/sendEmail",
        {
          vin,
          type,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toastr.success(response.data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toastr.error(error.response.data.message);
    }
  };

  const handleDownload = () => {
    if (!download) {
      toastr.error("No PDF data available for download");
      return;
    }

    // Create a Blob from the PDF data
    const blob = new Blob([download], { type: "application/pdf" });

    // Create a URL for the Blob
    const url = URL.createObjectURL(blob);

    // Create a link element
    const link = document.createElement("a");

    // Set the href attribute of the link to the URL of the Blob
    link.href = url;

    // Set the download attribute to specify the filename
    link.download = "downloaded_file.pdf";

    // Simulate a click on the link to trigger the download
    link.click();

    // Clean up by revoking the URL object
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    if (!download) {
      toastr.error("No PDF data available for printing");
      return;
    }

    // Open a new window for printing
    const printWindow = window.open("", "_blank");

    // Write the PDF content to the new window
    printWindow.document.write(`
      <html>
        <head>
          <title>Print PDF</title>
          <style>
            @media print {
              body {
                margin: 0;
                padding: 0;
              }
            }
          </style>
        </head>
        <body>
          <embed width="100%" height="100%" type="application/pdf" src="${download}" />
        </body>
      </html>
    `);

    // Close the document for printing
    printWindow.document.close();

    // Print the document
    printWindow.print();
  };
  const [vinn, setVinn] = useState("");
  const [emaill, setEmaill] = useState("");
  const [Nodata, setNodata] = useState("");
  const [Active_tab1, setActive_tab1] = useState(1);

  const serviceHistory = async () => {
    setLoading(true);
    const vin = vinn;
    const email = emaill;
    try {
      const token =
        "OMN2FLG6hFY1QOUSB8WsEAl05JXV2XuZneARmOujoZsAq5wJO1qZ4rg4gTkE";
      const response = await axios.post(
        "https://aftersales-toyota-revamp.thriveagency.id/api/serviceHistory",
        {
          vin,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      settableData(response.data.data);
      if (response.data.message == "success.") {
        setActive_tab1(3);
      }
      // toastr.success(response.data.message);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setNodata(error.response.data.message);
      setActive_tab1(2);
      toastr.error(error.response.data.message);
    }
  };

  return (
    <div id="navbar_top">
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
      <div className="container-fluid p-0 mt-5 ">
        <div className="container px-lg-5">
          <div className="section-1">
            <div className="row">
              <div class="col-md-5 d-flex">
                <div class="section-image my-auto">
                  <img src="assets/logo-tcare 1.png" alt="logo" />
                </div>
              </div>
              <div className="col-md-7">
                <div className="section-content_12">
                  <p className="text-start">
                  Toyota sangat peduli terhadap keamanan dan kenyamanan Anda saat berkendara<strong> T-Care</strong> memberikan Anda
                    <strong>
                    Bebas Biaya Jasa Servis Berkala dan Suku Cadang*
                    </strong>
                    sebanyak
7x servis selama 3 tahun.
                  </p>
                  <p>
                  Dengan rutin servis berkala setiap 6 bulan, Anda juga dapat menikmati reward berupa
                    <strong>Extended Warranty 1 tahun/20.000 km!**</strong>
                  </p>
                  <p> *sesuai ketentuan yang tertera pada buku servis <br /> *khusus model LCGC hanya berlaku bebas biaya jasa servis berkala <br />**total warranty menjadi 4 tahun/120.000 km </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-lg-5">
          <div className="section-2 mt-5">
            <div className="row">
              <div class="col-lg-6 d-flex">
                <div class="section-content text-start my-auto">
                  <p className="Check">Check your</p>
                  <h1>Certificate & Service Record!</h1>
                  <p>
                    Cek nomor rangka kendaraan Anda dan dapatkan sertifikat
                    elektroniknya serta catatan servisnya untuk program{" "}
                    <strong>T-CARE, T-CARE Lite, Extended Warranty,</strong> dan{" "}
                    <strong>GBSB</strong>.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 ">
                <ul className="nav nav-pills nav-fill">
                  <li className="nav-item">
                    <a
                      className={`tabs sertifikat nav-link py-3 li_text_1 ${
                        activeTab === 0 ? "active" : ""
                      }`}
                      href="javascript:void(0)"
                      onClick={() => handleTabClick(0)}
                    >
                      Sertifikat Elektronik
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`tabs cataten nav-link py-3 li_text_1 ${
                        activeTab === 1 ? "active" : ""
                      }`}
                      href="javascript:void(0)"
                      onClick={() => handleTabClick(1)}
                    >
                      Catatan Servis
                    </a>
                  </li>
                </ul>
                <div
                  style={{
                    display: loading
                      ? "none"
                      : activeTab === 0
                      ? "block"
                      : "none",
                  }}
                >
                  <div
                    className="tabs-section"
                    style={{
                      display: loading
                        ? "none"
                        : secondtab === 0
                        ? "block"
                        : "none",
                    }}
                  >
                    <div class="circle-tab pt-4">
                      <a href="javascript:void(0)" className={`mx-3 active`}>
                        <img src="assets/mdi_car-side.png" alt="" />
                      </a>
                      <a href="javascript:void(0)" className={`mx-4`}>
                        <img src="assets/Group (2).png" alt="" />
                      </a>
                      <a href="javascript:void(0)" className={`mx-3`}>
                        <img src="assets/Group (3).png" alt="" />
                      </a>
                    </div>
                    <div>
                      <div className="d-md-flex justify-content-between mt-4 mx-4 text-start mx-md-5">
                        <p className="tab-bold-p">Validasi Nomor Rangka</p>
                        <p className="text-danger Langkah_side_text">
                          Langkah 1 - 3
                        </p>
                      </div>
                      <div className="tab-content mx-4 mx-md-5 text-start">
                        <p className="tab-light-bold-p">
                          Nomor Rangka kendaraan Anda dapat ditemukan pada STNK
                          atau BPKB kendaraan Anda
                        </p>
                      </div>
                      <div className="form-group mx-4 mx-md-5 ">
                        <input
                          type="text"
                          className="form-control Masukkan"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Masukkan 17 Digit No. Rangka Kendaraan"
                          value={vin}
                          onChange={handleInputChange}
                        />
                        <p className="mt-1 custom_wrong_chase">{WrongVin}</p>
                      </div>
                      <button
                        className="btn btn-primary Lanjut mt-4 mb-4"
                        onClick={handleLanjutClick}
                      >
                        Lanjut
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: loading
                      ? "none"
                      : activeTab === 0
                      ? "block"
                      : "none",
                  }}
                >
                  <div
                    className="tabs-section"
                    style={{
                      display: loading
                        ? "none"
                        : secondtab === 1
                        ? "block"
                        : "none",
                    }}
                  >
                    <div class="circle-tab pt-4">
                      <a
                        className={`mx-3 active cursor-pointer`}
                        onClick={() => handleregister(0)}
                      >
                        <img src="assets/mdi_car-side.png" alt="" />
                      </a>
                      <a href="javascript:void(0)" className={`mx-4 active`}>
                        <img src="assets/Group (2).png" alt="" />
                      </a>
                      <a href="javascript:void(0)" className={`mx-3`}>
                        <img src="assets/Group (3).png" alt="" />
                      </a>
                    </div>
                    <div>
                      <div className="d-md-flex justify-content-between mt-4 mx-4 text-start mx-md-5">
                        <p className="tab-bold-p">Validasi Nomor Rangka</p>
                        <p className="text-danger Langkah_side_text">
                          Langkah 2 - 3
                        </p>
                      </div>
                      <div>
                        <img src="assets/T-Care-1.png" className="img-fluid" />
                        <p className="tab-bold-p">{vin}</p>
                      </div>
                      <div className="text-start mx-4 mx-md-5">
                        <p className="tab-bold-p">
                          Selamat! Mobil Anda Terdaftar!
                        </p>
                        <p className="tab-bold-p">
                          INNOVA 10R-BRXMBD 2.0 V HV CVT
                          <span className="tab-light-bold-p">
                           
                            dengan warna kendaraan
                          </span>
                          ATTITUDE BLACK
                        </p>
                        <p style={{ color: "#D71921" }} className="tab-bold-p">
                          {WrongVin}</p>
                      </div>
                      <div className="mb-4">
                        <button
                          className="btn btn-primary Lanjut mt-4 ms-2"
                          onClick={() => handleregister(3)}
                        >
                          Lanjut
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: loading
                      ? "none"
                      : activeTab === 0
                      ? "block"
                      : "none",
                  }}
                >
                  <div
                    className="tabs-section"
                    style={{
                      display: loading
                        ? "none"
                        : secondtab === 2
                        ? "block"
                        : "none",
                    }}
                  >
                    <div class="circle-tab pt-4">
                      <a
                        onClick={() => handleregister(0)}
                        className={`mx-3 active cursor-pointer`}
                      >
                        <img src="assets/mdi_car-side.png" alt="" />
                      </a>
                      <a href="javascript:void(0)" className={`mx-4 active`}>
                        <img src="assets/Group (2).png" alt="" />
                      </a>
                      <a href="javascript:void(0)" className={`mx-3`}>
                        <img src="assets/Group (3).png" alt="" />
                      </a>
                    </div>
                    <div>
                      <div className="d-md-flex justify-content-between mt-4 mx-4 text-start mx-md-5">
                        <p className="tab-bold-p">Validasi Nomor Rangka</p>
                        <p className="text-danger Langkah_side_text">
                          Langkah 2 - 3
                        </p>
                      </div>
                      <div>
                        <img src={imageUrl} className="img-fluid" />
                        <p className="tab-bold-p">{vin}</p>
                      </div>
                      <div className="text-start mx-4 mx-md-5">
                        <p className="tab-bold-p">
                          Hai!
                          <br />
                          Bapak/Ibu Iky.
                        </p>
                        <p className="tab-bold-p">
                          Mobil Anda Sudah Terdaftar di Program T-Care!
                        </p>
                        <p className="tab-bold-p">
                          {product}(GUN125R-DDTHXD)
                          <span className="tab-light-bold-p">
                            dengan warna kendaraan
                          </span>
                          {color}
                        </p>
                        <p style={{ color: "#D71921" }} className="tab-bold-p">
                          Ingin ubah data diri anda?
                        </p>
                      </div>
                      <div className="mb-4">
                        <button
                          className="btn btn-primary lihat_Diri mt-4"
                          onClick={() => handleregister(3)}
                        >
                          Lihat Data Diri
                        </button>
                        <button
                          className="btn btn-primary Lanjut mt-4 ms-2"
                          onClick={() => handleregister(6)}
                        >
                          Lanjut
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: loading
                      ? "none"
                      : activeTab === 0
                      ? "block"
                      : "none",
                  }}
                >
                  <div
                    className="tabs-section"
                    style={{
                      display: loading
                        ? "none"
                        : secondtab === 3
                        ? "block"
                        : "none",
                    }}
                  >
                    <div class="circle-tab pt-4">
                      <a
                        onClick={() => handleregister(0)}
                        className={`mx-3 active cursor-pointer`}
                      >
                        <img src="assets/mdi_car-side.png" alt="" />
                      </a>
                      <a href="javascript:void(0)" className={`mx-4 active`}>
                        <img src="assets/Group (2).png" alt="" />
                      </a>
                      <a href="javascript:void(0)" className={`mx-3`}>
                        <img src="assets/Group (3).png" alt="" />
                      </a>
                    </div>
                    <div>
                      <div className="d-md-flex justify-content-between mt-4 mx-4 text-start mx-md-5">
                        <p className="tab-bold-p">Validasi Nomor Rangka</p>
                        <p className="text-danger Langkah_side_text">
                          Langkah 2 - 3
                        </p>
                      </div>
                      <div className="form-group mx-4 mx-md-5 text-start ">
                        <label className="input_label">Nama sesuai KTP</label>
                        <input
                          type="text"
                          className="form-control Masukkan"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Name"
                          value={uname}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>

                      <div className="form-group mx-4 mx-md-5 text-start">
                        <label className="input_label">
                          Bulan & Tahun kendaraan diterima oleh pelanggan
                        </label>
                        <div className="d-flex">
                          <div className="me-4 w-100">
                            <select
                              className="form-select"
                              aria-label="Select Month"
                              value={selectedMonth}
                              onChange={handleMonthChange}
                              style={{ border: "none" }}
                            >
                              <option value="">Month</option>
                              <option value="January">January</option>
                              <option value="February">February</option>
                              <option value="March">March</option>
                              <option value="April">April</option>
                              <option value="May">May</option>
                              <option value="June">June</option>
                              <option value="July">July</option>
                              <option value="August">August</option>
                              <option value="September">September</option>
                              <option value="October">October</option>
                              <option value="November">November</option>
                              <option value="December">December</option>
                            </select>
                          </div>
                          <div className="w-100">
                            <select
                              className="form-select"
                              aria-label="Select Year"
                              value={selectedYear}
                              onChange={handleYearChange}
                              style={{ border: "none" }}
                            >
                              <option value="">Year</option>
                              {Array.from(
                                { length: new Date().getFullYear() - 1999 },
                                (_, index) => (
                                  <option
                                    key={2000 + index}
                                    value={2000 + index}
                                  >
                                    {2000 + index}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="form-group mx-4 mx-md-5 text-start ">
                        <label className="input_label">Email</label>
                        <input
                          type="email"
                          className="form-control Masukkan"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="email@thrive.co.id"
                          value={uemail}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group mx-4 mx-md-5 text-start">
                        <label className="input_label">Nomor Telepon</label>
                        <input
                          type="number"
                          className="form-control Masukkan"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="6281234567890"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                      <div className="mb-4">
                        <button
                          className="btn btn-primary lihat_Diri mt-4"
                          onClick={() => handleregister(0)}
                        >
                          Lihat Data Diri
                        </button>
                        <button
                          className="btn btn-primary Lanjut mt-4 ms-2"
                          onClick={submitData}
                        >
                          Lanjut
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: loading
                      ? "none"
                      : activeTab === 0
                      ? "block"
                      : "none",
                  }}
                >
                  <div
                    className="tabs-section"
                    style={{
                      display: loading
                        ? "none"
                        : secondtab === 4
                        ? "block"
                        : "none",
                    }}
                  >
                    <div>
                      <div className="pt-4">
                        <img
                          src="assets/icon-park-outline_info.svg"
                          className="img-fluid"
                        />
                        <p className="tab-bold-p pt-4">
                          Apakah data yang Anda masukkan sudah benar?
                        </p>
                      </div>
                      <div className="text-start mx-4 mx-md-5">
                        <div className="row">
                          <div className="col-4 p-0">
                            <span className="tab-light-bold-p1">Nama</span>
                          </div>
                          <div className="col-8 p-0">
                            <span className="tab-light-bold-p1">: {uname}</span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-4 p-0">
                            <span className="tab-light-bold-p1">Email</span>
                          </div>
                          <div className="col-8 p-0">
                            <span className="tab-light-bold-p1">
                              : {uemail}
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-4 p-0">
                            <span className="tab-light-bold-p1">Telepon</span>
                          </div>
                          <div className="col-8 p-0">
                            <span className="tab-light-bold-p1">
                              : {phoneNumber}
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-4 p-0">
                            <span className="tab-light-bold-p1">VIN</span>
                          </div>
                          <div className="col-8 p-0">
                            <span className="tab-light-bold-p1">: {vin}</span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-4 p-0">
                            <span className="tab-light-bold-p1">Kendaraan</span>
                          </div>
                          <div className="col-8 p-0">
                            <span className="tab-light-bold-p1">
                              : {kendaraan}
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-4 p-0">
                            <span className="tab-light-bold-p1">Warna</span>
                          </div>
                          <div className="col-8 p-0">
                            <span className="tab-light-bold-p1">
                              : {warna}
                            </span>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-4 p-0">
                            <span className="tab-light-bold-p1">
                              Bulan Penerimaan
                            </span>
                          </div>
                          <div className="col-8 p-0">
                            <span className="tab-light-bold-p1">
                              : {selectedMonth} {selectedYear}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <button
                          className="btn btn-primary lihat_Diri mt-4"
                          onClick={() => handleregister(3)}
                        >
                          Lihat Data Diri
                        </button>
                        <button
                          className="btn btn-primary Lanjut mt-4 ms-2"
                          onClick={submitRegister}
                        >
                          Lanjut
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: loading
                      ? "none"
                      : activeTab === 0
                      ? "block"
                      : "none",
                  }}
                >
                  <div
                    className="tabs-section"
                    style={{
                      display: loading
                        ? "none"
                        : secondtab === 5
                        ? "block"
                        : "none",
                    }}
                  >
                    <div class="circle-tab pt-4">
                      <a
                        onClick={() => handleregister(0)}
                        className={`mx-3 active cursor-pointer`}
                      >
                        <img src="assets/mdi_car-side.png" alt="" />
                      </a>
                      <a href="javascript:void(0)" className={`mx-4 active`}>
                        <img src="assets/Group (2).png" alt="" />
                      </a>
                      <a href="javascript:void(0)" className={`mx-3`}>
                        <img src="assets/Group (3).png" alt="" />
                      </a>
                    </div>
                    <div>
                      <div className="d-md-flex justify-content-between mt-4 mx-4 text-start mx-md-5">
                        <p className="tab-bold-p">Verifikasi Email</p>
                        <p className="text-danger Langkah_side_text">
                          Langkah 2 - 3
                        </p>
                      </div>
                      <div className="form-group mx-4 mx-md-5 text-start d-flex justify-content-center py-4 ">
                        <input
                          type="text"
                          className="otp text-center"
                          id="otp1"
                          maxLength="1"
                          value={otp1}
                          onChange={(e) => setOtp1(e.target.value)}
                          onKeyPress={(e) => {
                            // Allow only numbers to be entered
                            const isValidInput = /^\d*$/.test(e.key);
                            const isMaxLengthReached =
                              e.target.value.length >= 1;

                            if (!isValidInput || isMaxLengthReached) {
                              e.preventDefault();
                            }
                          }}
                        />
                        <input
                          type="text"
                          className="otp text-center"
                          id="otp2"
                          maxLength="1"
                          value={otp2}
                          onChange={(e) => setOtp2(e.target.value)}
                          onKeyPress={(e) => {
                            // Allow only numbers to be entered
                            const isValidInput = /^\d*$/.test(e.key);
                            const isMaxLengthReached =
                              e.target.value.length >= 1;

                            if (!isValidInput || isMaxLengthReached) {
                              e.preventDefault();
                            }
                          }}
                        />
                        <input
                          type="text"
                          className="otp text-center"
                          id="otp3"
                          maxLength="1"
                          value={otp3}
                          onChange={(e) => setOtp3(e.target.value)}
                          onKeyPress={(e) => {
                            // Allow only numbers to be entered
                            const isValidInput = /^\d*$/.test(e.key);
                            const isMaxLengthReached =
                              e.target.value.length >= 1;

                            if (!isValidInput || isMaxLengthReached) {
                              e.preventDefault();
                            }
                          }}
                        />
                        <input
                          type="text"
                          className="otp text-center"
                          id="otp4"
                          maxLength="1"
                          value={otp4}
                          onChange={(e) => setOtp4(e.target.value)}
                          onKeyPress={(e) => {
                            // Allow only numbers to be entered
                            const isValidInput = /^\d*$/.test(e.key);
                            const isMaxLengthReached =
                              e.target.value.length >= 1;

                            if (!isValidInput || isMaxLengthReached) {
                              e.preventDefault();
                            }
                          }}
                        />
                        <input
                          type="text"
                          className="otp text-center"
                          id="otp5"
                          maxLength="1"
                          value={otp5}
                          onChange={(e) => setOtp5(e.target.value)}
                          onKeyPress={(e) => {
                            // Allow only numbers to be entered
                            const isValidInput = /^\d*$/.test(e.key);
                            const isMaxLengthReached =
                              e.target.value.length >= 1;

                            if (!isValidInput || isMaxLengthReached) {
                              e.preventDefault();
                            }
                          }}
                        />
                        <input
                          type="text"
                          className="otp text-center"
                          id="otp6"
                          maxLength="1"
                          value={otp6}
                          onChange={(e) => setOtp6(e.target.value)}
                          onKeyPress={(e) => {
                            // Allow only numbers to be entered
                            const isValidInput = /^\d*$/.test(e.key);
                            const isMaxLengthReached =
                              e.target.value.length >= 1;

                            if (!isValidInput || isMaxLengthReached) {
                              e.preventDefault();
                            }
                          }}
                        />
                      </div>
                      <p className="tab-light-bold-p1 mx-4 mx-md-5 text-start">
                        Silakan masukkan 6 digit kode OTP yang dikirimkan ke
                        email Anda.
                      </p>
                      <div className=" mx-4 mx-md-5 text-start d-flex">
                        <p className="tab-light-bold-p1">
                          Tidak menerima kode verifikasi? silakan{" "}
                        </p>
                        <p
                          className="text-danger tab-light-bold-p1"
                          style={{
                            display: timerValue != 0 ? "block" : "none",
                          }}
                        >
                          {" "}
                          &nbsp; klik di sini &nbsp;
                        </p>
                        <p
                          className="text-danger tab-light-bold-p1 cursor-pointer"
                          onClick={submitRegister}
                          style={{
                            display: timerValue === 0 ? "block" : "none",
                          }}
                        >
                          &nbsp; klik di sini &nbsp;
                        </p>
                        <p className="tab-light-bold-p1">00:{timerValue}</p>
                      </div>
                      <div className="mb-4">
                        <button
                          className="btn btn-primary Lanjut mt-4 ms-2"
                          onClick={submitOtp}
                        >
                          Lanjut
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: loading
                      ? "none"
                      : activeTab === 0
                      ? "block"
                      : "none",
                  }}
                >
                  <div
                    className="tabs-section"
                    style={{
                      display: loading
                        ? "none"
                        : secondtab === 6
                        ? "block"
                        : "none",
                    }}
                   
                  >
                    <div class="circle-tab pt-4">
                      <a
                        onClick={() => handleregister(0)}
                        className={`mx-3 active cursor-pointer`}
                      >
                        <img src="assets/mdi_car-side.png" alt="" />
                      </a>
                      {register === 2 && (
                        <a
                          onClick={() => handleregister(2)}
                          className={`mx-4 active cursor-pointer`}
                        >
                          <img src="assets/Group (2).png" alt="" />
                        </a>
                      )}
                      {register === 1 && (
                        <a
                          onClick={() => handleregister(1)}
                          className={`mx-4 active cursor-pointer`}
                        >
                          <img src="assets/Group (2).png" alt="" />
                        </a>
                      )}

                      <a href="javascript:void(0)" className={`mx-3 active`}>
                        <img src="assets/Group (3).png" alt="" />
                      </a>
                    </div>
                    <div>
                      <div className="d-md-flex justify-content-between mt-4 mx-4 text-start mx-md-5">
                        <p></p>
                        <p className="text-danger Langkah_side_text">
                          Langkah 3 - 3
                        </p>
                      </div>
                      <div className={` ${hidebutton !== 0 ? "d-none" : "d-block"}`}>
                      <ul className="nav  nav-fill px-lg-5 px-3">
                        <li className="nav-item me-4 custom_border_radios_add">
                          <button
                            className={`tabs nav-link py-3 li_text_1 ${
                              activeTab1 === 0 ? "active1" : "non_active"
                            }`}
                            onClick={() => handleTabClick1(0)}
                          >
                            T-Care Certificate
                          </button>
                        </li>
                        <li className="nav-item custom_border_radios_add">
                          <button
                            className={`tabs nav-link py-3 li_text_1 ${
                              activeTab1 === 1 ? "active1" : "non_active"
                            }`}
                            onClick={() => handleTabClick1(1)}
                          >
                            Extended Warranty
                          </button>
                        </li>
                      </ul>
                      </div>
                    
                      <div className="pt-4">
                        <p className="tab-bold-p">
                          Terima Kasih
                          <br />
                          Bapak/Ibu {uname}
                        </p>
                      </div>
                      <div className="text-start mx-4 mx-md-5">
                        <p className="tab-light-bold-p">
                          Untuk mendapatkan sertifikat
                          <span
                            className={`tab-bold-p ${
                              activeTab1 === 1 ? "d-none" : "d-inline"
                            }`}
                          >
                            “T-Care”
                          </span>{" "}
                          <span
                            className={`tab-bold-p ${
                              activeTab1 === 0 ? "d-none" : "d-inline"
                            }`}
                          >
                            “Extended Warranty”
                          </span>
                          ,silakan lakukan download melalui:
                        </p>
                      </div>
                      <div className="d-flex justify-content-center custom_size_of_font buttons_custom_gap mx-5">
                        <div className="d-flex flex-column">
                          <button
                            className="download_pdf_buttons1 ms-3"
                            onClick={handleDownload}
                          >
                            <svg
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M24.8825 32.5445L35.0865 22.3404L32.2294 19.3812L26.9233 24.6873V8.05469H22.8416L22.8416 24.6873L17.5355 19.3812L14.6784 22.3404L24.8825 32.5445ZM37.1274 40.7077C38.2498 40.7077 39.2103 40.3084 40.009 39.5098C40.8076 38.7111 41.2076 37.7499 41.209 36.6261V30.5037H37.1274V36.6261H12.6376V30.5037H8.55592V36.6261C8.55592 37.7486 8.95524 38.7098 9.75388 39.5098C10.5525 40.3098 11.5137 40.7091 12.6376 40.7077H37.1274Z"
                                fill="white"
                              />
                            </svg>
                          </button>
                          <p
                            className="mt-2 tab-bold-p"
                            style={{ color: "#DF1D1D" }}
                          >
                            Download PDF
                          </p>
                        </div>
                        <div className="d-flex flex-column">
                          <button
                            className="download_pdf_buttons"
                            onClick={sendEmail}
                          >
                            <svg
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M37.9437 36.8978C38.8416 36.8978 39.6101 36.5784 40.249 35.9395C40.8879 35.3006 41.2079 34.5316 41.209 33.6325V14.0407C41.209 13.1427 40.889 12.3743 40.249 11.7354C39.609 11.0965 38.8405 10.7765 37.9437 10.7754L11.8212 10.7754C10.9233 10.7754 10.1543 11.0954 9.51429 11.7354C8.87429 12.3754 8.55484 13.1438 8.55593 14.0407V33.6325C8.55593 34.5305 8.87538 35.2995 9.51429 35.9395C10.1532 36.5795 10.9222 36.8989 11.8212 36.8978H37.9437ZM24.8825 25.4693L37.9437 17.306V33.6325H11.8212L11.8212 17.306L24.8825 25.4693ZM24.8825 22.204L11.8212 14.0407L37.9437 14.0407L24.8825 22.204ZM37.9437 17.306V14.0407V33.6325V17.306Z"
                                fill="white"
                              />
                            </svg>{" "}
                          </button>
                          <p
                            className="mt-2 tab-bold-p"
                            style={{ color: "#DF1D1D" }}
                          >
                            Email
                          </p>
                        </div>
                        <div className="d-flex flex-column">
                          <button
                            className="download_pdf_buttons"
                            onClick={handlePrint}
                          >
                            <svg
                              width="48"
                              height="48"
                              viewBox="0 0 48 48"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M18.3518 17.5773V12.6794L31.4131 12.6794V17.5773H34.6784V9.41406L15.0865 9.41406V17.5773H18.3518ZM15.0865 24.9243C14.624 24.9243 14.2359 24.7675 13.9225 24.4541C13.609 24.1406 13.4528 23.7531 13.4539 23.2916C13.4539 22.829 13.6106 22.4415 13.9241 22.1292C14.2376 21.8168 14.625 21.66 15.0865 21.659C15.5491 21.659 15.9366 21.8157 16.249 22.1292C16.5614 22.4426 16.7181 22.8301 16.7192 23.2916C16.7192 23.7542 16.5625 24.1422 16.249 24.4557C15.9355 24.7692 15.548 24.9254 15.0865 24.9243ZM18.3518 35.5365V29.0059L31.4131 29.0059L31.4131 35.5365H18.3518ZM15.0865 38.8018H34.6784V32.2712H41.209V22.4753C41.209 21.0875 40.7328 19.9245 39.7804 18.9863C38.828 18.0481 37.6716 17.5784 36.311 17.5773L13.4539 17.5773C12.0661 17.5773 10.9026 18.047 9.96328 18.9863C9.02396 19.9256 8.55484 21.0886 8.55593 22.4753V32.2712H15.0865V38.8018ZM11.8212 29.0059L11.8212 22.4753C11.8212 22.0127 11.978 21.6252 12.2914 21.3128C12.6049 21.0005 12.9924 20.8437 13.4539 20.8426L36.311 20.8426C36.7736 20.8426 37.1611 20.9994 37.4735 21.3128C37.7859 21.6263 37.9426 22.0138 37.9437 22.4753V29.0059H34.6784V25.7406L15.0865 25.7406V29.0059H11.8212Z"
                                fill="white"
                              />
                            </svg>{" "}
                          </button>
                          <p
                            className="mt-2 tab-bold-p"
                            style={{ color: "#DF1D1D" }}
                          >
                            Print
                          </p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <button
                          className="btn btn-primary lihat_Diri_1 mt-4"
                          onClick={() => handleregister(0)}
                        >
                          <img src="assets/Left.png" className="pe-2" />
                          Kembali ke Halaman Awal
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {loading && (
                  <div className="spinner-overlay add_custom_properties">
                    <Oval
                      height="60"
                      width="60"
                      radius="9"
                      color="black"
                      ariaLabel="three-dots-loading"
                      secondaryColor="grey"
                      wrapperStyle={{ marginTop: "10%", marginBottom: "10%" }}
                    />
                  </div>
                )}
                <div
                  style={{
                    display: loading
                      ? "none"
                      : activeTab === 1
                      ? "block"
                      : "none",
                  }}
                >
                  <div
                    className="tabs-section"
                    style={{
                      display: loading
                        ? "none"
                        : Active_tab1 === 1
                        ? "block"
                        : "none",
                    }}
                  >
                    <div>
                      <div className="form-group mx-4 mx-md-5 text-start pt-4 ">
                        <p className="custom_class_tab_discrip">
                          Mau cari tau catatan servis pemakaian Gratis Servis
                          Berkala Toyota Anda? Cek disini:
                        </p>
                        <label className="input_label">
                          Nomor Rangka Kendaraan
                        </label>
                        <input
                          type="email"
                          className="form-control Masukkan"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Masukkan 17 Digit No. Rangka Kendaraan"
                          value={vinn}
                          onChange={(e) => setVinn(e.target.value)}
                        />
                      </div>
                      <div className="form-group mx-4 mx-md-5 text-start">
                        <label className="input_label">Email</label>
                        <input
                          type="email"
                          className="form-control Masukkan"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="test@mail.com"
                          value={emaill}
                          onChange={(e) => setEmaill(e.target.value)}
                        />
                      </div>
                      <div className="form-group mx-4 mx-md-5 text-start pt-3">
                        <p className="custom_discrip_tab">
                          *Masukkan alamat email yang didaftarkan pada
                          sertifikat elektronik
                        </p>
                      </div>
                      <div className="mb-4">
                        <button
                          className="btn btn-primary Lanjut mt-4 ms-2"
                          onClick={serviceHistory}
                        >
                          Lanjut
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tabs-section"
                    style={{
                      display: loading
                        ? "none"
                        : Active_tab1 === 2
                        ? "block"
                        : "none",
                    }}
                  >
                    <div>
                      <div className="pt-4">
                        <img
                          src="assets/icon-park-outline_info.svg"
                          className="img-fluid"
                        />
                        <p className="tab-discription-p pt-4 px-4">{Nodata}</p>
                      </div>
                      <div className="mb-4">
                        <button
                          className="btn btn-primary Lanjut mt-4 ms-2"
                          onClick={() => goBack(1)}
                        >
                          Lanjut
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="tabs-section" style={{
                      display: loading
                        ? "none"
                        : Active_tab1 === 3
                        ? "block"
                        : "none",
                    }}>
                    <div>
                      <div className="text-start px-5 pt-4">
                        <p className="tab-discription-p">Hai Bapak/Ibu Rizky</p>
                        <p className="tab-discription-p">Pemilik Kendaraan:</p>
                      </div>
                      <div className="row">
                        <div className="col-4 p-0">
                          <span className="tab-light-bold-p1">Nama</span>
                        </div>
                        <div className="col-8 p-0 text-start">
                          <span className="tab-light-bold-p1">
                            : MROBB3CD4P5812581
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4 p-0">
                          <span className="tab-light-bold-p1">Model</span>
                        </div>
                        <div className="col-8 p-0 text-start">
                          <span className="tab-light-bold-p1">
                            : HILUX 2.4V DOUBLE CABIN 4X4 A/T(GUN125R-DDTHXD)
                          </span>
                        </div>
                      </div>
                      <div className="text-start px-5 pt-4">
                        <p className="tab-discription-p">
                          Berikut adalah catatan Servis Berkala Mobil Toyota
                          Anda:
                        </p>
                      </div>
                      <div className="px-5">
                        <table class="table custom-table">
                          <thead>
                            <tr className="custom_table_heading">
                              <th scope="col " className="custom_border_table">
                                Servis
                              </th>
                              <th scope="col">Tanggal Servis</th>
                              <th scope="col">Bengkel Servis</th>
                              <th scope="col">Tepat Waktu</th>
                              <th scope="col" className="custom_border_table1">
                                Max Servis Slenjutnya
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {tableData.map((rowData, index) => (
                              <tr key={index} className="custom_border_tr">
                                <td
                                  className="custom_border_set_td"
                                  scope="row"
                                >
                                  {rowData.no}
                                </td>
                                <td className="custom_border_set_td">
                                  {rowData.create_date}
                                </td>
                                <td className="custom_border_set_td">
                                  {rowData.programName}
                                </td>
                                <td className="custom_border_set_td">
                                  {rowData.status}
                                </td>
                                <td className="custom_border_set_td">
                                  {rowData.next}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <div className="text-start pt-4">
                        <p className="tab-discription-p text-start">
                        Jangan lupa Servis Berkala Toyota Anda setiap 6 bulan di bengkel resmi Toyota!
                        </p>
                      </div>
                      </div>
                      <div className="mb-4">
                        <button
                          className="btn btn-primary lihat_Diri_2 mt-4"
                          onClick={() => goBack(1)}
                        >
                          <svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="7" height="13" viewBox="0 0 7 13" fill="none">
  <path d="M5.5 11.167L2.46392 7.62489C1.90924 6.97778 1.90924 6.02288 2.46392 5.37576L5.5 1.83366" stroke="white" stroke-width="2.16" stroke-linecap="round"/>
</svg>
                          Kembali ke Halaman Awal
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container px-md-5 mt-5">
          <img src="assets/video layout.png" className="w-100" />
        </div>
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-5">
              <img src="assets/twocars.png" className="w-100" />
            </div>
            <div className="col-12 col-md-7 text-start">
              <h1 className="d-none d-lg-block">Extended Warranty</h1>
              <b className="d-none d-lg-block">
                12 bulan (1 tahun) / 20.000 km
              </b>
              <p className="text-center text-md-start">
                Berlaku untuk pelanggan yang melakukan servis ke-1 maksimum 1
                bulan dari bulan penyerahan kendaraan dan selanjutnya servis
                rutin pada servis ke-2 hingga ke-7 setiap maksimum 6 bulan
                sekali.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-12 col-md-7 text-start">
              <p className="text-danger">Toyota SERVICE</p>
              <h1>Manfaatkan T-Care dengan program Express Maintenance</h1>
              <button
                type="button"
                class="btn custom-btn-dark express w-md-50 mt-4  d-lg-block d-none"
              >
                Telurusi Express Maintenance
              </button>
            </div>
            <div className="col-12 col-md-5 text-center mt-lg-0 mt-4">
              <img src="assets/services.png" className="w-100" />
            </div>
            <div className="mt-4 mb-5">
                    <button
                          className="btn custom-btn-dark me-3  d-lg-none"
                        >
                          Telurusi Express Maintenance
                        </button>
                       
            </div>
            
          </div>
        </div>
        <div className="container p-lg-5">
                    <b>Download Informasi GBSB atau lihat hal-hal yang sering ditanyakan</b>
                    <div className="mt-5">
                    <button
                          className="btn custom-btn-dark me-3"
                        >
                          Download info GBSB
                        </button>
                        <NavLink to="/faq"
                          className="btn custom-btn-dark"
                        >
                          Go to FAQ Page
                        </NavLink>
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
      <Footer></Footer>
    </div>
  );
}

export default TCare;
