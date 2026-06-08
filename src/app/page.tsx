"use client";

import Hero from "@/component/HomePage/Hero";
import ProductCard from "@/component/ProductCard";
import { products } from "@/lib/Constant";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function Home() {
  return (
    <section className="max-w-[1440px] mx-auto mb-20 px-5">
      <Hero />

      <div className="flex flex-col space-y-10">
        <div>
          <h2 className="mb-5 text-[28px] font-medium text-black border-b border-brand-primary">
            Endodontics
          </h2>

          {/* Swiper Slider for Products */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="pb-10"
          >
            {products.slice(0, 10).map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <h2 className="mb-5 text-[28px] font-medium text-black border-b border-brand-primary">
          Disposables
          </h2>

          {/* Swiper Slider for Products */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000 }}
            loop
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="pb-10"
          >
            {products.slice(0, 10).map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <h2 className="mb-5 text-[28px] font-medium text-black border-b border-brand-primary">
          Periodontics
          </h2>

          {/* Swiper Slider for Products */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000 }}
            loop
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="pb-10"
          >
            {products.slice(0, 10).map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <h2 className="mb-5 text-[28px] font-medium text-black border-b border-brand-primary">
          Prosthodontics
          </h2>

          {/* Swiper Slider for Products */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="pb-10"
          >
            {products.slice(0, 10).map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
