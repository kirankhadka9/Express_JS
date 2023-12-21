import { Schema } from "mongoose";

let collegeSchema= Schema({
    Name:{
        type:String,
        required:true
    },
    Location:{
        type:String,
        required: true
    }

});
export default collegeSchema;