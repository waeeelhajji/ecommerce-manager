import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { Link } from 'react-router-dom';
import Axios from 'axios';







const ProductsUPDE = () => {

    const [product,setProducts]= useState([])


    useEffect(() => {
        getProd()
    }, [])

    const getProd = () => {
        Axios.get('http://localhost:3001/getprod').then((res) => {
            setProducts(res.data)
        })
    }
    const deleteProduct = (id) => {
        Axios.delete(`http://localhost:3001/delprod/${id}`)
      }
      
    const prodid = useParams()
    console.log({product});
    const prodDetails = product.find(prod=>prod.id==prodid.id)


    return (
        <div>
            <h2> Product Details</h2>
            {prodDetails&&
             <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{prodDetails.name}</h1>
                        <hr />
                        <h2 className="my-4">$ {prodDetails.Price}</h2>
                        <p className="lead">{prodDetails.Qty}</p>
                        <button onClick={()=>{deleteProduct(prodDetails.id)}} type="button" class="btn btn-danger">Delete</button>
                        <Link to="/products">
                        <button type="button" class="btn btn-light">Back</button>
                        </Link>
                    </div>
                </div>
            </div> }
        </div>
    )
}

export default ProductsUPDE
