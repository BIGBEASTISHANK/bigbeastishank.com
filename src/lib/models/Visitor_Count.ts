import mongoose, { Document, Model } from "mongoose";

// Interface
export interface IVisitor_Count extends Document {
  nthvisitor: number;
}

// Define the schema
const Visitor_CountSchema = new mongoose.Schema(
  {
    nthvisitor: {
      type: Number,
      required: [true, "nthvisitor is required"],
    },
  },
  {
    timestamps: true,
    collection: "Visitor_Counts",
  }
);

// Check if model already exists to prevent model overwrite errors
const Visitor_Counts: Model<IVisitor_Count> =
  (mongoose.models.Visitor_Counts as Model<IVisitor_Count>) ||
  mongoose.model<IVisitor_Count>("Visitor_Counts", Visitor_CountSchema);

export default Visitor_Counts;
