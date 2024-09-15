import React from 'react';
import PhoneLayout from './PhoneLayout';
import './FAQ.css';

const FAQ = () => {
  return (
    <PhoneLayout title="FAQ Page">
      <div className="faq-container">
        <h3>Frequently Asked Questions</h3>
        <p>Here are some common questions and answers.</p>
        {/* Add more FAQ content here */}
      </div>
    </PhoneLayout>
  );
};

export default FAQ;
