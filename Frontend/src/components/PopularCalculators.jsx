import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios"; // Import axios for API call
import "./PopularCalculators.css";

const calculators = [
  {
    title: "Investment calculators",
    bgColor: "#FFEDE4",
    icon: "📈",
    links: [
      "SIP Calculator",
      "Income Tax Calculator",
      "ULIP Calculator",
      "NPS Calculator",
    ],
  },
  {
    title: "Term Insurance calculators",
    bgColor: "#E5F7FB",
    icon: "☂️",
    links: [
      "Life Insurance Calculator",
      "Term Insurance Calculator",
      "Human Life Value Calculator",
      "NRI Term Insurance Calculator",
    ],
  },
  {
    title: "Policy premium calculators",
    bgColor: "#F3E8FF",
    icon: "📜",
    links: [
      "Health Insurance Calculator",
      "Car Insurance Calculator",
      "Bike Insurance Calculator",
      "Travel Insurance Calculator",
    ],
  },
];

const PopularCalculators = () => {
  const navigate = useNavigate();

  // 🛠️ Function to handle calculator click
  const handleCalculatorClick = async (calculatorName) => {
    try {
      if (calculatorName === "SIP Calculator") {
        const response = await axios.get("http://localhost:5173/SIPCalculator");
        console.log("SIP Calculator API Response:", response.data);
        navigate("/SIPCalculator");
      } else if (calculatorName === "Income Tax Calculator") {
        navigate("/IncomeTaxCalculator");
      } else if (calculatorName === "ULIP Calculator") {
        navigate("/ULIPCalculator"); // ✅ Added navigation for ULIP Calculator
      } else {
        alert(`${calculatorName} navigation not set up yet!`);
      }
    } catch (error) {
      console.error(`Error loading ${calculatorName}:`, error);
      alert(`Error loading ${calculatorName}. Try again later.`);
    }
  };

  return (
    <div className="calculator-container">
      <h2 className="section-title">Popular Calculators</h2>
      <p className="section-description">
        Discover our user-friendly calculators tailored to help you make informed financial decisions.
      </p>
      <div className="calculator-grid">
        {calculators.map((calc, index) => (
          <div key={index} className="calculator-card" style={{ backgroundColor: calc.bgColor }}>
            <div className="calculator-header">
              <span className="icon">{calc.icon}</span>
              <h3>{calc.title}</h3>
            </div>
            <ul className="calculator-list">
              {calc.links.map((link, idx) => (
                <li key={idx} onClick={() => handleCalculatorClick(link)} className="clickable">
                  {link} <span className="arrow">→</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCalculators;
