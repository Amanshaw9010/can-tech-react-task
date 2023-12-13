import React from "react";
import Carousel from "react-bootstrap/Carousel";
function Corousel() {
  return (
    <div className="flex justify-center items-center">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 h-[30vh] md:h-[60vh]"
            src="https://thumbs.dreamstime.com/b/young-woman-drinks-coffee-morning-balcony-overlooking-big-city-skyscrapers-banner-long-format-young-woman-121686988.jpg"
            alt="first slide"
          />
          <Carousel.Caption>
            <h3>Shiva Rama Krishna Reddy</h3>
            <h4>Senior System Architect</h4>
            <p>
              Great Lakes has designed this program in a perfect way, where you
              learn all the concepts in the session and the subsequent weekends
              are dedicated for doing assignments and reading prerequisites for
              the next residency.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-[30vh] md:h-[60vh]"
            src="https://thumbs.dreamstime.com/b/silhouette-video-production-behind-scenes-b-roll-making-tv-commercial-movie-film-crew-team-lightman-cameraman-285595478.jpg"
            alt="second slide"
          />
          <Carousel.Caption>
            <h3>Shiva Rama Krishna Reddy</h3>
            <h4>Senior System Architect</h4>
            <p>
              Great Lakes has designed this program in a perfect way, where you
              learn all the concepts in the session and the subsequent weekends
              are dedicated for doing assignments and reading prerequisites for
              the next residency.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-[30vh] md:h-[60vh]"
            src="https://thumbs.dreamstime.com/b/banner-blurred-picture-background-movie-film-set-long-format-banner-blurred-picture-background-movie-film-set-long-format-99152944.jpg"
            alt="third slide"
          />
          <Carousel.Caption>
            <h3>Shiva Rama Krishna Reddy</h3>
            <h4>Senior System Architect</h4>
            <p>
              Great Lakes has designed this program in a perfect way, where you
              learn all the concepts in the session and the subsequent weekends
              are dedicated for doing assignments and reading prerequisites for
              the next residency.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Corousel;
