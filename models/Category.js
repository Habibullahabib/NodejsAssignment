import mongoose from "mongoose";

//defining schema
const CategorySchema = new mongoose.Schema({
    category_title:{type:String, required:true, trim:true},
    feature_image: {type:String, required:true, trim:true},
    time : { type : Date, default: Date.now }
})

const CategoryModel = mongoose.model("category", CategorySchema)

export default CategoryModel