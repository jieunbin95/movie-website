import React from "react";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const API_KEY = process.env.REACT_APP_API_KEY;
const Video = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [youtube, setYoutube] = useState(null);
  let { id } = useParams();

  const showVideo = async () => {
    let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US&page=1`;

    let response = await fetch(url);
    let data = await response.json();
    setYoutube(data.results[0]);
  };

  useEffect(() => {
    showVideo();
  }, [youtube]);

  return (
    <div>
      <Button variant="outline-danger" onClick={handleShow}>
        Watch Trailer
      </Button>

      <Modal
        size={"xl"}
        className="video_section"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Watch Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <YouTube
            videoId={youtube?.key}
            opts={{
              width: "1100",
              height: "800",
              playerVars: {
                autoplay: 1,
                loop: true,
              },
            }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Video;
