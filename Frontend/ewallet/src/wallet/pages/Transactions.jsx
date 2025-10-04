import React, { useState, useEffect } from "react";
import "../wallet.css";

export default function Transactions() {
  const [txs, setTxs] = useState([
    { id: 1, amount: 32923.9, market: "23516 Market", status: "In Progress", date: "June 9, 2024", rate: "-1.38%" },
    { id: 2, amount: 67144.9, market: "25744 Market", status: "Complete", date: "June 9, 2024", rate: "+2.44%" },
    { id: 3, amount: 82309.7, market: "26463 Market", status: "In Progress", date: "June 9, 2024", rate: "-2.30%" },
    { id: 4, amount: 52826.0, market: "26513 Market", status: "Complete", date: "June 9, 2024", rate: "+2.44%" },
    { id: 5, amount: 102522.9, market: "25517 Market", status: "Complete", date: "June 9, 2024", rate: "+7.44%" },
  ]);

  useEffect(() => {
    // TODO: Fetch transaction history from backend
    // fetch("/api/user/transactions", { headers: { Authorization: `Bearer ${token}` } })
    //   .then(r => r.json())
    //   .then(data => setTxs(data));
  }, []);

  return (
    <div className="wm-page">
      <h2>Transactions</h2>
      <div className="tx-table">
        <div className="tx-head">
          <div>Amount</div><div>Market</div><div>Status</div><div>Date</div><div>Sell Rate</div>
        </div>
        {txs.map(t => (
          <div className="tx-row" key={t.id}>
            <div>${t.amount.toLocaleString()}</div>
            <div>{t.market}</div>
            <div className={`status ${t.status === "Complete" ? "complete" : "inprogress"}`}>{t.status}</div>
            <div>{t.date}</div>
            <div className={`rate ${t.rate.startsWith('+') ? 'positive' : 'negative'}`}>{t.rate}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
