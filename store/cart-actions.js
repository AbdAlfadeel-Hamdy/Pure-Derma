import { authActions } from "./auth-slice";
import { cartActions } from "./cart-slice";
import axios from "axios";

export const updateCartAction = (productId, quantity) => async (dispatch) => {
  try {
    const response = await axios.patch(
      `/cart/${productId}`,
      {
        quantity,
      },
      {
        baseURL: "http://localhost:5000/api/v1",
        withCredentials: true,
      }
    );
    const { data } = response;
    dispatch(cartActions.updateCart(data));
    dispatch(authActions.updateUserCart(data.amount));
  } catch (error) {
    console.log(error);
  }
};
export const addToCartAction = (productId) => async (dispatch) => {
  try {
    const response = await axios.post(
      `/cart`,
      {
        productId,
      },
      {
        baseURL: "http://localhost:5000/api/v1",
        withCredentials: true,
      }
    );
    const { data } = response;
    dispatch(cartActions.addToCart(data));
    dispatch(authActions.updateUserCart(data.amount));
  } catch (error) {
    console.log(error);
  }
};

export const removeFromCartAction = (productId) => async (dispatch) => {
  try {
    const response = await axios.delete(`/cart/${productId}`, {
      baseURL: "http://localhost:5000/api/v1",
      withCredentials: true,
    });
    const { data } = response;
    dispatch(cartActions.removeFromCart(data));
    dispatch(authActions.updateUserCart(data.amount));
  } catch (error) {
    console.log(error);
  }
};

export const clearCartAction = () => async (dispatch) => {
  try {
    await axios.delete(`/cart`, {
      baseURL: "http://localhost:5000/api/v1",
      withCredentials: true,
    });
    dispatch(cartActions.clearCart());
    dispatch(authActions.updateUserCart(0));
  } catch (error) {
    console.log(error);
  }
};

export const getUserCartAction = () => async (dispatch) => {
  try {
    const response = await axios.get("/cart", {
      baseURL: "http://localhost:5000/api/v1",
      withCredentials: true,
    });
    const { data } = response;
    dispatch(cartActions.getUserCart(data));
  } catch (error) {
    console.log(error);
  }
};
