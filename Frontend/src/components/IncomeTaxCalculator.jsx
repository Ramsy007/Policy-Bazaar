import React, { useState } from "react";
import "./IncomeTaxCalculator.css";

const IncomeTaxCalculator = () => {
  const [income, setIncome] = useState("");
  const [deductions, setDeductions] = useState("");
  const [applyStandardDeduction, setApplyStandardDeduction] = useState(false);
  const [useNewRegime, setUseNewRegime] = useState(false);
  const [oldTax, setOldTax] = useState(0);
  const [newTax, setNewTax] = useState(0);

  const calculateTax = () => {
    let taxableIncome = income - (applyStandardDeduction ? 50000 : 0) - deductions;
    if (taxableIncome < 0) taxableIncome = 0;

    let oldTaxAmount = taxableIncome * 0.2; // Example rate
    let newTaxAmount = taxableIncome * 0.15; // Example rate

    if (useNewRegime) {
      newTaxAmount = taxableIncome * 0.1;
    }

    setOldTax(oldTaxAmount);
    setNewTax(newTaxAmount);
  };

  return (
    <div className="tax-container">
      <h2>Old Vs New Income Tax Regime Calculator FY 24-25</h2>
      <p>
        An income tax calculator helps you estimate your tax amount easily based on your income and deductions.
        It shows results for both the new tax regime and the old tax regime.
      </p>

      <div className="calculator-box">
        <div className="input-section">
          <label>
            Total Annual Income
            <input
              type="number"
              placeholder="₹ Enter Annual Income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />
          </label>

          <label>
            Deductions (Exemptions & Deductions)
            <input
              type="number"
              placeholder="₹ Enter Deductions"
              value={deductions}
              onChange={(e) => setDeductions(e.target.value)}
            />
          </label>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                checked={applyStandardDeduction}
                onChange={() => setApplyStandardDeduction(!applyStandardDeduction)}
              />
              Apply standard deduction (only salaried Income)
            </label>
            <label>
              <input
                type="checkbox"
                checked={useNewRegime}
                onChange={() => setUseNewRegime(!useNewRegime)}
              />
              Use New FY 25-26 tax regime (as per latest budget)
            </label>
          </div>

          <button className="calculate-button" onClick={calculateTax}>
            Calculate
          </button>
        </div>

        <div className="result-section">
          <div className="old-tax">
            <h3>OLD TAX REGIME</h3>
            <p>Tax Amount</p>
            <h2>₹{oldTax.toLocaleString()}</h2>
          </div>

          <div className="new-tax">
            <h3>NEW TAX REGIME</h3>
            <p>Tax Amount</p>
            <h2>₹{newTax.toLocaleString()}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IncomeTaxCalculator;
