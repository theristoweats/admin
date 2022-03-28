import { createSlice } from "@reduxjs/toolkit";

export const OrdersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getOrdersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getOrdersSuccess: (state, action) => {
      state.isFetching = false;
      state.orders = action.payload;
    },
    getOrdersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    }, 
  },
});

export const {
  getOrdersStart,
  getOrdersSuccess,
  getOrdersFailure, 
} = OrdersSlice.actions;

export default OrdersSlice.reducer;
