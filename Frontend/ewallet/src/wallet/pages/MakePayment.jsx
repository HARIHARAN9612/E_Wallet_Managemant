import React from "react";
import "../wallet.css";

export default function MakePayment() {
  // Each feature would link to its own flow; keep these actions dynamic later
  return (
    <div className="wm-page">
      <h2>Make Payment</h2>

      <div className="wm-actions-grid">
        <div className="action-card">
          <h4>Send Money</h4>
          <p>Transfer to contacts or bank accounts instantly.</p>
          <button className="btn primary">Send</button>
        </div>

        <div className="action-card">
          <h4>Receive Money</h4>
          <p>Generate a QR code or request payment link.</p>
          <button className="btn">Request</button>
        </div>

        <div className="action-card">
          <h4>Mobile Recharge</h4>
          <p>Prepaid recharge and bill payments.</p>
          <button className="btn">Recharge</button>
        </div>

        <div className="action-card">
          <h4>Top up Wallet</h4>
          <p>Add money using card or net banking.</p>
          <button className="btn">Top up</button>
        </div>
      </div>

      <div className="wm-note">
        Tip: Replace these buttons with forms that call your backend endpoints such as /api/payments/send or /api/payments/recharge.
      </div>
    </div>
  );
}
