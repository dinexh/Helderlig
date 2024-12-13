'use client';
import './footer.css';
import React from 'react';
import Link from 'next/link';
import { contactInfo } from '@/app/data/contactInfo';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Primary Navigation */}
                <div className="footer-section">
                    <h4 className="footer-heading">Quick Links</h4>
                    <nav className="footer-nav">
                        <Link href="/" className="footer-link">Home</Link>
                        <Link href="/UI/sustainability" className="footer-link">Sustainability</Link>
                        <Link href="/UI/contact" className="footer-link">Contact</Link>
                    </nav>
                </div>

                {/* Contact Information */}
                <div className="footer-section">
                    <h4 className="footer-heading">Contact</h4>
                    <address className="contact-info-footer">
                        <div className="contact-item-footer">
                            <i className="fas fa-envelope" aria-hidden="true"></i>
                            <a href={`mailto:${contactInfo.email}`} className="footer-link">
                                {contactInfo.email}
                            </a>
                        </div>
                        <div className="contact-item-footer">
                            <i className="fas fa-phone" aria-hidden="true"></i>
                            <a href={`tel:${contactInfo.phone}`} className="footer-link">
                                {contactInfo.phone}
                            </a>
                        </div>
                        <div className="contact-item-footer">
                            <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                            <span>{contactInfo.address}</span>
                        </div>
                    </address>
                </div>

                {/* Social Media */}
                <div className="footer-section">
                    <h4 className="footer-heading">Connect With Us</h4>
                    <div className="social-links">
                        <a 
                            href="https://linkedin.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="Visit our LinkedIn page"
                        >
                            <i className="fab fa-linkedin" aria-hidden="true"></i>
                            <span>LinkedIn</span>
                        </a>
                        <a 
                            href="https://twitter.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="Visit our Twitter page"
                        >
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                            <span>Twitter</span>
                        </a>
                        <a 
                            href="https://facebook.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="Visit our Facebook page"
                        >
                            <i className="fab fa-facebook" aria-hidden="true"></i>
                            <span>Facebook</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Legal Section */}
            <div className="footer-bottom">
                <p className="copyright">
                    &copy; {currentYear} Helderic Commmerico PVT LTD. All rights reserved.
                </p>
                <nav className="legal-links">
                    <Link href="/privacy" className="legal-link">Privacy Policy</Link>
                    <span className="separator" aria-hidden="true">•</span>
                    <Link href="/terms" className="legal-link">Terms of Service</Link>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;