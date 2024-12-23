"use client"
import './terms.css';
import { useState, useEffect } from 'react';

export default function TermsPage() {
  const [currentDate, setCurrentDate] = useState<string>('');

  useEffect(() => {
    const formattedDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div className="terms-policy">
      <div className="terms-content">
        <h1>Terms and Conditions</h1>

        <div className="policy-section">
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.</p>
        </div>

        <div className="policy-section">
          <h2>2. Use of Services</h2>
          <p>Our services are provided "as is" and "as available." You agree to use our services only for lawful purposes and in accordance with these Terms and Conditions. You are responsible for maintaining the confidentiality of your account information and for all activities under your account.</p>
        </div>

        <div className="policy-section">
          <h2>3. Intellectual Property</h2>
          <p>All content, features, and functionality on our website, including but not limited to text, graphics, logos, and software, are owned by Helderlig and are protected by international copyright, trademark, and other intellectual property laws.</p>
        </div>

        <div className="policy-section">
          <h2>4. User Responsibilities</h2>
          <p>You agree not to misuse our services or help anyone else do so. This includes attempting to access our services through unauthorized means, violating any applicable laws, or infringing upon others' rights.</p>
        </div>

        <div className="policy-section">
          <h2>5. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, Helderlig shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.</p>
        </div>

        <div className="policy-section">
          <h2>6. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms and Conditions at any time. We will notify users of any material changes via email or through our website. Your continued use of our services after such modifications constitutes your acceptance of the updated terms.</p>
        </div>

        <div className="policy-section">
          <h2>7. Contact Information</h2>
          <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
          <div className="contact-info">
            <p>Email: support@helderlig.com</p>
          </div>
        </div>

        <div className="policy-section">
          <p className="last-updated">
            {currentDate ? `Last updated: ${currentDate}` : 'Loading...'}
          </p>
        </div>
      </div>
    </div>
  );
}
