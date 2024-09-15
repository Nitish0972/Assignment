import React from 'react';
import './PhoneLayout.css';

const PhoneLayout = ({ children, title }) => {
  return (
    <div className="phone-shape">
      {/* Simulated status bar */}
      <div className="status-bar">
        <p>{title}</p>
      </div>
      
      {/* Main content */}
      <div className="phone-content">
        {children}
      </div>
    </div>
  );
};

export default PhoneLayout;
