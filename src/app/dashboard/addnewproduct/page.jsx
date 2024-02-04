"use client"
import React, { useState } from 'react'
import './globals.css'
import { usePathname } from 'next/navigation'
import next from 'next'

const Addnewproduct = () => {
    let path = usePathname()
    let [title, settitle] = useState('');
    let [price, setprice] = useState(0);
    let [description, setdescription] = useState('');
    let [category, setcategory] = useState('');
    let [image, setimage] = useState('');
    let [count, setcount] = useState('');

    const postProducts = (ele) => {
        ele.preventDefault();
        const api = "https://database-products.onrender.com/products";
        fetch(api, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                price: price,
                description: description,
                category: category,
                image: image,
                rating: {
                    count: count
                }
            }),
        })
        .then((res) => res.json())
        .then(() => window.location.pathname = '/dashboard/productmanagement')
        .catch((error) => console.error('can not post product', error));
    }


    return (
        <div className='Addnewproduct d-flex justify-content-center align-items-center flex-column'>
            <h1 className="title mb-4">Add a new product</h1>
            <form className='form-controls d-flex justify-content-center align-items-center flex-column gap-3' onSubmit={postProducts}>
                <label className='product-name d-flex flex-column'>
                    <span>inter product name</span>
                    <input type="text" onChange={((ele) => settitle(ele.target.value))} />
                </label>
                <label className='product-price d-flex flex-column'>
                    <span>inter product price</span>
                    <input type="text" onChange={((ele) => setprice(ele.target.value))} />
                </label>
                <label className='product-description d-flex flex-column'>
                    <span>inter product description</span>
                    <input type="text" onChange={((ele) => setdescription(ele.target.value))} />
                </label>
                <label className='product-category d-flex flex-column'>
                    <span>inter product category</span>
                    <input type="text" onChange={((ele) => setcategory(ele.target.value))} />
                </label>
                <label className='product-image d-flex flex-column'>
                    <span>inter product image {'link'}</span>
                    <input type="text" onChange={((ele) => setimage(ele.target.value))} />
                </label>
                <label className='product-count d-flex flex-column'>
                    <span>inter product count {'link'}</span>
                    <input type="text" onChange={((ele) => setcount(ele.target.value))} />
                </label>
                <button className='btn btn-success fs-3 py-1 px-3'>push product</button>
            </form>
        </div>
    )
}

export default Addnewproduct;