'use client';
import './footer.css';
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { contactInfo } from '@/app/data/contactInfo';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-component">
            <div className="footer-component-top">
                <div className="footer-component-top-one">
                    <h2>About Us</h2>
                    <p>Helderic Commmerico PVT LTD is a company that provides services to its clients.</p>
                    <p>We are a team of experienced professionals who are dedicated to providing the best services to our clients.</p>
                </div>
                <div className="footer-component-top-two">
                    <h2>Contact Us</h2>
                    <p>{contactInfo.email}</p>
                    <p>{contactInfo.phone}</p>
                    <p>{contactInfo.address}</p>
                </div>
                <div className="footer-component-top-three">
                    <h2>Connect with us</h2>
                    <div className="footer-component-top-three-icons">
                        <div className="icon-group">
                            <FaFacebook onClick={() => window.open('https://www.facebook.com/profile.php?id=100093181888184', '_blank')} /> <span>Facebook</span>
                        </div>
                        <div className="icon-group">
                            <FaInstagram onClick={() => window.open('https://www.instagram.com/helderic_commmerico/', '_blank')} /> <span>Instagram</span>  
                        </div>
                        <div className="icon-group">
                            <FaTwitter onClick={() => window.open('https://x.com/helderic_commmerico', '_blank')} /> <span>Twitter</span>
                        </div>
                        <div className="icon-group">
                            <FaLinkedin onClick={() => window.open('https://www.linkedin.com/company/helderic-commmerico-pvt-ltd/', '_blank')} /> <span>Linkedin</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-component-bottom">
                <div className="copyright">
                <p>
                    &copy; {currentYear} Helderic Commmerico PVT LTD. All rights reserved.
                </p>
                <p>Designed and Developed by <Link href="https://www.dineshkorukonda.in/" target="_blank">Dinesh Korukonda</Link></p>
                </div>
                <div className="footer-component-bottom-nav">
                    <Link href="/privacy" className="legal-link">Privacy Policy</Link>
                    <span className="separator" aria-hidden="true">•</span>
                    <Link href="/terms" className="legal-link">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;