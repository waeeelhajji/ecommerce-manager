import React, { useState, useEffect } from 'react';
import { Link ,NavLink } from 'react-router-dom';
import Axios from 'axios';

const ListOfProd = () => {
    const [products,setProducts]= useState([])

    useEffect(() => {
        getProd()
        
    }, [])


    const getProd = () => {
        Axios.get('http://localhost:3001/getprod').then((res) => {
            setProducts(res.data)
            console.log(res.data);
        })
    }


    const renderTableData =()=>{
        return products.map((prod, index) => {
           const {id,name, Qty, Price } = prod 
           return (
              <tr key={index}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{Qty}</td>
              <td>{Price}</td>   
              <NavLink to={`/prooducts/${id}`} className="btn btn-primary">See More</NavLink>
              <NavLink to={`/products/${id}`} className="btn btn-primary">See More</NavLink>
              </tr>
           )
        })
     }
    

    return (
        <div>
            <Link to="/product/new"> 
           <button type="button" class="btn btn-info">Add New Product</button>
            </Link>
             <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Actions</th>

        </tr>
      </thead>

      <tbody>
        {renderTableData()}
      </tbody>      
    </table>
        </div>
    )
}

export default ListOfProd

