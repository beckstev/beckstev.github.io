# Google Analytics 4 & GDPR/CCPA Compliance Setup Guide

## Overview

Your website is now configured with:
- ✅ Google Analytics 4 (GA4) with consent mode
- ✅ Cookie consent banner for GDPR/CCPA compliance
- ✅ Comprehensive privacy policy
- ✅ Anonymized IP addresses
- ✅ Respect for user privacy settings

---

## Step 1: Create Your Google Analytics 4 Property

### 1.1 Go to Google Analytics
Visit: https://analytics.google.com

### 1.2 Create a New Property
1. Click **Admin** (bottom left gear icon)
2. Under "Property," select **Create Property**
3. Enter property details:
   - **Property Name:** beckstev.com (or similar)
   - **Reporting Timezone:** Your timezone
   - **Currency:** USD (or your currency)
4. Click **Create**

### 1.3 Set Up a Web Data Stream
1. After property creation, click **Create Data Stream**
2. Select **Web**
3. Enter your website details:
   - **Website URL:** https://beckstev.com
   - **Stream Name:** beckstev.com (or similar)
4. Click **Create Stream**

### 1.4 Copy Your Measurement ID
1. You'll see your **Measurement ID** (format: `G-XXXXXXXXXX`)
2. Copy this ID - you'll need it in Step 2

---

## Step 2: Update Your Website with Measurement ID

### 2.1 Edit public/index.html
Replace all instances of `G-XXXXXXXXXX` with your actual Measurement ID:

```html
<!-- Find and replace in public/index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID_HERE"></script>
<script>
  gtag("config", "G-YOUR_ID_HERE", {
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false
  });
</script>
```

### 2.2 Redeploy Your Website
```bash
npm run build
npm run deploy
```

---

## Step 3: Verify Setup is Working

### 3.1 Check Real-Time Analytics
1. Go to https://analytics.google.com
2. Select your property
3. Go to **Real-Time** → **Overview**
4. Visit your website in a new tab
5. You should see yourself appearing in Real-Time data within seconds

### 3.2 Check Collection Status
1. In Google Analytics, go to **Admin** → **Data Streams**
2. Click your web stream
3. Look for "Measurement Protocol secret" section
4. You should see recent hits

---

## How Consent Works on Your Website

### User Journey:

1. **First Visit:**
   - Cookie consent banner appears
   - User can **Accept** or **Decline** analytics

2. **User Accepts:**
   - Consent status saved to browser's `localStorage`
   - Google Analytics tracking enabled
   - Analytics data collected

3. **User Declines:**
   - Consent status saved to browser's `localStorage`
   - Google Analytics tracking blocked
   - No analytics data collected

4. **Returning Visitor:**
   - Previous consent choice remembered
   - Banner doesn't appear again
   - Same tracking behavior as before

### Technical Details:

**Consent is stored in:**
```javascript
localStorage.getItem("analyticsConsent")
// Returns: "accepted" or "declined"
```

**GA4 Consent Mode:**
```javascript
gtag("consent", "update", {
  analytics_storage: "granted" // or "denied"
});
```

---

## Privacy Policy

Your privacy policy is now available at:
- **Path:** `/privacy`
- **File:** `src/containers/privacy/Privacy.js`

The policy covers:
- What data is collected
- How it's used
- GDPR rights (EU users)
- CCPA rights (California residents)
- How to opt-out
- Data retention
- Third-party services

---

## Cookie Consent Banner

### Location:
The banner appears at the top of your website (mobile) or bottom (desktop).

### Features:
- ✅ Clear privacy information
- ✅ Easy accept/decline buttons
- ✅ Links to Privacy Policy and Google Privacy Policy
- ✅ Remembers user choice
- ✅ Fully responsive (mobile & desktop)
- ✅ Dark mode support

### Components:
- **File:** `src/components/cookieConsent/CookieConsent.js`
- **Styling:** `src/components/cookieConsent/CookieConsent.scss`

---

## Analytics Features Available

### GA4 Reports You Can Use:

**1. Real-Time Dashboard**
- Path: Real-Time → Overview
- See live visitors on your site

**2. User Overview**
- Path: Reports → User
- Total users, sessions, engagement metrics

**3. Top Pages**
- Path: Reports → Engagement → Pages and screens
- Which pages get the most visits

**4. Traffic Sources**
- Path: Reports → Acquisition → Traffic source
- Where visitors come from (Google, direct, social, etc.)

**5. Device Breakdown**
- Path: Reports → Audience → Devices
- Mobile vs Desktop visitor stats

**6. Geographic Data**
- Path: Reports → Audience → Geography
- Which countries/regions visit most

---

## Important Settings Already Configured

### Privacy-First Configuration:
✅ **IP Anonymization:** Enabled (anonymize_ip: true)
✅ **Google Signals:** Disabled
✅ **Ad Personalization:** Disabled
✅ **Consent Mode:** Enabled
✅ **Respect DNT Headers:** Yes
✅ **Default Consent:** Denied (until user accepts)

### Data Retention:
- Google Analytics: 14 months (default)
- Your site cookies: 2 years (configurable)

---

## GDPR Compliance

### Your Legal Obligations:
1. ✅ Privacy Policy - Done (at `/privacy`)
2. ✅ Consent Banner - Done (on every page)
3. ✅ Opt-out Option - Done (decline button)
4. ✅ Data Transparency - Done (Privacy Policy explains everything)
5. ✅ User Rights - Document these in Privacy Policy (DONE)

### User Rights (EU):
- Right to access their data
- Right to delete their data
- Right to correct their data
- Right to object to processing
- Right to restrict processing
- Right to data portability

**To Handle User Requests:**
- Users can contact you via your contact form
- Delete their localStorage: `localStorage.removeItem("analyticsConsent")`
- Request deletion of analytics data through Google Analytics

---

## CCPA Compliance

### Your Legal Obligations (California):
1. ✅ Privacy Policy - Done (at `/privacy`)
2. ✅ Disclosure of Data Collection - Done
3. ✅ Opt-Out Option - Done (decline button)
4. ✅ Do Not Sell - You don't sell data

### User Rights (California):
- Right to know what data is collected
- Right to delete their data
- Right to opt-out of data sharing
- No discrimination for exercising rights

---

## Google Analytics 4 vs Universal Analytics

Your old setup:
- **Universal Analytics ID:** UA-135618960-2
- **Deprecation Date:** July 1, 2023 (already deprecated)

Your new setup:
- **Google Analytics 4 ID:** G-XXXXXXXXXX (your Measurement ID)
- **Recommended:** Yes, Google's latest version

### Why GA4 is Better:
- Better privacy features
- Consent mode support
- Better mobile tracking
- Enhanced reporting
- More aligned with privacy regulations

---

## Troubleshooting

### Problem: Cookie Banner Doesn't Appear
**Solution:**
- Clear browser cache
- Check localStorage is enabled
- Open in incognito/private window

### Problem: Analytics Not Showing Data
**Solution:**
- Wait 24-48 hours for data to appear
- Verify Measurement ID is correct
- Check Real-Time dashboard
- Make sure you clicked "Accept" in consent banner

### Problem: Users Still See Old Analytics ID
**Solution:**
- Clear browser cache completely
- Verify you replaced both occurrences of ID in index.html
- Rebuild: `npm run build`
- Redeploy: `npm run deploy`

---

## Testing Checklist

- [ ] Cookie consent banner appears on first visit
- [ ] Clicking "Accept" enables analytics
- [ ] Clicking "Decline" blocks analytics
- [ ] Banner doesn't appear on return visits
- [ ] Privacy Policy is accessible at `/privacy`
- [ ] Analytics data appears in Google Analytics dashboard
- [ ] Site works in dark mode
- [ ] All links in footer work
- [ ] Mobile layout is responsive

---

## Regular Maintenance

### Monthly:
- Check Analytics dashboard for traffic patterns
- Review top pages and user behavior
- Monitor bounce rate and session duration

### Quarterly:
- Review privacy policy for any updates
- Check consent rates (accept vs decline)
- Update privacy policy if needed

### Annually:
- Audit all data retention policies
- Review GDPR/CCPA compliance
- Update cookies if new features are added

---

## Support & Resources

### Official Documentation:
- [Google Analytics 4 Help](https://support.google.com/analytics#topic=9303319)
- [GA4 Consent Mode](https://support.google.com/analytics/answer/9976101)
- [GDPR Compliance Guide](https://gdpr-info.eu/)
- [CCPA Compliance Guide](https://oag.ca.gov/privacy/ccpa)

### Your Implementation Files:
- Privacy Policy: `src/containers/privacy/Privacy.js`
- Cookie Consent: `src/components/cookieConsent/CookieConsent.js`
- Analytics Setup: `public/index.html`

---

## Questions or Issues?

If you encounter any issues with:
- Google Analytics setup
- Privacy policy
- Cookie consent banner
- GDPR/CCPA compliance

Feel free to reach out or check the official documentation linked above.

**Your website is now compliant and privacy-conscious!** 🎉
