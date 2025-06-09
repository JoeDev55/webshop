const express = require('express')
const mongoose = require('mongoose')
const port = 3000
var cors = require('cors')
const path = require('path')
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET || 'asd'
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

const UserSchema = new mongoose.Schema({
    id: Number,
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    age: String
    
})

const productModel = mongoose.model("products",ProductSchema)
const userModel = mongoose.model("users",UserSchema)

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
app.post('/signup',async (req,res)=>{
   const {email, password,firstName, lastName, phoneNumber, age} = req.body
    console.log("received signup data",req.body)
   if (!email || !password || !firstName || !lastName || !phoneNumber || !age) {
    console.log('fill out all the fields')
    //return res.status(400).json({message: 'fill out all the fields'})
    
   }
   try{
    const existingUser = await userModel.findOne({email})
    if (existingUser) {
        console.log('already exists')
        //return res.status(409).json({ message: 'Email already in use.' })
    }
   
   const hashedPassword = await bcrypt.hash(password, 10)
   const newUser = new userModel({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phoneNumber,
      age
    });
    await newUser.save()
    console.log('success in registering the user')
    res.status(201).json({message:'user registered successfully'})
    const token = jwt.sign(
        {id:userModel._id,email:userModel.email},
        JWT_SECRET,
        {expiresIn:'1h'}
    )
    res.status(200).json({token})
}catch(error){
    console.error('error in signup:', error);
    return res.status(500).json({message: 'server error'})
}
   
}
)
app.post('/login',async (req, res)=>{
    const {email, password} = req.body
    try{
        const userExists = userModel.findOne({email})
        if(!userExists){
            return res.status(400).json({message:'user doesnt exist'})
        }
        const matching = bcrypt.compare(password, userExists.password)
        if(!matching){
            return res.status(400).json({message: 'invalid  credentials'})
        }
        const token = jwt.sign(
            {id: userExists._id, email: userExists.email},
            JWT_SECRET,
            {expiresIn:'1h'}
        )
        res.cookie('token', token, {
            httpOnly: true,
            secure: true, // only over HTTPS
            sameSite: 'Strict', // prevent CSRF
        });

        res.status(201).json({message:'login successful', token})
    }
    catch(error){
        console.error('error in login', error)
        res.status(500).json({message:'Server error'})
    }
}

)
app.listen(port, ()=>{
    console.log(`Server is running`)
})
