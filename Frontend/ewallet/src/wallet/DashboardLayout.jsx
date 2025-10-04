
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./wallet.css";

const Sidebar = () => (
  <aside className="wm-sidebar">
    <div className="wm-brand">
      <div className="wm-title">WishPay</div>
    </div>

    <nav className="wm-nav">
      <NavLink to="/wallet" end className={({isActive}) => isActive ? "active" : ""}>
        <span role="img" aria-label="dashboard" style={{marginRight:8}}>📄</span> Dashboard
      </NavLink>
      <NavLink to="/wallet/make-payment" className={({isActive}) => isActive ? "active" : ""}>
        <span role="img" aria-label="payment" style={{marginRight:8}}>📄</span> Make Payment
      </NavLink>
      <NavLink to="/wallet/transactions" className={({isActive}) => isActive ? "active" : ""}>
        <span role="img" aria-label="transactions" style={{marginRight:8}}>📄</span> Transactions
      </NavLink>
      <NavLink to="/wallet/settings" className={({isActive}) => isActive ? "active" : ""}>
        <span role="img" aria-label="settings" style={{marginRight:8}}>⚙️</span> Settings
      </NavLink>
    </nav>

    <div className="wm-footer">
      <button className="wm-logout" onClick={() => { localStorage.removeItem("authToken"); window.location.href = "/"; }}>Log out</button>
    </div>
  </aside>
);

export default function DashboardLayout() {
  return (
    <div className="wm-app">
      <Sidebar />
      <main className="wm-main">
        <Outlet />
      </main>
    </div>
  );
}
