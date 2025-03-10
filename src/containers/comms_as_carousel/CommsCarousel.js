import React, {useState, useEffect, useContext} from "react";
import "./CommsCarousel.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {commsData} from "../../portfolio";

export default function TalksCarousel() {
  const {isDark} = useContext(StyleContext);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [autoplay] = useState(false);

  const handleNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % commsData.talks.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      prevSlide =>
        (prevSlide - 1 + commsData.talks.length) % commsData.talks.length
    );
  };

  useEffect(() => {
    if (autoplay) {
      const intervalId = setInterval(() => {
        handleNextSlide();
      }, 5000);

      return () => clearInterval(intervalId);
    }
  }, [autoplay]);

  // Helper function to calculate opacity based on slide index
  const getOpacity = index => {
    if (index === currentSlide) return 1; // Fully visible for the center slide
    if (
      index ===
        (currentSlide - 1 + commsData.talks.length) % commsData.talks.length ||
      index === (currentSlide + 1) % commsData.talks.length
    )
      return 0.25; // 50% opacity for side slides
    return 0; // Hide other slides
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks-carousel">
        <div className="talk-header">
          <h1 className="talk-header-title">{commsData.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode talk-header-subtitle"
                : "subTitle talk-header-subtitle"
            }
          >
            {commsData.subtitle}
          </p>
        </div>

        <div className="talks-container">
          {commsData.talks.map((talk, index) => (
            <div
              key={index}
              className={`talk-card ${isDark ? "dark-mode" : ""}`}
              style={{
                opacity: getOpacity(index),
                transform: index === currentSlide ? "scale(1)" : "scale(.75)", // Slightly scale up the center slide
                display: getOpacity(index) > 0 ? "block" : "none" // Show only relevant slides
              }}
            >
              <div className="talk-image">
                <img src={talk.image} alt={talk.title} className="card-image" />
              </div>
              <div className="talk-details">
                <h3 className={isDark ? "dark-mode card-title" : "card-title"}>
                  {talk.title}
                </h3>
                <p
                  className={
                    isDark ? "dark-mode card-description" : "card-description"
                  }
                >
                  {talk.description}
                </p>
                <p
                  className={
                    isDark ? "dark-mode card-location" : "card-location"
                  }
                >
                  <strong>{talk.location}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          className={`slide-button prev ${isDark ? "dark-mode" : ""}`}
          onClick={handlePrevSlide}
          aria-label="Previous Slide"
        >
          <span className="arrow">&#8592;</span>
        </button>
        <button
          className={`slide-button next ${isDark ? "dark-mode" : ""}`}
          onClick={handleNextSlide}
          aria-label="Next Slide"
        >
          <span className="arrow">&#8594;</span>
        </button>
      </div>
    </Fade>
  );
}
