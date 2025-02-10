import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import "./SIPCalculator.css";

const SIPCalculator = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(25000);
  const [returnRate, setReturnRate] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  // SIP Calculation Formula
  const calculateSIPReturns = () => {
    const n = timePeriod * 12; // Total months
    const r = returnRate / 100 / 12; // Monthly interest rate
    const investedAmount = monthlyInvestment * n;
    const futureValue = monthlyInvestment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const estimatedReturns = futureValue - investedAmount;
    return { investedAmount, estimatedReturns, totalValue: futureValue };
  };

  const { investedAmount, estimatedReturns, totalValue } = calculateSIPReturns();

  const data = [
    { name: "Invested Amount", value: investedAmount, color: "#E3E7FD" },
    { name: "Est. Returns", value: estimatedReturns, color: "#3B82F6" },
  ];

  return (
    <div className="sip-container">
      <div className="sip-header">
        <button className="active">SIP</button>
        <button>Lumpsum</button>
      </div>

      <div className="sip-controls">
        {/* Monthly Investment */}
        <div className="sip-input">
          <label>Monthly investment (₹)</label>
          <div className="input-group">
            <input 
              type="number" 
              value={monthlyInvestment} 
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              min="500" max="100000" step="500"
            />
            <input 
              type="range" 
              min="500" max="100000" step="500" 
              value={monthlyInvestment} 
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Expected Return Rate */}
        <div className="sip-input">
          <label>Expected return rate (p.a.)</label>
          <div className="input-group">
            <input 
              type="number" 
              value={returnRate} 
              onChange={(e) => setReturnRate(Number(e.target.value))}
              min="1" max="30" step="0.1"
            />
            <input 
              type="range" 
              min="1" max="30" step="0.1" 
              value={returnRate} 
              onChange={(e) => setReturnRate(Number(e.target.value))}
            />
          </div>
        </div>

        {/* Time Period */}
        <div className="sip-input">
          <label>Time period (Years)</label>
          <div className="input-group">
            <input 
              type="number" 
              value={timePeriod} 
              onChange={(e) => setTimePeriod(Number(e.target.value))}
              min="1" max="30" step="1"
            />
            <input 
              type="range" 
              min="1" max="30" step="1" 
              value={timePeriod} 
              onChange={(e) => setTimePeriod(Number(e.target.value))}
            />
          </div>
        </div>
      </div>

      <div className="sip-results">
        <PieChart width={200} height={200}>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>

        <div className="sip-values">
          <p>Invested amount <span>₹{investedAmount.toLocaleString()}</span></p>
          <p>Est. returns <span>₹{estimatedReturns.toLocaleString()}</span></p>
          <p><strong>Total value</strong> <span><strong>₹{totalValue.toLocaleString()}</strong></span></p>
        </div>
      </div>

      <button className="invest-now">INVEST NOW</button>
    </div>
  );
};

export default SIPCalculator;
