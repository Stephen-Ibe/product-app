import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: () => {},
  },
});

const { actions: productActions, reducer: productReducer } = productSlice;
export { productActions, productReducer };