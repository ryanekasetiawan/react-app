import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";

const store = configureStore({
  reducer: { cart: cartReducer },
});

console.log("oncreate store : ", store.getState());

store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

export default store;