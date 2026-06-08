"use client";
import React, { useRef, useState } from "react";
import product from "@/assets/product.png";
import ProductImagesMobile from "./ProductImagesMobile";
import ReviewSummary from "./ReviewSummary";

const ProductPage = () => {
  const swiperRef = useRef(null);
  const images = [
    "https://www.brightway.pk/cdn/shop/products/PaperPoints1.jpg?v=1623603522",
    "https://www.brightway.pk/cdn/shop/products/PaperPoints1.jpg?v=1623603522",
    "https://www.brightway.pk/cdn/shop/products/PaperPoints1.jpg?v=1623603522",
    "https://www.brightway.pk/cdn/shop/products/PaperPoints1.jpg?v=1623603522",
    "https://www.brightway.pk/cdn/shop/products/PaperPoints1.jpg?v=1623603522",
    "https://www.brightway.pk/cdn/shop/products/PaperPoints1.jpg?v=1623603522",
  ];
  const [amount, setAmount] = useState(1);
  const sizes = ["15", "20", "25", "30", "35", "15-40", "45-80"];
  const [selected, setSelected] = useState("15");

  const colors = [
    "bg-[#14a085]",
    "bg-purple-400",
    "bg-green-100",
    "bg-teal-100",
    "bg-yellow-100",
    "bg-pink-100",
    "bg-blue-100",
  ];

  return (
    <>
      {/* Left Side - Images */}
      {/* Mobile Swiper */}
      <ProductImagesMobile images={images} colors={colors} />

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-2 gap-2 lg:w-[45%] shadow-sm">
        {images.map((_, index) => {
          const colors = [
            "bg-[#14a085]",
            "bg-purple-400",
            "bg-green-100",
            "bg-teal-100",
            "bg-yellow-100",
            "bg-pink-100",
            "bg-blue-100",
          ];
          const randomColor = colors[index % colors.length];
          return (
            <div
              key={index}
              className={`aspect-square flex items-center justify-center overflow-hidden ${randomColor}`}
            >
              <img
                src={product.src}
                alt={`product-${index}`}
                className="object-cover w-full h-full"
              />
            </div>
          );
        })}
      </div>

      {/* Right Side - Details */}
      <div className="flex flex-col gap-4 lg:w-[55%] bg-white p-8 shadow-sm">
        {/* Heading */}
        <div>
          <span className="text-[#14a085] font-semibold text-sm uppercase tracking-wide">
            Paper Points
          </span>
          <h1 className="text-3xl font-bold mt-3 text-gray-900 leading-snug">
            ABSORBENT PAPER POINTS – Meta BIOMED – 200 Pcs Per Pack
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Meta Biomed Absorbent Paper Points in Pakistan
          </p>
          <p className="text-sm font-medium text-green-600 mt-2">In Stock</p>
        </div>

        {/* Review Summary */}
        <ReviewSummary />

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-sm">
          Hand rolled for extra absorbency. Rigid enough to insert in canals
          without breaking or bending. Sterilized by Gamma Radiation. Non-toxic
          and biocompatible. Available in ISO Standard Sizes 15–40. Each pack
          contains 200 paper points.
        </p>
        <ul className="list-disc list-inside text-gray-700">
          <li>Hand Rolled for Extra Absorbency</li>
          <li>Rigid enough to insert in canals without breaking</li>
          <li>Sterilized by Gamma Radiation</li>
          <li>Non-toxic and Biocompatible</li>
          <li>Available in ISO Standard Sizes 15-40</li>
          <li>200 Paper Points per Pack</li>
        </ul>
        {/* Sizes */}
        <div className="flex flex-col gap-3">
          <div className="font-semibold text-sm text-gray-800">
            SIZE: <span className="ml-1">{selected}</span>
          </div>
          <div className="flex gap-2 flex-wrap">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelected(size)}
                className={`px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200
            ${
              selected === size
                ? "bg-gray-900 text-white border-gray-900 shadow-sm"
                : "bg-white text-gray-700 border-gray-300 hover:border-gray-500"
            }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center items-baseline gap-3">
          <span className="text-3xl font-bold text-[#14a085]">PKR 999.00</span>
          <span className="text-lg line-through text-gray-400">
            PKR 1,200.00
          </span>
          <span className="bg-red-100 text-red-600 text-sm font-semibold px-2 py-1 rounded-full">
            20% OFF
          </span>
        </div>

        {/* Quantity + Cart */}
        <div className="flex flex-row items-center gap-6 mt-2">
          {/* Quantity Selector */}
          <div className="flex items-center border rounded-lg overflow-hidden">
            <button
              className="bg-gray-100 py-2 px-4 text-xl font-bold text-gray-700 hover:bg-[#14a085] hover:text-white transition"
              onClick={() => setAmount((prev) => Math.max(prev - 1, 1))}
            >
              −
            </button>
            <span className="py-2 px-6 text-lg font-semibold text-gray-800 bg-white">
              {amount}
            </span>
            <button
              className="bg-gray-100 py-2 px-4 text-xl font-bold text-gray-700 hover:bg-[#14a085] hover:text-white transition"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>

          {/* Add to Cart */}
          <button className="bg-[#14a085] text-white font-semibold py-3 px-10 rounded-lg shadow-md transition-all duration-300 hover:bg-[#117766] hover:shadow-lg">
            Add to Cart
          </button>
        </div>

        {/* Extra Buttons */}
        <div className="flex gap-4 mt-4">
          <button className="flex-1 border border-gray-300 py-3 rounded-lg text-gray-600 font-medium flex items-center justify-center gap-2 hover:border-[#14a085] hover:text-[#14a085] transition">
            ❤️ Add to Wishlist
          </button>
          <button className="flex-1 border border-gray-300 py-3 rounded-lg text-gray-600 font-medium flex items-center justify-center gap-2 hover:border-[#14a085] hover:text-[#14a085] transition">
            🔗 Share
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
