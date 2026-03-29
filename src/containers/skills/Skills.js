import React, {useContext} from "react";
import "./Skills.scss";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "notebook notebook-dark" : "notebook"} id="skills">
      <div className="notebook-content">
        <div className="notebook-text">
          <p className="notebook-entry">Entry #47 — Learning from the Best</p>
          <h2
            className={
              isDark
                ? "notebook-heading notebook-heading-dark"
                : "notebook-heading"
            }
          >
            {skillsSection.title}
          </h2>
          <p className="notebook-subtitle">{skillsSection.subTitle}</p>
          <hr className="notebook-divider" />
          {skillsSection.skills.map((skill, i) => (
            <div key={i}>
              <p
                className={
                  isDark
                    ? "notebook-label notebook-label-dark"
                    : "notebook-label"
                }
              >
                <strong>Proudest Innovation</strong>
              </p>
              <p className="notebook-innovation">{skill}</p>
            </div>
          ))}
          <a href="#papers" className="notebook-cta">
            <span>See impact</span>
            <span className="notebook-cta-arrow">↓</span>
          </a>
        </div>
        <div className="notebook-photo">
          <div
            className={
              isDark
                ? "notebook-photo-frame notebook-photo-frame-dark"
                : "notebook-photo-frame"
            }
          >
            <img
              alt="Steven Becker in a photonics lab."
              src={require("../../assets/images/lab_image.jpg")}
            />
          </div>
          <p className="notebook-photo-caption">Me in the lab. 2022</p>
        </div>
      </div>
    </div>
  );
}
