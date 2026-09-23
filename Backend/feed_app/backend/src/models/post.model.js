const mongoose=require("mongoose")

const postSchema=new mongoose.Schema({
    image: String,
    caption: String
})

const postModel=mongoose.model("post",postSchema)  // here post is the name of the copllection where all the post realted data is stored in the collection post

module.exports=postModel;