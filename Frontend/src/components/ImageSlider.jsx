import { useState, useEffect } from "react";

const images = [
  "https://static.vecteezy.com/system/resources/previews/000/672/873/large_2x/vector-insurance-banner-with-line-art-icons.jpg",
  "https://static.vecteezy.com/system/resources/previews/002/094/431/large_2x/insurance-policy-services-conceptual-design-hand-holding-a-paper-family-in-house-illustrations-vector.jpg",
  "https://static.vecteezy.com/system/resources/previews/001/991/654/large_2x/policies-flat-design-concept-illustration-icon-insurance-claim-form-insurance-policy-user-agreement-health-insurance-business-rule-abstract-metaphor-can-use-for-landing-page-mobile-app-free-vector.jpg",
  "https://static.vecteezy.com/system/resources/previews/015/484/157/large_2x/landing-page-of-policies-rules-and-agreement-free-vector.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full lg:w-3/5 h-[350px] overflow-hidden rounded-lg shadow-lg mt-5 ml-14">
      {/* Image Display */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-700 opacity-100"
      />

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;