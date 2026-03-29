import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  aboutSection,
  missionSection,
  skillsSection,
  achievementSection,
  resumeSection,
  communicatorSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewAbout = aboutSection.display;
  const viewMission = missionSection.display;
  const viewSkills = skillsSection.display;
  const viewComms = communicatorSection.display;
  const viewAchievement = achievementSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="logo-bar"> &#124;</span>
          <span className="logo-name">{greeting.username}&rang; </span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewAbout && (
            <li>
              <a href="#about">About</a>
            </li>
          )}
          {viewMission && (
            <li>
              <a href="#mission">Industry</a>
            </li>
          )}
          {viewSkills && (
            <li>
              <a href="#skills">Research Foundation</a>
            </li>
          )}
          {viewComms && (
            <li>
              <a href="#comms">Communicator</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">Resume</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Supporters</a>
            </li>
          )}
          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
