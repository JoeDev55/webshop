const express = require('express')
const mongoose = require('mongoose')
const port = 3000
var cors = require('cors')
const path = require('path')
const app = express()
app.use(cors())
app.use(express.json())

app.use(express.static('media'))

mongoose.connect('mongodb://localhost:27017/webshop')

const ProductSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    category: String,
    img:String
})

const productModel = mongoose.model("products",ProductSchema)

app.get("/productList",(req,res)=> {
    productModel.find({})
    .then(function(products){
        console.log("Products fetched: ",products)
        res.json(products)
    }).catch(function(err){
        console.log(err)
    })
})
/*
app.post("/addUser",(req,res)=> {
    const { name, age, email} = req.body

    const newUser = new UserModel({
        name: name,
        age: age,
        email: email
    })
     newUser.save()
     .then(()=>{
        res.status
     })
    
})
*/

app.listen(3000, ()=>{
    console.log(`Server is running`)
})
