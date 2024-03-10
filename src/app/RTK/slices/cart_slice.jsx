"use client";
import { createSlice } from "@reduxjs/toolkit";

export const Product_control = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { add } = Product_control.actions;
export default Product_control.reducer;