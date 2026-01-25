import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const badgeRef = useRef(null);
    const headingRef = useRef(null);
    const subRef = useRef(null);
    const actionsRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Initial state set in CSS or via set() for no-flash
            gsap.set([badgeRef.current, headingRef.current, subRef.current, actionsRef.current, footerRef.current], { autoAlpha: 0, y: 20 });

            // Orchestrated sequence
            tl.to(badgeRef.current, { duration: 0.8, autoAlpha: 1, y: 0, delay: 0.2 })
                .to(headingRef.current, { duration: 1, autoAlpha: 1, y: 0 }, "-=0.6")
                .to(subRef.current, { duration: 0.8, autoAlpha: 1, y: 0 }, "-=0.8")
                .to(actionsRef.current, { duration: 0.8, autoAlpha: 1, y: 0 }, "-=0.6")
                .to(footerRef.current, { duration: 0.8, autoAlpha: 1, y: 0 }, "-=0.6");

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="hero-minimal" ref={heroRef}>
            <div className="hero-content" ref={contentRef}>
                <div className="hero-badge" ref={badgeRef}>
                    <span className="badge-dot"></span>
                    <span className="badge-text">v2.0 is now available</span>
                </div>

                <h1 ref={headingRef}>
                    Design for the <br />
                    <span className="text-highlight">ambitious web.</span>
                </h1>

                <p ref={subRef}>
                    A unified design system that helps you build beautiful,
                    accessible, and performant web applications with speed and precision.
                </p>

                <div className="hero-actions" ref={actionsRef}>
                    <a href="#start" className="btn-primary-minimal">
                        Start Building
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                    <a href="#docs" className="btn-secondary-minimal">Read Documentation</a>
                </div>

                <div className="hero-footer" ref={footerRef}>
                    <span className="trusted-text">Trusted by design-forward teams</span>
                    <div className="company-logos">
                        {/* Abstract Placeholders for logos to keep it minimal/neutral */}
                        <div className="logo-placeholder"></div>
                        <div className="logo-placeholder"></div>
                        <div className="logo-placeholder"></div>
                        <div className="logo-placeholder"></div>
                    </div>
                </div>
            </div>

            {/* Subtle Grid Background */}
            <div className="grid-background"></div>
        </section>
    );
};

export default Hero;
