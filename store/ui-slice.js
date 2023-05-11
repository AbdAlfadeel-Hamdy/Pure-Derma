import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    notification: null,
  },
  reducers: {
    send(state, action) {
      state.notification = {
        status: "pending",
        message: action.payload,
      };
    },
    success(state, action) {
      state.notification = {
        status: "success",
        message: action.payload,
      };
    },
    error(state, action) {
      state.notification = {
        status: "error",
        message: action.payload,
      };
    },
    clear(state) {
      state.notification = null;
    },
  },
});
export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
