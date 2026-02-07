import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import Communication from "./communicator/Communicator";
import WorkExperience from "./workExperience/WorkExperience";
import StartupProject from "./StartupProjects/StartupProject";
import Awards from "./Awards/Awards";
import Achievement from "./achievement/Achievement";
import Footer from "../components/footer/Footer";
import Podcast from "./podcast/Podcast";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import TalkCarousel from "./talks_as_carousel/TalkCarousel";
import CommsCarousel from "./comms_as_carousel/CommsCarousel";
import SplashScreen from "./splashScreen/SplashScreen";
import Privacy from "./privacy/Privacy";
import Impressum from "./impressum/Impressum";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import CookieConsent from "../components/cookieConsent/CookieConsent";
import "./Main.scss";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showImpressum, setShowImpressum] = useState(false);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  useEffect(() => {
    // Check if URL has #privacy hash
    const checkHash = () => {
      setShowPrivacy(window.location.hash === "#privacy");
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  useEffect(() => {
    const checkHash = () => {
      setShowImpressum(window.location.hash === "#impressum");
    };

    checkHash();
    window.addEventListener("hashchange", checkHash);
    return () => window.removeEventListener("hashchange", checkHash);
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : showPrivacy ? (
          <>
            <Header />
            <Privacy />
            <Footer />
            <ScrollToTopButton />
          </>
        ) : showImpressum ? (
          <>
            <Header />
            <Impressum />
            <Footer />
            <ScrollToTopButton />
          </>
        ) : (
          <>
            <CookieConsent />
            <Header />
            <Greeting />
            <Skills />
            <WorkExperience />
            <StartupProject />
            <Awards />
            <TalkCarousel />
            <Communication />
            <CommsCarousel />
            <Twitter />
            <Podcast />
            <Achievement />
            <Profile />
            <Footer />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
