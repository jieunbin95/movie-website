import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Related from "../Component/Related";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const Review = () => {
  let [showCard, setShowCard] = useState(false);
  let [review, setReview] = useState(null || {});
  let [showContent, setShowContent] = useState(false);
  let { id } = useParams();

  const showReviews = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    setReview(data);
    console.log(data);
  };

  useEffect(() => {
    showReviews();
   
  }, [review]);


  return (
    <div>
      <div className="review-btns">
        <button
          onClick={() => setShowContent(!showContent)}
          className="review-btn"
        >
          REVIEWS
        </button>
        <button
          className="related-btn"
          onClick={() => setShowCard(!showCard)}
        >
          RELATED MOVIES
        </button>
      </div>

      {review.results &&
        review.results.map((item) => {
          return showContent ? (
            <div>
              <h4> {item.author}</h4>
              <p> {item.content}</p>
              <hr />
            </div>
          ) : (
            ""
          );
        })}

  {showCard?<Related/>:''}
      
    </div>
  );
};

export default Review;
