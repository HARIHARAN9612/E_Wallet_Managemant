import React from "react";
import Navbar from "./Nav";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Enhance <span className="highlight">💳</span> your <br />
            Financial with <span className="brand">Wishpay</span>
          </h1>
          <p className="subtitle">
            Moving money should never take more than a few taps. Transfers are
            always free between friends.
          </p>
          <button className="cta-btn">Send Money Now</button>
        </div>

        {/* Right Side Images */}
        <div className="hero-images">
          <img src="/card.png" alt="card" className="card" />
          <img src="/wallet.png" alt="wallet" className="wallet" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div>
          <h2>75K+</h2>
          <p>Satisfied users globally</p>
        </div>
        <div>
          <h2>92%</h2>
          <p>Beneficial User Cashback</p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <p>Trusted by</p>
        <div className="logos">
          <span>OpenAI</span>
          <span>Raycast</span>
          <span>Ramp</span>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
