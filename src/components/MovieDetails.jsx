import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import style from "../MovieDetails.module.css"

const MovieDetails = () => {
    const [Data,setData]=useState({});
    var params=useParams();
    var MovieDetaialsUrl=`https://api.themoviedb.org/3/movie/${params.id}?api_key=be90e85639aad5bb19bc5325c8c23b45`

    useEffect(()=>{
        async function fetchMovies(){
            fetch(MovieDetaialsUrl)
            .then((res)=>res.json())
            .then((JsonData)=>setData(JsonData));      
          }
          fetchMovies();
    },[MovieDetaialsUrl])

    useEffect(()=>{
        document.title=Data.title
    })
    console.log(Data);
    
  return (
    <>
    <div className={style.wrapper+" container"}>
        <div className={style.img}>
              <img src={`https://image.tmdb.org/t/p/original${Data.backdrop_path}`} alt=""  />
        </div>
        <aside>
            <h1 className={style.title}>
                {Data.title}
            </h1>
            <p>{Data.overview}</p>
            <p>ORIGIN: {Data.origin_country}</p>
            <p>Status: {Data.status}</p>
            <div className={style.vote}>
            <p>Revenue: {Data.revenue} </p>
            <p>RunTime:{Data.runtime}</p>
            </div>
            <div className={style.vote}>
            <p>Vote Count: {Data.vote_count}</p>
            <p><i class="bi bi-star-fill"></i> {parseInt(Data.vote_average).toFixed(2)}/10</p>
            </div>
            <Link to={`https://www.imdb.com/title/${Data.imdb_id}/`} target='_blank' className='btn btn-primary'>View ImDB </Link>
        </aside>
       

    </div>
    
    </>
  )
}

export default MovieDetails
