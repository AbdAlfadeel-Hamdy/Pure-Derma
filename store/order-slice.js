import { createSlice } from "@reduxjs/toolkit";

const orderInitialState = {
  orders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState: orderInitialState,
  reducers: {
    makeOrder(state, action) {
      state.orders.push(action.payload);
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
