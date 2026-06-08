"use client";
import emptyAnimation from "@/assets/animation/Bookmark_animation.json";
import { clearFavorites } from "@/redux/favoriteSlice";
import { RootState } from "@/redux/store";
import Lottie from "lottie-react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard";

export default function FavoritesPage() {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favoriteSlice.items);

    if (favorites.length === 0) {
        return (
          <div className="py-20 flex flex-col items-center justify-center text-gray-600">
            <Lottie
              animationData={emptyAnimation}
              loop={true}
              className="w-64 h-64"
            />
            <p className="mt-4 text-xl font-semibold">No favorites yet ❤️</p>
            <p className="text-sm text-gray-400">
              Start adding products to your favorites!
            </p>
          </div>
        );
      }
    

    return (
        <div className="max-w-[1440px] mx-auto p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">My Favorites ❤️</h1>
                <button
                    onClick={() => dispatch(clearFavorites())}
                    className="cursor-pointer px-4 py-2 rounded-md border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white transition-all duration-200"
                >
                    Clear All
                </button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {favorites.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
