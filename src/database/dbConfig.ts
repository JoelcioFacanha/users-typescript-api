import dotenv from "dotenv";

dotenv.config();

export const uriMongodb = process.env.URI_MONGO_DB as string;
