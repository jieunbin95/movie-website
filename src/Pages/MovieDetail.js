import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUsers } from "@fortawesome/free-solid-svg-icons";
import Review from "../Component/Review";
import Video from "../Component/Video";


const Moviedetail = () => {
  let [showDetail, setShowDetail] = useState({});
  const API_KEY = process.env.REACT_APP_API_KEY;
  let { id } = useParams();

  const detail = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

    let response = await fetch(url);
    let data = await response.json();
    setShowDetail(data);
  };

  useEffect(() => {
    detail();
  }, [showDetail]);

  return (
    <Container>
      <Row>
        <Col lg={6} className="detail_section detail_img_card">
          <div
            className="detail-img"
            style={{
              backgroundImage:
                "url(" +
                `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${showDetail?.poster_path}` +
                ")",
            }}
          ></div>
        </Col>

        <Col lg={6} className="detail_section">
          <div className="detail_title">{showDetail?.original_title}</div>
          <div className="detail_tagline">{showDetail?.tagline}</div>
          <hr />
          <div className="detail_overview">{showDetail?.overview}</div>
          <hr />

          <div className="detail_info">
            <FontAwesomeIcon
              className="detail_star"
              icon={faStar}
              style={{ color: "#ecd227" }}
            />
            <div className="detail_average">{showDetail?.vote_average}</div>
            <FontAwesomeIcon className="detail_Users" icon={faUsers} />
            <div className="detail_count">{showDetail?.vote_count}</div>
            <div className="detail_adult movie_adult">
              {showDetail?.adult ? "19+" : "Under 18"}
            </div>
          </div>

          <hr />
          <div className="detail_info2">
            <div>
              <Badge bg="light" text="dark">
                Release Date
              </Badge>
              {showDetail?.release_date}
            </div>
            <div>
              <Badge bg="light" text="dark">
                Budget
              </Badge>
              {showDetail?.budget}
            </div>
            <div>
              <Badge bg="light" text="dark">
                Runtime
              </Badge>
              {showDetail?.runtime}
            </div>
            <div>
              <Badge bg="light" text="dark">
                Popularity
              </Badge>
              {showDetail?.popularity}
            </div>
          </div>
          <hr />

          <div>
            <Video />
          </div>
        </Col>
      </Row>

        <Review />
        
    </Container>
  );
};

export default Moviedetail;
