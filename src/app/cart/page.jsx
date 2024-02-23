import React from 'react';
import './globals.scss'
import Image from 'next/image';
import Nav from "../components/navgationbar/Nav"
import x from "./list.png"

const ProductCart = () => {
  return (
    <div className='bg-body-secondary' style={{height: '100vh'}}>
        <Nav/>
        <div className='product_cart d-flex gap-5'>
          <div className='all_products w-75 mb-4'>
            <h2 className='cart_title mb-3'>Shopping Cart</h2>
            <div className='all_products mt-5'>
              <div className='product p-2 d-flex align-items-center justify-content-around'>
                <Image className='product_image' src={x} alt='Image' width={60} height={60} />
                <div className='product_info'>
                    <p className='catigory_title'>product catigory</p>
                    <h2 className='product_title'>product title location</h2>
                </div>
                <div className='product_control d-flex gap-2 align-items-center'>
                  <span className='decrement'> -</span>
                  <span className='product_count d-flex align-items-center justify-content-center'> 1 </span>
                  <span className='increment'>+</span>
                </div>
                <button className='reamove_product btn'>Delete</button>
              </div>
            </div>
          </div>
          <div className='total w-25 bg-secondary'></div>
        </div>
    </div>
  )
}

export default ProductCart;