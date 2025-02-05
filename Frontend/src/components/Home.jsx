import React from 'react';

const products = [
  { title: "Term Life Insurance", description: "Upto 15% Discount", discount: "15% OFF" },
  { title: "Health Insurance", description: "FREE Home Visit" },
  { title: "Investment Plans", description: "In-Built Life Cover" },
  { title: "Car Insurance", description: "Upto 91% Discount", discount: "91% OFF" },
  { title: "2 Wheeler Insurance", description: "" },
  { title: "Family Health Insurance", description: "Upto 25% Discount", discount: "25% OFF" },
  { title: "Travel Insurance", description: "" },
  { title: "Term Insurance (Women)", description: "Upto 20% Cheaper", discount: "20% OFF" },
  { title: "Return of Premium Plans", description: "Term Plans with Return of Premium" },
  { title: "Child Savings Plans", description: "Premium Waiver" },
  { title: "Retirement Plans", description: "Guaranteed Return Plans" },
  { title: "Employee Group Health Insurance", description: "Upto 65% Discount", discount: "65% OFF" },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore Our Insurance & Investment Plans</h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ title, description, discount }) => {
  return (
    <div className="card card-compact bg-white w-80 shadow-lg rounded-lg p-4">
      <figure>
        <img
          src="https://static.bankbazaar.com/images/india/infographic/life-insurance-policy.webp"
          alt={title}
          className="rounded-t-lg h-48 object-cover w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600">{description}</p>
        {discount && <p className="text-red-500 font-bold">{discount}</p>}
        <div className="card-actions justify-end">
          <button className="btn btn-primary px-4 py-2">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
