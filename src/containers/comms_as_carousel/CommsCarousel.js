import React, {useState, useEffect, useContext} from "react";
import "./CommsCarousel.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import {commsData} from "../../portfolio";

export default function TalksCarousel() {
  const {isDark} = useContext(StyleContext);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [autoplay] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % commsData.talks.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      prevSlide =>
        (prevSlide - 1 + commsData.talks.length) % commsData.talks.length
    );
  };

  const getOpacity = index => {
    if (isMobile) {
      return index === currentSlide ? 1 : 0;
    }
    if (index === currentSlide) return 1;
    if (
      index ===
        (currentSlide - 1 + commsData.talks.length) % commsData.talks.length ||
      index === (currentSlide + 1) % commsData.talks.length
    )
      return 0.25;
    return 0;
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
                transform: index === currentSlide ? "scale(1)" : "scale(.75)",
                display: getOpacity(index) > 0 ? "block" : "none",
                width: index === currentSlide ? "100%" : "10%"
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
                    isDark ? "dark-mode card-description" : "card-description"
                  }
                >
                  {talk.coauthors}
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
        <div className="buttons-container">
          <button
            className={`slide-button prev ${isDark ? "dark-mode" : ""}`}
            onClick={handlePrevSlide}
            aria-label="Previous Slide"
          >
            <span className="my_arrow">⬅️</span>
          </button>
          <button
            className={`slide-button next ${isDark ? "dark-mode" : ""}`}
            onClick={handleNextSlide}
            aria-label="Next Slide"
          >
            <span className="my_arrow">➡️</span>
          </button>
        </div>
      </div>
    </Fade>
  );
}
