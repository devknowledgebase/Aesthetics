import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ThemeToggle from '../common/ThemeToggle';
import './Navbar.css';

const Navbar = () => {
    const navRef = useRef(null);
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const el = navRef.current;
        gsap.fromTo(el,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
        );
    }, []);

    return (
        <nav className="navbar" ref={navRef}>
            <div className="container navbar-container">
                <div className="logo">
                    <a href="#">AESTHETICS</a>
                </div>

                {/* Desktop Menu */}
                <ul className="nav-links desktop-only">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                </ul>

                <div className="nav-actions desktop-only">
                    <ThemeToggle />
                    <a href="#signin" className="btn-text">Sign In</a>
                    <a href="#get-started" className="btn-primary">Get Started</a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
                <ul className="nav-links-mobile">
                    <li onClick={() => setIsOpen(false)}><a href="#features">Features</a></li>
                    <li onClick={() => setIsOpen(false)}><a href="#testimonials">Testimonials</a></li>
                    <li onClick={() => setIsOpen(false)}><a href="#pricing">Pricing</a></li>
                </ul>
                <div className="nav-actions-mobile">
                    <ThemeToggle />
                    <a href="#signin" className="btn-text" onClick={() => setIsOpen(false)}>Sign In</a>
                    <a href="#get-started" className="btn-primary" onClick={() => setIsOpen(false)}>Get Started</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
