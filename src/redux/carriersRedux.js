import { createSlice } from "@reduxjs/toolkit";
export const CarriersSlice = createSlice({
  name: "carriers",
  initialState: {
    carriers: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getCarriersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCarriersSuccess: (state, action) => {
      state.isFetching = false;
      state.carriers = action.payload;
    },
    getCarriersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteCarrierStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteCarrierSuccess: (state, action) => {
      state.isFetching = false;
      state.carriers.splice(
        state.carriers.findIndex((item) => item._id === action.payload),1
      );
    },
    deleteCarrierFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateCarrierStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateCarrierSuccess: (state, action) => {
      state.isFetching = false;
      state.carriers[
        state.carriers.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.carrier;
    },
    updateCarrierFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addCarrierStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addCarrierSuccess: (state, action) => {
      state.isFetching = false;
      state.carriers.push(action.payload);  
    },
    addCarrierFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getCarriersStart,
  getCarriersSuccess,
  getCarriersFailure,
  deleteCarrierStart,
  deleteCarrierSuccess,
  deleteCarrierFailure,
  updateCarrierStart,
  updateCarrierSuccess,
  updateCarrierFailure, 
  addCarrierStart,
  addCarrierSuccess,
  addCarrierFailure
} = CarriersSlice.actions;

export default CarriersSlice.reducer;
