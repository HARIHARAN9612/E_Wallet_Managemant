import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Landing/Nav";
import Land from "./Landing/Land";
import Features from "./Landing/Features";
import About from "./Landing/About";
import LoginSign from "./Landing/LoginSign";

import DashboardLayout from "./wallet/DashboardLayout";
import Dashboard from "./wallet/pages/Dashboard";
import MakePayment from "./wallet/pages/MakePayment";
import Transactions from "./wallet/pages/Transactions";
import Settings from "./wallet/pages/Settings";

function App() {
  // Replace this with real auth check (e.g., token in localStorage)
  const isSignedIn = !!localStorage.getItem("authToken");

  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<><Land /><Features /><About /></>} />
        <Route path="/login" element={<LoginSign />} />

        {/* Wallet routes */}
        <Route path="/wallet" element={<DashboardLayout /> }>
           <Route index element={<Dashboard />} />
          <Route path="make-payment" element={<MakePayment />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
