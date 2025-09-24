// src/components/Navbar.jsx
import React from "react";
import "./Nav.css";

const Navbar = () => {
  const handleScrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };
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
        <li onClick={handleScrollToFeatures} style={{ cursor: "pointer" }}>Feature</li>
        <li>Overview</li>
        <li>About</li>
      </ul>

      {/* Button */}
      <button className="signin-btn">Sign In</button>
    </nav>
  );
};

export default Navbar;
