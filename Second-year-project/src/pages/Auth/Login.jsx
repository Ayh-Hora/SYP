import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { login } from "../../API/Endpoint"; // Import API service
import "./Auth.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage(null);

    const response = await login(credentials);
    if (response.error) {
      setMessage(response.error);
    } else {
      localStorage.setItem("token", response.token);
      navigate("/dashboard"); // Redirect to dashboard after login
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
            />
          </div>

          {message && <div className="error-message">{message}</div>}

          <button type="submit" className="primary-btn">Login</button>
        </form>

        <div className="auth-footer">
          <p>New user? <Link to="/signup">Create an account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
