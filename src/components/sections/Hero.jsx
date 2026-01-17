import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

const Hero = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonsRef = useRef(null);
    const shapesRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            tl.fromTo(titleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, delay: 0.5 }
            )
                .fromTo(subtitleRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    "-=0.8"
                )
                .fromTo(buttonsRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    "-=0.8"
                );

            // Background shapes animation
            const shapes = gsap.utils.toArray(".hero-orb");
            shapes.forEach((shape, i) => {
                gsap.to(shape, {
                    x: "random(-100, 100)",
                    y: "random(-50, 50)",
                    scale: "random(0.8, 1.2)",
                    duration: "random(10, 20)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: i * 0.5
                });
            });
        }, containerRef); // Scope to container

        return () => ctx.revert(); // Cleanup
    }, []);

    return (
        <section className="hero" ref={containerRef}>
            <div className="hero-bg-glow"></div>
            <div className="hero-shapes">
                <div ref={el => shapesRef.current[0] = el} className="hero-orb orb-1"></div>
                <div ref={el => shapesRef.current[1] = el} className="hero-orb orb-2"></div>
                <div ref={el => shapesRef.current[2] = el} className="hero-orb orb-3"></div>
            </div>
            <div className="container hero-container">
                <h1 ref={titleRef}>
                    Crafting <span className="text-gradient">Digital Excellence</span>
                </h1>
                <p ref={subtitleRef}>
                    Elevate your web presence with a design system built for speed, beauty, and performance.
                </p>
                <div className="hero-actions" ref={buttonsRef}>
                    <a href="#get-started" className="btn-primary">Start Building</a>
                    <a href="#demo" className="btn-secondary">View Demo</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
