import { dbConnect } from "@/lib/db/mongoose";
import Blog_Subscribers, {
  IBlog_Subscriber,
} from "@/lib/models/Blog_Subscribers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Getting email
    const email = await req.json();

    // Check if email is empty
    if (!email.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.email))
      return NextResponse.json(
        { error: "Invalid email recived by API!" },
        { status: 400 }
      );

    // Checking if it exists
    await dbConnect(); // Connecting to db
    const subscriber: IBlog_Subscriber[] = await Blog_Subscribers.find(
      { email: email.email },
      { email: 1, _id: 0 }
    );

    if (subscriber.length <= 0) {
      // Saving new subscriber
      const newSubscriber: IBlog_Subscriber = new Blog_Subscribers({
        email: email.email,
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
        { status: 401 }
      );
    }
  } catch (err) {
    // Loging error
    console.error(err instanceof Error ? err.message : String(err));

    // Sending server errorresponse
    return NextResponse.json(
      { error: "Internal Server error!" },
      { status: 500 }
    );
  }
}
