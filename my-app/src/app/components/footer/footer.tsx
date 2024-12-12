'use client';
import './footer.css';
import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <div className="footer">
            <div className="footer-in">
                <div className="footer-copyright">
                    <p>&copy; {currentYear} WoodFlow  All rights reserved</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;