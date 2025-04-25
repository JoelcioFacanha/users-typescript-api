import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, require: true },
    lastName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
  },
  { versionKey: false, timestamps: true }
);

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const User = mongoose.model<IUser>("users", userSchema);
