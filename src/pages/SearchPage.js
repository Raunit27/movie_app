import axios from 'axios';
import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const SearchPage = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const location = useLocation()
  

  const fetchData = async () => {
    try {
     
      const response = await axios.get(`/search/collection`, {
        params: {
          query:location?.search?.slice(3),
          page: 1,
        },
      });
      console.log('Data fetched:', response.data);
      setData((prev) => [...prev, ...response.data.results]);
     
     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, [location?.search]);


  useEffect(()=>{
    setPage(1);
    setData([]);
    fetchData()
  }, [location?.search]);

  const handleScroll = () => {
    console.log('Scroll event fired');
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
      console.log('Bottom of the page reached');
        console.log('Loading next page');
        setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  console.log("location",location.search.slice(3));
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='py-16'>
      <div className='container mx-auto'>
         <h2 className='capitalize text-lg lg:text-xl  font-semibold my-3 '>Search result </h2>

         <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center'>
        {data.map((searchData) => (
          <Card key={searchData.id+"search"} data={searchData} media_type={searchData.media_type} />
        ))}
      </div>
      </div>
    </div>
  )
}

export default SearchPage