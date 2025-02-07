import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, emailId: email, password }),
      });

      const text = await response.text(); // Read response as text first

      try {
        const data = JSON.parse(text); // Try parsing as JSON
        if (response.ok) {
          alert(data.message);
          navigate("/VerifyOTP");
        } else {
          alert(data.message || "Signup failed. Please try again.");
        }
      } catch {
        alert("Unexpected response from the server: " + text);
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("An error occurred. Please try again.");
    }
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
              <button type="submit" className="signup-btn">
                Sign Up
              </button>
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
