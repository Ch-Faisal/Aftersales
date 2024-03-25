import React, { useState,useEffect } from "react";
import Header from './layout/Header';
import Footer from './layout/Footer';
import '../css/news-event.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Oval } from 'react-loader-spinner'
function NewsEvents() {
    const [newsData, setNewsData] = useState([]);
  const token = useSelector(state => state.value);
  const [loading, setLoading] = useState(true);
  const [content, setContent] =useState([])
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
        setContent(response.data.data[0].body.replace(/['"]+/g, ''));
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Error fetching news data:', error);
      }
    };
    fetchNewsData();
  }, [token]);
    return (
        <div>
            <Header></Header>
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
            {newsData[Object.keys(newsData)[0]] && (
  <div className="news-item px-0">
     <div className='container-fluid px-0 mx-0'>
     <img src={newsData[Object.keys(newsData)[0]].desktop_banner} className="w-100" alt='News Hero' />
            </div>
            <div className='container-fluid p-0 mb-5'>
                <div className='container custom-bg-gray p-5 text-start'>
                    <p className='text-danger mb-1'>{newsData[Object.keys(newsData)[0]].category.name}</p>
                    <p className='mb-3'>{newsData[Object.keys(newsData)[0]].posted_at}</p>
                    <h1 className='custom_heading_weight'>{newsData[Object.keys(newsData)[0]].title}</h1>
                    <div id="content-format" dangerouslySetInnerHTML={{__html: content}}></div>
                    <b className='custom-b-weight'>
                        {newsData[Object.keys(newsData)[0]].slug}
                    </b>
                </div>
            </div>
    </div>
)}
            </div>
            )}
            <Footer></Footer>
        </div>
    );
}

export default NewsEvents;
