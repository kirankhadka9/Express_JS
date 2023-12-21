import { Image } from "../../smodel/model.js";

export let handleimage=(req,res)=>{
        let links = req.files.map((value,i)=>{
         return `http://localhost:8000/${value.filename}`
         
        })
       
         res.json({
             success:true,
             message:"Image uploaded successfully",
             result:links
         })
         console.log(req.files)
        }
    
    
