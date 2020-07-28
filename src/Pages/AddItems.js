import React from 'react';

function AddItems(){
    function handleSubmit(e){
        e.preventDefault();
        let prod_id=document.getElementById('productid').value;
        let prod_name=document.getElementById('productname').value;
        let prod_price=+document.getElementById('productprice').value;
        let prod_stock=+document.getElementById('productquant').value;
        let prod_inStock=true;
        let json_datas={
            id:prod_id,
            name:prod_name,
            price:prod_price,
            quantity:prod_stock,
            inStock:prod_inStock

        }
        console.log(json_datas);
        fetch(`https://product-task.herokuapp.com/additem`,{
            method:'POST',
            body:JSON.stringify(json_datas),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(res=>alert("Item Added!"))
        .catch(err=>console.log(err));
    }
    return(
        <>
        <h1>Add Items</h1>
        <div className="container mx-5 my-5">
        <div className="row">
            <div className="col"></div>
            <div className="col">
        <form onSubmit={e=>handleSubmit(e)}>
        <div className="form-group">
            <label htmlFor="productid">Enter Product ID</label>
            <input type="text" className="form-control" id="productid" placeholder="Enter Product ID.."/>
        </div>
        <div className="form-group">
            <label htmlFor="productname">Enter Product Name:</label>
            <input type="text" className="form-control" id="productname" placeholder="Enter Product Name."/>
        </div>
        <div className="form-group">
            <label htmlFor="productprice">Enter Product Price</label>
            <input type="text" className="form-control" id="productprice" placeholder="Enter Product Price."/>
        </div>
        <div className="form-group">
            <label htmlFor="productquant">Enter Product Quantity</label>
            <input type="text" className="form-control" id="productquant" placeholder="Enter Product Quantity."/>
        </div>
        <div className="form-group">
            <button type="submit" className="btn btn-primary">ADD Product</button>
        </div>
        </form>
        </div>
        <div className="col"></div>
        </div>
        </div>
        </>

    )
}

export default AddItems;