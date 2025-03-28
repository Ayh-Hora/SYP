import { useState } from 'react';
import { Calendar, User, CheckCircle, XCircle, Info } from 'lucide-react';
import { FaNotesMedical } from 'react-icons/fa';
import './CheckAppointments.css';

const CheckAppointments = () => {
  const [appointments, setAppointments] = useState([
    { id: 1, patient: 'Ramesh Shrestha', date: '2025-04-01', time: '10:00 AM', status: 'pending' },
    { id: 2, patient: 'Sita Adhikari', date: '2025-04-02', time: '2:00 PM', status: 'pending' },
    { id: 3, patient: 'Hari Bahadur Thapa', date: '2025-04-03', time: '11:30 AM', status: 'pending' },
  ]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [actionStatus, setActionStatus] = useState(null);

  const handleAppointmentAction = (id, action) => {
    setAppointments(appointments.map(appointment =>
      appointment.id === id ? { ...appointment, status: action } : appointment
    ));
    setActionStatus({ id, action });
    setTimeout(() => setActionStatus(null), 2000);
  };

  return (
    <div className="check-appointments">
      <div className="appointments-card">
        <h1 className="appointments-title">
          <Calendar className="title-icon" /> Check Appointments
        </h1>

        <div className="appointments-list">
          {appointments.length === 0 ? (
            <p className="empty-message">No appointments scheduled.</p>
          ) : (
            appointments.map(appointment => (
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
            ))
          )}
        </div>
      </div>

      {selectedAppointment && (
        <div className="appointment-modal">
          <div className="modal-content">
            <h3 className="modal-title">Appointment Details</h3>
            <p><User className="modal-icon" /> <strong>Patient:</strong> {selectedAppointment.patient}</p>
            <p><Calendar className="modal-icon" /> <strong>Date:</strong> {selectedAppointment.date}</p>
            <p><Clock className="modal-icon" /> <strong>Time:</strong> {selectedAppointment.time}</p>
            <p><FaNotesMedical className="modal-icon" /> <strong>Status:</strong> {selectedAppointment.status}</p>
            <button className="modal-close-btn" onClick={() => setSelectedAppointment(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckAppointments;