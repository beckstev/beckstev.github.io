import React, {useState, useEffect, useContext} from "react";
import "./CookieConsent.scss";
import StyleContext from "../../contexts/StyleContext";

export default function CookieConsent() {
  const {isDark} = useContext(StyleContext);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a consent choice
    const consentStatus = localStorage.getItem("analyticsConsent");

    // Only show banner if no previous consent decision
    if (!consentStatus) {
      setShowBanner(true);
    } else {
      // Apply previous consent choice on page load
      updateAnalyticsConsent(consentStatus === "accepted");
    }
  }, []);

  const updateAnalyticsConsent = accepted => {
    // Store consent choice
    localStorage.setItem(
      "analyticsConsent",
      accepted ? "accepted" : "declined"
    );

    // Update Google Analytics consent mode (GA4)
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: accepted ? "granted" : "denied"
      });
    }
  };

  const handleAccept = () => {
    updateAnalyticsConsent(true);
    setShowBanner(false);
  };

  const handleDecline = () => {
    updateAnalyticsConsent(false);
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className={`cookie-consent ${isDark ? "dark-mode" : ""}`}>
      <div className="cookie-content">
        <h3>Privacy & Analytics</h3>
        <p>
          We use Google Analytics to understand how you use our website and
          improve your experience. Your data is anonymized and we respect your
          privacy.
        </p>
        <p className="consent-details">
          <a href="#privacy">Read our Privacy Policy</a>
          {" | "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Privacy Policy
          </a>
        </p>
      </div>

      <div className="cookie-buttons">
        <button
          className="cookie-btn decline-btn"
          onClick={handleDecline}
          aria-label="Decline analytics"
        >
          Decline
        </button>
        <button
          className="cookie-btn accept-btn"
          onClick={handleAccept}
          aria-label="Accept analytics"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
