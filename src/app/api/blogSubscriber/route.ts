import { dbConnect } from "@/lib/db/mongoose";
import Blog_Subscribers from "@/lib/models/Blog_Subscribers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Connect to MongoDB
    await dbConnect();

    const formData = await req.formData();
    const email = formData.get("email") as string;

    // Create new subscriber
    const newSubscriber = new Blog_Subscribers({
      email: email,
    });
    newSubscriber.save();

    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Return Response
    return NextResponse.json({ status: 200 });
  } catch (err) {
    return NextResponse.json({
      status: 500,
      error: err instanceof Error ? err.message : String(err),
    });
  }
}
