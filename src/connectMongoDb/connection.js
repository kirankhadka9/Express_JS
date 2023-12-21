import mongoose from "mongoose";
import { databaselink } from "../../constant.js";

const ConnectToMongoDB = async () => {
  try {
    await mongoose.connect(databaselink);
    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};

export default ConnectToMongoDB;
