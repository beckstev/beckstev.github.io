import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {""}
                {greeting.title1}
                {<br />}
                {greeting.title2}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                <div>
                  {greeting.subTitle.map((item, index) => (
                    <p
                      key={index}
                      className={
                        isDark
                          ? "dark-mode greeting-text-p"
                          : "greeting-text-p subTitle"
                      }
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </p>
              <SocialMedia />
            </div>
          </div>
          <div className="greeting-image-div">
            {
              <img
                src={require("../../assets/images/profile_picture_SB_2025.jpeg")}
                alt="Steven Becker"
                loading="eager"
              />
            }
          </div>
        </div>
      </div>
    </Fade>
  );
}
