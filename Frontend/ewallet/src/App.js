
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Landing/Nav";
import Land from "./Landing/Land";
import Features from "./Landing/Features";
import About from "./Landing/About";
import LoginSign from "./Landing/LoginSign";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Land /><Features /><About /></>} />
        <Route path="/login" element={<LoginSign />} />
      </Routes>
    </Router>
  );
}

export default App;

