'use client'
import { Search, User, ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png"
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Navbar = () => {
    const cartItems = useSelector((state: RootState) => state?.cartSlice?.items?.length);

    return (
        <div className="w-full border-b border-border bg-white">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 lg:py-8">
                {/* Main nav bar */}
                <div className="flex flex-col md:grid md:grid-cols-3 md:items-center py-4 gap-5">


                    {/* Logo */}
                    <Link href={"/"} className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
                            <Image src={logo} alt="logo" width={30} height={30} className="object-contain" />
                        </div>
                        <div className="text-base sm:text-lg font-bold text-brand-primary">
                            FAROOQUE DENTAL MART
                        </div>
                    </Link>

                    {/* Search bar (center on desktop, full on mobile) */}
                    <div className="w-full md:max-w-lg md:mx-auto relative">
                        <input
                            className="flex h-10 w-full rounded-xl border border-gray-300 bg-background px-3 py-2 text-sm sm:text-base 
              placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-1"
                            placeholder="Search for product"
                        />
                        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    </div>

                    {/* Right actions */}
                    <div className="flex items-center  lg:justify-end justify-between gap-6">
                        <Link href="/auth/login" className="flex items-center gap-2 cursor-pointer hover:text-brand-primary transition-colors">
                            <User className="w-5 h-5" />
                            <span className="inline text-sm font-medium">LOGIN / SIGNUP</span>
                        </Link>
                        <Link href="/my-cart" className="flex items-center gap-2 cursor-pointer hover:text-brand-primary transition-colors">
                            <ShoppingCart className="w-5 h-5" />
                            <span className="inline text-sm font-medium">MY CART</span>
                            {
                                cartItems > 0 && (
                                    <span className="w-4 h-4 inline-flex items-center justify-center text-[8px] font-bold leading-none text-white bg-brand-primary rounded-full">
                                        {cartItems}
                                    </span>
                                )
                            }
                        </Link>
                        <Link href="/favorite" className="flex items-center gap-2 cursor-pointer">
                            <Heart className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
