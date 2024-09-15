import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/home">Home</Link>
      <Link to="/faq">FAQ</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navbar;
