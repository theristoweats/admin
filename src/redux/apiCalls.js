import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";


import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
  addProductFailure,
  addProductStart,
  addProductSuccess,
} from "./productRedux";

import {
  addCategoryFailure,
  addCategorySuccess,
  addCategoryStart,
  getCategoryFailure,
  getCategoryStart,
  getCategorySuccess,
  deleteCategoryFailure,
  deleteCategoryStart,
  deleteCategorySuccess,
  updateCategoryStart,
  updateCategoryFailure,
  updateCategorySuccess,
} from "./categoriesRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};


export const getProducts =
  ({
    pageNumber = '',
    name = '',
  }) =>
  async (dispatch) => {
  dispatch(getProductStart());
  try {
    // const res = await publicRequest.get("/products/admin");
    const { data } = await publicRequest.get(
      `/products/admin?pageNumber=${pageNumber}&name=${name}`
    );
    console.log(data);
    dispatch(getProductSuccess(data));
  } catch (err) {
    console.log(err);
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, product, dispatch) => {
  console.log(id);
  dispatch(updateProductStart());
  try {
    // update
    const res = await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess(res.data));
    // history.push("/products");
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch,  history) => {
  dispatch(addProductStart());
  try { 
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
    history.push("/products");
  } catch (err) {
    dispatch(addProductFailure());
  }
};
 

export const getCategories = async (dispatch) => { 
  dispatch(getCategoryStart());
  try {
    const res = await publicRequest.get("/categories");
    console.log(res);
    dispatch(getCategorySuccess(res.data));
  } catch (err) {
    dispatch(getCategoryFailure());
  }
};

export const deleteCategory = async (id, dispatch) => {
  dispatch(deleteCategoryStart());
  try {
    const res = await userRequest.delete(`/categories/${id}`);
    dispatch(deleteCategorySuccess(id));
  } catch (err) {
    dispatch(deleteCategoryFailure());
  }
}; 

export const addCategory = async (category, dispatch, history) => {
  dispatch(addCategoryStart());
  try {
    const res = await userRequest.post(`/categories`, category);
    history.push("/categories");
    dispatch(addCategorySuccess(res.data));

  } catch (err) {
    dispatch(addCategoryFailure());
  }
};
 
export const updateCategory = async (id, category, dispatch) => { 
  dispatch(updateCategoryStart());
  try {
    // update
    const res = await userRequest.put(`/categories/${id}`, category);
    dispatch(updateCategorySuccess(res.data));
  } catch (err) {
    dispatch(updateCategoryFailure());
  }
};

