import { createSlice } from '@reduxjs/toolkit'

export interface cartState {
  cart: any
}

const initialState: cartState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, data) => {
      
      state.cart.push(data.payload)
    },
  },
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer