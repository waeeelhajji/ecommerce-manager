import React, { useState, useEffect } from 'react';
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
              <button type="button" className="btn btn-primary">Edit</button>
              <button type="button" className="btn btn-danger">Delete</button>
              </tr>
           )
        })
     }
    

    return (
        <div>
           <button type="button" class="btn btn-info">Add New Product</button>
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
