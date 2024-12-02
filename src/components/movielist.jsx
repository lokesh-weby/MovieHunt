import React, { useEffect } from 'react'
import '../App.css'
import { FetchData } from '../controller/controller'
import { Link } from 'react-router-dom'

const Movielist = ({title,API_ENDPOINT}) => {
useEffect(()=>{
    document.title=title;
},[title])

const {Data}=FetchData(API_ENDPOINT)
  return (
    <>
    
      <section className='container-fluid flex'>
        {Data.map((movie,index)=>
          ( <div key={index} className='wrapper'>
            <div className='imgWrapper'>
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
              <div className="rating"><i class="bi bi-star-fill"></i>{(movie.vote_average).toFixed(1)}</div>
            </div>
            <h2>{movie.title}</h2>
              <p className='text-overflow-2'>{movie.overview}</p>
              <Link to={`/movies/${movie.id}`} className='btn btn-primary'>View More</Link>
            </div>
          ))}

      </section>
  
     
    </>
  )
}

export default Movielist
