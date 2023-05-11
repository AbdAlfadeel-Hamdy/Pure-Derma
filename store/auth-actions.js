import { authActions } from "./auth-slice";
import axios from "axios";
import Router from "next/router";
import { uiActions } from "./ui-slice";

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
          baseURL: "http://localhost:5000/api/v1",
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
      dispatch(authActions.setError(error.message));
    }
    dispatch(authActions.setLoading(false));
  };

export const logoutAction = () => async (dispatch) => {
  try {
    await axios.get("/users/logout", {
      baseURL: "http://localhost:5000/api/v1",
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
          baseURL: "http://localhost:5000/api/v1",
          withCredentials: true,
        }
      );
      const { data } = response;
      dispatch(uiActions.success("تم إضافة المنتج إلى المفضلة"));
      dispatch(authActions.toggleFavorite(data.data));
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      dispatch(uiActions.send("جاري حذف المنتج من المفضلة"));
      const response = await axios.delete(`/wishlist/${product.id}`, {
        baseURL: "http://localhost:5000/api/v1",
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
