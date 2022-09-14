import express from "express";
import PostModel from "../models/Post.js";
 
import multer from "multer";
import PostController from "../controller/postController.js";
import CategoryController from "../controller/categoryController.js";
const router = express.Router();

//image upload
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload/')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname+" "+ Date.now()+"_"+file.originalname)
    },
});

var upload = multer({
    storage: storage,
}).single("image");

//home page route
router.get('/', PostController.homePageRender)

//admin create post
router.get('/admin/post', PostController.getPostForm)
router.post('/admin/post',upload, PostController.adminCreatePost)

//delete post
//router.get('/admin/deletepost', PostController.deletePost) 
//router.post('/admin/deletepost/:id', PostController.deletePostById)

//get category form
router.get('/admin/category/', CategoryController.getCategoryForm)

//create category
router.post('/admin/category/', upload, CategoryController.createCategory)

//get all category
router.get('/all_category/', CategoryController.getAllCategory)

//post details
router.get('/post_details/:id', PostController.getPostDetailsById)

export default router;