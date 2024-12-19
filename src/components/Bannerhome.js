import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaAngleRight,FaAngleLeft  } from "react-icons/fa6";


function Bannerhome() {
    const bannerData = useSelector(state => state.movioData.bannerData);
    const imageURl = useSelector(state => state.movioData.imageURl);
    const[currentImage,setCurrentImage]=useState(0);
    const handleNext=()=>{
       if(currentImage < bannerData.length-1){
           setCurrentImage(prev=>prev+1)
       }
    }
    const handlePrevious=()=>{
        if(currentImage > 0){
            setCurrentImage(prev=>prev-1)
        }
    }
    useEffect(()=>{
        const intervel=setInterval(()=>{
            if(currentImage < bannerData.length-1){
                handleNext();
            }else{
                setCurrentImage(0); 
            }
        },4000)
        return ()=>clearInterval(intervel);
    },[bannerData,imageURl])

    return ( 
        <section className='w-full h-full overflow-hidden'>
            <div className='flex min-h-full max-h-[95vh]'>
                {
                    bannerData.map((data, index) => {
                      
                        return (
                            <div key={data.id+"banner"+index} className='min-w-full min-h-[450px] md:min-h-full overflow-hidden relative group transition-all' style={{transform:`translateX(-${currentImage*100}%)`}}>
                                <div key={index} className='w-full h-full'>
                                    <img src={`${imageURl}${data.backdrop_path}`} alt=""
                                        className='w-full h-full object-cover object-center' />
                                </div>
                                {/* make next and previous button */}
                                <div className='top-0 w-full absolute h-full hidden items-center justify-between px-4 group-hover:md:flex'>
                                   <button onClick={handlePrevious} className='bg-white p-1 rounded-full z-10 text-xl text-black'>
                                      <FaAngleLeft />
                                   </button>
                                   <button onClick={handleNext} className='bg-white p-1 rounded-full z-10 text-xl text-black'>
                                        <FaAngleRight/>
                                   </button>
                                </div>

                                <div className='absolute bottom-0 left-0 w-full h-full bg-gradient-to-t                     
                                from-black to-transparent'>
                                </div>
                               
                               <div className='container mx-auto'>
                               <div className='container mx-auto absolute bottom-0 max-w-md px-3'>
                                    <h1 className='text-2xl md:text-4xl font-bold text-white '>{data?.title || data?.name}</h1>
                                    <p className='text-sm text-white text-ellipsis line-clamp-3 my-3 '>{data.overview}</p>
                                    <div>
                                        Rating : {Number(data.vote_average).toFixed()}+
                                    </div>
                                    <div className='mt-2    items-center justify-center hidden md:block  '>
                                        <button className=' bg-white hover:bg-gradient-to-l from-red-600 to-orange-600 text-black  font-bold rounded md:px-4 md:py-2 px-1 py-1 shodow-md transition-all  hover:scale-105'>
                                            PLAY NOW
                                        </button>
                                    </div>
                                    <div className='flex items-center justify-center  md:hidden '>
                                        <button className='bg-white hover:bg-gradient-to-l from-red-600 to-orange-600  font-bold  text-black  text-bold rounded md:px-4 md:py-2 px-1 py-1 shodow-md transition-all hover:scale-105'>
                                            PLAY NOW
                                        </button>
                                    </div>
                                </div>
                               </div>


                            </div>
                        )
                    })

                }
            </div>
        </section>
    )
}

export default Bannerhome
