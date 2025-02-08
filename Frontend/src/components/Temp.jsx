import ImageSlider from "./ImageSlider";

const Temp = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start bg-gray-100 w-full h-full">
      {/* Left: Image Slider */}
      <div className="w-full lg:w-5/5 h-full">
        <ImageSlider />
      </div>

      {/* Right: Text Section */}
      <div className="lg:w-2/5 flex flex-col justify-center items-start text-left lg:pl-10 mt-5">
        <h2 className="text-3xl font-extrabold text-gray-800 leading-tight">
          Let’s find you <br />
          <span className="text-blue-600">the Best Insurance</span>
        </h2>
        <p className="text-lg text-gray-600 mt-4">
          <span className="font-semibold text-blue-500">50+ insurers</span> offering <br />
          <span className="font-semibold text-green-500">lowest prices</span>
        </p>
        <p className="text-lg text-gray-600 mt-3 flex items-center">
  Quick, easy & <span className="font-semibold text-red-500 ml-2">hassle-free</span>
</p>

        <button className="mt-6 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-600 transition-all transform hover:scale-105">
          Get Started 🚀
        </button>
      </div>
    </div>
  );
};

export default Temp;