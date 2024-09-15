import React from 'react';
import PhoneLayout from './PhoneLayout';
import './About.css';

const About = () => {
  return (
    <PhoneLayout title="About Page">
      <div className="about-container">
        <h3>About Us</h3>
        <p>Learn more about our organization and mission.</p>
        {/* Add more About content here */}
      </div>
    </PhoneLayout>
  );
};

export default About;
