import { Router } from "express";

let collegeRouter= Router();

collegeRouter.route("/")

.post(async(req,res)=>{
    let data= req.body;
    try {
        result = await College.Create(data);
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
        result = await College.Find({});
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


collegeRouter.route("/:CollegeId")

.get(async (req, res) =>{
    let CollegeId = req.params.CollegeId;
    try{
        let result = await Student.findById(CollegeId);
        res.json({
            success: true,
            message: "College read By id successfully.",
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
    let CollegeId = req.params.CollegeId;
    try{
        let result = await College.findByIdAndUpdate(CollegeId,data)
        res.json({
            success: true,
            message: "college updated successfully.",
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
    let CollegeId = req.params.CollegeId; // to find the student id
    try{
        let result = await Student.findByIdAndDelete(collegeId); // to delete the id from the database
        res.json({
            success: true,
            message: "college deleted successfully",
            result: result,
        });
    }catch(error){
        res.json({
            success: false,
            message: error.message,
        });
    }
})


export default collegeRouter;