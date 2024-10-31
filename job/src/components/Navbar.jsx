import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handlePostJobClick = () => {
    navigate('/post');
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleLogoutClick = () => {
    console.log('User logged out');
    navigate('/');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <h2>Job Board</h2>
        </div>
        <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/jobs">Browse Job</a></li>
            <li><a href="/pages">Pages</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="navbar-buttons">
          <button className="login-btn" onClick={() => navigate('/login')}>Log In</button>
          <button className="signup-btn" onClick={handleSignUpClick}>Sign Up</button>
          <button className="logout-btn" onClick={handleLogoutClick}>Logout</button>
          <button className="post-btn" onClick={handlePostJobClick}>Post A Job</button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'toggle' : ''}`}></div>
          <div className={`bar ${isOpen ? 'toggle' : ''}`}></div>
          <div className={`bar ${isOpen ? 'toggle' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
