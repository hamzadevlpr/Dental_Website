import ProductCard from "@/component/ProductCard";
import ProductPage from "@/component/Products/ProductPage";
import React from "react";
import { products } from "@/lib/Constant";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

export default function Page() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-stretch px-6">
        {/* Main product section */}
        <ProductPage />
      </div>
      {/* Related products section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:items-stretch px-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center w-full my-16">
          You may also like
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Product Cards */}
          {products.slice(0, 4).map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
