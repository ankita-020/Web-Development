import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    cartInfo: cartSliceReducer,
  },
});

export default appStore;
