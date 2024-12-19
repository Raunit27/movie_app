import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

const Explorepage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPageNo, setTotalPageNo] = useState(1);
console.log(data)
  console.log(params.explore);

  const fetchData = async () => {
    try {
      console.log(`Fetching data for page: ${pageNo}`);
      const response = await axios.get(`discover/${params.explore}`, {
        params: {
          page: pageNo,
        },
      });
      console.log('Data fetched:', response.data);
      console.log('total ',response.data.total_pages)
      setData((prev) => [...prev, ...response.data.results]);
      setTotalPageNo(response.data.total_pages);
     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleScroll = () => {
    console.log('Scroll event fired');
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
      console.log('Bottom of the page reached');
        console.log('Loading next page');
        setPageNo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    setPageNo(1);
    setData([]);
    fetchData();
  }, [params.explore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='container mx-auto py-16'>
      <h3>Popular {params.explore}</h3>

      <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-6 justify-center'>
        {data.map((item) => (
          <Card key={item.id} data={item} media_type={params.explore} />
        ))}
      </div>
    </div>
  );
};
export default Explorepage;
