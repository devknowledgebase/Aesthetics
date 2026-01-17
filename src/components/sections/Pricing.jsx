import React, { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import gsap from 'gsap';
import './Pricing.css';

const plans = [
    { name: "Starter", price: "$0", features: ["1 Project", "Basic Analytics", "Community Support"] },
    { name: "Pro", price: "$29", features: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "Custom Domain"], highlighted: true },
    { name: "Enterprise", price: "Custom", features: ["Dedicated Account", "SLA", "On-premise Deployment", "SSO"] }
];

const Pricing = () => {
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
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            }
        );
    }, []);

    return (
        <section className="pricing section-padding" id="pricing" ref={sectionRef}>
            <div className="container">
                <div className="pricing-header">
                    <h2>Simple Pricing</h2>
                    <p>Choose the plan that fits your needs.</p>
                </div>
                <div className="pricing-grid">
                    {plans.map((plan, i) => (
                        <div
                            className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
                            key={i}
                            ref={el => cardsRef.current[i] = el}
                        >
                            <h3>{plan.name}</h3>
                            <div className="price">{plan.price}</div>
                            <ul className="features-list">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex}>
                                        <Check size={16} className="check-icon" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className={`btn-pricing ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}>
                                Choose {plan.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
