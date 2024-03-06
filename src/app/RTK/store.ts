"use client"
import { configureStore } from '@reduxjs/toolkit';
import { Product_control } from "./slices/cart_slice"

export const RTK_Store = configureStore({
    reducer: {
        cart: Product_control.reducer,
    },
})

export type RootState = ReturnType<typeof RTK_Store.getState>;
export type AppDispatch = typeof RTK_Store.dispatch;