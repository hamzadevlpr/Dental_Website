"use client";
import { removeFromCart, updateQuantity } from "@/redux/cartSlice";
import type { RootState } from "@/redux/store";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../EmptyCart";
import { ProductType } from "../ProductCard";

export default function ShoppingCart() {
  const [promo, setPromo] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cartSlice.items);
  const subtotal = cartItems.reduce(
    (sum: number, p: ProductType) => sum + p.price * (p.quantity ?? 1),
    0
  );

  const handleCheckout = () => {
    router.push('/checkout');
  }

  if(cartItems.length === 0) {
    return <EmptyCart />
  }
  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Table */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
          <table className="w-full text-left border-separate border-spacing-y-4">
            <thead>
              <tr className="text-gray-600 text-sm">
                <th className="w-1/3">Product</th>
                <th className="w-1/6">Price</th>
                <th className="w-1/6">Quantity</th>
                <th className="w-1/6">Subtotal</th>
                <th className="w-1/12"></th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((p: ProductType) => (
                <tr key={p.id} className="border-b border-gray-800 rounded-lg">
                  <td className="flex items-center gap-4">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-20 h-20 rounded-lg border border-gray-300"
                    />
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-800">
                        {p.title}
                      </span>
                      <span className="font-medium text-xs text-gray-600">
                        {p.category}
                      </span>
                    </div>
                  </td>
                  <td className="text-gray-700">PKR {p.price}</td>
                  <td>
                    <div className="flex items-center border rounded-md w-max border-brand-primary">
                      <button
                        onClick={() =>
                          dispatch(updateQuantity({ id: p.id, change: -1 }))
                        }
                        className="px-2 py-1 rounded-l bg-gray-200 hover:bg-gray-300 focus:outline-none cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-6 py-1">{p.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch(updateQuantity({ id: p.id, change: 1 }))
                        }
                        className="px-2 py-1 rounded-r bg-brand-primary text-white hover:bg-brand-primaryDark focus:outline-none cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="font-medium text-gray-800">
                    PKR {p.price * (p.quantity ?? 1)}
                  </td>
                  <td>
                    <button
                      onClick={() => dispatch(removeFromCart(p.id))}
                      className="text-red-500 hover:text-red-700"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          {cartItems.map((p: ProductType) => (
            <div key={p.id} className="flex justify-between text-sm mb-2">
              <span>{p.title}</span>
              <span>
                {p.quantity} × {p.price}
              </span>
            </div>
          ))}
          <hr className="my-4" />
          <div className="flex justify-between font-semibold text-gray-800">
            <span>Order Total</span>
            <span>PKR {subtotal}</span>
          </div>

          {/* Promo Code */}
          <div className="flex items-center mt-6 gap-2">
            <input
              type="text"
              placeholder="Promo code"
              value={promo}
              onChange={(e) => setPromo(e.target.value)}
              className="flex-1 px-3 py-2 border rounded-md focus:ring-brand-primary focus:outline-none"
            />
            <button className="px-4 py-2 rounded-md bg-brand-primary text-white font-medium hover:bg-brand-primaryDark cursor-pointer transition">
              Apply
            </button>
          </div>
          <button onClick={handleCheckout} className="mt-3 w-full py-3 rounded-md font-medium text-white bg-brand-primary hover:bg-brand-primaryDark focus:ring focus:ring-brand-primary focus:outline-none cursor-pointer transition">
            Proceed to Checkout
          </button>

          {/* Contact Info */}
          <div className="mt-6 text-sm text-gray-700 space-y-2">
            <p className="flex items-center gap-2">📞 (92) 0304 111 0244</p>
            <p className="flex items-center gap-2">
              ✉️{" "}
              <a
                href="mailto:info@edentalmart.com"
                className="text-brand-primary hover:underline"
              >
                info@edentalmart.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
