import React from "react";
import { Container, Row,Col } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import MoviePage from "../Component/MoviePage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { MovieAction } from "../redux/actions/MovieAction";
import Pagenation from "../Component/Pagenation";

const Movies = () => {
  let{popularMovie}=useSelector(state=>state.movie)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MovieAction.getMovies());
  }, []);

  return (
    <Container>
      <Row>

     <Col lg={2} className="movie_page">
        <div>
        <Dropdown>
      <Dropdown.Toggle style={{width:300, fontSize:30}} variant="outline-danger" id="dropdown-basic">
        Sort
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Sort Results By</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


    <Dropdown>
      <Dropdown.Toggle style={{width:300, fontSize:30}} variant="outline-danger" id="dropdown-basic">
        filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Sort Results By</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
    </Col>


    <Col lg={10}>
    <div className="movie-info">
      {popularMovie?.results?.map(item=>(<MoviePage item={item}/>))}
    </div>
    </Col>



    <div>
      <Pagenation/>
    </div>
      </Row>
    </Container>
  );
};

export default Movies;
