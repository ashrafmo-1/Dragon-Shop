import React from 'react';
import style from "./page.module.css"

const Boxes_products = async () => {

    const api = "https://database-products.onrender.com/products";
    const response = await fetch(api);
    const products = await response.json();

    const products_boxes = products.map((product) => {
        return(
            <div className='product_box'>
                <img src={product.image} width={50} height={50} />
                <div className='content_box'>
                    <div className='info'>
                        <h3> {product.title} </h3>
                        <p className='description'>product title and product description component div defrent</p>
                    </div>
                    <p className='rate'>rate</p>
                </div>
                <div className='add_to_cart'>car</div>
            </div>
        )
    })

    return (
        <div className='get_products bg-body-secondary' id={style.get_products} >
            <div className='' id={style.products_boxes} >
                {products_boxes}
            </div>
        </div>
    )
}

export default Boxes_products;