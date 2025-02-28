import React, { useState, useEffect, useContext } from "react";
import "./TalkCarousel.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { talksData } from "../../portfolio";

export default function TalksCarousel() {
  const { isDark } = useContext(StyleContext);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [autoplay] = useState(false);

  const handleNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % talksData.talks.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      prevSlide =>
        (prevSlide - 1 + talksData.talks.length) % talksData.talks.length
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

  // Helper function to calculate opacity based on slide index.
  // On mobile, only show the active slide.
  const getOpacity = index => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      return index === currentSlide ? 1 : 0;
    }
    if (index === currentSlide) return 1; // Fully visible for the center slide
    if (
      index === (currentSlide - 1 + talksData.talks.length) % talksData.talks.length ||
      index === (currentSlide + 1) % talksData.talks.length
    )
      return 0.25; // 25% opacity for side slides on desktop
    return 0; // Hide other slides
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks-carousel">
        <div className="talk-header">
          <h1 className="talk-header-title">{talksData.title}</h1>
          <p className={isDark ? "dark-mode talk-header-subtitle" : "subTitle talk-header-subtitle"}>
            {talksData.subtitle}
          </p>
        </div>

        <div className="talks-container">
          {talksData.talks.map((talk, index) => (
            <div
              key={index}
              className={`talk-card ${isDark ? "dark-mode" : ""}`}
              style={{
                opacity: getOpacity(index),
                transform: index === currentSlide ? "scale(1)" : "scale(.75)",
                display: getOpacity(index) > 0 ? "block" : "none"
              }}
            >
              <div className="talk-image">
                <img src={talk.image} alt={talk.title} className="card-image" />
              </div>
              <div className="talk-details">
                <h3 className={isDark ? "dark-mode card-title" : "card-title"}>
                  {talk.title}
                </h3>
                <p className={isDark ? "dark-mode card-description" : "card-description"}>
                  {talk.description}
                </p>
                <p className={isDark ? "dark-mode card-description" : "card-description"}>
                  {talk.coauthors}
                </p>
                <p className={isDark ? "dark-mode card-location" : "card-location"}>
                  <strong>{talk.location}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons-container">
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
      </div>
    </Fade>
  );
}
