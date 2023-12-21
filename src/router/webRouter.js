import { Router } from "express";

let WebuserRouter= Router();

WebuserRouter.route("/")

.post(async(req,res)=>{
    let data= req.body;
    try {
        result = await Webuser.Create(data);
        res.json({
            success:true,
            messsage:"Data created successfully",
            result: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
        
    }
})


.get(async(req,res)=>{
    try {
        result = await Webuser.Find({});
        res.json({
            success:true,
            messsage: "Data read successfully",
            result: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
         });
        
    }
})


WebuserRouter.route("/:WebuserId")

.get(async (req, res) =>{
    let WebuserId = req.params.WebuserId;
    try{
        let result = await Student.findById(WebuserId);
        res.json({
            success: true,
            message: "Webuser read By id successfully.",
            result: result,
        });
    }catch(error){
        res.json({
            success: false,
            message: error.message,
        });
    }
})


.patch(async (req, res) =>{
    let WebuserId = req.params.WebuserId;
    try{
        let result = await Webuser.findByIdAndUpdate(WebuserId,data)
        res.json({
            success: true,
            message: "Webuser updated successfully.",
            result: result,
        });
    }catch(error){
        res.json({
            success: false,
            message: error.message,
        });
    }
})

.delete(async (req, res) =>{
    let WebuserId = req.params.WebuserIduserId; // to find the student id
    try{
        let result = await Student.findByIdAndDelete(WebuserId); // to delete the id from the database
        res.json({
            success: true,
            message: "Webuser deleted successfully",
            result: result,
        });
    }catch(error){
        res.json({
            success: false,
            message: error.message,
        });
    }
})


export default WebuserRouter;