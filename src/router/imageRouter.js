import { Router } from "express";
import { handleimage } from "../controller/imageController.js";
import upload from "../Middleware/upload.js";



let imageRouter= Router();
imageRouter.route("/")

.post(upload.array("images",4),handleimage);



export default imageRouter;

