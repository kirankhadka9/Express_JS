import { File } from "../../smodel/model.js";

export let handlefile=(req,res)=>{
        let links = req.files.map((value,i)=>{
         return `http://localhost:8000/${value.filename}`
         
        })
       
         res.json({
             success:true,
             message:"File uploaded successfully",
             result:links
         })
         console.log(req.images)
        }
    
    
