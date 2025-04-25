import dotenv from "dotenv";

dotenv.config();

export const uriMongodb = process.env.MONGO_URL as string;
