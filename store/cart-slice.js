import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  cartItems: [],
  totalCartPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart(state, action) {
      const { cart } = action.payload;
      state.cartItems = cart.cartItems;
      state.totalCartPrice = cart.totalCartPrice;
    },
    removeFromCart(state, action) {
      const { data } = action.payload;
      state.cartItems = data.cartItems;
      state.totalCartPrice = data.totalCartPrice;
    },
    updateCart(state, action) {
      const { data } = action.payload;
      state.cartItems = data.cartItems;
      state.totalCartPrice = data.totalCartPrice;
    },
    getUserCart(state, action) {
      const { cart } = action.payload;
      state.cartItems = cart.cartItems;
      state.totalCartPrice = cart.totalCartPrice;
    },
    clearCart(state) {
      state = cartInitialState;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
