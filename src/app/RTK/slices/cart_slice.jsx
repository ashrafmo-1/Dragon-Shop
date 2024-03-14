"use client";
import { createSlice } from "@reduxjs/toolkit";

export const Product_control = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    add: (state, action) => {
      // state.push(action.payload); error add product coping
      const findProduct = state.find((product) => {
        product.id === action.payload.id;
      });
      if(findProduct) {
        findProduct.quantity += 1;
      } else {
        const cloneProduct = {...action.payload, quantity: 1}
        state.push(cloneProduct);
      }
    },
    increment: (state, action) => {
      const findProduct = state.find((product) => {
        product.id === action.payload.id;
      });
      findProduct.quantity += 1;
    },
    decrement: (state, action) => {
      const findProduct = state.find((product) => {
        product.id === action.payload.id;
      })
      findProduct.quantity -= 1;
      if(findProduct.quantity === 0) {
        findProduct.quantity = 1;
      }
    },
    remove: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    remove_all: () => {
      return [];
    },
  },
});

export const { add, increment, decrement, remove, remove_all } = Product_control.actions;
export default Product_control.reducer;
