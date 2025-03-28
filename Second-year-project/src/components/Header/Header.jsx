import { Link } from 'react-router-dom';
import { FaUserCircle, FaSignOutAlt, FaCommentDots, FaStethoscope, FaList, FaUserEdit, FaCaretDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import './Header.css';

const Header = ({ onLogout, toggleChat }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    if (storedRole) {
      setUser({ 
        role: storedRole, 
        name: storedRole === 'patient' ? 'Patient' : storedRole === 'doctor' ? 'Doctor' : 'Admin' 
      });
    }
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Left Section */}
        <div className="nav-left">
          <Link to="/" className="logo">
            <span className="logo-text">HealthX</span>
          </Link>

          {user && (
            <div className="role-nav">
              {user.role === 'patient' && (
                <>
                  <Link to="/user/doctors" className="nav-link">
                    <FaStethoscope className="nav-icon" /> Find Doctors
                  </Link>
                  <Link to="/user/todo" className="nav-link">
                    <FaList className="nav-icon" /> My Checklist
                  </Link>
                </>
              )}
              {user.role === 'doctor' && (
                <>
                  <Link to="/doctor/dashboard" className="nav-link">
                    <FaStethoscope className="nav-icon" /> Appointments
                  </Link>
                  <Link to="/doctor/messages" className="nav-link">
                    <FaCommentDots className="nav-icon" /> Messages
                  </Link>
                </>
              )}
              {user.role === 'admin' && (
                <>
                  <Link to="/admin/dashboard" className="nav-link">Manage Users</Link>
                  <Link to="/admin/reports" className="nav-link">View Reports</Link>
                  <Link to="/admin/settings" className="nav-link">Admin Settings</Link>
                </>
              )}
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="nav-right">
          {user ? (
            <>
              {user.role !== 'admin' && (
                <button className="chat-toggle" onClick={toggleChat}>
                  <FaCommentDots />
                </button>
              )}

              <div className="user-dropdown">
                <div className="dropdown-trigger">
                  <FaUserCircle className="user-icon" />
                  <div className="user-info">
                    <span className="user-name">{user.name}</span>
                    <span className="user-role">({user.role})</span>
                  </div>
                  <FaCaretDown className="dropdown-arrow" />
                </div>
                <div className="dropdown-menu">
                  <Link to={`/${user.role}/profile`} className="dropdown-item">
                    <FaUserEdit /> Visit Profile
                  </Link>
                  <Link to="/switch-user" className="dropdown-item">
                    <FaUserCircle /> Switch User
                  </Link>
                  <button onClick={onLogout} className="dropdown-item logout-btn">
                    <FaSignOutAlt /> Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="guest-nav">
              <Link to="/" className="nav-link">Home</Link>
              <button onClick={() => scrollToSection('about-section')} className="nav-link">
                About
              </button>
              <button onClick={() => scrollToSection('features-section')} className="nav-link">
                Services
              </button>
              <Link to="/login" className="join-btn">Join Us</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;