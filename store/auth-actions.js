import { authActions } from "./auth-slice";
import axios from "axios";
import Router from "next/router";

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
