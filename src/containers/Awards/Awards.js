import React, {useContext} from "react";
import "./Awards.scss";
import {awardsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import confetti from "canvas-confetti";

export default function Project() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  // 2. Create a new function to handle the click
  const handleButtonConfetti = (url, xVal) => {
    // Fire the confetti with reduced particle count for better performance
    confetti({
      particleCount: 50,
      spread: 70,
      origin: {x: xVal, y: 0.6}, // Starts slightly below center
      zIndex: 9999, // Ensures it appears on top of everything
      disableForReducedMotion: true // Respects user's motion preferences
    });

    // Open the URL
    openUrlInNewTab(url);
  };

  const {isDark} = useContext(StyleContext);
  if (!awardsSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="awards">
        <div>
          <h1 className={isDark ? "dark-mode" : ""}>{awardsSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {awardsSection.subtitle}
          </p>

          <div className="projects-container">
            {awardsSection.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  className={
                    isDark
                      ? "dark-mode project-card project-card-dark"
                      : "project-card project-card-light"
                  }
                >
                  {project.image ? (
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="project-cover-image"
                        loading="lazy"
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode card-title" : "card-title"}
                    >
                      {project.projectName}
                    </h5>
                    <p
                      className={
                        isDark ? "dark-mode card-subtitle" : "card-subtitle"
                      }
                    >
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-card-footer">
                        {project.footerLink.map((link, i) => {
                          return (
                            <span
                              key={i}
                              className={
                                isDark ? "dark-mode project-tag" : "project-tag"
                              }
                              onClick={() =>
                                handleButtonConfetti(
                                  link.url,
                                  link.confetti_position
                                )
                              }
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
