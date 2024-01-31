import React from 'react'
// import Image from 'next/image';
import home from "../assets/home.png"

const  ProductsManagement = async () => {
    let api= "https://database-products.onrender.com/products"
    const response = await fetch(api ,{
        next: {
            revalidate: 120,
        },
    });

    const products = await response.json();

    console.log(response);
    console.log(products);


    const allProducts = products.map((product: any) => {
        return(
            <tr className='text-center'>
                <td> {product.id} </td>
                <td> <img src={product.image} width={30} height={30} alt={product.title} /> </td>
                <td>{product.title.slice(0, 25)}..</td>
                <td>{product.category}</td>
                <td>{product.rating?.rate}</td>
                <td>{product.rating?.count}</td>
                <td className='d-flex justify-content-center align-items-center gap-2'>
                    <button className='btn btn-outline-danger'>delete</button>
                    <button className='btn btn-outline-success'>edit</button>
                </td>
            </tr>
        )
    })


    return (
        <div>
            <h1 className='my-4 text-center'>products management 👨‍💻👩‍💻</h1>
            <table className="table table-striped table-hover p-2 border">
                    <thead>
                        <tr className='text-center'>
                        <th scope="col">#id</th>
                        <th scope="col">photo</th>
                        <th scope="col">title</th>
                        <th scope="col">catigory</th>
                        <th scope="col">rate</th>
                        <th scope="col">count</th>
                        <th scope="col">actions</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
                        {allProducts}
                    </tbody>
                </table>
        </div>
    )
}

export default ProductsManagement