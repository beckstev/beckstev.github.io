import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./About.scss";
import {aboutSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function About() {
  const {isDark} = useContext(StyleContext);
  if (!aboutSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="about-main" id="about">
        <div className={isDark ? "about-card about-card-dark" : "about-card"}>
          <p className={isDark ? "about-text about-text-dark" : "about-text"}>
            {aboutSection.description}
          </p>
        </div>
      </div>
    </Fade>
  );
}
