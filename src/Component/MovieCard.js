import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";


const MovieCard = ({ item }) => {
  let navigate=useNavigate()
  let {genres}=useSelector(state=>state.movie)

  return (
    <div onClick={()=>navigate(`/movies/${item.id}`)}>
      <div
        className="card-image"
        style={{
          backgroundImage:
            "url(" +
            `https://image.tmdb.org/t/p/w355_and_h200_multi_faces${item?.backdrop_path}` +
            ")",
        }}
      >
        <div className="overlay">
          <h1>{item?.title}</h1>
          <hr />

          <div>
            {item?.genre_ids?.map((id) => (
              <span class="badge bg-light text-dark">{genres.find(item=>item.id===id).name}</span>
            ))}
          </div>

          <div className="movie_source">
          <FontAwesomeIcon icon={faStar} style={{ color: "#ecd227" }} />
            <span>{item?.vote_average}</span>
            <FontAwesomeIcon icon={faUsers} />
            <span>{item?.vote_count}</span>
            <span className="movie_adult">{item?.adult ? "19+" : "Under 18"}</span>
          </div>
        </div>
      </div>
    </div>
      
  );
};

export default MovieCard;
