const mongoose=require("mongoose")

async function connectDB(){
    await mongoose.connect("mongodb+srv://youtube:XoCxJDw4WCdf0e8P@backendcomplete.mbv8lda.mongodb.net/hello-db")
    console.log("Connected to the DB")
}
module.exports=connectDB;