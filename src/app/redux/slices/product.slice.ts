"use client";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
} as any;

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<any>) => {
      state.products = action.payload;
    },
  },
});

const { actions: productActions, reducer: productReducer } = productSlice;
export { productActions, productReducer };
