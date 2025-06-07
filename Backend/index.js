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

app.get("/fruitList",(req,res)=> {
    productModel.find({category: "fruit"})
    .then(function(products){
        console.log("Products in fruit category fetched: ",products)
        res.json(products)
    }).catch(function(err){
        console.log(err)
    })
})
app.get("/vegetableList",(req,res)=> {
    productModel.find({category: "vegetable"})
    .then(function(products){
        console.log("Products in vegetable category fetched: ",products)
        res.json(products)
    }).catch(function(err){
        console.log(err)
    })
})
app.get("/dairyList",(req,res)=> {
    productModel.find({category: "dairy"})
    .then(function(products){
        console.log("Products in dairy category fetched: ",products)
        res.json(products)
    }).catch(function(err){
        console.log(err)
    })
})
app.get("/meatList",(req,res)=> {
    productModel.find({category: "meat"})
    .then(function(products){
        console.log("Products in meat category fetched: ",products)
        res.json(products)
    }).catch(function(err){
        console.log(err)
    })
})
app.get("/specialtyList",(req,res)=> {
    productModel.find({category: "specialty"})
    .then(function(products){
        console.log("Products in specialty category fetched: ",products)
        res.json(products)
    }).catch(function(err){
        console.log(err)
    })
})
app.get('/filteredProducts',(req,res)=>{
    productModel.find({})
    .then(products =>{
    const {q} = req.query
    let filtered = products
    if(q){
        const query = q.toLowerCase()
        filtered = filtered.filter(
            (product) => product.name.toLowerCase().includes(query)
        )
    }
    res.json(filtered)
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
