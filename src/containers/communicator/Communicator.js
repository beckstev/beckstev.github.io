import React, {useContext} from "react";
import "./Communicator.scss";
import {illustration, communicatorSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Communication() {
  const {isDark} = useContext(StyleContext);
  if (!communicatorSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="comms">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
              style={{ lineHeight: "1.2em" }}
            >
              {communicatorSection.title}
              {" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {communicatorSection.subTitle}
            </p>
            <div>
              {communicatorSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="communicator-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : (
              <img
                alt="Steven discussing"
                src={require("../../assets/images/comm_images/jdpg_mv_discussion.jpeg")}
              />
            )}
          </div>
        </Fade>
      </div>
    </div>
  );
}
