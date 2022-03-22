import { createSlice } from "@reduxjs/toolkit";
export const CategorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.category = action.payload;
    },
    getCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.category.splice(
        state.category.findIndex((item) => item._id === action.payload),1
      );
    },
    deleteCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.category[
        state.category.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.category_name;
    },
    updateCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addCategoryStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addCategorySuccess: (state, action) => {
      state.isFetching = false;
      state.category.push(action.payload);  
    },
    addCategoryFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getCategoryStart,
  getCategorySuccess,
  getCategoryFailure,
  deleteCategoryStart,
  deleteCategorySuccess,
  deleteCategoryFailure,
  updateCategoryStart,
  updateCategorySuccess,
  updateCategoryFailure,
  addCategoryStart,
  addCategorySuccess,
  addCategoryFailure,
} = CategorySlice.actions;

export default CategorySlice.reducer;
