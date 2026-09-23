const express=require('express')
const ValidationRules=require('../src/middlewares/validation.middleware')

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        message:"opened the url"
    })
})

app.post("/register",ValidationRules.registerUserValidationRules,(req,res)=>{
    const {username,email,password}=req.body;

    res.status(201).json({message:"User registered successfully",user:{
        username,email
    }})
})
module.exports=app;