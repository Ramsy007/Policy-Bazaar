import { useState, useEffect } from "react";

const cardData = [
  { id: 1, title: "🚀 Special Discount!", desc: "Get 20% off on all products.", color: "bg-blue-500" },
  { id: 2, title: "🔥 Limited Time Offer!", desc: "Buy one, get one free!", color: "bg-green-400" },
  { id: 3, title: "⚡ Flash Sale!", desc: "Exclusive deals for 24 hours.", color: "bg-blue-500" },
  { id: 4, title: "🎉 Holiday Bonanza!", desc: "Festive deals just for you!", color: "bg-green-400" },
  { id: 5, title: "💰 Mega Savings!", desc: "Save big on your favorite brands.", color: "bg-blue-500" },
  { id: 6, title: "🎯 Exclusive Deals!", desc: "Offers you can't resist.", color: "bg-green-400" },
];

const Cards = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === 0 ? 3 : 0));
    }, 3000); // Changes every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center mb-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 transition-all duration-500 ease-in-out">
        {cardData.slice(index, index + 3).map((card) => (
          <div
            key={card.id}
            className={`card w-80 ${card.color} text-white shadow-lg rounded-2xl p-6 border border-gray-700 
              transform transition-all duration-500 hover:scale-105 hover:shadow-xl`}
          >
            <div className="card-body">
              <h2 className="card-title text-xl font-semibold">{card.title}</h2>
              <p className="text-sm opacity-90">{card.desc}</p>
              <div className="card-actions justify-end mt-4">
                <button className="btn px-5 py-2 rounded-md font-semibold text-white bg-gray-800 
                  hover:bg-gray-700 transition duration-300">
                  ⚡ Grab Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;