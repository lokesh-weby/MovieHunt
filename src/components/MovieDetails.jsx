import React, { useEffect, useState } from "react";
import { data, Link, useParams } from "react-router-dom";
import style from "../MovieDetails.module.css";
import { motion } from "framer-motion";

const MovieDetails = () => {
  const [Data, setData] = useState({});
  var params = useParams();
  var MovieDetaialsUrl = `https://api.themoviedb.org/3/movie/${params.id}?api_key=be90e85639aad5bb19bc5325c8c23b45`;

  useEffect(() => {
    async function fetchMovies() {
      fetch(MovieDetaialsUrl)
        .then((res) => res.json())
        .then((JsonData) => setData(JsonData));
    //   console.log(Data);
    }
    fetchMovies();
  }, [MovieDetaialsUrl]);

  useEffect(() => {
    document.title = Data.title;
  });

  function trimString(str) {
    return str.length > 35 ? str.substring(0, 30) + "..." : str;
}

  return (
    <>
      <div className={style.wrapper + " container"}>
        <div className={style.img}>
          <img loading="lazy"
            src={`https://image.tmdb.org/t/p/original${Data.backdrop_path}`}
            alt=""
          />
        </div>
        <aside>
          <h1 className={style.title + " text-danger"}>{Data.title}</h1>
          <ul>
            {Data.genres
              ? Data.genres.map((genre, index) => (
                  <li className="bg-danger" key={index}>
                    {genre.name}
                  </li>
                ))
              : ""}
          </ul>
          <p className="text-secondary">{Data.overview}</p>
          <div className={style.details}>
            <p>
              <i class="bi bi-globe2"></i> {Data.origin_country}
            </p>
            <p> Website: {Data.homepage?<a href={Data.homepage} target="_blank">{trimString(Data.homepage)}</a>:"NA"}</p>
            <div className={style.vote}>
              <p>
                Release-date: {Data.release_date}
              </p>
              <p>
                <i class="bi bi-clock-history"></i>
                {parseFloat(Data.runtime / 60).toFixed(2)} Hrs
              </p>
            </div>
            <div className={style.vote}>
              <p>
                <i class="bi bi-people-fill text-danger" />
                {Data.vote_count}
              </p>
              <p>
                <i class="bi bi-star-fill text-warning"></i> 
                {parseInt(Data.vote_average).toFixed(2)}/10
              </p>
            </div>
          </div>
          <Link
            to={`https://www.imdb.com/title/${Data.imdb_id}/`}
            target="_blank"
            className="btn btn-danger"
          >
            View ImDB{" "}
          </Link>
        </aside>
      </div>
      <motion.div className="slide-in"
      initial={{scaleY:0}}
      animate={{scaleY:0}}
      exit={{scaleY:1}}
      transition={{duration:1,
        ease:[0.22,1,0.36,1]}}
      />
       <motion.div className="slide-out"
      initial={{scaleY:0}}
      animate={{scaleY:0}}
      exit={{scaleY:1}}
      transition={{duration:1,
        ease:[0.22,1,0.36,1]}}
      />
    </>
  );
};

export default MovieDetails;
