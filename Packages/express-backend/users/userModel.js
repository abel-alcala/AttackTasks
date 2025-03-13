import mongoose from "mongoose";

const credentials = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    password: { type: String, required: true },
  }
);

export const Info = mongoose.model("Info", credentials);
