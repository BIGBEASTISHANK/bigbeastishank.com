import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { dbConnect } from "@/lib/db/mongoose";
import Blog_Subscribers from "@/lib/models/Blog_Subscribers";

export async function GET(req: NextRequest) {
    try {
        // Extract and validate token
        const token = req.cookies.get("token")?.value;

        if (!token) {
            return NextResponse.json(
                { error: "Not logged in!" },
                { status: 401 }
            );
        }

        // Verify JWT token with error handling
        let decode;
        try {
            decode = jwt.verify(token, process.env.JWT_SECRET as string) as {
                alreadyLoggedIn: boolean;
            };
        } catch (jwtError: any) {
            // Handle specific JWT errors
            if (jwtError.name === "TokenExpiredError") {
                return NextResponse.json(
                    { error: "Token has expired!" },
                    { status: 401 }
                );
            }
            if (jwtError.name === "JsonWebTokenError") {
                return NextResponse.json(
                    { error: "Invalid token!" },
                    { status: 401 }
                );
            }
            // Generic JWT error
            return NextResponse.json(
                { error: "Authentication failed!" },
                { status: 401 }
            );
        }

        // Check if user is authenticated
        if (!decode.alreadyLoggedIn) {
            return NextResponse.json(
                { error: "Not logged in!" },
                { status: 401 }
            );
        }

        // Connect to database with error handling
        try {
            await dbConnect();
        } catch (dbError: any) {
            console.error("Database connection error:", dbError);
            return NextResponse.json(
                { error: "Database connection failed!" },
                { status: 503 }
            );
        }

        // Fetch user emails with error handling
        let allUserEmail;
        try {
            allUserEmail = await Blog_Subscribers.find(
                { email: { $exists: true } },
                { email: 1, _id: 0 }
            );
        } catch (queryError: any) {
            console.error("Database query error:", queryError);
            return NextResponse.json(
                { error: "Failed to fetch subscriber data!" },
                { status: 500 }
            );
        }

        // Return successful response
        return NextResponse.json({ subscriberEmails: allUserEmail }, { status: 200 });
    } catch (error: any) {
        return NextResponse.json(
            { error: "Internal server error!" },
            { status: 500 }
        );
    }
}
