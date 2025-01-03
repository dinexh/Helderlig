"use client"
import './privacy.css';


export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <div className="privacy-content">
        <h1>Privacy Policy</h1>
        <div className="policy-section">
          <h2>1. Introduction</h2>
          <p>Helderlig Comercio Pvt. Ltd. values your privacy and is committed to protecting your personal information. This Privacy Policy outlines our practices regarding the collection, use, and safeguarding of your data.</p>
        </div>

        <div className="policy-section">
          <h2>2. Information We Collect</h2>
          <p>We may collect:</p>
          <ul>
            <li>Personal details (e.g., name, email, phone number) when you fill out forms or inquiries</li>
            <li>Usage data (e.g., IP address, browser type, pages visited) via cookies and analytics tools</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Respond to inquiries and provide services</li>
            <li>Improve our website functionality</li>
            <li>Communicate updates, promotions, or relevant information</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>4. Cookies</h2>
          <p>We use cookies to enhance user experience. You can manage cookie preferences in your browser settings.</p>
        </div>

        <div className="policy-section">
          <h2>5. Third-Party Sharing</h2>
          <p>We do not sell or share your personal information with third parties, except as required by law or for service delivery (e.g., shipping partners).</p>
        </div>

        <div className="policy-section">
          <h2>6. Data Security</h2>
          <p>We take reasonable steps to protect your data from unauthorized access, alteration, or disclosure.</p>
        </div>

        <div className="policy-section">
          <h2>7. User Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Request corrections or deletions</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </div>

        <div className="policy-section">
          <h2>8. Changes to this Policy</h2>
          <p>We reserve the right to update this Privacy Policy. Changes will be posted on this page.</p>
        </div>

        <div className="policy-section">
          <h2>9. Contact Us</h2>
          <p>For privacy concerns, contact us at:</p>
          <div className="contact-info">
            <p>Email: privacy@helderlig.com</p>
            <p>Phone: +91 9988669224</p>
          </div>
        </div>
      </div>
    </div>
  );
}
