import { Schema } from "mongoose";

let studentSchema=Schema({

    name:{
        type: String,
        required:[true,"Name field is important"]
    },
    age:{
        type: Number,
        required: [true,"Age must be Filled"]
    },
    isMarried:{
        type: Boolean,
        required: [false]
    },
})

export default studentSchema;