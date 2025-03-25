import { useState } from 'react';
import { FaSearch, FaStar, FaRegClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { doctors } from '../../data'; // Assuming you have a data file for doctors
import './User.css'; // Updated CSS file

const DoctorsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [appointments, setAppointments] = useState({});

  // Filter doctors based on search term
  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to book an appointment
  const bookAppointment = (doctorId) => {
    setAppointments(prev => ({ ...prev, [doctorId]: true }));
  };

  // Function to cancel an appointment
  const cancelAppointment = (doctorId) => {
    setAppointments(prev => ({ ...prev, [doctorId]: false }));
  };

  return (
    <div className="doctors-list-page">
      <div className="search-header">
        <h1>Find Your Doctor</h1>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by name or specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="doctors-grid">
        {filteredDoctors.map(doctor => (
          <div key={doctor.id} className="doctor-item">
            <Link to={`/doctor/${doctor.id}`} className="doctor-link">
              <div className="doctor-card">
                {/* Display the doctor's image */}
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="doctor-image" 
                />
                <div className="doctor-info">
                  <h3>{doctor.name}</h3>
                  <p className="specialty">{doctor.specialty}</p>
                  <div className="rating">
                    <FaStar className="star-icon" />
                    <span>{doctor.rating}</span>
                  </div>
                  <div className="experience">
                    <FaRegClock className="clock-icon" />
                    <span>{doctor.experience} years experience</span>
                  </div>
                </div>
              </div>
            </Link>
            {/* Conditionally render Book or Cancel button */}
            {appointments[doctor.id] ? (
              <button 
                className="cancel-button" 
                onClick={() => cancelAppointment(doctor.id)}
              >
                Cancel Appointment
              </button>
            ) : (
              <button 
                className="book-btn" 
                onClick={() => bookAppointment(doctor.id)}
              >
                Book Appointment
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;