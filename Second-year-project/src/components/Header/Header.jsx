import { Link } from 'react-router-dom';
import { FaUserCircle, FaSignOutAlt, FaCommentDots, FaStethoscope, FaList, FaUserEdit, FaCaretDown } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import './Header.css';

const Header = ({ onLogout, toggleChat }) => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const storedUser = localStorage.getItem('role');
    console.log(storedUser)
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        {/* Left Section */}
        <div className="nav-left">
          <Link to="/" className="logo">
            <span className="logo-text">HealthHub</span>
          </Link>

          {user && (
            <div className="role-nav">
              {user === 'patient' && (
                <>
                  <Link to="/user/doctors" className="nav-link">
                    <FaStethoscope /> Find Doctors
                  </Link>
                  <Link to="/user/todo" className="nav-link">
                    <FaList /> My Checklist
                  </Link>
                  <Link to="/user/appointments" className="nav-link">
                    <FaStethoscope /> My Appointments
                  </Link>
                </>
              )}
              {user === 'doctor' && (
                <>
                  <Link to="/doctor/dashboard" className="nav-link">
                    <FaStethoscope /> Appointments
                  </Link>
                  <Link to="/doctor/messages" className="nav-link">
                    <FaCommentDots /> Messages
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
                  <button onClick={onLogout} className="dropdown-item">
                    <FaSignOutAlt /> Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="guest-nav">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/services" className="nav-link">Services</Link>
              <Link to="/login" className="join-btn">Join Us</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
