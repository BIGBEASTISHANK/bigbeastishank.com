import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { dbConnect } from "@/lib/db/mongoose";
import Blog_Subscribers from "@/lib/models/Blog_Subscribers";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token)
    return NextResponse.json({ error: "Not logged in!" }, { status: 401 });

  const decode = jwt.verify(token, process.env.JWT_SECRET as string) as {
    alreadyLoggedIn: boolean;
  };

  if (decode.alreadyLoggedIn) {
    // Fetching userdata
    await dbConnect(); // Connect to db
    const allUserEmail = await Blog_Subscribers.find(
      { email: { $exists: true } },
      { email: 1, _id: 0 }
    );

    // Return response with cookie
    return NextResponse.json(
      { response: allUserEmail },
      { status: 200 }
    );
  }

  return NextResponse.json({ error: "Not logged in!" }, { status: 401 });
}
