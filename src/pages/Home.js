import React, { useEffect, useState } from 'react'
import Bannerhome from '../components/Bannerhome'
import { useSelector } from 'react-redux'


import HorizontalScrollCard from '../components/HorizontalScrollCard'
import axios from 'axios'
import useFetch from '../hooks/useFetch'

const Home = () => {
  const trendingData = useSelector(state => state.movioData.bannerData);
   const {data:nowPlayingData}=useFetch('/movie/now_playing');
   const {data:toprated}=useFetch('movie/popular');
   const {data:tvpopular}=useFetch('tv/popular');
   const {data:ontheair}=useFetch('/tv/on_the_air');
  
  

  return (
    <div>
      <Bannerhome />
      <HorizontalScrollCard data={trendingData} heading={"TREANDING"} trending={true}/>
      <HorizontalScrollCard data={nowPlayingData} heading={"NOW PLAYING"} media_type={"movie"}/>
      <HorizontalScrollCard data={toprated} heading={"TOP RATED"} media_type={"movie"}/>
      <HorizontalScrollCard data={tvpopular} heading={"TV POPULAR"} media_type={"tv"}/>
      <HorizontalScrollCard data={ontheair} heading={"ON THE AIR"} media_type={"tv"}/>
    </div>
  )
}

export default Home