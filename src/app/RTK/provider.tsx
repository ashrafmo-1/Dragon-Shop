"use client"
import { Provider } from "react-redux";
import { RTK_Store } from "./store";
import React from 'react';

export function Providers({children}: any) {
  return (
    <Provider store={RTK_Store}>
      {children}
    </Provider>
  );
};
