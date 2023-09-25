import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUsers } from "@fortawesome/free-solid-svg-icons";


const Banner = ({ movie }) => {
  
  return (
      <div
        className="banner"
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` +
            ")",
        }}
      >
        <div className="banner-info">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>

          <div className="banner_infos">
            <FontAwesomeIcon icon={faStar} style={{ color: "#ecd227" }} />
            <span>{movie.vote_average}</span>
            <FontAwesomeIcon icon={faUsers} />
            <span>{movie.vote_count}</span>
            <span className="movie_adult">
              {movie.adult ? "19+" : "Under 18"}
            </span>
          </div>
        </div>
      </div>
  );
};

export default Banner;
