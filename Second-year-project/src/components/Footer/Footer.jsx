import React from 'react';
import './Footer.css';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@healthhub.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Health St, Wellness City, USA</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="links">
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy</a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><Facebook /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><Twitter /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><Instagram /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 HealthHub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;