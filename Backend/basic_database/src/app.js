const express=require('express');
const noteModel=require('./models/note.model');
const { default: mongoose } = require('mongoose');

const app=express();
app.use(express.json())

app.post("/notes",async (req,res)=>{
    const data=req.body
    await noteModel.create({
        title: data.title,
        description: data.description
    })
    res.status(201).send({
        message: "Notes created"
    })
})

app.get("/notes",async (req,res)=>{
    const notes=await noteModel.find()
    
    res.status(200).send({
        message: "Notes retieved succesffully",
        notes: notes
    })
})

app.get("/notes/:id",async (req,res)=>{
    const id=req.params.id;
   
    const notes = await noteModel.findById({
        _id:id
    })
    
    res.status(200).send({
        message: "Notes retieved succesffully",
        notes: notes
    })
})

app.delete("/notes/:id",async (req,res)=>{
    const id = req.params.id;
    await noteModel.findOneAndDelete({
        _id:id
    })
    res.status(200).send({
        message: "Notes deleted succesffully"
    })
})


app.patch("/notes/:id",async (req,res)=>{
    const id = req.params.id;
    const des=req.body.description;
    await noteModel.findOneAndUpdate({_id:id},{ description:des})
    res.status(200).send({
        message: "Notes updated succesffully"
    })
})

module.exports=app;