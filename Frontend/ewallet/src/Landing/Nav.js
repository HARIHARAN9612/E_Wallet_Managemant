// src/components/Navbar.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to scroll to section after navigation
  const scrollToSection = (id) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Wait for navigation
  };

  const handleHome = () => {
    if (location.pathname !== "/") {
      navigate("/");
      scrollToSection("Land");
    } else {
      scrollToSection("Land");
    }
  };

  const handleFeatures = () =>{
    if (location.pathname !== "/") {
      navigate("/");
      scrollToSection("features");
    } else {
      scrollToSection("features");
    }
  };
  const handleOverview = () => {
    if (location.pathname !== "/") {
      navigate("/");
      scrollToSection("overview");
    } else {
      scrollToSection("overview");
    }
  };
  const handleAbout = () => {
    if (location.pathname !== "/") {
      navigate("/");
      scrollToSection("about-section");
    } else {
      scrollToSection("about-section");
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
        <li onClick={handleHome} style={{ cursor: "pointer" }}>Home</li>
        <li onClick={handleFeatures} style={{ cursor: "pointer" }}>Feature</li>
        <li onClick={handleOverview} style={{ cursor: "pointer" }}>Overview</li>
        <li onClick={handleAbout} style={{ cursor: "pointer" }}>About</li>
      </ul>

      {/* Button */}
      <button className="signin-btn" onClick={() => navigate("/login")}>Sign In</button>
    </nav>
  );
};

export default Navbar;
