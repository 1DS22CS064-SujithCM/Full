const mongoose=require('mongoose')

async function connectDB() {

    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connection done to DB")
    }catch(err){
        console.log("Database connection issue",err);
    }
    
}
module.exports=connectDB;