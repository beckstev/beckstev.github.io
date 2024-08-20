import React, {useState, useEffect, useContext} from "react";
import "./TalkCarousel.scss"; // Import your SCSS file
import {Fade} from "react-reveal"; // Assuming you're using react-reveal
import StyleContext from "../../contexts/StyleContext"; // Assuming your context
import {talksData} from "../../portfolio";

export default function TalksCarousel() {
  const {isDark} = useContext(StyleContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(false); // Optional: Enable autoplay

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
      }, 5000); // Change interval as needed

      return () => clearInterval(intervalId);
    }
  }, [autoplay, talksData.talks.length]); // Dependencies for effect

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="talks-carousel">
        <h2 className={isDark ? "dark-mode talks-title" : "talks-title"}>
          Talks
        </h2>
        <div className="talks-container">
          {talksData.talks.map((talk, index) => (
            <div
              key={index}
              className={
                currentSlide == index
                  ? `talk-card active ${isDark ? "dark-mode" : ""}`
                  : `talk-card ${isDark ? "dark-mode" : ""}`
              }
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
                  {currentSlide}
                </p>
              </div>
            </div>
          ))}
        </div>
        <button
          className={`slide-button prev ${isDark ? "dark-mode" : ""}`}
          onClick={handlePrevSlide}
          disabled={currentSlide === 0}
        >
          Previous
        </button>
        <button
          className={`slide-button next ${isDark ? "dark-mode" : ""}`}
          onClick={handleNextSlide}
          disabled={currentSlide === talksData.talks.length - 1}
        >
          Next
        </button>
        {/* Optional: Autoplay toggle */}
        {/* <label htmlFor="autoplay-toggle">
          Autoplay:
          <input
            type="checkbox"
            id="autoplay-toggle"
            checked={autoplay}
            onChange={() => setAutoplay(!autoplay)}
          />
        </label> */}
      </div>
    </Fade>
  );
}
