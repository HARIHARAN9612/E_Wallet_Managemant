import React from "react";
import "./Features.css";
import reward from "../Assests/reward.svg";
import paid from "../Assests/paidb.png";
import chart from "../Assests/chart.png";
import payment from "../Assests/paidb.png";

const Features = () => {
  return (
    <div className="features-section">
      {/* Top Heading */}
      <div className="features-header">
        <span className="tag">FEATURE</span>
        <h2>Future banking you need</h2>
        <p>
          Whether you're a small business, or a large corporation, we
          have a plan that's right for you.
        </p>
      </div>

      {/* First Feature Grid */}
      <div className="features-grid first-grid">
        <div className="feature-card light">
          <h3>Earn Rewards</h3>
          <p>
            It costs nothing to pay with Wishpay, you’ll only be charged
            a fee when you sell something or request a payment.
          </p>
          <img className="img-reward" src={reward} alt="reward" />
        </div>

        <div className="feature-card purple">
          <h3>Always Protected</h3>
          <p>
            Shopping with Wishpay is safer with Buyer Protection, 24/7
            anti-fraud monitoring and world class security.
          </p>
          <img className="img-paid" src={paid} alt="security" />
        </div>
      </div>

      {/* Second Feature Grid */}
      <div className="features-grid second-grid">
        <div className="feature-card dark">
          <h3>No asset volatility</h3>
          <p>
            Generate returns on your cash reserves without making any
            investments.
          </p>
          <img className="img-chart" src={chart} alt="chart" />
        </div>

        <div className="feature-card light">
          <h3>Get paid faster</h3>
          <p>
            Create flexible, scalable subscription plans and streamline billing.
          </p>
          <img className="img-payment" src={payment} alt="payment" />
        </div>
      </div>
    </div>
  );
};

export default Features;
