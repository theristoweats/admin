import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "userss",
  initialState: {
    users: [],
    isFetching: false,
    error: false,
    pages: 0,
    totalUsers: 0,
  },
  reducers: {
    //GET ALL
    getUsersStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload.users;
      state.totalUsers = action.payload.totalUsers;
      state.pages = action.payload.pages;
    },
    getUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users.splice(
        state.users.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure, 
} = usersSlice.actions;

export default usersSlice.reducer;
