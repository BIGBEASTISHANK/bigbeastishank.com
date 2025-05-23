import mongoose from "mongoose";

// Define the schema
const Blog_SubscriberSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
    },
  },
  {
    timestamps: true,
    collection: "Blog_Subscribers",
  }
);

// Check if model already exists to prevent model overwrite errors
const Blog_Subscribers = 
  mongoose.models.Blog_Subscribers || 
  mongoose.model("Blog_Subscribers", Blog_SubscriberSchema);

export default Blog_Subscribers;