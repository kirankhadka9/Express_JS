import { Router } from "express";
import { Student } from "../../smodel/model.js";

let studentRouter = Router();
studentRouter
.route("/")   //Router for URL   localhost:8000/student
.post(async (req, res) =>{         
    let studentData = req.body;
    try{
        let result = await Student.create(studentData);
        res.json({
            success: true,
            message:"student created successfully.",
        });
    } catch(error){
        res.json({
            success:false,
            message:error.message,
        });
    }
})
.get(async (req, res) =>{
    try{
        let result = await Student.find({});
        res.json({
            success: true,
            message: "student read successfully.",
            result: result,
        });
    }catch(error){
        res.json({
            success: false,
            message: error.message,
        });
    }
})

studentRouter           //This is used for read any of the Ids created
.route("/:studentId")     //Router for localhost:8000/student/:any
.delete(async (req, res) =>{
    let studentId = req.params.studentId; // to find the student id
    try{
        let result = await Student.findByIdAndDelete(studentId); // to delete the id from the database
        res.json({
            success: true,
            message: "student deleted successfully",
            result: result,
        });
    }catch(error){
        res.json({
            success: false,
            message: error.message,
        });
    }
})
.get(async (req, res) =>{
    let studentId = req.params.studentId;
    try{
        let result = await Student.findById(studentId);
        res.json({
            success: true,
            message: "student read successfully.",
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
    let studentId = req.params.studentId;
    try{
        let result = await Student.findByIdAndDelete(studentId,data)
        res.json({
            success: true,
            message: "student updated successfully.",
            result: result,
        });
    }catch(error){
        res.json({
            success: false,
            message: error.message,
        });
    }
})

export default studentRouter;
//Student.create(studentData)
// student.find({})
// Student.findByIdAndDelete(Id)
// Student.findByIdAndUpdate(Id,data)