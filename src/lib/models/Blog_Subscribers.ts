import mongoose, { Document, Model } from "mongoose";
import { unique } from "next/dist/build/utils";

// Interface
export interface IBlog_Subscriber extends Document {
  email: string;
}

// Define the schema
const Blog_SubscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
  },
  {
    timestamps: true,
    collection: "Blog_Subscribers",
  }
);

// Check if model already exists to prevent model overwrite errors
const Blog_Subscribers: Model<IBlog_Subscriber> =
  (mongoose.models.Blog_Subscribers as Model<IBlog_Subscriber>) ||
  mongoose.model<IBlog_Subscriber>("Blog_Subscribers", Blog_SubscriberSchema);

export default Blog_Subscribers;
