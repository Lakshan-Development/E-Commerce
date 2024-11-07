import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            At CRAVIX, we believe that fashion should be effortless, accessible,
            and always on trend. Our curated collection of clothing is designed
            for every occasion, blending timeless styles with the latest trends.
            Whether you're looking for everyday essentials or something special,
            we offer high-quality, comfortable pieces that fit your lifestyle.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <NavLink to="/" className="mb-3">
              Home
            </NavLink>
            <NavLink to="/about" className="mb-3">
              About Us
            </NavLink>
            <NavLink to="/order" className="mb-3">
              Delivery
            </NavLink>
            <NavLink to="/contact" className="mb-3">
              Privacy Policy
            </NavLink>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+94 12 34 567</li>
            <li>info@cravix.shop</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Lakshan Supun - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
