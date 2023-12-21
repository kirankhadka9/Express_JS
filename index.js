// make an express application
// attach port to that application
import express, { json } from "express";
import firstRouter from "./src/router/firstRouter.js";
import { Mongoose } from "mongoose";
 
let ConnectToMongoDB = async () => {
  await Mongoose.connect("mongodb://0.0.0.0:27017");
  console.log("Mongo Db is connected successfully");
};

let expressApp = express();
expressApp.use(json());

expressApp.listen(8080, () => {
  console.log("express application is listening at port 8080"); // Corrected port number
});
ConnectToMongoDB();

