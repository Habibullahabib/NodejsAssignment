import mongoose from "mongoose";

//defining Post schema
const postSchema = new mongoose.Schema({
    post_title:{type:String, required:true, trim:true},
    post_author: {type:String, required:true, trim:true},
    post_category: {type:String, required:true, trim:true},
    post_description: {type:String, required:true, trim:true},
    feature_image: {type:String, required:true, trim:true},
    time : { type : Date, default: Date.now }
})


//model

const PostModel = mongoose.model("post", postSchema)

export default PostModel