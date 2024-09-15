import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import FAQ from './components/FAQ';
import About from './components/About';
import Translate from './components/Translate';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/translate" element={<Translate />} />
        {/* Redirect from root to login */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
