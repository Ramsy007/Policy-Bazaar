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
    if (calculatorName === "SIP Calculator") {
      try {
        // Call backend API
        const response = await axios.get("http://localhost:5173/SIPCalculator");
        console.log("SIP Calculator API Response:", response.data);
        // Navigate to the frontend SIP calculator page
        navigate("/SIPCalculator");
      } catch (error) {
        console.error("Error fetching SIP Calculator data:", error);
        alert("Error loading SIP Calculator. Try again later.");
      }
    } else {
      alert(`${calculatorName} navigation not set up yet!`);
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
      <button className="view-all-button">View All Calculators</button>
    </div>
  );
};

export default PopularCalculators;
