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
      state.cart.push({...data.payload, quantity: 1});
    },

    removeFromCart: (state, data) => {
      state.cart.splice(data.payload, 1);
    },

    increment: (state, data) => {
      
    }
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
