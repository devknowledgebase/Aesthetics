import React, { useEffect, useRef } from 'react';
import { Zap, Shield, Layout, Globe, Box, Cpu } from 'lucide-react';
import gsap from 'gsap';
import './Features.css';

const featuresData = [
    { icon: <Zap size={24} />, title: "Lightning Fast", description: "Optimized for speed with zero-runtime overhead." },
    { icon: <Shield size={24} />, title: "Secure by Design", description: "Enterprise-grade security built into every component." },
    { icon: <Layout size={24} />, title: "Responsive Layout", description: "Fluid designs that adapt to any screen size instantly." },
    { icon: <Globe size={24} />, title: "Global CDN", description: "Deploy to the edge in seconds with our global network." },
    { icon: <Box size={24} />, title: "Modular", description: "Drop-in components that work together seamlessly." },
    { icon: <Cpu size={24} />, title: "AI Powered", description: "Smart optimizations powered by machine learning." }
];

const Features = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(cardsRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section className="features section-padding" id="features" ref={sectionRef}>
            <div className="container">
                <div className="features-header">
                    <h2>Built for the Future</h2>
                    <p>Everything you need to build top-tier applications.</p>
                </div>
                <div className="features-grid">
                    {featuresData.map((feature, index) => (
                        <div
                            className="feature-card"
                            key={index}
                            ref={el => cardsRef.current[index] = el}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
