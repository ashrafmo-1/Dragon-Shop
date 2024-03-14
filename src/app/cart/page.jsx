"use client";
import "./globals.scss";
import React, { useState } from "react";
import Nav from "../components/navgationbar/Nav";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, remove, remove_all } from "../RTK/slices/cart_slice";

const ProductCart = () => {
  const dispatch = useDispatch();
  // get product from reduxToolKit
  const products = useSelector((state) => state.cart); // Fixed error reading 'map' by correctly returning state.cart;

  const totalPrice = products.reduce((acc, products) => {
    acc += products.price;
    return acc * products.quantity // error not a number on run
  }, 0);

  /* product cart from reduxToolKit */
  const product = products.map((product, index) => (
    <div className="product p-2 d-flex align-items-center justify-content-around mb-4" key={index}>
      <img className="product_image" src={product.image} alt="Image" width={60} height={60} />
      <div className="product_info">
        <p className="catigory_title"> {product.category} </p>
        <h2 className="product_title"> {product.title.slice(0, 12)} </h2>
      </div>
      <div className="product_control d-flex gap-2 align-items-center">
        <span className="decrement" onClick={() => dispatch(decrement(product))}>-</span>
        <span className="product_count d-flex align-items-center justify-content-center">{product.quantity }</span>
        <span className="increment" onClick={() => dispatch(increment(product))}>+</span>
      </div>
      <button className="reamove_product btn" onClick={() => dispatch(remove(product))}>Delete</button>
    </div>
  ))

  return (
    <div className="bg-body-secondary" style={{ height: "100vh" }}>
      <Nav />
      <div className="product_cart d-flex gap-5">
        <div className="all_products w-75 mb-4">
          <h2 className="cart_title mb-3">Shopping Cart</h2>
          <div className="all_product mt-5">
            {products.length > 0 ? (
              <>
                { product }
                <button className="removeAll" onClick={() => dispatch(remove_all())}>delete all</button>
              </>
            ) : (
              <p className="cart_impty">" not have any products "</p>
              )}
          </div>
        </div>
        <div className="total w-25 bg-secondary">
          <p>totla ${totalPrice}</p>
        </div>
      </div>
    </div>
  );
};
{/* <button></button> */}
// 
export default ProductCart;