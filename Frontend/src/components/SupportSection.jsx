import React from "react";
import "./supportsection.css";
import supportImage from "/support.jpg"; // Use your actual image path
import { FaEnvelope, FaHeadset } from "react-icons/fa"; // For email & phone icons

const SupportSection = () => {
  return (
    <section className="support-section">
      <div className="support-container">
        {/* Left Side - Text Content */}
        <div className="support-info">
          <h2>Have a question? <span className="highlight">Here to help.</span></h2>
          <p className="support-text">
            Our friendly customer support team is your extended family. Speak your heart out.
            They listen with undivided attention to resolve your concerns. Give us a call, request 
            a callback or drop us an email—we’re here to help.
          </p>

          {/* Contact Cards */}
          <div className="contact-card">
            <FaEnvelope className="icon" />
            <div>
              <p className="contact-title">General Enquiries</p>
              <p className="contact-detail">care@insurancewalle.com</p>
            </div>
          </div>

          <div className="contact-card">
            <FaHeadset className="icon" />
            <div>
              <p className="contact-title">Customer Sales Enquiries</p>
              <p className="contact-detail">7900739233</p>
            </div>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="support-image">
          <img src={supportImage} alt="Customer Support" className="crazy-image" />
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
