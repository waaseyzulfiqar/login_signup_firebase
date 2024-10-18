import { createSlice } from "@reduxjs/toolkit";

export interface cartState {
  cart: any;
}

const initialState: cartState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, data) => {
      const existingItem = state.cart.find(
        (item:any) => item.id === data.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...data.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, data) => {
      const existingItem = state.cart.find((item:any) => item.id === data.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          const index = state.cart.findIndex(
            (item:any) => item.id === data.payload
          );
          
            state.cart.splice(index, 1);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
