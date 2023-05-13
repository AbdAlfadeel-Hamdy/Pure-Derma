import { authActions } from "./auth-slice";
import axios from "axios";
import Router from "next/router";
import { uiActions } from "./ui-slice";
import { API_SERVER } from "@/lib/constants";

export const signupAction =
  (enteredName, enteredEmail, enteredPassword, enteredConfirmPassword) =>
  async (dispatch) => {
    dispatch(authActions.setLoading(true));
    try {
      const response = await axios.post(
        "/users/signup",
        {
          name: enteredName,
          email: enteredEmail,
          password: enteredPassword,
          passwordConfirm: enteredConfirmPassword,
        },
        {
          baseURL: API_SERVER,
          withCredentials: true,
        }
      );
      const { data } = response;
      dispatch(authActions.login(data.user));
      dispatch(authActions.setSuccess(`تم التسجيل بنجاح`));
      setTimeout(() => {
        Router.push("/");
        dispatch(authActions.clearFeedback());
      }, 3 * 1000);
      const path = Router.pathname;
      if (path !== "/") Router.push("/");
    } catch (error) {
      dispatch(authActions.setError("البريد الإلكتروني أو كلمة المرور خاطئة"));
    }
    dispatch(authActions.setLoading(false));
  };

export const loginAction =
  (enteredEmail, enteredPassword) => async (dispatch) => {
    dispatch(authActions.setLoading(true));
    try {
      const response = await axios.post(
        "/users/login",
        {
          email: enteredEmail,
          password: enteredPassword,
        },
        {
          baseURL: API_SERVER,
          withCredentials: true,
        }
      );
      const { data } = response;
      dispatch(authActions.login(data.user));
      dispatch(authActions.setSuccess(`تم التسجيل بنجاح`));
      setTimeout(() => {
        Router.push("/");
        dispatch(authActions.clearFeedback());
      }, 3 * 1000);
    } catch (error) {
      console.log(error);
      dispatch(authActions.setError("البريد الإلكتروني أو كلمة المرور خاطئة"));
    }
    dispatch(authActions.setLoading(false));
  };

export const logoutAction = () => async (dispatch) => {
  try {
    await axios.get("/users/logout", {
      baseURL: API_SERVER,
      withCredentials: true,
    });
    dispatch(authActions.logOut());
  } catch (error) {
    console.log(error);
  }
};

export const toggleFavoriteAction = (product) => async (dispatch) => {
  if (!product.isFavorite) {
    try {
      dispatch(uiActions.send("جاري إضافة المنتج إلى المفضلة"));
      const response = await axios.post(
        "/wishlist",
        {
          productId: product.id,
        },
        {
          baseURL: API_SERVER,
          withCredentials: true,
        }
      );
      const { data } = response;
      dispatch(uiActions.success("تم إضافة المنتج إلى المفضلة"));
      dispatch(authActions.toggleFavorite(data.data));
    } catch (error) {
      dispatch(uiActions.error("حدث خطأ أثناء إضافة المنتج إلى المفضلة"));
      console.log(error);
    }
  } else {
    try {
      dispatch(uiActions.send("جاري حذف المنتج من المفضلة"));
      const response = await axios.delete(`/wishlist/${product.id}`, {
        baseURL: API_SERVER,
        withCredentials: true,
      });
      const { data } = response;
      dispatch(uiActions.success("تم حذف المنتج من المفضلة"));
      dispatch(authActions.toggleFavorite(data.data));
    } catch (error) {
      dispatch(uiActions.error("حدث خطأ أثناء حذف المنتج من المفضلة"));
      console.log(error);
    }
  }
  setTimeout(() => {
    dispatch(uiActions.clear());
  }, 3 * 1000);
};
