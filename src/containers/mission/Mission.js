import React, {useContext} from "react";
import "./Mission.scss";
import {missionSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Mission() {
  const {isDark} = useContext(StyleContext);
  if (!missionSection.display) {
    return null;
  }
  return (
    <div className="mission-outer" id="mission">
      <h1
        className={
          isDark ? "mission-heading mission-heading-dark" : "mission-heading"
        }
      >
        {missionSection.title}
      </h1>
      <div className="mission-body">
        <Fade left duration={1000}>
          <div className="mission-image-div">
            <img
              alt="Steven Becker working in the photonics lab at Fraunhofer HHI"
              src={require("../../assets/images/SB_lab_HHI.png")}
            />
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="mission-text-div">
            <p className="mission-statement">
              <strong
                className={
                  isDark
                    ? "mission-keyword mission-keyword-dark"
                    : "mission-keyword"
                }
              >
                Mission:
              </strong>{" "}
              {missionSection.mission}
            </p>
            <hr className="mission-divider" />
            <p className="mission-role">{missionSection.role}</p>
            {missionSection.highlights.map((item, i) => (
              <p key={i} className="mission-highlight">
                {item}
              </p>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
}
