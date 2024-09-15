import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneLayout from './PhoneLayout';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login check with local storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
      setError('');
      navigate('/home'); // Redirect to home page
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <PhoneLayout title="Login">
      <div className="login-container">
        <h3>Login</h3>
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
        <button className="primary" onClick={handleLogin}>Login</button>
        <button className="secondary" onClick={() => navigate('/register')}>Register</button>
      </div>
    </PhoneLayout>
  );
};

export default Login;
