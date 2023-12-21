import { Schema } from "mongoose";

let fileSchema = new Schema({
    Name:{
        type:String,
        required:[true,"req"],
        minLength: 20
        
    }
    
})
export default fileSchema;
