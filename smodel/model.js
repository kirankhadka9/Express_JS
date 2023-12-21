import { model } from "mongoose";
import studentSchema from "../src/schema/studentSchema.js";
import userSchema  from "../src/schema/userSchema.js";
import practiceSchema from "../src/schema/practiceSchema.js";

import collegeSchema from "../src/schema/collegeSchema.js";
import webuserSchema from "../src/schema/webuserSchema.js";
import productSchema from "../src/schema/productSchema.js";
import reviewSchema from "../src/schema/reviewSchema.js";
import firstSchema from "../src/schema/firstSchema.js";
import fileSchema from "../src/schema/firstSchema.js";
import imageSchema from "../src/schema/imageSchema.js";





export let Student= model("Student",studentSchema);
export let First= model("First",firstSchema);
export let User= model("User",userSchema);
export let Practice= model("Practice", practiceSchema);
export let College= model("College", collegeSchema);
export let Webuser= model("Webuser", webuserSchema);
export let Product= model("Product", productSchema);
export let Review= model("Review", reviewSchema);
export let File= model("File", fileSchema);
export let Image= model("Image", imageSchema );


