import { Schema } from "mongoose";

let userSchema = new Schema({
    name: {
        type: String,
        required: [true, "Name field is important"]
    },
    age: {
        type: Number,
        required: [false, "Age field is important"]
    },
    email: {
        type: String,
       unique: true,
        required: [true, "Email field is important"]
    },

    
    phone:{
        type:Number,
        required: [false, "phone num is required"],
        
        validate: (value)=>{
            let strValue= String(value);
            let strLength = strValue.length;
            if(strLength!==10)
            {
                throw new Error("phone num length didn't match");
            }
            }
        },
        password: {
            type: String,
            required: [true, "Password field is important"]
        },

},
{
    timestamps: true
});

export default userSchema;
