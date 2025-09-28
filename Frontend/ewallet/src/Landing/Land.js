import React from "react";
import Navbar from "./Nav";
import "./Land.css";
import phonehome from "../Assests/phonehome.png";

const Land = () => {
  return (
    <div className="land">
      

      {/* left */}
      
        <div className="left">
          <h1>
            Enhance  your <span className="highlight"></span> <br />
            Financial with <span className="brand">    Wishpay</span>
          </h1>
          <p className="subtitle">
            Moving money should never take more than a few taps. Transfers are
            always free between friends.
          </p>
          <button className="cta-btn">Send Money Now</button>
        </div>
      {/* Stats Section */}
      <div className="right">
        <img className="phonehome" src={phonehome} alt="/" />
      </div>

      
      
    </div>
  );
};

export default Land;
