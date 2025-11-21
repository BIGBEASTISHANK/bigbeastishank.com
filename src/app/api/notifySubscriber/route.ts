import { dbConnect } from "@/lib/db/mongoose";
import Blog_Subscribers from "@/lib/models/Blog_Subscribers";
import { MailtrapClient } from "mailtrap";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        // Verifying Login
        const cookieHeader = req.headers.get("cookie");

        if (!cookieHeader) {
            return NextResponse.json(
                { error: "No authentication credentials found!" },
                { status: 401 }
            );
        }

        const verifyLogin = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/adminLoginVerify`,
            {
                method: "GET",
                headers: {
                    Cookie: cookieHeader,
                },
            }
        );

        if (!verifyLogin.ok) {
            return NextResponse.json(
                { error: "Authentication failed" },
                { status: 401 }
            );
        }

        const { response: blogSubscribers } = await verifyLogin.json();

        // Getting Blog inputs
        const { title, description, tags, minuteRead, link } = await req.json();
        const TOKEN = process.env.MAILTRAP_TOKEN as string;

        // Validate required fields
        if (!title || !description || !link) {
            return NextResponse.json(
                {
                    error: "Missing required fields: title, description, or link",
                },
                { status: 400 }
            );
        }

        // Validate tags array
        if (tags && !Array.isArray(tags)) {
            return NextResponse.json(
                { error: "Tags must be an array" },
                { status: 400 }
            );
        }

        const client = new MailtrapClient({ token: TOKEN });
        const sender = {
            email: "blogs@bigbeastishank.com",
            name: "BBI Blogs",
        };

        if (!blogSubscribers.length) {
            console.warn("No blog subscribers found");
            return NextResponse.json(
                { message: "No subscribers found to notify" },
                { status: 200 }
            );
        }

        // Format tags for display
        const tagsHtml = tags
            ? tags
                  .map(
                      (tag: string) =>
                          `<span style="display: inline-block; background: #1793D1; color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px; margin-right: 6px; margin-bottom: 6px;">${tag}</span>`
                  )
                  .join("")
            : "";

        // Track successful and failed sends
        let successCount = 0;
        let failedEmails: string[] = [];

        // Send individual emails to each subscriber
        for (const subscriber of blogSubscribers) {
            try {
                // Create personalized email HTML template
                const emailHtml = `
                    <!DOCTYPE html>
                    <html>
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    </head>
                    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; background-color: #0A0C0E; color: #F6F9FC;">
                        <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0A0C0E;">
                            <tr>
                                <td align="center" style="padding: 40px 20px;">
                                    <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%; background: linear-gradient(145deg, #1A1E23 0%, #0F1215 100%); border: 1px solid #1793D1; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 40px rgba(23, 147, 209, 0.2);">
                                        
                                        <!-- Header -->
                                        <tr>
                                            <td style="background: linear-gradient(135deg, #1793D1 0%, #0e6a9d 100%); padding: 40px 30px; text-align: center;">
                                                <h1 style="margin: 0; color: white; font-size: 28px; font-weight: bold; letter-spacing: -0.5px;">
                                                    📝 New Blog Post Published!
                                                </h1>
                                            </td>
                                        </tr>

                                        <!-- Content -->
                                        <tr>
                                            <td style="padding: 40px 30px;">

                                                <!-- Blog Title -->
                                                <h2 style="margin: 0 0 20px 0; color: #F6F9FC; font-size: 24px; font-weight: 600; line-height: 1.4;">
                                                    ${title}
                                                </h2>

                                                <!-- Blog Description -->
                                                <p style="margin: 0 0 24px 0; color: #F6F9FC; opacity: 0.85; font-size: 16px; line-height: 1.6;">
                                                    ${description}
                                                </p>

                                                <!-- Meta Info -->
                                                ${
                                                    minuteRead
                                                        ? `
                                                <div style="margin-bottom: 24px; display: flex; align-items: center;">
                                                    <span style="color: #1793D1; font-size: 14px; font-weight: 500;">
                                                        ⏱️ ${minuteRead} min read
                                                    </span>
                                                </div>
                                                `
                                                        : ""
                                                }

                                                <!-- Tags -->
                                                ${
                                                    tagsHtml
                                                        ? `
                                                <div style="margin-bottom: 32px;">
                                                    ${tagsHtml}
                                                </div>
                                                `
                                                        : ""
                                                }

                                                <!-- CTA Button -->
                                                <table cellpadding="0" cellspacing="0" style="width: 100%;">
                                                    <tr>
                                                        <td align="center">
                                                            <a href="${link}" style="display: inline-block; background: linear-gradient(135deg, #1793D1 0%, #0e6a9d 100%); color: white; text-decoration: none; padding: 16px 40px; border-radius: 12px; font-size: 16px; font-weight: 600; box-shadow: 0 4px 15px rgba(23, 147, 209, 0.4); transition: transform 0.2s;">
                                                                Read Full Article →
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </table>

                                            </td>
                                        </tr>

                                        <!-- Footer -->
                                        <tr>
                                            <td style="background-color: #0A0C0E; padding: 30px; border-top: 1px solid rgba(23, 147, 209, 0.2); text-align: center;">
                                                <p style="margin: 0 0 12px 0; color: #F6F9FC; opacity: 0.6; font-size: 14px; line-height: 1.6;">
                                                    You're receiving this email because you subscribed to BBI's blog updates.
                                                </p>
                                                <p style="margin: 0; color: #F6F9FC; opacity: 0.6; font-size: 12px;">
                                                    © ${new Date().getFullYear()} BBI Blog. All rights reserved.
                                                </p>
                                                <p style="margin: 12px 0 0 0; font-size: 11px; color: #F6F9FC; opacity: 0.5;">
                                                    This is an automated notification. Please do not reply to this email or mail address.
                                                </p>
                                            </td>
                                        </tr>

                                    </table>
                                </td>
                            </tr>
                        </table>
                    </body>
                    </html>
                `;

                // Send individual email
                await client.send({
                    from: sender,
                    to: [{ email: subscriber.email }],
                    subject: `New Blog Post: ${title}`,
                    html: emailHtml,
                    category: "Blog Notification",
                });

                successCount++;
                console.log(`Email sent to: ${subscriber.email}`);

                // Optional: Add small delay to avoid rate limiting (adjust as needed)
                await new Promise((resolve) => setTimeout(resolve, 100));
            } catch (emailError) {
                console.error(
                    `Failed to send email to ${subscriber.email}:`,
                    emailError
                );
                failedEmails.push(subscriber.email);
            }
        }

        // Return summary of sending operation
        return NextResponse.json(
            {
                message: "Blog notification process completed",
                subscriberCount: blogSubscribers.length,
                successCount: successCount,
                failedCount: failedEmails.length,
                failedEmails:
                    failedEmails.length > 0 ? failedEmails : undefined,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("API POST error:", error);
        return NextResponse.json(
            {
                error: "Internal Server Error",
                details: error instanceof Error ? error.message : String(error),
            },
            { status: 500 }
        );
    }
}
