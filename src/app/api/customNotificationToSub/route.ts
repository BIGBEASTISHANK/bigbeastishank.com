import { MailtrapClient } from "mailtrap";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    // Verify admin login via cookie
    const cookieHeader = req.headers.get("cookie");
    if (!cookieHeader) {
      return NextResponse.json(
        { error: "No authentication credentials found!" },
        { status: 401 },
      );
    }

    const verifyLogin = await fetch(
      `${req.nextUrl.origin}/api/adminLoginVerify`,
      {
        method: "GET",
        headers: {
          Cookie: cookieHeader,
        },
      },
    );

    if (!verifyLogin.ok) {
      return NextResponse.json(
        { error: "Authentication failed" },
        { status: 401 },
      );
    }

    const { subscriberEmails: blogSubscribers } = await verifyLogin.json();

    // Get subject and htmlBody from request
    const { subject, htmlBody } = await req.json();

    if (!subject || !htmlBody) {
      return NextResponse.json(
        { error: "Missing required fields: subject or htmlBody" },
        { status: 400 },
      );
    }

    const TOKEN = process.env.MAILTRAP_TOKEN as string;
    if (!TOKEN) {
      return NextResponse.json(
        { error: "Mailtrap token not configured" },
        { status: 500 },
      );
    }

    const client = new MailtrapClient({ token: TOKEN });
    const sender = {
      email: "blogs@bigbeastishank.com",
      name: "BBI Blogs",
    };

    if (!blogSubscribers || !blogSubscribers.length) {
      return NextResponse.json(
        { message: "No subscribers found to notify" },
        { status: 200 },
      );
    }

    let successCount = 0;
    let failedEmails: string[] = [];

    for (const subscriber of blogSubscribers) {
      try {
        await client.send({
          from: sender,
          to: [{ email: subscriber.email }],
          subject: subject,
          html: htmlBody,
          category: "General Notification",
        });
        successCount++;

        console.log(`Email sent to: ${subscriber.email}`);

        //  Add small delay to avoid rate limiting
        await new Promise((resolve) => setTimeout(resolve, 100));
      } catch (err) {
        console.error(`Failed to send to ${subscriber}:`, err);
        failedEmails.push(subscriber);
      }
    }

    return NextResponse.json({
      message: `Custom email sent to ${successCount} subscriber(s).`,
      successCount,
      failedCount: failedEmails.length,
      failedEmails,
    });
  } catch (err) {
    console.error(err instanceof Error ? err.message : String(err));
    return NextResponse.json(
      { error: "Internal Server error!" },
      { status: 500 },
    );
  }
}
