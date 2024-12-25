import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionIntance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      ` MongoDB connected !! BD HOST: ${connectionIntance.connection.host}`
    );
  } catch (error) {
    console.error("Mongodb connection error : ", error);
  }
};

export default connectDB;
