import React, { useRef } from 'react'
import Card from '../components/Card'

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";



const HorizontalScrollCard = ({ data = [], heading ,trending,media_type}) => {
    const containerRef = useRef()
    

    const handleNext = () => {
        containerRef.current.scrollLeft += 230
    }
    const handlePrevious = () => {
        containerRef.current.scrollLeft -= 230
    }
    return (
        <div className='container mx-auto my-10'>
            <h1 className='text-xl font-bold md:text-2xl mb-2'>{heading}</h1>

            <div className='overflow-hidden relative'>
                <div ref={containerRef} className=' container mx-auto grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-5 overflow-x-scroll scroll-smooth transition-all scorlbar-none'>
                    {
                        data.map((data, index) => {
                            return (
                                <Card key={data.id + "heading" + index} data={data} index={index + 1} trending={trending} media_type={media_type} />
                            )
                        })
                    }
                </div>
                {/* make next and previous button */}
                <div className='top-0 w-full absolute h-full hidden items-center justify-between  md:flex'>
                    <button onClick={handlePrevious} className='bg-white -ml-1 p-1 rounded-full z-10 text-xl text-black'>
                        <FaAngleLeft />
                    </button>
                    <button onClick={handleNext} className='bg-white -mr-1 p-1 rounded-full z-10 text-xl text-black'>
                        <FaAngleRight />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default HorizontalScrollCard