import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { dbConnect } from "@/lib/db/mongoose";
import Client_Details from "@/lib/models/Client_Details";

export async function PUT(req: NextRequest) {
    try {
        const token = req.cookies.get("token")?.value;

        if (!token) {
            return NextResponse.json(
                { error: "Not authenticated!" },
                { status: 401 }
            );
        }

        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET as string) as {
                alreadyLoggedIn: boolean;
            };

            if (!decode.alreadyLoggedIn) {
                return NextResponse.json(
                    { error: "Not authenticated!" },
                    { status: 401 }
                );
            }
        } catch (jwtError: any) {
            if (jwtError.name === "TokenExpiredError") {
                return NextResponse.json(
                    { error: "Token has expired!" },
                    { status: 401 }
                );
            }
            return NextResponse.json(
                { error: "Invalid token!" },
                { status: 401 }
            );
        }

        const body = await req.json();
        const {
            _id,
            invoiceId,
            name,
            email,
            mobile,
            description,
            startedOn,
            finishedOn,
            actualAmount,
            discount,
            extraCharge,
            paid,
        } = body;

        if (!_id) {
            return NextResponse.json(
                { error: "Client ID is required!" },
                { status: 400 }
            );
        }

        await dbConnect();

        const updateData: any = {};
        if (invoiceId !== undefined) updateData.invoiceId = invoiceId;
        if (name) updateData.name = name;
        if (email) updateData.email = email;
        if (mobile) updateData.mobile = mobile;
        if (description) updateData.description = description;
        if (startedOn) updateData.startedOn = startedOn;
        if (finishedOn) updateData.finishedOn = finishedOn;
        
        // Handle numeric fields
        const actualAmt = actualAmount !== undefined ? actualAmount : 0;
        const disc = discount !== undefined ? discount : 0;
        const extra = extraCharge !== undefined ? extraCharge : 0;
        const paidAmt = paid !== undefined ? paid : 0;

        updateData.actualAmount = actualAmt;
        updateData.discount = disc;
        updateData.extraCharge = extra;
        updateData.paid = paidAmt;

        // Calculate totals
        updateData.totalAmount = actualAmt - disc + extra;
        updateData.remaining = updateData.totalAmount - paidAmt;

        const updatedClient = await Client_Details.findByIdAndUpdate(
            _id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedClient) {
            return NextResponse.json(
                { error: "Client not found!" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            {
                message: "Client updated successfully!",
                client: updatedClient,
            },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error updating client:", error);

        if (error.code === 11000) {
            return NextResponse.json(
                { error: "Invoice ID already exists!" },
                { status: 400 }
            );
        }

        return NextResponse.json(
            { error: "Internal server error!" },
            { status: 500 }
        );
    }
}
