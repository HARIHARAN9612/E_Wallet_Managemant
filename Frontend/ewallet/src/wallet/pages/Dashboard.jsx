import React, { useEffect, useState } from "react";
import "../wallet.css";

export default function Dashboard() {
  // ...existing code...
    const [user, setUser] = useState({
      name: "Danielly",
      balance: 731549.0,
      profit: 301.5,
      loss: 12,
      card: { number: "9876 1254 3890 ****", holder: "Ronaldo Udin", balance: 12907.0 },
      efficiency: 75,
      monthlyIncome: 24700,
      expenses: 12907.0,
      activity: [
        { day: "Mon", amount: 22000 },
        { day: "Tue", amount: 32000 },
        { day: "Wed", amount: 43000 },
        { day: "Thu", amount: 32000 },
        { day: "Fri", amount: 22000 },
        { day: "Sat", amount: 32000 },
        { day: "Sun", amount: 43000 },
      ],
      transactions: [
        { id: 1, currency: "Bitcoin", date: "March 9 or 9, 2024", status: "In Progress", amount: 32923.9, rate: "-1.38%", icon: "🟡" },
        { id: 2, currency: "Tron", date: "March 9 or 9, 2024", status: "Complete", amount: 67144.9, rate: "+2.44%", icon: "🔵" },
        { id: 3, currency: "Binance Coin", date: "March 9 or 9, 2024", status: "Complete", amount: 52826.0, rate: "+2.44%", icon: "🟣" },
      ],
    });

    return (
      <div className="wm-dashboard" >
        <header className="wm-header">
          <div>
            <h2 className="wm-greet" style={{fontSize: "2rem", fontWeight: 700}}><span role="img" aria-label="wave">👋</span> Hello {user.name}</h2>
            <p className="wm-quote" style={{fontSize: "1rem", color: "#6a4df5"}}>Today The Overall Efficiency Is 100% Otherwise, there is Nothing New!</p>
          </div>
          <div className="wm-user">
  <i className="fas fa-user-circle"></i>
</div>


        </header>

        <section className="wm-top" style={{display: "flex", gap: "32px", marginTop: "32px"}}>
          {/* Account Balance */}
          <div style={{flex: 1}}>
            <div style={{background: "#fff", borderRadius: "18px", padding: "24px", boxShadow: "0 6px 30px rgba(31,31,31,0.08)"}}>
              <div style={{fontWeight: 600, color: "#333", fontSize: "1.1rem"}}>Account Balance</div>
              <div style={{fontSize: "2.2rem", fontWeight: 800, color: "#111", margin: "8px 0"}}>${user.balance.toLocaleString()}</div>
              <div style={{display: "flex", gap: "18px", marginBottom: "12px"}}>
                <span style={{color: "#1db954", fontWeight: 600}}>Profit ${user.profit}</span>
                <span style={{color: "#ff7a59", fontWeight: 600}}>Loss ${user.loss}</span>
              </div>
              <div style={{fontWeight: 600, margin: "18px 0 8px"}}>Actions</div>
              <div style={{display: "flex", gap: "16px"}}>
                <button style={{background: "#6a4df5", color: "#fff", borderRadius: "12px", padding: "16px 24px", fontWeight: 600, fontSize: "1rem", border: "none", boxShadow: "0 8px 20px rgba(106,77,245,0.18)"}}><span role="img" aria-label="send">⚡</span> Send Money</button>
                <button style={{background: "#f2f2f2", color: "#111", borderRadius: "12px", padding: "16px 24px", fontWeight: 600, fontSize: "1rem", border: "none"}}><span role="img" aria-label="receive">💸</span> Receive Money</button>
              </div>
            </div>
          </div>

          {/* Card Section */}
          <div style={{flex: 1}}>
            <div style={{background: "#fff", borderRadius: "18px", padding: "24px", boxShadow: "0 6px 30px rgba(31,31,31,0.08)"}}>
              <div style={{background: "linear-gradient(90deg,#4c2cd9,#8c6bff)", color: "#fff", padding: "18px", borderRadius: "14px", marginBottom: "18px"}}>
                <div style={{fontWeight: 700, fontSize: "1.2rem", letterSpacing: "2px"}}>Moneyme</div>
                <div style={{fontWeight: 700, fontSize: "1.3rem", margin: "8px 0"}}>{user.card.number}</div>
                <div style={{opacity: 0.9}}>{user.card.holder}</div>
              </div>
              <div style={{fontWeight: 600, color: "#6a4df5"}}>Expenses</div>
              <div style={{fontSize: "1.5rem", fontWeight: 700, marginBottom: "8px"}}>${user.expenses.toLocaleString()}</div>
              <div style={{color: "#28c76f", fontWeight: 600, fontSize: "1rem"}}>28.21%</div>
            </div>
          </div>

          {/* Statistics Section */}
          <div style={{width: "320px"}}>
            <div style={{background: "#fff", borderRadius: "18px", padding: "24px", boxShadow: "0 6px 30px rgba(31,31,31,0.08)", marginBottom: "18px"}}>
              <div style={{fontWeight: 700, fontSize: "1.2rem", marginBottom: "8px"}}>Statistics</div>
              <div style={{display: "flex", alignItems: "center", gap: "18px"}}>
                <svg viewBox="0 0 36 36" style={{width: "90px", height: "90px"}}>
                  <path style={{fill: "none", stroke: "#eee", strokeWidth: 3.8}} d="M18 2.0845a15.9155 15.9155 0 1 0 0 31.831a15.9155 15.9155 0 1 0 0-31.831"/>
                  <path style={{fill: "none", stroke: "#ff6aa3", strokeWidth: 3.8, strokeLinecap: "round", transform: "rotate(-90deg)", transformOrigin: "50% 50%"}} strokeDasharray={`${user.efficiency}, 100`} d="M18 2.0845a15.9155 15.9155 0 1 0 0 31.831a15.9155 15.9155 0 1 0 0-31.831"/>
                  <text x="18" y="20.35" style={{fontSize: "16px", textAnchor: "middle", fill: "#333"}}>{user.efficiency}%</text>
                </svg>
                <div>
                  <div style={{fontWeight: 600}}>Healthcare</div>
                  <div style={{fontSize: "1.3rem", fontWeight: 700}}>${user.monthlyIncome.toLocaleString()}</div>
                </div>
              </div>
            </div>
            <div style={{background: "#fff", borderRadius: "18px", padding: "24px", boxShadow: "0 6px 30px rgba(31,31,31,0.08)"}}>
              <div style={{fontWeight: 700, fontSize: "1.2rem", marginBottom: "8px"}}>Transactions</div>
              {user.transactions.map(tx => (
                <div key={tx.id} style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "12px"}}>
                  <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                    <span style={{fontSize: "1.5rem"}}>{tx.icon}</span>
                    <span style={{fontWeight: 600}}>{tx.currency}</span>
                    <span style={{color: "#888", fontSize: "0.95rem"}}>{tx.date}</span>
                  </div>
                  <span style={{color: tx.status === "Complete" ? "#16a34a" : "#f59e0b", fontWeight: 700}}>{tx.status}</span>
                  <span style={{color: tx.rate.startsWith('+') ? '#16a34a' : '#ef4444', fontWeight: 700}}>{tx.rate}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
