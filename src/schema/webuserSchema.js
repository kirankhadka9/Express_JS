import { Schema } from "mongoose";

let webuserSchema = new Schema({
    Name:{
        type:String,
        required:[true,"req"],
        minLength: 20
        
    },
    Roll:{
        type:Number,
        required: false
    },
    Password:{
        type:String,
        required: false
    },
    Phone:{
        type:Number,
        required: [true, "phone num is required"],
        
        validate: ()=>{
            let strValue= String(value);
            let strLength = strValue.length;
            if(strLength!==10)
            {
                throw new error("Age cannot be 30");

            }
            },

        },
        
    IsMarried:{
        type:Boolean,
        required: false
    },
    SpouseName:{
        type:String,
        required: false,
        
        
    },
    Email:{
        type:String,
       unique:true,
        required: false
    },
    DateOfBirth:{
        type:Number,
        required: false
    },
    Location:{
        country: String,
        ExactLocation:String
    },
    FavTeacher:[
        {
            type:String,
            required:false,
            
        }
    ],
    FavSubject:[
      {
        BookName:{
            type:String,
            required:false,
            uppercase:true,
        
        },
        BookAuthor:{
            type:String,
            required:false
        }
    
        }
    ]
    
    
})
export default webuserSchema;
