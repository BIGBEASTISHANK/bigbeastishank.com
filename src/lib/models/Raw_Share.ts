import mongoose, { Document, Model, Schema } from "mongoose";

// Interface
export interface IRaw_Share extends Document {
	text: string;
	urlString: string;
	expireAt: Date;
}

// Define the schema
const Raw_ShareSchema = new Schema<IRaw_Share>(
	{
		text: {
			type: String,
			required: [true, "Text is required"],
			trim: false,
		},

		urlString: {
			type: String,
			required: [true, "URL string is required"],
			unique: true,
			index: true,
		},

		expireAt: {
			type: Date,
			required: [true, "Expiration time is required"],
			index: true,
		},
	},

	{
		timestamps: true,
		collection: "Raw_Shares",
	},
);

// Automatically delete documents after expireAt
Raw_ShareSchema.index({ expireAt: 1 }, { expireAfterSeconds: 0 });

// Prevent model overwrite errors during Next.js hot reload
const Raw_Shares: Model<IRaw_Share> =
	mongoose.models.Raw_Shares || mongoose.model<IRaw_Share>("Raw_Shares", Raw_ShareSchema);

export default Raw_Shares;
