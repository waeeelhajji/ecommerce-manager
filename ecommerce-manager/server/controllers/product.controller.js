const db = require('../../data');








// Get Products
var selectAllProd = function(req,res){
    db.query('select * from Products',(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
}

// Post Products

var createProd = function(req,res){
    db.query('insert into  Products (name,Qty,Price) values (?,?,?);',[req.body.name, req.body.Qty, req.body.Price] ,(err,results)=>{
        if (err) throw err;
        res.send(results)
    })
}

// Update Products

var updateProd = function(req,res){
 
    db.query("UPDATE Products SET  name = ? , Qty = ? ,   Price = ?  WHERE id = ? ",[req.body.name, req.body.Qty, req.body.Price,req.params.id],(err,prod)=>{
        if(err){
            res.status(400).send(err)
        }else{
            res.status(200).send(prod)
        }
    })
}

// Delete Products

var deleteProd = function(req,res){
    db.query('delete from Products where id=?;',req.params.id,(err,prod)=>{
        if(err){
            res.status(400).send(err)
        }else{
            res.status(200).send(prod)
            console.log(prod)
        }
    })

   
}



module.exports = {selectAllProd,createProd,updateProd,deleteProd}