import React from 'react';
import "./globals.css";

const HomePage = () => {
    return (
    <div className='home'>
        <div className="nav-slide">
            <div className="nav-links d-flex align-items-center justify-content-center gap-5 bg-black text-white py-2 fs-5 ">
                <div className="link">Furniture</div>
                <div className="link">Outdoor</div>
                <div className="link">Tabletop & Bar</div>
                <div className="link">Kitchen</div>
                <div className="link">Bedding</div>
                <div className="link">Bath</div>
                <div className="link">Tocnology</div>
                <div className="link">Decor & Pillows</div>
                <div className="link">Rugs</div>
                <div className="link">Window</div>
                <div className="link">Laptop</div>
                <div className="link">Mobile</div>
                <div className="link">Cars</div>
                <div className="link">Tools</div>
                <div className="link text-danger">Sale</div>
                <div className="link text-success">Gifts</div>
            </div>
        </div>
        <div className="lading d-flex justify-content-center align-items-center flex-column">
            <div className="text-title text-center">
                <h1 className='title text-white'>dragon store' full ecommerce</h1>
                <p className='description fs-1 mb-5'>“really beautiful & worth the price”</p>
                <p className='sale d-flex flex-column fs-1 text-white'><span>up to 44% sale: </span>4th of july event</p>
            </div>
            <div className='btns d-flex gap-4 align-items-center'>
                <button className='links-btns btn fw-bold fs-3'>fashon woman</button>
                <button className='links-btns btn fw-bold fs-3'>fashon man</button>
            </div>
        </div>
    </div>
    )
}

export default HomePage;

// 
// 
// 
// 
// Decor & Pillows
// 
// Lighting
// 
// Gifts
// SALE
// Crate&kids
