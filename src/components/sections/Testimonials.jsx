import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Testimonials.css';

const testimonials = [
    { name: "Sarah Jenkins", role: "CTO, TechStart", text: "The cleanest template I've ever worked with. The GSAP animations are subtle yet effective." },
    { name: "Michael Chen", role: "Designer", text: "Pixel perfect integration. The design system is flexible and beautiful out of the box." },
    { name: "Alex Morgan", role: "Frontend Dev", text: "A joy to code with. Excellent component structure and performance." }
];

const Testimonials = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(cardsRef.current,
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            }
        );
    }, []);

    return (
        <section className="testimonials section-padding" id="testimonials" ref={sectionRef}>
            <div className="container">
                <div className="testimonials-header">
                    <h2>Trusted by Experts</h2>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <div
                            className="testimonial-card"
                            key={i}
                            ref={el => cardsRef.current[i] = el}
                        >
                            <div className="quote-icon">“</div>
                            <p className="testimonial-text">{t.text}</p>
                            <div className="testimonial-author">
                                <h4>{t.name}</h4>
                                <span>{t.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
