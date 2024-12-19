import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment';
import { Link } from 'react-router-dom';

const Card = ({ data, trending, index,media_type }) => {
  const imageURl = useSelector(state => state.movioData.imageURl);
  const mediatype=data.media_type ?? media_type
  return (
    <Link to={"/"+mediatype+"/"+data.id} className='w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden rounded relative z-10 pointer-events-auto block hover:scale-105 transition-all'>
     {
      data?.poster_path ? (
        <img src={`${imageURl}${data.poster_path}`} alt="" className='w-full h-full object-cover object-center rounded-lg' />
      ):
      (
     <div className='flex justify-center items-center'>
      No image found
     </div>
      )
     }
      <div className='absolute top-4'>
        {
          trending && (
            <div className='  py-0 px-4 backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden'>
              #{index} Trending
            </div>
          )
        }
      </div>

      <div className='absolute bottom-0 h-16 backdrop-blur-3xl w-full bg-black/50 p-2 '>

        <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>
          {data.title || data.original_name}
        </h2>
        <div className='flex justify-between items-center'>
          <p>
            {moment(data.release_date).format('ll')} { }
          </p>
          <p className='bg-black rounded text-sm px-1 text-white'>
            Rating {Number(data.vote_average).toFixed()}+
          </p>
        </div>
      </div>
    </Link>

  )
}

export default Card