import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, HeartPulse, CalendarCheck, User, MessageCircle, Clock, List, Users, Mail, Phone, Shield, Quote, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Landing.css';
import Footer from '../../components/Footer/Footer';


import heroImage from '../../../src/assets/images/landing-pagebanner.jpg';
import aboutImage from '../../../src/assets/images/landing-pagebanner.jpg';
import testimonialBg from '../../../src/assets/images/landing-pagebanner.jpg';


const Landing = ({ user }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [messageSent, setMessageSent] = useState(false);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [userRole, setUserRole] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNewsletterChange = (e) => {
    setNewsletterEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here would be the logic for sending the message (e.g., API call)
    console.log('Message sent:', formData);
    setFormData({ name: '', email: '', message: '' });
    setMessageSent(true);
    setTimeout(() => setMessageSent(false), 5000); // Hide the success message after 5 seconds
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Here would be the logic for subscribing to the newsletter (e.g., API call)
    console.log('Subscribed to newsletter:', newsletterEmail);
    setNewsletterEmail('');
    setNewsletterSubscribed(true);
    setTimeout(() => setNewsletterSubscribed(false), 5000); // Hide the success message after 5 seconds
  };
  useEffect(() => {
    const role = localStorage.getItem('role'); // Retrieve role from localStorage
    setUserRole(role);
  }, []);


  return (
    <div className="landing-page">
      <section className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Precision Healthcare, Personalized for You</h1>
            <p className="hero-subtitle">Connect with certified specialists and manage your health journey</p>
            
            <div className="cta-buttons">
            {userRole && (
                userRole === 'patient' ? (
                  <Link to="/book-appointment" className="cta-primary">
                    <CalendarCheck /> Book Appointment
                  </Link>
                ) : (
                  <Link to="/doctor-dashboard" className="cta-primary">
                    <User /> Check Appointments
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">Why Healthx?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src={heroImage} alt="Doctor Appointments" className="feature-image" />
            <div className="icon-wrapper">
              <Stethoscope className="feature-icon" />
            </div>
            <h3>Doctor Appointments</h3>
            <p>Schedule appointments with top specialists easily.</p>
          </div>
          <div className="feature-card">
            <img src={heroImage} alt="Chat with Best Doctors" className="feature-image" />
            <div className="icon-wrapper">
              <MessageCircle className="feature-icon" />
            </div>
            <h3>Chat with Best Doctors</h3>
            <p>Get instant medical advice from certified doctors.</p>
          </div>
          <div className="feature-card">
            <img src={heroImage} alt="Consult with Doctors" className="feature-image" />
            <div className="icon-wrapper">
              <HeartPulse className="feature-icon" />
            </div>
            <h3>Consult with Doctors</h3>
            <p>Access expert consultations and personalized care.</p>
          </div>
          <div className="feature-card">
            <img src={heroImage} alt="24/7 Availability" className="feature-image" />
            <div className="icon-wrapper">
              <Clock className="feature-icon" />
            </div>
            <h3>24/7 Availability</h3>
            <p>Receive healthcare services any time, any day.</p>
          </div>
          <div className="feature-card">
            <img src={heroImage} alt="To-Do List for Users" className="feature-image" />
            <div className="icon-wrapper">
              <List className="feature-icon" />
            </div>
            <h3>To-Do List for Users</h3>
            <p>Manage your daily activities and health tasks efficiently.</p>
          </div>
          <div className="feature-card">
            <img src={heroImage} alt="Secure and Private" className="feature-image" />
            <div className="icon-wrapper">
              <Shield className="feature-icon" />
            </div>
            <h3>Secure and Private</h3>
            <p>Your health data is secure and private with us.</p>
          </div>
        </div>
      </section>

      <section className="about-section">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <img src={aboutImage} alt="About Us" className="about-image" />
          <div>
            <p>At Healthx, we are committed to providing personalized healthcare services to our patients. Our team of certified specialists is dedicated to ensuring you receive the best care possible. Whether you need a routine check-up or advanced medical treatment, we are here to help you every step of the way.</p>
            <p>Our state-of-the-art facilities and innovative health tracking systems ensure that you have access to the latest medical technology and insights. Join Healthx today and take control of your health journey.</p>
          </div>
        </div>
      </section>

      <section className="testimonial-section" style={{ backgroundImage: `url(${testimonialBg})` }}>
        <h2 className="section-title">What Our Patients Say</h2>
        <div className="testimonial-content">
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="testimonial-icon">
                <Quote />
              </div>
              <p className="testimonial-text">"Healthx has transformed my healthcare experience. The ability to book appointments instantly and access my health records digitally is a game-changer."</p>
              <div className="testimonial-author">
                <User className="author-icon" />
                <h3>John Doe</h3>
                <p>Patient</p>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-icon">
                <Quote />
              </div>
              <p className="testimonial-text">"The specialists at Healthx are top-notch. I feel confident in the care I receive and appreciate the personalized approach."</p>
              <div className="testimonial-author">
                <User className="author-icon" />
                <h3>Jane Smith</h3>
                <p>Patient</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h2 className="section-title">Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <div className="icon-wrapper">
              <Users className="team-icon" />
            </div>
            <h3>Dr. John Doe</h3>
            <p>Chief Medical Officer</p>
          </div>
          <div className="team-card">
            <div className="icon-wrapper">
              <Users className="team-icon" />
            </div>
            <h3>Dr. Jane Smith</h3>
            <p>Head of Pediatrics</p>
          </div>
          <div className="team-card">
            <div className="icon-wrapper">
              <Users className="team-icon" />
            </div>
            <h3>Dr. Emily Johnson</h3>
            <p>Senior Cardiologist</p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="icon-wrapper">
              <Mail className="contact-icon" />
            </div>
            <h3>Email</h3>
            <p>info@healthx.com</p>
          </div>
          <div className="contact-card">
            <div className="icon-wrapper">
              <Phone className="contact-icon" />
            </div>
            <h3>Phone</h3>
            <p>+1 234 567 890</p>
          </div>
        </div>
        {messageSent && <p className="success-message">Message sent successfully!</p>}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Take Control of Your Health?</h2>
          <p>Join Healthx today and connect with our certified specialists.</p>
          <Link to="/signup" className="cta-primary">
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;