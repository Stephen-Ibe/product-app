import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
} as any;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<any>) => {
      state.cart = [...state.cart, action.payload];
    },
  },
});

const { actions: cartActions, reducer: cartReducer } = cartSlice;
export { cartActions, cartReducer };
