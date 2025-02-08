import React from "react";
import "./WhyLoanWalle.css";

const features = [
  {
    emoji: "🎉",
    title: "Over 9 million",
    description: "customers trust us & have taken loans through LoanWalle",
    borderColor: "#4A90E2",
  },
  {
    emoji: "🔍",
    title: "50 lenders",
    description: "partnered with us so that you can compare easily & transparently",
    borderColor: "#008CFF",
  },
  {
    emoji: "🤝",
    title: "Best Interest Rates",
    description: "for all types of loans available online",
    borderColor: "#00C853",
  },
  {
    emoji: "👩‍⚖️",
    title: "Easy Claims",
    description: "support built in with every loan for assistance when needed",
    borderColor: "#FFC107",
  },
];

const WhyLoanWalle = () => {
  return (
    <section className="why-loanwalle">
      <div className="content">
        <h2>
          What makes <span className="highlight">LoanWalle</span> one of{" "}
          <span className="highlight">India's favourite places</span> to{" "}
          <span className="highlight">get loans?</span>
        </h2>
      </div>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card"
            style={{ borderTop: `4px solid ${feature.borderColor}` }}
          >
            <span className="emoji">{feature.emoji}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyLoanWalle;
