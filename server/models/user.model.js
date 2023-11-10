import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // User's username
    username: {
      type: String,
      required: [true, "Please enter a valid username"],
      trim: true,
      unique: true,
    },
    // User's email address
    email: {
      type: String,
      required: [true, "Please enter a valid email address"],
      trim: true,
      unique: true,
    },
    // Hashed user password
    password: {
      type: String,
      required: [true, "Please enter a valid password"],
      trim: true,
    },
    // Reference to earned achievements
    achievements: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Achievement",
      },
    ],
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
