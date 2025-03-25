import { useState } from 'react';
import { FaCalendarCheck, FaUserInjured, FaCommentMedical } from 'react-icons/fa';
import AppointmentCard from '../../components/AppointmentCard/AppointmentCard';
import { appointments } from '../../data';
import './Doctor.css';

const DoctorDashboard = () => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleAppointmentAction = (id, action) => {
    // Implement appointment status update
    console.log(`${action} appointment ${id}`);
  };

  return (
    <div className="doctor-dashboard">
      <div className="dashboard-header">
        <h1>Doctor Dashboard</h1>
        <div className="doctor-stats">
          <div className="stat-item">
            <FaCalendarCheck />
            <span>Upcoming: 15</span>
          </div>
          <div className="stat-item">
            <FaUserInjured />
            <span>Patients: 243</span>
          </div>
        </div>
      </div>

      <div className="appointments-section">
        <h2>Recent Appointments</h2>
        <div className="appointments-list">
          {appointments.map(appointment => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              onAccept={() => handleAppointmentAction(appointment.id, 'accept')}
              onReject={() => handleAppointmentAction(appointment.id, 'reject')}
              onViewDetails={() => setSelectedAppointment(appointment)}
            />
          ))}
        </div>
      </div>

      {selectedAppointment && (
        <div className="appointment-modal">
          <div className="modal-content">
            <h3>Appointment Details</h3>
            <p>Patient: {selectedAppointment.patient}</p>
            <p>Date: {selectedAppointment.date}</p>
            <p>Time: {selectedAppointment.time}</p>
            <button onClick={() => setSelectedAppointment(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;