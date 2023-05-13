import axios from "axios";
import { uiActions } from "./ui-slice";
import { API_SERVER } from "@/lib/constants";
import { orderActions } from "./order-slice";
import Router from "next/router";
import { cartActions } from "./cart-slice";
import { authActions } from "./auth-slice";

export const createOrderAction = (address, phone, city) => async (dispatch) => {
  try {
    dispatch(uiActions.send("جاري تنفيذ طلبك"));
    const response = await axios.post(
      "/orders",
      {
        shippingAddress: {
          details: address,
          phone,
          city,
          postalCode: "",
        },
      },
      {
        baseURL: API_SERVER,
        withCredentials: true,
      }
    );
    const { data } = response;
    dispatch(uiActions.success("تم تنفيذ طلبك بنجاح"));
    dispatch(orderActions.makeOrder(data.order));
    dispatch(cartActions.clearCart());
    dispatch(authActions.updateUserCart(0));
    setTimeout(() => {
      Router.push("/");
    }, 3 * 1000);
  } catch (error) {
    dispatch(uiActions.error("حدث خطأ أثناء العملية، حاول مرة أخرى"));
  } finally {
    setTimeout(() => {
      dispatch(uiActions.clear());
    }, 3 * 1000);
  }
};
