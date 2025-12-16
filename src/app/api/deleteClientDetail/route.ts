import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { dbConnect } from "@/lib/db/mongoose";
import Client_Details from "@/lib/models/Client_Details";

export async function DELETE(req: NextRequest) {
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
        const { id } = body;

        if (!id) {
            return NextResponse.json(
                { error: "Client ID is required!" },
                { status: 400 }
            );
        }

        await dbConnect();

        const deletedClient = await Client_Details.findByIdAndDelete(id);

        if (!deletedClient) {
            return NextResponse.json(
                { error: "Client not found!" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { message: "Client deleted successfully!" },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error deleting client:", error);
        return NextResponse.json(
            { error: "Internal server error!" },
            { status: 500 }
        );
    }
}
