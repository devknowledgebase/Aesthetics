import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer section-padding">
            <div className="container footer-container">
                <div className="footer-brand">
                    <h3>AESTHETICS</h3>
                    <p>Designing the future, one pixel at a time.</p>
                </div>
                <div className="footer-links">
                    <div className="link-column">
                        <h4>Product</h4>
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Changelog</a></li>
                        </ul>
                    </div>
                    <div className="link-column">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container footer-bottom">
                <p>&copy; 2024 Aesthetics. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
