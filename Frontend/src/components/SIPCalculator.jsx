import { useState } from "react";
import "./SipCalculator.css";

const SipCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(10000);
  const [years, setYears] = useState(10);
  const [annualReturn, setAnnualReturn] = useState(12);

  const calculateSIP = () => {
    const monthlyRate = annualReturn / 12 / 100;
    const months = years * 12;
    const futureValue =
      monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
    return futureValue;
  };

  const totalWealth = calculateSIP().toFixed(2);
  const totalInvestment = (monthlyInvestment * 12 * years).toFixed(2);
  const wealthGained = (totalWealth - totalInvestment).toFixed(2);

  return (
    <div className="sip-container">
      <h1>SIP Calculator</h1>
      <div className="input-group">
        <label>Monthly Investment (₹)</label>
        <input type="number" value={monthlyInvestment} onChange={(e) => setMonthlyInvestment(+e.target.value)} />
      </div>
      <div className="input-group">
        <label>Investment Duration (Years)</label>
        <input type="number" value={years} onChange={(e) => setYears(+e.target.value)} />
      </div>
      <div className="input-group">
        <label>Expected Annual Return (%)</label>
        <input type="number" value={annualReturn} onChange={(e) => setAnnualReturn(+e.target.value)} />
      </div>
      <div className="result">
        <p>Total Investment: <span className="highlight">₹{totalInvestment}</span></p>
        <p>Wealth Gained: <span className="highlight">₹{wealthGained}</span></p>
        <p>Total Wealth: <span className="highlight">₹{totalWealth}</span></p>
      </div>
    </div>
  );
};

export default SipCalculator;