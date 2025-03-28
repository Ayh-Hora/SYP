import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { MapPin, Mail, Phone, Star, BookOpen, Clock, MessageCircle, Camera, Stethoscope, HeartPulse, Calendar } from 'lucide-react';
import { FaUserCircle } from 'react-icons/fa';
import './Profile.css';

const Profile = ({ user: currentUser, isPageView }) => {
  const { userId } = useParams();
  const [profileUser, setProfileUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const isCurrentUser = userId === 'me' || userId === currentUser?.id;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (isCurrentUser) {
          setProfileUser(currentUser);
          setLoading(false);
          return;
        }

        console.log(`Fetching profile for user ${userId}`);
        await new Promise(resolve => setTimeout(resolve, 500));

        const mockUsers = {
          'doc1': {
            id: 'doc1',
            name: 'Dr. Sarah Johnson',
            role: 'doctor',
            specialty: 'Cardiologist',
            rating: 4.7,
            experience: '12 years',
            bio: 'Board certified cardiologist with extensive experience in interventional procedures.',
            address: '123 Medical Center, Boston, MA',
            email: 'dr.johnson@healthx.com',
            phone: '(555) 123-4567',
            isVerified: true,
          },
          'pat1': {
            id: 'pat1',
            name: 'Michael Brown',
            role: 'patient',
            medicalCondition: 'Type 2 Diabetes',
            conditionDuration: '5 years',
            bio: 'Managing diabetes with regular checkups and healthy lifestyle.',
            address: '456 Oak Street, Boston, MA',
            email: 'michael.b@healthx.com',
            phone: '(555) 987-6543',
          },
        };

        const userData = mockUsers[userId] || null;
        if (!userData) throw new Error('User not found');
        setProfileUser(userData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId, currentUser, isCurrentUser]);

  if (loading) return <div className="profile-loading">Loading profile...</div>;
  if (error) return <div className="profile-error">Error: {error}</div>;
  if (!profileUser) return <div className="profile-not-found">Profile not found</div>;

  return (
    <div className={`profile-container ${isPageView ? 'page-view' : 'modal-view'} ${profileUser.role}`}>
      {/* Header Section */}
      <header className="profile-header">
        <div className="profile-photo">
          {profileUser.photo ? (
            <img src={profileUser.photo} alt="Profile" className="profile-image" />
          ) : (
            <FaUserCircle size={120} className="default-avatar" />
          )}
          {isCurrentUser && (
            <label className="upload-photo">
              <Camera size={20} />
              <input type="file" accept="image/*" />
            </label>
          )}
        </div>

        <div className="profile-title">
          <h1>{profileUser.name}</h1>
          {profileUser.specialty && <p className="specialty">{profileUser.specialty}</p>}
          {profileUser.medicalCondition && <p className="medical-condition">{profileUser.medicalCondition}</p>}
          <div className="badges">
            {profileUser.isVerified && <span className="verified-badge">Verified</span>}
            {profileUser.isPremium && <span className="premium-badge">Premium</span>}
          </div>
        </div>

        <div className="contact-info">
          {profileUser.address && (
            <div className="contact-item">
              <MapPin size={18} />
              <span>{profileUser.address}</span>
            </div>
          )}
          {profileUser.email && (
            <div className="contact-item">
              <Mail size={18} />
              <span>{profileUser.email}</span>
            </div>
          )}
          {profileUser.phone && (
            <div className="contact-item">
              <Phone size={18} />
              <span>{profileUser.phone}</span>
            </div>
          )}
        </div>
      </header>

      {/* Stats Section */}
      <div className="stats-section">
        {profileUser.role === 'doctor' && profileUser.rating && (
          <div className="stat-item">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill={i < Math.floor(profileUser.rating) ? '#FFD700' : 'none'} stroke="#FFD700" />
              ))}
            </div>
            <span className="stat-value">{profileUser.rating}/5</span>
            <span className="stat-label">Rating</span>
          </div>
        )}
        <div className="stat-item">
          {profileUser.role === 'doctor' ? <Stethoscope size={24} /> : <HeartPulse size={24} />}
          <span className="stat-value">{profileUser.role === 'doctor' ? profileUser.experience : profileUser.conditionDuration || 'N/A'}</span>
          <span className="stat-label">{profileUser.role === 'doctor' ? 'Experience' : 'Condition Duration'}</span>
        </div>
      </div>

      {/* Bio Section */}
      <section className="bio-section">
        <h2>
          <BookOpen size={20} /> {profileUser.role === 'doctor' ? 'Professional Bio' : 'Health Profile'}
        </h2>
        <p>{profileUser.bio || 'No information provided.'}</p>
      </section>

      {/* Action Buttons */}
      <div className="profile-actions">
        {!isCurrentUser && (
          <>
            <button className="primary-cta">
              <MessageCircle size={18} />
              {profileUser.role === 'doctor' ? 'Book Appointment' : 'Send Message'}
            </button>
            {profileUser.role === 'doctor' && (
              <button className="secondary-cta">
                <Clock size={18} /> View Availability
              </button>
            )}
          </>
        )}
        {isCurrentUser && (
          <button className="edit-profile-btn">
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;