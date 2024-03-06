"use client";
import { createSlice } from "@reduxjs/toolkit";

export const Product_control = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    add: (state, action) => {
      const fint_product = state.find((product) => {
        product.id === action.payload.id;
      });
      if (fint_product) {
        fint_product.quantity += 1;
      } else {
        const cloneProduct = {...action.payload, quantity: 1 };
        state.push(cloneProduct);
      }
    },
  },
});

export const { add } = Product_control.actions;
export default Product_control.reducer;