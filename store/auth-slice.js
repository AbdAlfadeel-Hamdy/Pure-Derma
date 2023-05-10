import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  loggedInUser: null,
  successMessage: "",
  errorMessage: "",
  isLoading: false,
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
    },

    logOut(state) {
      state.loggedInUser = null;
    },
    updateUserCart(state, action) {
      state.loggedInUser.numOfCart = action?.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
