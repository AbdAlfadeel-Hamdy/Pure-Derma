import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

export const addToCartAction = (productId) => async (dispatch) => {
  const response = await axios.post(
    "/cart",
    {
      productId,
    },
    {
      baseURL: "https://pure-derma.onrender.com/api/v1",
    }
  );
  const { data } = response;
  dispatch(cartActions.addToCart(data));
};

export const removeFromCartAction = (productId) => async (dispatch) => {
  const response = await axios.delete(`/cart/${productId}`, {
    baseURL: "https://pure-derma.onrender.com/api/v1",
  });
  const { data } = response;
  dispatch(cartActions.removeFromCart(data));
};

export const clearCartAction = () => async (dispatch) => {
  await axios.delete(`/cart`, {
    baseURL: "https://pure-derma.onrender.com/api/v1",
  });
  dispatch(cartActions.clearCart());
};

export const getUserCartAction = () => async (dispatch) => {
  const response = await axios.get("/cart", {
    baseURL: "https://pure-derma.onrender.com/api/v1",
  });
  const { data } = response;
  dispatch(cartActions.getUserCart(data));
};

export default cartSlice.reducer;
