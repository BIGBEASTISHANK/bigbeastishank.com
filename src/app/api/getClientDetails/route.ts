import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { dbConnect } from "@/lib/db/mongoose";
import Client_Details from "@/lib/models/Client_Details";

export async function GET(req: NextRequest) {
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

        await dbConnect();

        const clients = await Client_Details.find({}).sort({ startedOn: -1 });

        return NextResponse.json({ clients }, { status: 200 });
    } catch (error: any) {
        console.error("Error fetching clients:", error);
        return NextResponse.json(
            { error: "Internal server error!" },
            { status: 500 }
        );
    }
}
