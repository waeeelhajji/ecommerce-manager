const express = require("express")
const app = express()


const port = 3001

const prodRoutes = require('./router/product.routes')




app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../build'));









app.use('/', prodRoutes)









app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})