// src/components/Navbar.jsx
import React from "react";
import "./Nav.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <div className="logo-icon"></div>
        <h1>WishPay</h1>
      </div>

      {/* Links */}
      <ul className="nav-links">
        <li className="active">Home</li>
        <li>Feature</li>
        <li>Overview</li>
        <li>About</li>
      </ul>

      {/* Button */}
      <button className="signin-btn">Sign In</button>
    </nav>
  );
};

export default Navbar;
