import { API_SERVER } from "@/lib/constants";
import { authActions } from "./auth-slice";
import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";
import axios from "axios";

export const updateCartAction = (productId, quantity) => async (dispatch) => {
  try {
    dispatch(uiActions.send("جاري تحديث منتجات العربة"));
    const response = await axios.patch(
      `/cart/${productId}`,
      {
        quantity,
      },
      {
        baseURL: API_SERVER,
        withCredentials: true,
      }
    );
    const { data } = response;
    dispatch(uiActions.success("تم تحديث منتجات العربة"));
    dispatch(cartActions.updateCart(data));
    dispatch(authActions.updateUserCart(data.amount));
  } catch (error) {
    dispatch(uiActions.error("حدث خطأ أثناء تحديث منتجات العربة"));
  }
  setTimeout(() => {
    dispatch(uiActions.clear());
  }, 3 * 1000);
};
export const addToCartAction = (productId) => async (dispatch) => {
  try {
    dispatch(uiActions.send("جاري إضافة المنتج إلى العربة"));
    const response = await axios.post(
      `/cart`,
      {
        productId,
      },
      {
        baseURL: API_SERVER,
        withCredentials: true,
      }
    );
    const { data } = response;
    dispatch(uiActions.success("تم إضافة المنتج إلى العربة"));
    dispatch(cartActions.addToCart(data));
    dispatch(authActions.updateUserCart(data.amount));
  } catch (error) {
    dispatch(uiActions.error("حدث خطأ أثناء إضافة المنتج إلى العربة"));
    console.log(error);
  }
  setTimeout(() => {
    dispatch(uiActions.clear());
  }, 3 * 1000);
};

export const removeFromCartAction = (productId) => async (dispatch) => {
  try {
    dispatch(uiActions.send("جاري حذف المنتج من العربة"));
    const response = await axios.delete(`/cart/${productId}`, {
      baseURL: API_SERVER,
      withCredentials: true,
    });
    const { data } = response;
    dispatch(uiActions.success("تم حذف المنتج من العربة"));
    dispatch(cartActions.removeFromCart(data));
    dispatch(authActions.updateUserCart(data.amount));
  } catch (error) {
    dispatch(uiActions.error("حدث خطأ أثناء حذف المنتج من العربة"));
  }
  setTimeout(() => {
    dispatch(uiActions.clear());
  }, 3 * 1000);
};

export const clearCartAction = () => async (dispatch) => {
  try {
    dispatch(uiActions.send("جاري حذف محتويات العربة"));
    await axios.delete(`/cart`, {
      baseURL: API_SERVER,
      withCredentials: true,
    });
    dispatch(uiActions.success("تم حذف محتويات العربة"));
    dispatch(cartActions.clearCart());
    dispatch(authActions.updateUserCart(0));
  } catch (error) {
    dispatch(uiActions.error("حدث خطأ أثناء حذف محتويات العربة"));
  }
  setTimeout(() => {
    dispatch(uiActions.clear());
  }, 3 * 1000);
};

export const getUserCartAction = () => async (dispatch) => {
  try {
    const response = await axios.get("/cart", {
      baseURL: API_SERVER,
      withCredentials: true,
    });
    const { data } = response;
    dispatch(cartActions.getUserCart(data));
  } catch (error) {}
};
