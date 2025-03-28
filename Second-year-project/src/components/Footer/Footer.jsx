import React from 'react';
import './Footer.css';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>
            <Mail className="icon" /> Contact Us
          </h3>
          <p><Mail size={16} /> Email: info@healthhub.com</p>
          <p><Phone size={16} /> Phone: +977 9848851860</p>
          <p><MapPin size={16} /> Dulari Morang, Nepal</p>
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
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="social-icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter className="social-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="social-icon" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="social-icon" />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <form className="newsletter-form">
            <div className="input-wrapper">
              <Mail className="input-icon" />
              <input type="email" placeholder="Your Email" required />
            </div>
            <button type="submit">
              <Send size={16} /> Subscribe
            </button>
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