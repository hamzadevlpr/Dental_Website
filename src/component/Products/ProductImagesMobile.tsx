"use client";
import React, { useRef } from "react";
import product from "@/assets/product.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { ChevronLeft } from "lucide-react";
import type { Swiper as SwiperClass } from "swiper";

const ProductImagesMobile = ({
  images,
  colors,
}: {
  images: string[];
  colors: string[];
}) => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <div className="w-full lg:hidden relative">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {images.map((_, index) => (
          <SwiperSlide key={index}>
            <div
              className={`aspect-square flex items-center justify-center overflow-hidden ${
                colors[index % colors.length]
              }`}
            >
              <img
                src={product.src}
                alt={`product-${index}`}
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="z-100 absolute inset-0 flex items-center justify-between px-2">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm hover:bg-black/70 transition"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm hover:bg-black/70 transition"
        >
          <ChevronLeft size={16} className="rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default ProductImagesMobile;
