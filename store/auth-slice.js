import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  loggedInUser: null,
  successMessage: "",
  errorMessage: "",
  isLoading: false,
  wishlist: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    setLoading(state, action) {
      if (action.payload) state.isLoading = true;
      else state.isLoading = false;
    },
    setSuccess(state, action) {
      state.successMessage = action.payload;
    },
    setError(state, action) {
      state.errorMessage = action.payload;
    },
    clearFeedback(state) {
      state.successMessage = "";
      state.errorMessage = "";
    },
    login(state, action) {
      state.loggedInUser = action.payload;
      state.wishlist = action.payload.wishlist;
      localStorage.setItem("loggedInUser", JSON.stringify(state.loggedInUser));
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    logOut(state) {
      state.loggedInUser = null;
      state.wishlist = [];
      localStorage.removeItem("loggedInUser");
      localStorage.removeItem("wishlist");
    },
    updateUserCart(state, action) {
      state.loggedInUser.numOfCart = action?.payload;
      localStorage.setItem("loggedInUser", JSON.stringify(state.loggedInUser));
    },
    toggleFavorite(state, action) {
      state.wishlist = action.payload;
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
    persistUser(state, action) {
      state.loggedInUser = action.payload.loggedInUser;
      state.wishlist = action.payload.wishlist;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
