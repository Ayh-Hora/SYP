import { useState } from 'react';
import { Calendar, Clock, Stethoscope, User, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { FaHeartbeat } from 'react-icons/fa';
import { doctors } from '../../data';
import './BookAppointment.css';

const BookAppointment = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [formData, setFormData] = useState({
    doctor: '',
    date: '',
    time: '',
    problem: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [viewProfile, setViewProfile] = useState(null);

  const problems = [
    'Fever or Flu',
    'Headache or Migraine',
    'Stomach Pain',
    'Back Pain',
    'Skin Rash',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const handleSelectDoctor = (doctor) => {
    setSelectedDoctor(doctor);
    setFormData({ ...formData, doctor: doctor.name });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.doctor || !formData.date || !formData.time || !formData.problem) {
      setError('Fill all fields');
      return;
    }
    console.log('Appointment booked:', formData);
    setSubmitted(true);
    setFormData({ doctor: '', date: '', time: '', problem: '' });
    setSelectedDoctor(null);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="book-appointment">
      <div className="appointment-card">
        <h1 className="appointment-title">
          <FaHeartbeat className="title-icon" /> Book Appointment
        </h1>

        {submitted && (
          <div className="success-message animate-bounce">
            <CheckCircle className="message-icon" />
            <span>Booked!</span>
          </div>
        )}

        {error && (
          <div className="error-message animate-fade">
            <AlertCircle className="message-icon" />
            <span>{error}</span>
          </div>
        )}

        <div className="doctors-section">
          <h2 className="section-title">Select a Doctor ({doctors.length})</h2>
          <div className="doctors-grid">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className={`doctor-card ${selectedDoctor?.id === doctor.id ? 'selected' : ''}`}
                onClick={() => handleSelectDoctor(doctor)}
              >
                <h3>{doctor.name}</h3>
                <p><Stethoscope className="info-icon" /> {doctor.specialty}</p>
                <div className="doctor-actions">
                  <button
                    className="action-btn view-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setViewProfile(doctor);
                    }}
                  >
                    <Info className="action-icon" /> Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedDoctor && (
          <div className="appointment-form-section">
            <h2 className="section-title">Schedule with {selectedDoctor.name}</h2>
            <form onSubmit={handleSubmit} className="appointment-form">
              <div className="form-group">
                <label>
                  <Calendar className="form-icon" /> Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="form-input"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="form-group">
                <label>
                  <Clock className="form-icon" /> Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label>
                  <Stethoscope className="form-icon" /> Reason
                </label>
                <select
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  className="form-input"
                >
                  <option value="">Select</option>
                  {problems.map((prob, index) => (
                    <option key={index} value={prob}>{prob}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="submit-button">
                Book
              </button>
            </form>
          </div>
        )}
      </div>

      {viewProfile && (
        <div className="doctor-modal">
          <div className="modal-content">
            <h3 className="modal-title">{viewProfile.name}</h3>
            <p><Stethoscope className="modal-icon" /> <strong>Specialty:</strong> {viewProfile.specialty}</p>
            <p><User className="modal-icon" /> <strong>Experience:</strong> {viewProfile.experience} years</p>
            <p><CheckCircle className="modal-icon" /> <strong>Rating:</strong> {viewProfile.rating}/5</p>
            <button className="modal-close-btn" onClick={() => setViewProfile(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookAppointment;