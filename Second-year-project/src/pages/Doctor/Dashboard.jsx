import { useState } from 'react';
import { Search, Calendar, User, CheckCircle, XCircle, Info, Stethoscope } from 'lucide-react';
import { FaHeartbeat, FaUserInjured, FaCalendarCheck } from 'react-icons/fa';
import { doctors } from '../../data';
import './Doctor.css';

const DoctorDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [actionStatus, setActionStatus] = useState(null);

  // Sample appointments data for the doctor
  const [appointments, setAppointments] = useState([
    { id: 1, patient: 'Ramesh Shrestha', date: '2025-04-01', time: '10:00 AM', status: 'pending' },
    { id: 2, patient: 'Sita Adhikari', date: '2025-04-02', time: '2:00 PM', status: 'pending' },
    { id: 3, patient: 'Hari Bahadur Thapa', date: '2025-04-03', time: '11:30 AM', status: 'pending' },
  ]);

  const filteredDoctors = doctors.filter(doctor =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAppointmentAction = (id, action) => {
    setAppointments(appointments.map(appointment =>
      appointment.id === id ? { ...appointment, status: action } : appointment
    ));
    setActionStatus({ id, action });
    setTimeout(() => setActionStatus(null), 2000);
  };

  return (
    <div className="doctor-dashboard">
      <div className="dashboard-card">
        <h1 className="dashboard-title">
          <FaHeartbeat className="title-icon" /> Doctor Dashboard
        </h1>

        <div className="doctor-stats">
          <div className="stat-item">
            <FaCalendarCheck className="stat-icon" />
            <span>Upcoming: 15</span>
          </div>
          <div className="stat-item">
            <FaUserInjured className="stat-icon" />
            <span>Patients: 243</span>
          </div>
        </div>

        <div className="search-bar">
          <Search className="search-icon" />
          <input
            type="text"
            placeholder="Search doctors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="doctors-section">
          <h2 className="section-title">Doctors ({filteredDoctors.length})</h2>
          <div className="doctors-grid">
            {filteredDoctors.map((doctor) => (
              <div key={doctor.id} className="doctor-card">
                <h3>{doctor.name}</h3>
                <p><Stethoscope className="info-icon" /> {doctor.specialty}</p>
                <div className="doctor-actions">
                  <button
                    className="action-btn view-btn"
                    onClick={() => setSelectedDoctor(doctor)}
                  >
                    <Info className="action-icon" /> Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="appointments-section">
          <h2 className="section-title">Check Appointments</h2>
          {appointments.length === 0 ? (
            <p className="empty-message">No appointments scheduled.</p>
          ) : (
            <div className="appointments-list">
              {appointments.map(appointment => (
                <div
                  key={appointment.id}
                  className={`appointment-item ${appointment.status}`}
                  style={{
                    borderLeft: appointment.status === 'accepted' ? '4px solid #28a745' :
                               appointment.status === 'rejected' ? '4px solid #dc3545' : '4px solid #007BFF'
                  }}
                >
                  <div className="appointment-info">
                    <p><User className="info-icon" /> {appointment.patient}</p>
                    <p><Calendar className="info-icon" /> {appointment.date} at {appointment.time}</p>
                  </div>
                  <div className="appointment-actions">
                    {appointment.status === 'pending' ? (
                      <>
                        <button
                          className="action-btn accept-btn"
                          onClick={() => handleAppointmentAction(appointment.id, 'accepted')}
                        >
                          <CheckCircle className="action-icon" /> Accept
                        </button>
                        <button
                          className="action-btn reject-btn"
                          onClick={() => handleAppointmentAction(appointment.id, 'rejected')}
                        >
                          <XCircle className="action-icon" /> Reject
                        </button>
                      </>
                    ) : (
                      <span className={`status-label ${appointment.status}`}>
                        {appointment.status === 'accepted' ? 'Accepted' : 'Rejected'}
                      </span>
                    )}
                    <button
                      className="action-btn info-btn"
                      onClick={() => setSelectedAppointment(appointment)}
                    >
                      <Info className="action-icon" /> Details
                    </button>
                  </div>
                  {actionStatus && actionStatus.id === appointment.id && (
                    <div className={`action-feedback animate-bounce ${actionStatus.action}`}>
                      {actionStatus.action === 'accepted' ? '✓ Accepted!' : '✗ Rejected!'}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedDoctor && (
        <div className="doctor-modal">
          <div className="modal-content">
            <h3 className="modal-title">{selectedDoctor.name}</h3>
            <p><Stethoscope className="modal-icon" /> <strong>Specialty:</strong> {selectedDoctor.specialty}</p>
            <p><User className="modal-icon" /> <strong>Experience:</strong> {selectedDoctor.experience} years</p>
            <p><CheckCircle className="modal-icon" /> <strong>Rating:</strong> {selectedDoctor.rating}/5</p>
            <button className="modal-close-btn" onClick={() => setSelectedDoctor(null)}>
              Close
            </button>
          </div>
        </div>
      )}

      {selectedAppointment && (
        <div className="appointment-modal">
          <div className="modal-content">
            <h3 className="modal-title">Appointment Details</h3>
            <p><User className="modal-icon" /> <strong>Patient:</strong> {selectedAppointment.patient}</p>
            <p><Calendar className="modal-icon" /> <strong>Date:</strong> {selectedAppointment.date}</p>
            <p><Calendar className="modal-icon" /> <strong>Time:</strong> {selectedAppointment.time}</p>
            <p><CheckCircle className="modal-icon" /> <strong>Status:</strong> {selectedAppointment.status}</p>
            <button className="modal-close-btn" onClick={() => setSelectedAppointment(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;