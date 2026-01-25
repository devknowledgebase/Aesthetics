import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ThemeToggle from '../common/ThemeToggle';
import './Navbar.css';

const Navbar = () => {
    const navRef = useRef(null);
    const linkRefs = useRef([]);
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    useEffect(() => {
        const el = navRef.current;
        gsap.fromTo(el,
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
        );
    }, []);

    const handleMouseEnter = (e) => {
        const target = e.target;
        gsap.to(target, { duration: 0.3, scale: 1.1, ease: "power1.out" });
    };

    const handleMouseLeave = (e) => {
        const target = e.target;
        gsap.to(target, { duration: 0.3, x: 0, y: 0, scale: 1, ease: "power1.out" });
    };

    const handleMouseMove = (e) => {
        const target = e.target;
        const rect = target.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
        const y = (e.clientY - rect.top - rect.height / 2) * 0.3;

        gsap.to(target, { duration: 0.3, x: x, y: y, ease: "power1.out" });
    };

    const addToRefs = (el) => {
        if (el && !linkRefs.current.includes(el)) {
            linkRefs.current.push(el);
        }
    };

    return (
        <nav className="navbar" ref={navRef}>
            <div className="container navbar-container">
                <div className="logo">
                    <a href="#">AESTHETICS</a>
                </div>

                {/* Desktop Menu */}
                <ul className="nav-links desktop-only">
                    {['Features', 'Testimonials', 'Pricing'].map((item, index) => (
                        <li key={index}>
                            <a
                                href={`#${item.toLowerCase()}`}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onMouseMove={handleMouseMove}
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="nav-actions desktop-only">
                    <ThemeToggle />
                    <a href="#signin" className="btn-text">Sign In</a>
                    <a href="#get-started" className="btn-primary">Get Started</a>
                </div>

                {/* Mobile Menu Toggle */}
                {/* Mobile Menu Toggle */}
                <div className="mobile-controls">
                    <ThemeToggle />
                    <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </div>
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
                    <a href="#signin" className="btn-text" onClick={() => setIsOpen(false)}>Sign In</a>
                    <a href="#get-started" className="btn-primary" onClick={() => setIsOpen(false)}>Get Started</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
