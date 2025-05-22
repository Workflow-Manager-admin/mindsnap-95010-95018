import React from 'react';
import { FaBrain } from 'react-icons/fa';

/**
 * Header component for the MindSnap application
 * Displays the app title and logo with futuristic styling
 */
const Header = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="logo">
            <FaBrain className="logo-icon" />
            <span>MINDSNAP</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
