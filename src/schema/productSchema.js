import { Schema } from "mongoose";

let productSchema = new Schema({
    name: {
        type: Schema.ObjectId,
        ref: "productname",
        required: [true, "Name field is important"]
    },
    price: {
        type: Schema.ObjectId,
        ref: "productprice",
        required: [true, "Price field is important"]
    },
    quantity: {
        type: Number,
        required: [true, "Quantity field is important"]
    },
    
   
},
{
    timestamps: true
});

export default productSchema;
