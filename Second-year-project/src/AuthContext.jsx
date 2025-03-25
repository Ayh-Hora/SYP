import React, { createContext, useState, useContext } from 'react';
import { users } from './data';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email) => {
    const userData = users.find(user => user.email === email);
    if (userData) {
      setUser(userData);
    } else {
      alert("User not found");
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};