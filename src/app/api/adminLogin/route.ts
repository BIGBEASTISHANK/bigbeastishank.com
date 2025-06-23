import { dbConnect } from "@/lib/db/mongoose";
import Blog_Subscribers from "@/lib/models/Blog_Subscribers";
import { NextRequest, NextResponse } from "next/server";
import speakeasy from "speakeasy";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    // Getting username, password, and TOTP code
    const { username, password, totpCode } = await req.json();

    // Input validation
    if (!username || !password)
      return NextResponse.json(
        { error: "Username and password are required!" },
        { status: 400 }
      );

    // Checking if username and password are correct
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      // Check if TOTP code is provided
      if (!totpCode) {
        return NextResponse.json(
          { error: "2FA code is required!", requiresTwoFactor: true },
          { status: 401 }
        );
      }

      // Verify TOTP code
      const verified = speakeasy.totp.verify({
        secret: process.env.TOTP_SECRET,
        encoding: "base32",
        token: totpCode,
      });

      if (!verified) {
        return NextResponse.json(
          { error: "Invalid 2FA code!" },
          { status: 401 }
        );
      }

      // Creating jwt token
      const token = jwt.sign(
        { alreadyLoggedIn: true },
        process.env.JWT_SECRET,
        { expiresIn: "7d" }
      );

      // Fetching userdata
      await dbConnect(); // Connect to db
      const allUserEmail = await Blog_Subscribers.find(
        { email: { $exists: true } },
        { email: 1, _id: 0 }
      );

      // Return response with cookie
      const response = NextResponse.json(
        { response: allUserEmail },
        { status: 200 }
      );

      // Setting cookie
      response.cookies.set("token", token, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000,
        secure: process.env.NODE_ENV === "production",
        path: "/",
      });

      // Returning response
      return response;
    } else {
      return NextResponse.json(
        { error: "Invalid username or password!" },
        { status: 401 }
      );
    }
  } catch (error) {
    // Log error
    console.error(error instanceof Error ? error.message : String(error));

    // Display error message
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
