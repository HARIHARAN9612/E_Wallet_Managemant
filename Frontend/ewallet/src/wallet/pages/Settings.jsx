import React, { useState, useEffect } from "react";
import "../wallet.css";

export default function Settings() {
  const [form, setForm] = useState({
    username: "danielly",
    email: "daniel@example.com",
    cardNumber: "987612543890****",
  });

  useEffect(() => {
    // TODO: Load user settings from backend
    // fetch("/api/user/profile", { headers: { Authorization: `Bearer ${token}` } })
    //   .then(r => r.json())
    //   .then(data => setForm(data));
  }, []);

  const handleSave = () => {
    // TODO: Send updated settings to backend
    // fetch("/api/user/profile", { method: "PUT", headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }, body: JSON.stringify(form) })
    //   .then(...)
    alert("Saved (this is a placeholder). Hook this to /api/user/profile");
  };

  return (
    <div className="wm-page">
      <h2>Settings</h2>

      <div className="settings-grid">
        <div className="settings-card">
          <label>Username</label>
          <input value={form.username} onChange={e => setForm({...form, username: e.target.value})} />
          <label>Email</label>
          <input value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          <label>Password</label>
          <input placeholder="••••••••" type="password" />
          <div className="settings-actions">
            <button className="btn primary" onClick={handleSave}>Save</button>
            <button className="btn">Cancel</button>
          </div>
        </div>

        <div className="settings-card">
          <h4>Card Details</h4>
          <label>Card Number</label>
          <input value={form.cardNumber} onChange={e => setForm({...form, cardNumber: e.target.value})} />
          <label>Expiry</label>
          <input placeholder="MM/YY" />
          <label>CVV</label>
          <input placeholder="***" />
          <div className="wm-small">Card changes should be sent to /api/user/card (PUT)</div>
        </div>
      </div>
    </div>
  );
}
