import axios from "axios";

const API_URL = "http://localhost:3000"; // Change if deployed

// Signup function
export const signup = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, formData);
    const { token, role } = response.data;

    // Store token and role in local storage
    if (token && role) {
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
    }

    return response.data;
  } catch (error) {
    return { error: error.response?.data?.error || "Signup failed" };
  }
};

// Login function
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    const { token, role } = response.data;

    // Store token and role in local storage
    if (token && role) {
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
    }

    return response.data;
  } catch (error) {
    return { error: error.response?.data?.error || "Login failed" };
  }
};

// Fetch protected data
export const getProtectedData = async () => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      return { error: "Unauthorized access" };
    }

    const response = await axios.get(`${API_URL}/protected`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    return response.data;
  } catch (error) {
    return { error: error.response?.data?.error || "Unauthorized access" };
  }
};

// Logout function (Clears local storage)
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("role");
};