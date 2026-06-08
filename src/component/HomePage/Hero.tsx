"use client";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SidebarCategories from "./SidebarCategories";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import img1 from "../../../public/img1.avif";
import img2 from "../../../public/img2.webp";
import img3 from "../../../public/img3.avif";

const slides = [
    {
        id: 1,
        offer: "Limited Time Offer 30% Off",
        title: "Dental Static Mixing Nozzles Dual-Cartridge",
        img: img1,
    },
    {
        id: 2,
        offer: "Summer Special 20% Off",
        title: "DIY Custom Silicone Molding Teeth Impression Materials Kit",
        img: img2,
    },
    {
        id: 3,
        offer: "New Arrival Discount 15%",
        title: "Dental Orthodontic Elastic Ligature Ties O-Rings Bands",
        img: img3,
    },
];

export default function Hero() {

    return (
        <div className="max-w-[1440px] mx-auto flex flex-col-reverse md:grid md:grid-cols-12 gap-6 py-6">
            {/* Sidebar */}
            <SidebarCategories />

            {/* Swiper Slider */}
            <div className="lg:col-span-9 col-span-12">
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    autoplay={{ delay: 3000 }}
                    loop
                    className="rounded-lg border border-brand-primary"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="flex flex-col-reverse md:flex-row items-center justify-between  px-5 py-5 md:px-14 rounded-xl w-full md:h-[380px]">
                                {/* Left Content */}
                                <div className="md:pl-8 mt-10 md:mt-0 text-center md:text-left">
                                    <p className="md:text-base text-brand-primary pb-1">{slide.offer}</p>
                                    <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-semibold">
                                        {slide.title}
                                    </h1>
                                    <div className="flex items-center mt-4 md:mt-6 justify-center md:justify-start">
                                        <button className="md:px-10 px-7 md:py-2.5 py-2 bg-brand-primary rounded-full text-white font-medium hover:bg-brand-primaryDark transition-colors cursor-pointer">
                                            Buy now
                                        </button>
                                        <button className="group flex items-center gap-2 px-6 py-2.5 font-medium">
                                            Find more
                                            <ChevronRight className="w-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Right Image */}
                                <div className="flex items-center flex-1 justify-center">
                                    <Image
                                        alt={slide.title}
                                        width={380}
                                        height={380}
                                        className="object-contain"
                                        src={slide.img.src}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
