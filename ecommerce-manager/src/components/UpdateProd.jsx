import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from "react-router";
import Axios from 'axios';

const UpdateProd = () => {

    const [Name,setName]=useState("")
    const [Qtys,setQty]=useState("")
    const [Prices,setPrice]=useState("")

    const [product,setProducts]= useState([])


    useEffect(() => {
        getProd()
    }, [])

    const getProd = () => {
        Axios.get('http://localhost:3001/getprod',).then((res) => {
            setProducts(res.data)
        })
    }
    const updateProd = (id)=>{
      if(Name.length<3 || Qtys<=0 || Prices<=0){
        alert("**Products must contain a Name at least three characters** **QTy Must contain a Qty more then 0** **Must have Price** ")
    }else{
        Axios.patch(`http://localhost:3001/updprod/${id}`,{name:Name,Qty:Qtys,Price:Prices
    }).then(()=>{
        alert("done")
      })
    }
    }
    
    

    const prodid = useParams()
    console.log({product});
    const prodDetails = product.find(prod=>prod.id==prodid.id)

    return (
        <div>
               <h2>Update Product</h2>
    {prodDetails&&
 <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control"  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={prodDetails.name} onChange={(event)=>{setName(event.target.value)}}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Qty</label>
    <input type="number" class="form-control"  id="exampleInputPassword1" placeholder={prodDetails.Qty} onChange={(event)=>{setQty(event.target.value)}}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Price</label>
    <input type="number" class="form-control"  id="exampleInputPassword1" placeholder={prodDetails.Price} onChange={(event)=>{setPrice(event.target.value)}}/>
  </div>
  <NavLink to={"/"} className="btn btn-primary">Reset</NavLink>
  <button type="submit" class="btn btn-primary" onClick={()=>{updateProd(prodDetails.id)}}>Update</button>
  </form>     
    }
        </div>
    )
}

export default UpdateProd
