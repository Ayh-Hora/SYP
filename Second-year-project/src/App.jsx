import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';

import Landing from './pages/Landing/Landing';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import UserDashboard from './pages/User/Dashboard';
import DoctorsList from './pages/User/DoctorsList';
import TodoList from './pages/User/TodoList';
import DoctorDashboard from './pages/Doctor/Dashboard';
import AdminDashboard from './pages/Admin/Dashboard';
import Chat from './components/Chat/Chat';
import Profile from './components/ProfileModal/Profile';
import './styles/global.css';

const App = () => {
  const [user, setUser] = useState(null);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('healthhub-user');
    if (storedUser) {
      console.log('Stored User:', storedUser);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('healthhub-user');
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Header 
        user={user} 
        onLogout={handleLogout}
        toggleChat={() => setShowChat(!showChat)}
      />
      
      <main className="main-content">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Landing />} />
          <Route 
            path="/login" 
            element={!user ? <Login setUser={setUser} /> : <Navigate to={`/${user?.role}/dashboard`} />} 
          />
          <Route 
            path="/signup" 
            element={!user ? <Signup /> : <Navigate to={`/${user?.role}/dashboard`} />} 
          />

          {/* User Routes */}
          <Route path="/user/dashboard" element={user?.role === 'patient' ? <UserDashboard /> : <Navigate to="/login" />} />
          <Route path="/user/doctors" element={user?.role === 'patient' ? <DoctorsList /> : <Navigate to="/login" />} />
          <Route path="/user/todo" element={user?.role === 'patient' ? <TodoList /> : <Navigate to="/login" />} />
          
          {/* Profile Routes */}
          <Route 
            path="/profile/me" 
            element={user ? <Profile user={user} isPageView={true} /> : <Navigate to="/login" />} 
          />
          <Route 
            path="/profile/:userId" 
            element={user ? <Profile isPageView={true} /> : <Navigate to="/login" />} 
          />

          {/* Doctor Routes */}
          <Route path="/doctor/dashboard" element={user?.role === 'doctor' ? <DoctorDashboard /> : <Navigate to="/login" />} />
          <Route 
            path="/doctor/patients" 
            element={user?.role === 'doctor' ? <DoctorsList isDoctorView={true} /> : <Navigate to="/login" />} 
          />

          {/* Admin Route */}
          <Route path="/admin/dashboard" element={user?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} />

          {/* Catch-all Route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      {showChat && <Chat onClose={() => setShowChat(false)} />}
    </BrowserRouter>
  );
};

export default App;