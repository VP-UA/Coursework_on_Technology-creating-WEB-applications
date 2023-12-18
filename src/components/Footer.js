import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; Владислав Павлюченко — 2023</p>
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank">Facebook</a>
                    <a href="https://x.com" target="_blank">X</a>
                    <a href="https://instagram.com" target="_blank">Instagram</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
