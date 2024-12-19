import axios from "axios";
import { useState,useEffect } from "react";


const useFetch=(endpoint)=>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchData=async ()=>{
        try {
            setIsLoading(true);
           const response =await axios.get(endpoint);
           setIsLoading(false);
           setData(response.data.results);
        } catch (error) {
          console.log("error",error);
        }
      }
      useEffect(()=>{
        fetchData();
      },[]);

    return {data,isLoading}

}

export default useFetch