import React, {useContext} from "react";
import "./Communicator.scss";
import {communicatorSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Communication() {
  const {isDark} = useContext(StyleContext);
  if (!communicatorSection.display) {
    return null;
  }
  return (
    <div className="comm-outer" id="comms">
      <div className="comm-main-div">
        <Fade left duration={1000}>
          <div className="comm-text-div">
            <h1
              className={
                isDark ? "comm-heading comm-heading-dark" : "comm-heading"
              }
            >
              {communicatorSection.title}
            </h1>
            <p
              className={
                isDark ? "comm-subtitle comm-subtitle-dark" : "comm-subtitle"
              }
            >
              {communicatorSection.subTitle}
            </p>
            <div>
              {communicatorSection.skills.map((skills, i) => {
                return (
                  <p key={i} className="comm-text">
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="comm-image-div">
            <img
              alt="Steven discussing"
              src={require("../../assets/images/comm_images/jdpg_mv_discussion.jpeg")}
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}
