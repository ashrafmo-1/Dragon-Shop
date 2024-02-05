import React from 'react'

const  ProductsManagement = async () => {
    // const [products, setproduct] = useState([])
    let api = "https://database-products.onrender.com/products";
    const response = await fetch(api ,{
        next: {
            revalidate: 120,
        }
    })

    let products = await response.json();


    // // remove product.
    // let removeProduct = (product) => {
    //     fetch(`https://database-products.onrender.com/products${product.id}`, {
    //         method: 'delete',
    //     })
    //     .then((response) => response.json())
    //     .then(() => getData())
    // }

    const allProducts = products.map((product, index) => {
        return(
            <tr className='text-center' key={index}>
                <td> {product.id} </td>
                <td> <img src={product.image} width={30} height={30} alt={product.title} /> </td>
                <td>{product.title.length > 10 ? `${product.title.slice(0, 22)}..` : product.title}</td>
                <td>{product.price}..</td>
                <td>{product.category}</td>
                <td>{product.rating?.rate}</td>
                <td>{product.rating?.count}</td>
                <td className='d-flex justify-content-center align-items-center gap-2'>
                    <button className='btn btn-outline-danger fs-4 py-1 px-3' >Delete</button>
                    <button className='btn btn-outline-success fs-4 py-1 px-3'>Edit</button>
                </td>
            </tr>
        )
    })

    return (
        <div>
            <h1 className='my-4 text-center' style={{textTransform: 'uppercase', color: 'teal'}}>products management 👨‍💻👩‍💻</h1>
            <table className="table table-striped table-hover p-2 border">
                    <thead>
                        <tr className='text-center'>
                        <th scope="col" className='py-2 fs-4' style={{textTransform: 'capitalize'}}>#id</th>
                        <th scope="col" className='py-2 fs-4' style={{textTransform: 'capitalize'}}>photo</th>
                        <th scope="col" className='py-2 fs-4' style={{textTransform: 'capitalize'}}>title</th>
                        <th scope="col" className='py-2 fs-4' style={{textTransform: 'capitalize'}}>price</th>
                        <th scope="col" className='py-2 fs-4' style={{textTransform: 'capitalize'}}>catigory</th>
                        <th scope="col" className='py-2 fs-4' style={{textTransform: 'capitalize'}}>rate</th>
                        <th scope="col" className='py-2 fs-4' style={{textTransform: 'capitalize'}}>count</th>
                        <th scope="col" className='py-2 fs-4' style={{textTransform: 'capitalize'}}>actions</th>
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