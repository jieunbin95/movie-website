import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUsers } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";

const MoviePage = ({item}) => {

  let navigate=useNavigate()
  let {genres}=useSelector(state=>state.movie)

  return (
    <div className="poster-section" onClick={()=>navigate(`/movies/${item.id}`)}>
      <div
        className="card-image movies-image"
        style={{
          backgroundImage:
            "url(" +
            `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item?.backdrop_path}` +
            ")"
        }}>
      
        <div className="movie_page_overlay">
          <div className="poster-top">
             <div className="poster_small" style={{content:"url("+`https://www.themoviedb.org/t/p/w220_and_h330_face${item?.backdrop_path}`+")"}}></div>
             <h1>{item?.title}</h1>
          </div>

          <p className="poster-overview">        
            {item?.overview.length>200?item.overview.substring(0,200)+'...':item.overview}
          </p>

          <div className="poster-badge">
            {item?.genre_ids?.map((id) => (
              <span class="badge bg-light text-dark">{genres.find(item=>item.id===id).name}</span>
            ))}
          </div>

          <div className="movie_source poster_source">
            <FontAwesomeIcon icon={faStar} style={{ color: "#ecd227" }} />
            <span>{item?.vote_average}</span>
            <FontAwesomeIcon icon={faUsers} style={{ color: "#f7f9fd" }}/>
            <span>{item?.vote_count}</span>
            <span className="movie_adult">{item?.adult ? "19+" : "Under 18"}</span>
          </div>
        </div>
      </div>
    </div>
      
  )
}

export default MoviePage;