import CategoryModel from "../models/Category.js";

class CategoryController{
    static createCategory = (req, res) =>{
        const result = new CategoryModel({
        category_title:req.body.title,
        feature_image:req.file.filename,
    });
    result.save((err) => {
        if(err) {
            console.log(err);
        }
        else{
            console.log("data added successfully");
        };
        res.redirect("/");
      
    }) 

    };

    static getCategoryForm = async(req, res) =>{
        try {
            res.render("categoryform");
            

             
        } catch (error) {
            console.log(error)
        }
         
         
    };

    static getAllCategory = async (req, res) =>{
        try {
            const category = await CategoryModel.find()
             
            res.render("get_all_category", {category_list: category})
           
           
        } catch (error) {
            console.log(error)
        }

        
    };

     

}
export default CategoryController;