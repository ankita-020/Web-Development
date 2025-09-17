import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItem: (state, action) => {
      console.log(current(state));

      state.cartItems.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cartItems.pop();
    },
    clearCart: (state, action) => {
      return (state.cartItems = []);
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
