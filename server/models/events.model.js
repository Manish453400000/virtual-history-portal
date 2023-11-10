import mongoose, { mongo } from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    figures: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Figure",
      },
    ],
  },
  { timestamps: true }
);

export const Event = mongoose.model("Event", eventSchema);
