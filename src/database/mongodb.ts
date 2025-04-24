import mongoose from "mongoose";
import { uriMongodb } from "./dbConfig";

export const connectMongoDB = async () => {
  mongoose
    .connect(uriMongodb)
    .then(() => {
      console.log("MongoDb connected");
    })
    .catch((err) => {
      console.log(err);
    });
};
