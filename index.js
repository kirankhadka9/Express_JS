// make an express application
// attach port to that application
import express, { json } from "express";
//import firstRouter from "./src/router/firstRouter.js";

import studentRouter from "./src/router/studentRouter.js";
import ConnectToMongoDB from "./src/connectMongoDb/connection.js";
import userRouter from "./src/router/userRouter.js";
import collegeRouter from "./src/router/collegeRouter.js";
import WebuserRouter from "./src/router/webRouter.js";
import productRouter from "./src/router/productRouter.js";
import jwt from 'jsonwebtoken';
import firstRouter from "./src/router/firstRouter.js";
import fileRouter from "./src/router/fileRouter.js";
import imageRouter from "./src/router/imageRouter.js";
import { port } from "./constant.js";
import cors from "cors";

let expressApp = express();
expressApp.use(cors()); //below this, API can be hit with front-end 
expressApp.use(json());
expressApp.use(express.static("./public"));

expressApp.listen(port, () => {   //otherwise 8000
  console.log(`express application is listening at port${process.env.PORT}`)
});
ConnectToMongoDB();


//expressApp.use("/firstrouter", firstRouter);
expressApp.use("/students", studentRouter);
expressApp.use("/users", userRouter);
expressApp.use("/colleges",collegeRouter);
expressApp.use("/webusers",WebuserRouter);
expressApp.use("/products",productRouter);
expressApp.use("/firsts",firstRouter);
expressApp.use("/files",fileRouter);
expressApp.use("/images",imageRouter);

//generate hash password

// let password= "kirankhadka";
// let hashpassword= await bcrypt.hash(password,10);
// console.log(hashpassword);

// let pass1= "$2b$10$Kx.4rV96uKnLCn4Psxbs9O9wezZOUFjZHtulNSOVE23GwOflcgh8e" ;
// let pass2= "kirankhadka"
// let isValidpass= await bcrypt.compare(hashpassword,pass2);
// console.log(isValidpass);


// let infoObj={
// id:"12312343124"
// };
// let secretkey="bagmati";
// let expiryInfo={
//   expiresIn:'365d',
// }

// let token= jwt.sign(infoObj,secretkey,expiryInfo);
// console.log(token);
//---------------------------------------------------------

let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzEyMzQzMTI0IiwiaWF0IjoxNzAyMDIzMzExLCJleHAiOjE3MzM1NTkzMTF9.OzTWaW578BLrRp7_3MJX6DPxOCTgA_RDYWTfT2YHLb8";
try{
  let infoObj=jwt.verify(token,"bagmati");
  console.log(infoObj);
}
catch(error)
{
  console.log(error.message);
}

//to be verified
// token must be made from the secretkey
// must not expire


//if token is valid => infoObj
//if token is not valid => error



    
