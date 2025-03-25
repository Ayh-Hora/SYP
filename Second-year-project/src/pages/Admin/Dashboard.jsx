import { useState } from 'react';
import { FaUserPlus, FaEdit, FaTrash } from 'react-icons/fa';
import UserTable from '../../components/UserTable/UserTable';
import { users } from '../../data';
import './Admin.css';

const AdminDashboard = () => {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleDeleteUser = (userId) => {
    // Implement delete logic
    console.log(`Delete user ${userId}`);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <button 
          className="add-user-btn"
          onClick={() => setShowAddUserModal(true)}
        >
          <FaUserPlus /> Add New User
        </button>
      </div>

      <div className="users-section">
        <h2>User Management</h2>
        <UserTable 
          users={users} 
          onEdit={handleEditUser}
          onDelete={handleDeleteUser}
        />
      </div>

      {showAddUserModal && (
        <div className="user-modal">
          <div className="modal-content">
            <h3>Add New User</h3>
            {/* Add user form here */}
            <button onClick={() => setShowAddUserModal(false)}>Close</button>
          </div>
        </div>
      )}

      {selectedUser && (
        <div className="user-modal">
          <div className="modal-content">
            <h3>Edit User</h3>
            {/* Edit user form here */}
            <button onClick={() => setSelectedUser(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;