'use client';
import './footer.css';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className="footer">
            <div className="footer-content">
                {/* Company Info Section */}
                <div className="footer-section">
                    <h3>WoodFlow</h3>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/UI/sustainability">Sustainability</Link></li>
                        <li><Link href="/UI/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div className="footer-section">
                    <div className="social-links">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="footer-bottom">
                <p>&copy; {currentYear} WoodFlow. All rights reserved.</p>
                <div className="footer-bottom-links">
                    <Link href="/privacy">Privacy Policy</Link>
                    <span className="separator">•</span>
                    <Link href="/terms">Terms of Service</Link>
                    <span className="separator">•</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;