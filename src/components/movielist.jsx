import React, { useEffect } from "react";
import "../App.css";
import { FetchData } from "../controller/controller";
import { Link } from "react-router-dom";

const Movielist = ({ title, API_ENDPOINT }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  const { Data } = FetchData(API_ENDPOINT);
  // console.log(Data);

  return (
    <>
      <section className="container-fluid flex">
        {Data.map((movie, index) => (
          <div key={index} className="wrapper">
            <div className="imgWrapper">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt=""
              />
              <div className="rating">
                <i class="bi bi-star-fill text-warning"></i>
                {movie.vote_average.toFixed(1)}
              </div>
            </div>
            <h5 className="text-center text-primary">{movie.title}</h5>
            <p className="text-overflow-2 text-secondary">{movie.overview}</p>
            <div className="releseDateLikes">
              <div className="likes">
                <i class="bi bi-people-fill mx-2 text-danger"/>
                <p>{movie.vote_count}</p>
              </div>
              <p className="text-secondary text-end">{movie.release_date}</p>
            </div>

            <Link to={`/movies/${movie.id}`} className="btn btn-primary">
              View More
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default Movielist;
