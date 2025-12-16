import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { dbConnect } from "@/lib/db/mongoose";
import Client_Details from "@/lib/models/Client_Details";

export async function POST(req: NextRequest) {
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

        if (
            !invoiceId ||
            !name ||
            !email ||
            !mobile ||
            !description ||
            !startedOn
        ) {
            return NextResponse.json(
                { error: "Required fields are missing!" },
                { status: 400 }
            );
        }

        await dbConnect();

        // Check if invoice ID already exists
        const existingClient = await Client_Details.findOne({ invoiceId });
        if (existingClient) {
            return NextResponse.json(
                { error: "Invoice ID already exists!" },
                { status: 400 }
            );
        }

        // Calculate totals
        const actualAmt = actualAmount || 0;
        const disc = discount || 0;
        const extra = extraCharge || 0;
        const paidAmt = paid || 0;

        const totalAmount = actualAmt - disc + extra;
        const remaining = totalAmount - paidAmt;

        const newClient = await Client_Details.create({
            invoiceId,
            name,
            email,
            mobile,
            description,
            startedOn,
            finishedOn,
            actualAmount: actualAmt,
            discount: disc,
            extraCharge: extra,
            totalAmount,
            paid: paidAmt,
            remaining,
        });

        return NextResponse.json(
            {
                message: "Client created successfully!",
                client: newClient,
            },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Error creating client:", error);

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
