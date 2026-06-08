"use client";
import ProductCard from "@/component/ProductCard";
import shoes01 from "../../../assets/shoes01.jpg";
import shoes04 from "../../../assets/shoes06.jpg";
import "swiper/css";
import "swiper/css/navigation";
import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [images] = useState({
    img1: shoes01,
    img2: shoes04,
    img3: shoes04,
    img4: shoes04,
  });

  const [activeImg, setActiveImage] = useState(shoes01);
  const [amount, setAmount] = useState(1);
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:items-start px-6">
        {/* Left Side - Images */}
        <div className="flex flex-col gap-6 lg:w-2/4">
          <div className="relative group">
            <Image
              src={activeImg}
              alt="Sneaker"
              width={550}
              height={550}
              className="aspect-square object-cover rounded-xl shadow-md transition-transform duration-300"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex flex-row gap-4 justify-center">
            {Object.values(images).map((img, index) => (
              <Image
                key={index}
                width={100}
                height={100}
                src={img.src}
                alt={`sneaker-${index}`}
                className={`w-20 h-20 md:w-24 md:h-24 rounded-lg cursor-pointer object-cover border transition-all duration-300 hover:scale-105 hover:shadow-md ${activeImg === img
                  ? "border-2 border-brand-primary shadow-lg"
                  : "border-gray-200"
                  }`}
                onClick={() => setActiveImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Details */}
        <div className="flex flex-col gap-6 lg:w-2/4 bg-white p-8 rounded-xl shadow-lg">
          {/* Heading */}
          <div>
            <span className="text-brand-primary font-semibold text-sm uppercase tracking-wide">
              Special Sneaker
            </span>
            <h1 className="text-3xl font-bold mt-2 text-gray-800">
              Pure Platinum and Metallic Silver
            </h1>
          </div>

          {/* Description */}
          <p className="text-gray-500 leading-relaxed">
            Shine like a star in this early-noughties icon. Made famous by its
            mechanical cushioning, the Shox TL comes cloaked in Pure Platinum and
            Metallic Silver for a flashy take on the futuristic design. Glossy
            details, textured mesh underlays and a reflective finish highlight every
            step, while Chrome accents add a sleek boost of energy.
          </p>

          {/* Price */}
          <h6 className="text-3xl font-bold text-brand-primary">$199.00</h6>

          {/* Quantity + Cart */}
          <div className="flex flex-row items-center gap-8 mt-4">
            {/* Quantity Selector */}
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                className="bg-gray-200 py-2 px-4 text-xl font-bold text-gray-700 hover:bg-brand-primary hover:text-white transition cursor-pointer"
                onClick={() => setAmount((prev) => Math.max(prev - 1, 1))}
              >
                -
              </button>
              <span className="py-2 px-6 text-lg font-medium text-gray-800">
                {amount}
              </span>
              <button
                className="bg-gray-200 py-2 px-4 text-xl font-bold text-gray-700 hover:bg-brand-primary hover:text-white transition cursor-pointer"
                onClick={() => setAmount((prev) => prev + 1)}
              >
                +
              </button>
            </div>

            {/* Add to Cart */}
            <button className="bg-brand-primary text-white font-semibold py-3 px-10 rounded-lg shadow-md transition-all duration-300 hover:bg-brand-primaryDark hover:shadow-lg cursor-pointer">
              Add to Cart
            </button>
          </div>

          {/* Extra Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="flex-1 border border-gray-300 py-3 rounded-lg text-gray-600 font-medium hover:border-brand-primary hover:text-brand-primary transition cursor-pointer">
              Add to Wishlist
            </button>
            <button className="flex-1 border border-gray-300 py-3 rounded-lg text-gray-600 font-medium hover:border-brand-primary hover:text-brand-primary transition cursor-pointer">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
