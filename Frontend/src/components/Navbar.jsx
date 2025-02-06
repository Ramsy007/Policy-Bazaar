import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>LoanWalle</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="#">Products</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
