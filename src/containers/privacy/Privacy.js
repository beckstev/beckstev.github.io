import React, {useContext, useState, useEffect} from "react";
import "./Privacy.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Privacy() {
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
      <div className="main privacy-container" id="privacy">
        <div className="privacy-content">
          <h1 className={isDark ? "dark-mode" : ""}>Privacy Policy</h1>

          <section
            className={isDark ? "dark-mode privacy-section" : "privacy-section"}
          >
            <h2>1. Introduction</h2>
            <p>
              This Privacy Policy explains how Steven Becker's personal website
              (beckstev.com) collects, uses, and protects your information. I am
              committed to protecting your privacy and ensuring transparency
              about how your data is used.
            </p>
          </section>

          <section
            className={isDark ? "dark-mode privacy-section" : "privacy-section"}
          >
            <h2>2. Information We Collect</h2>
            <h3>Automatically Collected Information:</h3>
            <ul>
              <li>
                <strong>Analytics Data:</strong> We use Google Analytics 4 to
                track page views, user interactions, and traffic patterns
              </li>
              <li>
                <strong>Device Information:</strong> Device type, browser,
                operating system, and IP address (anonymized)
              </li>
              <li>
                <strong>Location Data:</strong> Country/region level location
                (not precise)
              </li>
              <li>
                <strong>Session Information:</strong> Time spent on pages, pages
                visited, and referral source
              </li>
            </ul>

            <h3>What We Do NOT Collect:</h3>
            <ul>
              <li>
                Personal identification information (unless you provide it)
              </li>
              <li>Payment information (no transactions on this site)</li>
              <li>Precise location data</li>
              <li>Cookies for tracking (except analytics)</li>
            </ul>
          </section>

          <section
            className={isDark ? "dark-mode privacy-section" : "privacy-section"}
          >
            <h2>3. Google Analytics 4</h2>
            <p>
              We use Google Analytics 4 to understand how visitors use our
              website. This helps us improve the site's functionality and
              content. GA4 provides:
            </p>
            <ul>
              <li>Number of visitors and sessions</li>
              <li>Pages visited and time spent</li>
              <li>Traffic sources (Google, direct, social media, etc.)</li>
              <li>Device and browser information</li>
              <li>Demographic information (approximate, not personal)</li>
            </ul>

            <h3>Your Privacy with Google Analytics:</h3>
            <ul>
              <li>
                <strong>IP Anonymization:</strong> IP addresses are anonymized
                by default
              </li>
              <li>
                <strong>No Personal Data:</strong> GA4 does not collect personal
                identifying information
              </li>
              <li>
                <strong>Opt-Out:</strong> You can opt out of analytics tracking
                using your browser settings or the Google Analytics Opt-out
                Browser Add-on
              </li>
              <li>
                <strong>Do Not Track (DNT):</strong> If you have DNT enabled in
                your browser, we respect this preference
              </li>
            </ul>

            <p>
              <strong>Google Analytics Opt-out Browser Add-on:</strong>{" "}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download here
              </a>
            </p>
          </section>

          <section
            className={isDark ? "dark-mode privacy-section" : "privacy-section"}
          >
            <h2>4. Cookies and Consent</h2>

            <h3>Cookie Types Used:</h3>
            <ul>
              <li>
                <strong>Essential Cookies:</strong> Required for basic site
                functionality (stored preferences like dark mode)
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Google Analytics tracking
                (requires your explicit consent)
              </li>
              <li>
                <strong>No Marketing Cookies:</strong> We do not use cookies for
                marketing or advertising
              </li>
            </ul>

            <h3>Google Analytics Cookies:</h3>
            <p>
              When you consent to analytics, the following cookies may be set:
            </p>
            <ul>
              <li>
                <strong>_ga:</strong> Used to distinguish users. Duration: 2
                years
              </li>
              <li>
                <strong>_ga_[ID]:</strong> Used to persist session state.
                Duration: 2 years
              </li>
            </ul>

            <h3>Consent Management:</h3>
            <p>
              We use a consent-first approach. Analytics cookies are{" "}
              <strong>only set after you explicitly accept</strong> them via our
              cookie consent banner. No tracking occurs until you provide
              consent.
            </p>

            <h3>How to Withdraw Consent:</h3>
            <p>You can withdraw your consent at any time by:</p>
            <ul>
              <li>
                Clicking the "Manage Cookie Settings" button at the bottom of
                this page
              </li>
              <li>Clearing your browser cookies and localStorage</li>
              <li>Using the Google Analytics Opt-out Browser Add-on</li>
              <li>Contacting me directly to request data deletion</li>
            </ul>
          </section>

          <section
            className={isDark ? "dark-mode privacy-section" : "privacy-section"}
          >
            <h2>5. GDPR Compliance (EU Users)</h2>
            <p>
              If you are in the European Union, you have the following rights
              under the General Data Protection Regulation (GDPR):
            </p>
            <ul>
              <li>
                <strong>Right to Access:</strong> Request a copy of your
                personal data
              </li>
              <li>
                <strong>Right to Erasure:</strong> Request deletion of your data
                ("right to be forgotten")
              </li>
              <li>
                <strong>Right to Rectification:</strong> Correct inaccurate data
              </li>
              <li>
                <strong>Right to Portability:</strong> Request your data in a
                portable format
              </li>
              <li>
                <strong>Right to Object:</strong> Object to processing of your
                data
              </li>
              <li>
                <strong>Right to Restrict Processing:</strong> Request
                limitation on how your data is used
              </li>
            </ul>

            <p>
              To exercise any of these rights, please contact me at the email
              provided on this website. I will respond to your request within 30
              days.
            </p>
          </section>

          <section
            className={isDark ? "dark-mode privacy-section" : "privacy-section"}
          >
            <h2>6. CCPA Compliance (California Residents)</h2>
            <p>
              If you are a California resident, you have rights under the
              California Consumer Privacy Act (CCPA):
            </p>
            <ul>
              <li>
                <strong>Right to Know:</strong> Request what personal
                information we collect about you
              </li>
              <li>
                <strong>Right to Delete:</strong> Request deletion of your
                personal information
              </li>
              <li>
                <strong>Right to Opt-Out:</strong> Opt out of the "sale" or
                sharing of your information
              </li>
              <li>
                <strong>Right to Non-Discrimination:</strong> We will not
                discriminate against you for exercising your CCPA rights
              </li>
            </ul>

            <p>
              To submit a CCPA request, contact me at the email provided on this
              website. I will respond within 45 days.
            </p>

            <p>
              <strong>Note:</strong> We do not "sell" your personal information
              to third parties. Google Analytics is used only for anonymized
              analytics.
            </p>
          </section>

          <section
            className={isDark ? "dark-mode privacy-section" : "privacy-section"}
          >
            <h2>7. Third-Party Services</h2>

            <h3>Google Analytics</h3>
            <ul>
              <li>
                <strong>Purpose:</strong> Website analytics and user behavior
                tracking
              </li>
              <li>
                <strong>Data Shared:</strong> Anonymized analytics data
              </li>
              <li>
                <strong>Data Controller:</strong> Steven Becker (website owner)
              </li>
              <li>
                <strong>Data Processor:</strong> Google LLC
              </li>
              <li>
                <strong>Privacy Policy:</strong>{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Privacy Policy
                </a>
              </li>
            </ul>

            <h3>International Data Transfers</h3>
            <p>
              Google Analytics data may be processed in the United States.
              Google LLC participates in the EU-U.S. Data Privacy Framework,
              which provides adequate protection for data transfers from the EU
              to the US. For more information, see{" "}
              <a
                href="https://privacy.google.com/businesses/compliance/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google's Data Protection Compliance
              </a>
              .
            </p>

            <h3>GitHub Pages</h3>
            <ul>
              <li>
                <strong>Purpose:</strong> Website hosting
              </li>
              <li>
                <strong>Privacy Policy:</strong>{" "}
                <a
                  href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Privacy Statement
                </a>
              </li>
            </ul>
          </section>

          <section
            className={isDark ? "dark-mode privacy-section" : "privacy-section"}
          >
            <h2>8. Data Retention</h2>
            <ul>
              <li>
                <strong>Analytics Data:</strong> Google Analytics retains data
                for 14 months
              </li>
              <li>
                <strong>Contact Form Data:</strong> Retained for 1 year unless
                you request deletion
              </li>
              <li>
                <strong>Cookies:</strong> Most analytics cookies expire after 2
                years
              </li>
            </ul>
          </section>

          <section
            className={isDark ? "dark-mode privacy-section" : "privacy-section"}
          >
            <h2>9. Children's Privacy</h2>
            <p>
              This website is not directed to children under 13. We do not
              knowingly collect information from children under 13. If we learn
              that we have collected personal information from a child under 13,
              we will promptly delete that information.
            </p>
          </section>

          <section
            className={isDark ? "dark-mode privacy-section" : "privacy-section"}
          >
            <h2>10. Security</h2>
            <p>We take reasonable precautions to protect your information:</p>
            <ul>
              <li>Website hosted on GitHub Pages with HTTPS encryption</li>
              <li>Analytics data transmitted securely to Google</li>
              <li>Regular security updates and monitoring</li>
            </ul>
          </section>

          <section
            className={isDark ? "dark-mode privacy-section" : "privacy-section"}
          >
            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              I may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated "Last Updated" date.
              Your continued use of the website constitutes acceptance of the
              updated policy.
            </p>
          </section>

          <section
            className={isDark ? "dark-mode privacy-section" : "privacy-section"}
          >
            <h2>12. Legal Basis for Processing (GDPR)</h2>
            <p>
              Under GDPR, we process your data based on the following legal
              grounds:
            </p>
            <ul>
              <li>
                <strong>Consent (Art. 6(1)(a) GDPR):</strong> For analytics
                tracking via Google Analytics. You provide explicit consent
                through our cookie consent banner before any analytics data is
                collected.
              </li>
              <li>
                <strong>Legitimate Interest (Art. 6(1)(f) GDPR):</strong> For
                essential website functionality and security.
              </li>
            </ul>
          </section>

          <section
            className={isDark ? "dark-mode privacy-section" : "privacy-section"}
          >
            <h2>13. Manage Your Cookie Preferences</h2>
            <p>
              Your current analytics consent status:{" "}
              <strong>
                {consentStatus === "accepted"
                  ? "Accepted"
                  : consentStatus === "declined"
                  ? "Declined"
                  : "Not set"}
              </strong>
            </p>
            <button
              className={`manage-consent-btn ${isDark ? "dark-mode" : ""}`}
              onClick={handleManageConsent}
              aria-label="Manage cookie settings"
            >
              Reset Cookie Preferences
            </button>
            <p className="consent-note">
              Clicking this button will reset your cookie preferences and
              redirect you to the homepage where you can make a new choice.
            </p>
          </section>

          <section
            className={isDark ? "dark-mode privacy-section" : "privacy-section"}
          >
            <h2>14. Contact Me</h2>
            <p>
              If you have questions about this Privacy Policy or would like to
              exercise your rights, please contact me using the contact
              information on my website.
            </p>
            <p>
              <strong>Last Updated:</strong>{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              })}
            </p>
          </section>
        </div>
      </div>
    </Fade>
  );
}
