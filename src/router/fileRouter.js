import { Router } from "express";
//import { CreateFile } from "../controller/fileController.js";
import upload from "../Middleware/upload.js";
import { handlefile } from "../controller/fileController.js";

let fileRouter= Router();

fileRouter.route("/")

.post(upload.array("document",4),handlefile);



export default fileRouter;
//In form data we can get file information through req.files
//where we can get other information via req.body