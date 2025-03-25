// src/components/AppointmentCard/AppointmentCard.jsx
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './AppointmentCard.css';

const AppointmentCard = ({ appointment, onAccept, onReject }) => {
  return (
    <div className="appointment-card">
      <div className="appointment-info">
        <h4>{appointment.patient}</h4>
        <p>{appointment.date} at {appointment.time}</p>
        <div className={`status-badge ${appointment.status}`}>
          {appointment.status}
        </div>
      </div>
      
      {appointment.status === 'pending' && (
        <div className="action-buttons">
          <button onClick={onAccept} className="accept-btn">
            <FaCheckCircle /> Accept
          </button>
          <button onClick={onReject} className="reject-btn">
            <FaTimesCircle /> Reject
          </button>
        </div>
      )}
    </div>
  );
};

export default AppointmentCard;