import { useState } from 'react';
import { FaSearch, FaCalendarAlt, FaHeartbeat } from 'react-icons/fa';

import { doctors } from '../../data';
import './User.css';

const UserDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="user-dashboard">
      <div className="dashboard-header">
        <h1>Patient Dashboard</h1>
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search doctors by name or specialty..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="doctors-list">
        <h2>Available Doctors ({filteredDoctors.length})</h2>
        <div className="doctors-grid">
          {filteredDoctors.map((doctor) => (
            <DoctorCard 
              key={doctor.id} 
              doctor={doctor}
              onViewProfile={() => setSelectedDoctor(doctor)}
              onBookAppointment={() => {/* Implement booking */}}
            />
          ))}
        </div>
      </div>

      {selectedDoctor && (
        <div className="doctor-modal">
          <div className="modal-content">
            <h3>{selectedDoctor.name}</h3>
            <p>Specialty: {selectedDoctor.specialty}</p>
            <p>Experience: {selectedDoctor.experience} years</p>
            <p>Rating: {selectedDoctor.rating}/5</p>
            <button onClick={() => setSelectedDoctor(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;