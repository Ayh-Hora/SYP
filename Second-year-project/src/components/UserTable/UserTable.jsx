// src/components/UserTable/UserTable.jsx
import { FaEdit, FaTrash } from 'react-icons/fa';
import './UserTable.css';

const UserTable = ({ users }) => {
  return (
    <div className="user-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td className="actions">
                <button className="edit-btn">
                  <FaEdit />
                </button>
                <button className="delete-btn">
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;