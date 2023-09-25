import React from "react";
import { useEffect } from "react";
import { MovieAction } from "../redux/actions/MovieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../Component/Banner";
import MovieSlide from "../Component/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";
import { Container, Row,Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const dispatch = useDispatch();

  const { popularMovie, topRateMovie, upcomingMovie, loading } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(MovieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <ClipLoader
        className="loader"
        color="black"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }
  return (
    <div>
      <Banner className="banner_img" movie={popularMovie.results[7]} />

      <Container className="slide-menu">
        <Row>
          <div className="icon-box">
            <FontAwesomeIcon className="movie-icon" icon={faFilm} />
          </div>
          
          <h1 className="title">Popular Movie</h1>
          <MovieSlide movie={popularMovie} />
        </Row>

        <Row>
        <div className="icon-box">
            <FontAwesomeIcon className="movie-icon" icon={faFilm} />
          </div>
          <h1 className="title">Top Rated Movie</h1>
          <MovieSlide movie={topRateMovie} />
        </Row>

        <Row>
        <div className="icon-box">
            <FontAwesomeIcon className="movie-icon" icon={faFilm} />
          </div>
          <h1 className="title">Upcoming Movie</h1>
          <MovieSlide movie={upcomingMovie} />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
