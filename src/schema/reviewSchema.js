import { Schema } from "mongoose";

let reviewSchema = new Schema({
    productId: {
        type: Schema.ObjectId,
        ref: "product",
        required: [true, "Name field is important"]
    },
    userId: {
        type: Number,
        ref:"user",
        required: [true, "Price field is important"]
    },
   
    rating:{
        type: Number,
        minLength : 1,
        maxLength: 5
    }
   
},
{
    timestamps: true
});

export default reviewSchema;
