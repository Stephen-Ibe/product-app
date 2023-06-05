"use client";

import { configureStore } from "@reduxjs/toolkit";
import { cartReducer, productReducer } from "./slices";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
