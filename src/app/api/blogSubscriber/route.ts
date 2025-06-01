import { dbConnect } from "@/lib/db/mongoose";
import Blog_Subscribers from "@/lib/models/Blog_Subscribers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Connect to MongoDB
    await dbConnect();

    // Getting email
    const formData = await req.formData();
    const email = formData.get("email") as string;

    // Check if email is empty
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return NextResponse.json(
        { error: "Invalid email recived by API!" },
        { status: 400 }
      );

    // Checking if it exists
    const subscriber = await Blog_Subscribers.find(
      { email: email },
      { email: 1, _id: 0 }
    );

    if (subscriber.length <= 0) {
      // Saving new subscriber
      const newSubscriber = new Blog_Subscribers({
        email: email,
      });
      newSubscriber.save();

      // Wait for 1.5 seconds and return response
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return NextResponse.json({ status: 200 });
    } else {
      // Wait for 1.5 seconds and return response
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return NextResponse.json(
        { error: "Email already exist in database!" },
        { status: 400 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
