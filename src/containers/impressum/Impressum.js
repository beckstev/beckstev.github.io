import React, {useContext, useState, useEffect} from "react";
import "./Impressum.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Impressum() {
  const {isDark} = useContext(StyleContext);
  const [consentStatus, setConsentStatus] = useState(null);

  useEffect(() => {
    setConsentStatus(localStorage.getItem("analyticsConsent"));
  }, []);

  const handleManageConsent = () => {
    // Clear consent to show the banner again
    localStorage.removeItem("analyticsConsent");
    // Revoke analytics consent
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied"
      });
    }
    setConsentStatus(null);
    // Redirect to home to show cookie banner
    window.location.href = "/";
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main impressum-container" id="impressum">
        <div className="impressum-content">
          <h1 className={isDark ? "dark-mode" : ""}>Impressum</h1>

          <section
            className={
              isDark ? "dark-mode impressum-section" : "impressum-section"
            }
          >
            <p>
              Steven Becker
              <br />
              Einsteinufer 37
              <br />
              Fraunhofer HHI
              <br />
              10587 Berlin
            </p>

            <h2>Kontakt</h2>
            <p>
              Telefon: 49 30 31002-000
              <br />
              E-Mail: 26ending_wire@icloud.com
            </p>
          </section>
        </div>
      </div>
    </Fade>
  );
}
