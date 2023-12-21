import { Schema } from "mongoose";

let imageSchema = new Schema({
    Name:{
        type:String,
        required:[true,"req"],
        minLength: 20
        
    }
    
})
export default imageSchema;
