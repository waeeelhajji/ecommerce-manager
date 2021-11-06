import React , { useState } from 'react'
import Axios from 'axios'


const AddProd = () => {
    const [Name,setName]=useState("")
    const [Qtys,setQty]=useState("")
    const [Prices,setPrice]=useState("")

    

    const addProduct = ()=>{
        if(Name.length<3 || Qtys<=0 || Prices<=0){
            alert("**Products must contain a Name at least three characters** **QTy Must contain a Qty more then 0** **Must have Price** ")
        }else{
            Axios.post('http://localhost:3001/postprod',
            {name:Name,Qty:Qtys,Price:Prices
          }).then(()=>{
            alert("done")
          })

        }
  }


 
    return (
        <div>
            <h2>Add Product</h2>
 <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(event)=>{setName(event.target.value)}}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Qty</label>
    <input type="number" class="form-control" id="exampleInputPassword1" onChange={(event)=>{setQty(event.target.value)}}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Price</label>
    <input type="number" class="form-control" id="exampleInputPassword1" onChange={(event)=>{setPrice(event.target.value)}}/>
  </div>
  <button type="submit" class="btn btn-primary">Reset</button>
  <button type="submit" class="btn btn-primary"  onClick={addProduct}>Create</button>

</form>
        </div>
    )
}

export default AddProd

