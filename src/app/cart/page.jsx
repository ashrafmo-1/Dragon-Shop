"use client";
import React, { useState } from "react";
import "./globals.scss";
import Image from "next/image";
import Nav from "../components/navgationbar/Nav";
import x from "./list.png";
import { useDispatch, useSelector } from "react-redux";

const ProductCart = () => {
  // const [show, setShow] = useState(false);
  // const dispatch = useDispatch();

  // get product from cart
  const products = useSelector((state) => state.cart); // Fixed error reading 'map' by correctly returning state.cart;
  console.log(products);

  return (
    <div className="bg-body-secondary" style={{ height: "100vh" }}>
      <Nav />
      <div className="product_cart d-flex gap-5">
        <div className="all_products w-75 mb-4">
          <h2 className="cart_title mb-3">Shopping Cart</h2>
          <div className="all_product mt-5">
            {products.length > 0 ?
              products.map((product) => (
                <div className="product p-2 d-flex align-items-center justify-content-around mb-4" key={product.id}>
                  <img className="product_image" src={product.image} alt="Image" width={60} height={60} />
                  <div className="product_info">
                    <p className="catigory_title"> {product.category} </p>
                    <h2 className="product_title"> {product.title.slice(0, 12)} </h2>
                  </div>
                  <div className="product_control d-flex gap-2 align-items-center">
                    <span className="decrement">-</span>
                    <span className="product_count d-flex align-items-center justify-content-center">
                      1
                    </span>
                    <span className="increment">+</span>
                  </div>
                  <button className="reamove_product btn"> Delete </button>
                </div>
              )) : <p>not have any products</p>
            }
          </div>
        </div>
        <div className="total w-25 bg-secondary"></div>
      </div>
    </div>
  );
};

export default ProductCart;