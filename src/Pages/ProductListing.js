import React from 'react';

function ProductListing(){
    const [products,setProducts]=React.useState([])
    React.useEffect(()=>{
        fetch('http://localhost:4040/getitems')
        .then(res=>res.json())
        .then(data=>setProducts(data))
        .catch(err=>console.log(err));
    },[])
    return(
        <>
        <h3>Available Products</h3>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th scope="col">Product ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Status(in Stock)</th>
                    <th scope="col">Available Quantity</th>

                </tr>
            </thead>
            <tbody>
                {products.map(product=>{
                    return(
                        <tr>
                        <th scope="row">{product._id}</th>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.inStock.toString()}</td>
                        <td>{product.quantity}</td>
                        </tr>
                    )
                })}
            </tbody>
            </table>
        </>

    )

}

export default ProductListing;