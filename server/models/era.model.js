import mongoose from "mongoose";

const eraSchema = new mongoose.Schema(
  {
    // Name of the historical era
    name: {
      type: String,
      required: true,
    },
    // A brief description of the era
    description: {
      type: String,
      required: true,
    },
    // Detailed historical content for the era
    content: {
      type: String,
      required: true,
    },
    // Start year of the era
    startYear: {
      type: Number,
      required: true,
    },
    // End year of the era
    endYear: {
      type: Number,
      required: true,
    },
    events: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
      },
    ],
  },
  { timestamps: true }
);

export const Era = mongoose.model("Era", eraSchema);
