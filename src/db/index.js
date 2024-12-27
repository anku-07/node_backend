import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionIntance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );

    console.log(
      `\n MongoDB connect !! DB HOST : ${connectionIntance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection error : ", error);
  }
};

export default connectDB;
