import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" navbar fixed top-0 left-0 w-full shadow-md px-6 py-3 flex items-center justify-between">
    {/* Left Side - Brand */}
    <div className="navbar-start">
      <a className="text-2xl font-bold text-gray-800">PolicyNest</a>
    </div>
  
    {/* Center Menu */}
    <div className="navbar-center hidden lg:flex">
      <ul className="flex items-center justify-center space-x-6">
        <li>
        <Link to="/home" className="text-gray-700 hover:text-blue-500">
        Home
      </Link>
        </li>
        <li>
        <Link to="/About" className="text-gray-700 hover:text-blue-500">
        About
      </Link>
        </li>
        <li>
        <Link to="/services" className="text-gray-700 hover:text-blue-500">
        Services
      </Link>
        </li>
        <li>
        <Link to="/Contact" className="text-gray-700 hover:text-blue-500">
        Contact
      </Link>
        </li>
      </ul>
    </div>
  
    {/* Right Side - Sign Up Button */}
    <div className="navbar-end hidden lg:flex">
      <Link to="/login" className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Sign Up
      </Link>
    </div>
  </div>
  
  );
};

export default Navbar;
