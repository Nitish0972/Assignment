import React from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneLayout from './PhoneLayout';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <PhoneLayout title="Home">
      <div className="home-container">
        <h3>Welcome to the Home Page</h3>
        <button className="primary" onClick={() => navigate('/faq')}>FAQ Page</button>
        <button className="primary" onClick={() => navigate('/about')}>About Page</button>
        <button className="primary" onClick={() => navigate('/translate')}>Translate</button>
      </div>
    </PhoneLayout>
  );
};

export default Home;
