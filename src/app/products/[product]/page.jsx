import React from 'react';
import "./modules.scss";

const page = async ({params}) => {
  console.log(`product id is: ${params.product}`);
  const getProduct = params.product;

  const api = `https://database-products.onrender.com/products/${getProduct}`;
  const response = await fetch(api, {
    next: {
      revalidate: 60
    }
  });

  const post = await response.json();

  return (
    <div className='show_product'>
        <div className='single_product d-flex justify-content-center align-items-center flex-column'>
          <div className='header d-flex mb-5 gap-5'>
            <img src={post.image} alt={post.title} width={100} />
            <div className='info'>
              <p className='category'> {post.category} </p>
              <h3 className='produc_Title'> {post.title} </h3>
            </div>
          </div>
          <p className='produc_Description'> {post.description} </p>
          <div className='controls d-flex gap-3' >
            <button className='rate'>Rate {post.rating.rate} </button>
            <button className='rate'>Viwe {post.rating.count} </button>
          </div>
    </div>
    </div>
  )
}

export default page;