import mongoose, { Document, Model } from "mongoose";

export interface IClient_Detail extends Document {
    invoiceId: string;
    name: string;
    email: string;
    mobile: number;
    description: string;
    startedOn: string;
    finishedOn: string;
    actualAmount: number;
    discount: number;
    extraCharge: number;
    totalAmount: number;
    paid: number;
    remaining: number;
}

const Client_DetailSchema = new mongoose.Schema(
    {
        invoiceId: {
            type: String,
            required: [true, "Invoice ID is required"],
            unique: true,
        },
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
        },
        mobile: {
            type: Number,
            required: [true, "Mobile num is required"],
        },
        description: {
            type: String,
            required: [true, "Description is required"],
        },
        startedOn: {
            type: String,
            required: [true, "Started on is required"],
        },
        finishedOn: {
            type: String,
        },
        actualAmount: {
            type: Number,
            default: 0,
        },
        discount: {
            type: Number,
            default: 0,
        },
        extraCharge: {
            type: Number,
            default: 0,
        },
        totalAmount: {
            type: Number,
            default: 0,
        },
        paid: {
            type: Number,
            default: 0,
        },
        remaining: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
        collection: "Client_Details",
    }
);

const Client_Details: Model<IClient_Detail> =
    (mongoose.models.Client_Details as Model<IClient_Detail>) ||
    mongoose.model<IClient_Detail>("Client_Details", Client_DetailSchema);

export default Client_Details;
