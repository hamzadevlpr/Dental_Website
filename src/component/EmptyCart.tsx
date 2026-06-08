"use client";
import { useRouter } from "next/navigation";
import Lottie from "lottie-react";
import emptyCartAnimation from "@/assets/animation/Empty_Cart.json";

export default function EmptyCart() {
  const router = useRouter();

  return (
    <div className="pb-20 flex flex-col items-center justify-center min-h-[70vh] bg-gray-50 px-4">
      {/* Animation */}
      <div className="w-72 h-72">
        <Lottie animationData={emptyCartAnimation} loop={true} />
      </div>

      {/* Message */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6">
        Your cart is empty 🛒
      </h2>
      <p className="text-gray-600 text-center mt-2 max-w-md">
        Looks like you haven’t added anything to your cart yet. 
        Start exploring our products and find something you love!
      </p>

      {/* Action Button */}
      <button
        onClick={() => router.push("/products")}
        className="mt-6 px-6 py-3 rounded-lg bg-brand-primary text-white font-medium hover:bg-brand-primaryDark transition cursor-pointer"
      >
        Browse Products
      </button>
    </div>
  );
}
