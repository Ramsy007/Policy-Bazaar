import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/VerifyOTP");
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="card">
          <div className="left-section">
            <h2>Create an Account</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="signup-btn">Sign Up</button>
            </form>
            <div className="bottom-links">
              <span onClick={() => navigate("/login")} className="login-text">
                Already have an account? Login
              </span>
            </div>
          </div>
          <div className="right-section">
            <img src="/li.jpg" alt="Signup Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
