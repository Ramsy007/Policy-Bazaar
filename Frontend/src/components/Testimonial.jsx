import React, { useState, useEffect } from "react";
import "./Testimonial.css"; // Importing CSS

const testimonials = [
  { name: "Neha Jain", review: "You are doing a great job. Proud to be a customer of LoanWalle." },
  { name: "Ananth Raj", review: "Thank you for facilitating and following up on the policy." },
  { name: "Prabhat Yadav", review: "Thanking you very much for your support in getting our policy quickly." },
  { name: "Ravi Sharma", review: "Excellent service and quick response. Highly recommended for insurance needs." },
  { name: "Pooja Mehta", review: "A smooth process and very helpful staff. Thank you for your support!" },
  { name: "Amit Verma", review: "Best policy options available." },
  { name: "Sanya Kapoor", review: "Great experience. Amazing Customer Support!" },
  { name: "Rahul Malhotra", review: "Happy with the services provided. The assistance was detailed and helpful." },
  { name: "Meena Reddy", review: "Good customer support and smooth documentation process. Totally satisfied." },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 3 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(autoSlide);
  }, []);

  return (
    <div className="testimonial-container">
      <h2>What Our Customers Are Saying</h2>
      <div className="testimonial-carousel">
        <button className="nav-button left" onClick={prevSlide}>&#10094;</button>
        <div className="testimonial-grid">
          {testimonials.slice(index, index + 3).map((testimonial, i) => (
            <div key={i} className="testimonial-card">
              <h3>{testimonial.name}</h3>
              <p>“{testimonial.review}”</p>
            </div>
          ))}
        </div>
        <button className="nav-button right" onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  );
};

export default Testimonial;
