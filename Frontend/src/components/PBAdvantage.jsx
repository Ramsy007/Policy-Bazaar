import React from "react";
import "./PBAdvantage.css";

const advantages = [
  {
    icon: "💰",
    title: "Best Prices",
    description: "Guaranteed",
  },
  {
    icon: "🤝",
    title: "Unbiased Advice",
    description: "Keeping customers first",
  },
  {
    icon: "✅",
    title: "100% Reliable",
    description: "Regulated by IRDAI",
  },
  {
    icon: "⚖️",
    title: "Claims Support",
    description: "Made stress-free",
  },
];

const PBAdvantage = () => {
  return (
    <section className="pb-advantage">
      <div className="advantage-content">
        <h2>InsuranceWalle Advantages</h2>
        <p>
          When you buy insurance from us, you get more than just financial
          safety. You also get: our promise of simplifying complex insurance
          terms and conditions, quick stress-free claims, instant quotes from
          top insurers, and being present for you in the toughest of times.
        </p>
        <a href="#" className="know-more">
          Know more
        </a>
      </div>
      <div className="advantage-grid">
        {advantages.map((advantage, index) => (
          <div key={index} className="advantage-card">
            <span className="icon">{advantage.icon}</span>
            <h3>{advantage.title}</h3>
            <p>{advantage.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PBAdvantage;
