import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  cartItems: [],
  totalCartPrice: 0,
  totalCartItems: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addToCart(state, action) {
      state.totalCartItems = action.payload.numOfCartItems;
      const { cart } = action.payload;
      state.cartItems = cart.cartItems;
      state.totalCartPrice = cart.totalCartPrice;
    },
    removeFromCart(state, action) {
      state.totalCartItems = action.payload.numOfCartItems;
      const { data } = action.payload;
      state.cartItems = data.cartItems;
      state.totalCartPrice = data.totalCartPrice;
    },
    getUserCart(state, action) {
      state.totalCartItems = action.payload.numOfCartItems;
      const { cart } = action.payload;
      state.cartItems = cart.cartItems;
      state.totalCartPrice = cart.cart.totalCartPrice;
    },
    clearCart(state) {
      state = cartInitialState;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
