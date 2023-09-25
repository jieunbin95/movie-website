import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_KEY = process.env.REACT_APP_API_KEY;

const Related = () => {
  let [relatedMovie, setRelatedMovie] = useState(null || "");
  let navigate = useNavigate();
  let { genres } = useSelector((state) => state.movie);
  let { id } = useParams();

  const showRelated = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    setRelatedMovie(data);
    console.log('관련정보',data)
  };

  useEffect(() => {
    showRelated();
  }, [relatedMovie]);

  return (
    <div className="related-section" >
      {relatedMovie.results && relatedMovie.results.map(item=> <div
        className="relate_section"
        onClick={() => navigate(`/movies/${item.id}`)}>
    
       <div
        className="card-image related-image"
        style={{
          backgroundImage:
            "url(" +
            `https://image.tmdb.org/t/p/w355_and_h200_multi_faces${item?.backdrop_path}` +")" }}>
            
       <div className="overlay">
          <h1>{item?.title}</h1>
          <hr />
      
         <div>
            {item?.genre_ids.map((id) => (
              <span class="badge bg-light text-dark">
                {genres?.find((item) => item.id === id)?.name}
              </span>
            ))}
          </div>
        
        <div className="movie_source">
            <FontAwesomeIcon icon={faStar} style={{ color: "#ecd227" }} />
            <span>{item?.vote_average}</span>
            <FontAwesomeIcon icon={faUsers} />
            <span>{item?.vote_count}</span>
            <span className="movie_adult">
              {item?.adult ? "19+" : "Under 18"}
            </span>
          </div>
          </div>
      </div>
      </div>)}
  </div>
    
  );
};

export default Related;
