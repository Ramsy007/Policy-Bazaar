import React from "react";
import "./ULIPCalculator.css";

const ULIPCalculator = () => {
  return (
    <div className="ulip-container">
      <h1>ULIP Calculator</h1>
      <p>
        A ULIP Calculator is a financial tool designed to help you compare ULIP plans and estimate 
        the maturity amount depending on the expected investment value and future returns, helping 
        you to reach your life objectives in the future.
      </p>

      <div className="ulip-box">
        {/* Left Section - Image and Info */}
        <div className="ulip-left">
          <img 
            src="https://static.pbcdn.in/ulip_calculator_image.jpg" 
            alt="ULIP Calculator" 
            className="ulip-image"
          />
          <div className="ulip-features">
            <ul>
              <li>💰 Plan starting from ₹1,000/month</li>
              <li>💸 Save up to ₹46,800 in Tax under section 80C</li>
              <li>✅ Zero LTCG Tax</li>
              <li>🛡️ In-built life cover</li>
            </ul>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="ulip-right">
          <h2>Top Performing Plans with High Returns</h2>
          <p>
            Invest <span className="highlight">₹10K/Month</span> & Get 
            <span className="highlight"> ₹1 Crore</span> on Maturity
          </p>
          <input type="text" placeholder="Your Name" />
          <div className="input-group">
            <select>
              <option>India +91</option>
              <option>USA +1</option>
              <option>UK +44</option>
            </select>
            <input type="tel" placeholder="Mobile Number" />
          </div>
          <button className="view-plans">View Plans</button>
          <p className="secure-info">🔒 Your personal information is secure with us</p>
          <div className="whatsapp-updates">
            <input type="checkbox" id="whatsapp" />
            <label htmlFor="whatsapp">Get Updates on WhatsApp</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ULIPCalculator;
