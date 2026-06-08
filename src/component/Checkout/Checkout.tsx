"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { ProductType } from "../ProductCard";

export default function Checkout() {
  const cartItems = useSelector((state: RootState) => state.cartSlice.items);
  const subtotal = cartItems.reduce(
    (sum: number, p: ProductType) => sum + p.price * (p.quantity || 1),
    0
  );
  const shipping = subtotal > 50000 ? 0 : 500; // free shipping for large orders
  const total = subtotal + shipping;

  const [payment, setPayment] = useState("cod");

  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-8">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Billing Details */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-6 text-gray-800">
            Billing Details
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-md px-3 py-2"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded-md px-3 py-2"
              required
            />
            <input
              type="number"
              placeholder="Phone"
              className="border rounded-md px-3 py-2"
              required
            />
            <input
              type="text"
              placeholder="City"
              className="border rounded-md px-3 py-2"
              required
            />
            <input
              type="text"
              placeholder="Country"
              className="border rounded-md px-3 py-2"
              required
            />
            <textarea
              placeholder="Full Address"
              rows={3}
              className="md:col-span-2 border rounded-md px-3 py-2"
              required
            />
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          {cartItems.map((p: ProductType) => (
            <div key={p.id} className="flex justify-between text-sm mb-2">
              <span>
                {p.title} × {p.quantity}
              </span>
              <span>PKR {p.price * (p.quantity || 1)}</span>
            </div>
          ))}
          <hr className="my-4" />
          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>PKR {subtotal}</span>
          </div>
          <div className="flex justify-between text-sm mb-2">
            <span>Shipping</span>
            <span>{shipping === 0 ? "Free" : `PKR ${shipping}`}</span>
          </div>
          <div className="flex justify-between font-semibold text-gray-800 text-base mt-2">
            <span>Total</span>
            <span>PKR {total}</span>
          </div>

          {/* Payment Method */}
          <div className="mt-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Payment Method
            </h3>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="cod"
                  checked={payment === "cod"}
                  onChange={() => setPayment("cod")}
                  className="text-brand-primary focus:ring-brand-primary"
                />
                Cash on Delivery
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={payment === "card"}
                  onChange={() => setPayment("card")}
                  className="text-brand-primary focus:ring-brand-primary"
                />
                Credit/Debit Card
              </label>
            </div>
          </div>

          {/* Place Order */}
          <button className="mt-6 w-full py-3 rounded-md font-medium text-white bg-brand-primary hover:bg-brand-primaryDark focus:ring-2 focus:ring-brand-primary focus:outline-none cursor-pointer transition">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
