import React from "react";
import "./PopularCalculators.css";

const calculators = [
  {
    title: "Investment calculators",
    bgColor: "#FFEDE4",
    icon: "📈", // Replace with an actual image if needed
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
                <li key={idx}>
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
