import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login Successful!");
    navigate("/");
  };

  return (
    <div className="login-page"> {/* Wrapper added */}
      <div className="login-container">
        <div className="card">
          <div className="left-section">
            <h2>Login to Your Account</h2>
            <form onSubmit={handleSubmit}>
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
              <button type="submit" className="login-btn">Login</button>
            </form>
            <div className="bottom-links">
              <span onClick={() => navigate("/")} className="back-home">Back to Home</span>
              <span onClick={() => navigate("/signup")} className="signup-text">New user? Sign up</span>
            </div>
          </div>
          <div className="right-section">
            <img src="/li.jpg" alt="Login Illustration" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
