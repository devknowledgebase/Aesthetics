import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import './Interactive.css';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    { question: "How does the GSAP animation work?", answer: "We use ScrollTrigger to detect when elements enter the viewport and trigger smooth tweens." },
    { question: "Is this template mobile responsive?", answer: "Yes, fully responsive using CSS Flexbox and Grid with dedicated media queries." },
    { question: "Can I customize the colors?", answer: "Absolutely. Just change the CSS variables in index.css and everything updates instantly." }
];

const Interactive = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="interactive section-padding" id="interactive">
            <div className="container interactive-grid">
                <div className="faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <div className="accordion">
                        {faqs.map((faq, index) => (
                            <div key={index} className={`accordion-item ${activeIndex === index ? 'active' : ''}`}>
                                <button className="accordion-header" onClick={() => toggleAccordion(index)}>
                                    <span>{faq.question}</span>
                                    {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </button>
                                <div className="accordion-content">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="contact-section">
                    <h2>Get in Touch</h2>
                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="you@company.com" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" rows="4" placeholder="How can we help?" required></textarea>
                        </div>
                        <button type="submit" className="btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Interactive;
