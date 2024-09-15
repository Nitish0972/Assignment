import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneLayout from './PhoneLayout';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username && password) {
      // Save to local storage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      setError('');
      navigate('/login'); // Redirect to login page
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <PhoneLayout title="Register">
      <div className="register-container">
        <h3>Register</h3>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
        <button className="primary" onClick={handleRegister}>Register</button>
        <button className="secondary" onClick={() => navigate('/login')}>Login</button>
      </div>
    </PhoneLayout>
  );
};

export default Register;
