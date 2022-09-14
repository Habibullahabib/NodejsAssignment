
import PostModel from "../models/Post.js";
import CategoryModel from "../models/Category.js";
 

class PostController {
     
    static adminCreatePost = (req, res) =>{
        const post = new PostModel({
        post_title:req.body.title,
        post_author:req.body.author,
        post_category:req.body.category,
        post_description:req.body.description,
        feature_image:req.file.filename,
    });
    post.save((err) => {
        if(err) {
            console.log(err);
        }
        else{
            console.log("data added successfully");
        };
        res.redirect("/");
    }) 

    }
    static homePageRender = async(req, res) =>{
        try {
            var result = await PostModel.find()
            var category = await CategoryModel.distinct("category_title")
            var mobiles =await PostModel.find( {post_category: 'Mobile'})
            var laptops =await PostModel.find( {post_category: 'Laptop'})
            var cosmetics =await PostModel.find( {post_category: 'Cosmetics'})
             
            
             
            res.render("index", {data: result, mobiles:mobiles, 
                cosmetics:cosmetics, laptops:laptops, category_list: category})
            
        } catch (error) {
            console.log(error)
        }
    }
    static getPostForm = async(req, res) =>{
        try {
            res.render("postform")
        } catch (error) {
            console.log(error)
        }
    }
    static deletePost = async (req, res) =>{
        try {
            const result = await PostModel.find()
            res.render("deletepost", {data: result})
        } catch (error) {
            console.log(error)
        }      
    }
    static updateDocById = async (req, res) =>{
        try {
            const result = await PostModel.findByIdAndUpdate(req.params.id, req.body )
            const result2 = await PostModel.find()
            res.redirect("/")
        } catch (error) {
            console.log(error)
        }
        
    }
    static deletePostById = async (req, res) =>{
        try {
            const result = await PostModel.findByIdAndDelete(req.params.id)
            res.redirect("/deletepost")
        } catch (error) {
            console.log(error)
        }
    }
    
    static getPostDetailsById= async (req, res) =>{
        try {
            const result = await PostModel.find({post_title : (req.params.id)})
              
            res.render("post_details", {posts: result})
              
        } catch (error) {
            console.log(error)
        }
        
    }
}

export default PostController;