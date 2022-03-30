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


import { 
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess, 
} from "./usersRedux";

import { 
  getCarriersFailure,
  getCarriersStart,
  getCarriersSuccess,
  deleteCarrierFailure,
  deleteCarrierStart,
  deleteCarrierSuccess, 
  addCarrierStart,
  addCarrierSuccess,
  addCarrierFailure,
  updateCarrierStart,
  updateCarrierSuccess,
  updateCarrierFailure,
} from "./carriersRedux";

import { 
  getOrdersFailure,
  getOrdersStart,
  getOrdersSuccess, 
} from "./ordersRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/admin/login", user);
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
    const { data } = await userRequest.get(
      `/products/admin?pageNumber=${pageNumber}&name=${name}`
    );
    console.log(data);
    dispatch(getProductSuccess(data));
  } catch (err) {
    console.log(err);
    dispatch(getProductFailure());
  }
};

export const deleteProduct = async (id, setProductDeleteId, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
    setProductDeleteId(null);
  } catch (err) {
    dispatch(deleteProductFailure());
    setProductDeleteId(null);
  }
};

export const updateProduct = async (id, product, dispatch, navigate) => {
  console.log(id);
  dispatch(updateProductStart());
  try {
    // update
    const res = await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess(res.data));
    // history.push("/products");
    navigate("/products");
  } catch (err) {
    dispatch(updateProductFailure());
  }
};
export const addProduct = async (product, dispatch, navigate) => {
  dispatch(addProductStart());
  try { 
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
    // history.push("/products");
    navigate("/products");     
  } catch (err) {
    dispatch(addProductFailure());
  }
};
 

export const getCategories = async (dispatch) => { 
  console.log("hii");
  dispatch(getCategoryStart());
  try {
    const res = await userRequest.get("/categories");
    console.log(res);
    dispatch(getCategorySuccess(res.data));
  } catch (err) {
    dispatch(getCategoryFailure());
  }
};

export const deleteCategory = async (id, setCategoryDeleteId, dispatch) => {
    dispatch(deleteCategoryStart());
  try {
    const res = await userRequest.delete(`/categories/${id}`);
    dispatch(deleteCategorySuccess(id));
    setCategoryDeleteId(null);
  } catch (err) {
    console.log(err);
    dispatch(deleteCategoryFailure());
  }
}; 

export const addCategory = async (category, dispatch, navigate) => {
  dispatch(addCategoryStart());
  try {
    const res = await userRequest.post(`/categories`, category);
    navigate("/categories");
    dispatch(addCategorySuccess(res.data));

  } catch (err) {
    dispatch(addCategoryFailure());
  }
};
 
export const updateCategory = async (id, category, dispatch, navigate) => { 
  dispatch(updateCategoryStart());
  try {
    // update
    const res = await userRequest.put(`/categories/${id}`, category);
    navigate("/categories");
    dispatch(updateCategorySuccess(res.data));
  } catch (err) {
    dispatch(updateCategoryFailure());
  }
};



export const getUsers =
  ({
    pageNumber = '',
    name = '',
  }) =>
  async (dispatch) => {
  dispatch(getUsersStart());
  try {
    // const res = await publicRequest.get("/products/admin");
    const { data } = await userRequest.get(
      `/admin/users?pageNumber=${pageNumber}&name=${name}`
    );
    console.log(data);
    dispatch(getUsersSuccess(data));
  } catch (err) {
    console.log(err);
    dispatch(getUsersFailure());
  }
};

export const deleteUser = async (id, setUserDeleteId, dispatch) => {
  dispatch(deleteUserStart());
  try {
    const res = await userRequest.delete(`/admin/users/${id}`);
    dispatch(deleteUserSuccess(id));
    setUserDeleteId(null);
  } catch (err) {
    dispatch(deleteUserFailure());
    setUserDeleteId(null);
  }
};



export const getCarriers = async (dispatch) => { 
  console.log("hii");
  dispatch(getCarriersStart());
  try {
    const res = await userRequest.get("/admin/carriers");
    console.log(res);
    dispatch(getCarriersSuccess(res.data));
  } catch (err) {
    dispatch(getCarriersFailure());
  }
};



export const addCarrier = async (carrier, dispatch, navigate) => {
  dispatch(addCarrierStart());
  try {
    const res = await userRequest.post(`/carriers`, carrier);
    navigate("/carriers");
    dispatch(addCarrierSuccess(res.data));

  } catch (err) {
    dispatch(addCarrierFailure());
  }
};

export const updateCarrier = async (id, carrier, dispatch, navigate) => {
  dispatch(updateCarrierStart());
  try {
    const res = await userRequest.put(`/carriers/${id}`, carrier);
    navigate("/carriers");
    dispatch(updateCarrierSuccess(res.data));

  } catch (err) {
    dispatch(updateCarrierFailure());
  }
};

export const deleteCarrier = async (id, setCarrierDeleteId, dispatch) => {
  dispatch(deleteCarrierStart());
  try {
    const res = await userRequest.delete(`/carriers/${id}`);
    dispatch(deleteCarrierSuccess(id));
    setCarrierDeleteId(null);
  } catch (err) {
    dispatch(deleteCarrierFailure());
    setCarrierDeleteId(null);
  }
};



export const getOrders = async (dispatch, filter, date) => { 
  console.log("hii");
  dispatch(getOrdersStart());
  try {
    const res = await userRequest.get(`/admin/orders?filter=${filter}&date=${date}`);
    console.log(res);
    dispatch(getOrdersSuccess(res.data));
  } catch (err) {
    // console.log(err)
    dispatch(getOrdersFailure());
  }
};
