import React, { useState, useEffect } from "react";
import "./mobileapp.css";
import googlePlay from "/google-play.png"; // Replace with actual path
import appStore from "/app-store.png"; // Replace with actual path
import mobileMockup from "/mobile-mockup.jpg"; // Replace with actual path

const MobileApp = () => {
  const [animatedText, setAnimatedText] = useState("");
  const fullText = "More Than Insurance, It's a Promise!";
  const colors = ["#ff4757", "#1e90ff", "#2ed573", "#ffa502", "#ff6b81", "#3742fa", "#f39c12"];
  const [currentColor, setCurrentColor] = useState(colors[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setAnimatedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100); // Adjust speed here for crazier effects
    return () => clearInterval(interval);
  }, []);

  // Color changing effect every 1 second
  useEffect(() => {
    const colorInterval = setInterval(() => {
      setCurrentColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 500); // Changes color every 500ms
    return () => clearInterval(colorInterval);
  }, []);

  return (
    <section className="mobile-app">
      <div className="content-container">
        {/* Left Side: Text Content */}
        <div className="app-info">
          <h2>Get the Insurance Walle App</h2>
          <p className="animated-subtext" style={{ color: currentColor }}>
            {animatedText}
          </p> {/* CRAZY Animated Text */}

          <ul className="app-features">
            <li>✅ Compare different insurance policies with ease</li>
            <li>✅ Buy, store & share all your policies in one place</li>
            <li>✅ Track your policy status on the go</li>
            <li>✅ One-tap downloads for instant access</li>
          </ul>

          <p className="download-text">Download now from:</p>

          <div className="download-buttons">
            <img src={googlePlay} alt="Google Play" className="store-badge" />
            <img src={appStore} alt="App Store" className="store-badge" />
          </div>
        </div>

        {/* Right Side: Mobile App Image */}
        <div className="mobile-mockup">
          <img src={mobileMockup} alt="Policybazaar App" />
        </div>
      </div>
    </section>
  );
};

export default MobileApp;
