import { cartActions } from "./cart-slice";
import axios from "axios";

export const addToCartAction = (productId) => async (dispatch) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCartAction = (productId) => async (dispatch) => {
  try {
    const response = await axios.delete(`/cart/${productId}`, {
      baseURL: "https://pure-derma.onrender.com/api/v1",
    });
    const { data } = response;
    dispatch(cartActions.removeFromCart(data));
  } catch (error) {
    console.log(error);
  }
};

export const clearCartAction = () => async (dispatch) => {
  try {
    await axios.delete(`/cart`, {
      baseURL: "https://pure-derma.onrender.com/api/v1",
    });
    dispatch(cartActions.clearCart());
  } catch (error) {
    console.log(error);
  }
};

export const getUserCartAction = () => async (dispatch) => {
  try {
    const response = await axios.get("/cart", {
      baseURL: "https://pure-derma.onrender.com/api/v1",
    });
    const { data } = response;
    dispatch(cartActions.getUserCart(data));
  } catch (error) {
    console.log(error);
  }
};
