import 'react';



// Define the product data with imageUrl
const productData = [
  {
    title: "Term Life Insurance",
    description: "Upto 15% Discount",
    discount: "10% Off",
    imageUrl: "https://as1.ftcdn.net/v2/jpg/08/45/70/92/1000_F_845709220_hmPiveWvhoMzjyPBxl59IYSfbcJ3vNfG.jpg",
  },
  {
    title: "Health Insurance",
    description: "Description for Product 2",
    discount: "20% Off",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/001/214/434/large_2x/health-insurance-design-with-umbrella-protection-vector.jpg", // Replace with your image URL
  },
  {
    title: "Investment Plan",
    description: "Description for Product 3",
    discount: "15% Off",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/009/473/140/large_2x/business-team-doing-business-planning-vector.jpg", // Replace with your image URL
  },
  {
    title: "Car Insurance",
    description: "Description for Product 4",
    discount: "25% Off",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/008/516/331/large_2x/car-insurance-flat-illustration-concept-vector.jpg", // Replace with your image URL
  },
  {
    title: "2 Wheeler Insurance",
    description: "Description for Product 5",
    discount: "30% Off",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/035/794/889/large_2x/motor-scooter-cover-abstract-concept-illustration-vector.jpg", // Replace with your image URL
  },
  {
    title: "Travel Insurance",
    description: "Description for Product 6",
    discount: "5% Off",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/002/167/379/large_2x/travel-insurance-protection-for-traveller-before-flying-in-covid-19-coronavirus-era-concept-magic-hand-holding-umbrella-as-shield-and-guard-to-protect-traveller-who-walking-in-the-airport-vector.jpg", // Replace with your image URL
  },
  {
    title: "Term Insurance (Women)",
    description: "Description for Product 7",
    discount: "10% Off",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/009/571/149/large_2x/travel-insurance-illustration-concept-vector.jpg", // Replace with your image URL
  },
  {
    title: "Family Health Insurance",
    description: "Description for Product 8",
    discount: "20% Off",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/014/477/711/large_2x/family-life-and-health-insurance-banner-concept-parents-and-children-near-protection-shield-with-medical-symbol-young-couple-and-kids-medical-support-healthcare-eps-illustration-vector.jpg", // Replace with your image URL
  },
  {
    title: "Return of Premium Plans",
    description: "Description for Product 9",
    discount: "15% Off",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/055/275/302/large_2x/easy-return-icon-design-illustration-easy-return-label-for-product-packaging-gray-color-round-button-design-free-vector.jpg", // Replace with your image URL
  },
  {
    title: "Retirement Plans",
    description: "Description for Product 10",
    discount: "25% Off",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/014/005/469/large_2x/retirement-pension-fund-investment-profit-or-earning-for-retiree-401k-or-savings-and-senior-financial-planning-wealth-management-concept-elderly-couple-grandpa-look-at-money-growth-plant-profit-vector.jpg", // Replace with your image URL
  },
  {
    title: "Employee Group Health Insurance",
    description: "Description for Product 10",
    discount: "25% Off",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/039/322/041/large_2x/male-entrepreneurs-and-female-entrepreneurs-take-part-in-business-activities-teamwork-in-the-office-team-communication-flat-modern-illustration-vector.jpg", // Replace with your image URL
  },
  {
    title: "Child Savings Plans",
    description: "Description for Product 10",
    discount: "25% Off",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/039/315/101/large_2x/father-son-and-piggy-bank-vector.jpg", // Replace with your image URL
  },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore Our Insurance & Investment Plans</h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {productData.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ title, description, discount, imageUrl, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="card card-compact bg-white w-80 shadow-lg rounded-lg p-4 transition-transform duration-300 hover:scale-105 focus:outline-none"
    >
      {/* Image Section */}
      <figure>
        <img
          src={imageUrl}
          alt={title}
          className="rounded-t-lg h-48 object-cover w-full"
        />
      </figure>

      {/* Content Section */}
      <div className="card-body text-left">
        <h2 className="card-title text-lg font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600">{description}</p>
        {discount && <p className="text-red-500 font-bold">{discount}</p>}
      </div>
    </button>
  );
};

export default Home;