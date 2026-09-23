// // Middleware
// const express=require('express');
// const PORT=3000;
// const app=express();

// // App level Middleware
// app.use((req,res,next)=>{
//     console.log("Received");
//     next();
// });

// app.get('/', (req,res)=>{
//     res.send("GET route");
// });

// // Error Middleware
// app.use((err,req,res,next)=>{
//     console.error(err);
//     res.status(500).send("Error");
// });

// app.listen(PORT,()=>{
//     console.log("Listening");
// })

// Session
const express=require('express');
const session=require('express-session');
const PORT=3000;
const app=express();

app.use(session({
    secret:"secret_key",
    resave:false,
    saveUninitialized:true,
    cookie:{maxAge:60000}
}))

app.get('/',(req,res)=>{
    if(req.session.views)
    {
        req.session.views++;
        res.send(`Number of views : ${req.session.views}`);
    }
    else{
        req.session.views=1;
        res.send("Welcome to the website for the first time")
    }
})
app.listen(PORT,()=>{
    console.log("Listening");
})