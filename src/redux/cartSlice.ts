import { ProductType } from "@/component/ProductCard";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem extends ProductType {
  quantity: number; 
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const existing = state.items.find((i) => i.id === action.payload.id);

      if (existing) {
        existing.quantity += action.payload.quantity ?? 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity ?? 1,
        });
      }
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: number; change: number }>
    ) => {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(1, item.quantity + action.payload.change);
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
