const express= require('express')   // importing the package express

const app= express()   // creating the server instant of the express
app.use(express.json())

// notes= title,description
const notes=[]

app.get("/notes",(req,res)=>{
    res.status(201).json({
        message: "retieved data successfully",
        notes: notes
    })
})


app.post("/notes",(req,res)=>{
    // console.log(req.body)
    notes.push(req.body)

    res.status(201).json({
        message: "Notes created correctly"
    })
})

app.post("/notes",(req,res)=>{
    // console.log(req.body)
    notes.push(req.body)

    res.status(201).json({
        message: "Notes created correctly"
    })
})

// /notes/:index
app.delete("/notes/:index",(req,res)=>{
    const index=req.params.index

    delete notes [ index ]

    res.status(201).json({
        message: "Notes deleted at index correctly"
    })
})

// /notes/:index
app.patch("/notes/:index",(req,res)=>{
    const index=req.params.index
    const description=req.body.desciption
    notes[index].desciption=description
    res.status(200).json({
        message: "Notes updated at index correctly"
    })
})

module.exports=app