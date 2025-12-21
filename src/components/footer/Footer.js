import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Copyright of the content by Steven Becker")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a href="https://github.com/saadpasta/developerFolio">
            developerFolio
          </a>
        </p>
        <p
          className={
            isDark
              ? "dark-mode footer-text footer-links"
              : "footer-text footer-links"
          }
        >
          <a href="#privacy">Privacy Policy</a> |
          <a
            href="https://www.google.com/analytics/learn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Analytics Info
          </a>
        </p>
      </div>
    </Fade>
  );
}
