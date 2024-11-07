import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start border border-gray-400 mt-4">
  {/* Hero Left Side */}
  <div className="w-full sm:w-1/2 flex flex-col items-center sm:items-start justify-center py-10 sm:py-0 px-4 sm:px-8">
    <div className="text-[#414141] text-center sm:text-left">
      {/* Section Title */}
      <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
        <p className="w-8 md:w-12 h-[2px] bg-[#414141]"></p>
        <p className="font-medium text-sm md:text-base uppercase tracking-wide text-gray-600">
          OUR BEST SELLERS
        </p>
      </div>
      <h1 className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight text-[#2C3E50] mb-6">
        Latest Arrivals
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-6">
        Discover our newest collection of stylish, high-quality fashion. Stay ahead with the latest trends.
      </p>

      {/* Shop Now Button */}
      <div className="flex items-center justify-center sm:justify-start gap-4">
        <button className="font-semibold text-sm md:text-base bg-blue-700 text-white py-3 px-6 rounded-lg  hover:bg-blue-800 hover:scale-105 hover:shadow-xl focus:outline-none">
          SHOP NOW
        </button>

        <p className="w-8 md:w-12 h-[1px] bg-[#414141]"></p>
      </div>
    </div>
  </div>

  {/* Hero Right Side - Image */}
  <div className="w-full sm:w-1/2 ">
    <img className="w-full h-full object-cover rounded-lg shadow-lg" src={assets.hero_img} alt="Fashion Collection" />
  </div>
</div>

  );
};

export default Hero;
