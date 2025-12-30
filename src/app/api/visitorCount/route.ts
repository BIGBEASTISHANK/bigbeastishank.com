import { dbConnect } from "@/lib/db/mongoose";
import Visitor_Counts from "@/lib/models/Visitor_Count";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
    try {
        // Get base url
        const baseUrl = req.nextUrl.origin;
        if (baseUrl != "http://localhost:3000")
            return NextResponse.json(
                { error: "Invalid base url" },
                { status: 400 }
            );

        // Connection to db & increase visitor count
        await dbConnect();

        const visitor_count = await Visitor_Counts.findOneAndUpdate(
            {},
            { $inc: { nthvisitor: 1 } },
            { new: true }
        );

        return NextResponse.json(
            { nthvisitor: visitor_count.nthvisitor },
            { status: 200 }
        );
    } catch (error) {
        console.log(error.message);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await dbConnect();

        const visitor_count = await Visitor_Counts.findOne({});

        if (!visitor_count) {
            return NextResponse.json(
                { error: "Visitor count not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { nthvisitor: visitor_count.nthvisitor },
            { status: 200 }
        );
    } catch (error) {
        console.error("Get visitor count error:", error);
        return NextResponse.json(
            { error: "Failed to fetch visitor count" },
            { status: 500 }
        );
    }
}
