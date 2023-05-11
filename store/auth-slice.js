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
    },

    logOut(state) {
      state.loggedInUser = null;
      state.wishlist = [];
    },
    updateUserCart(state, action) {
      state.loggedInUser.numOfCart = action?.payload;
    },
    toggleFavorite(state, action) {
      console.log(action.payload);
      state.wishlist = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
