'use client'
import './nav.css';
import { GiWoodPile } from "react-icons/gi";
import { useState, useEffect } from 'react';

const Nav = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Cast to HTMLElement to access offsetHeight
            const heroSection = document.querySelector('#hero') as HTMLElement;
            const heroHeight = heroSection?.offsetHeight || 800;
            
            if (window.scrollY > heroHeight - 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return ( 
        <div className={`nav-component ${isVisible ? 'nav-visible' : 'nav-hidden'}`}>
            <div className="nav-component-in">
                <div className="nav-component-in-one">
                    <GiWoodPile className='icon-nav'/>
                    <h1>WoodFlow</h1>
                </div>
                <div className="nav-component-in-two">
                    <a href="#services">Services</a>
                    <a href="#projects">Projects</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
     );
}
 
export default Nav;