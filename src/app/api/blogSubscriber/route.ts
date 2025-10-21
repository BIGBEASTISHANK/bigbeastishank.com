import { dbConnect } from "@/lib/db/mongoose";
import Blog_Subscribers, {
  IBlog_Subscriber,
} from "@/lib/models/Blog_Subscribers";
import { NextResponse } from "next/server";
import { MailtrapClient } from "mailtrap";

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
      await newSubscriber.save();

      // Send welcome email
      try {
        await sendWelcomeEmail(email.email);
        console.log(`Welcome email sent to: ${email.email}`);
      } catch (emailError) {
        // Log error but don't fail the subscription
        console.error("Failed to send welcome email:", emailError);
      }

      // Wait for 1.5 seconds and return response
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return NextResponse.json({ 
        message: "Successfully subscribed to blog updates!",
        status: 200 
      });
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

// Function to send welcome email
async function sendWelcomeEmail(subscriberEmail: string) {
  const TOKEN = process.env.NEXT_PUBLIC_MAILTRAP_TOKEN as string;
  
  if (!TOKEN) {
    throw new Error("Mailtrap token not configured");
  }

  const client = new MailtrapClient({ token: TOKEN });
  const sender = {
    email: "blogs@bigbeastishank.com",
    name: "BBI Blogs",
  };

  const welcomeEmailHtml = `
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
                                <h1 style="margin: 0; color: white; font-size: 32px; font-weight: bold; letter-spacing: -0.5px;">
                                    🎉 Welcome to BBI Blogs!
                                </h1>
                            </td>
                        </tr>

                        <!-- Content -->
                        <tr>
                            <td style="padding: 40px 30px;">
                                
                                <!-- Welcome Message -->
                                <p style="margin: 0 0 20px 0; color: #F6F9FC; font-size: 18px; line-height: 1.6;">
                                    Hey there! 👋
                                </p>

                                <p style="margin: 0 0 24px 0; color: #F6F9FC; opacity: 0.9; font-size: 16px; line-height: 1.6;">
                                    Thanks for subscribing to <strong style="color: #1793D1;">BIGBEASTISHANK's</strong> blog! You've just joined an awesome community of tech enthusiasts, developers, and lifelong learners.
                                </p>

                                <p style="margin: 0 0 24px 0; color: #F6F9FC; opacity: 0.9; font-size: 16px; line-height: 1.6;">
                                    I'm excited to share my journey with you - from full-stack development tips and gaming hardware deep-dives to Linux system administration and everything in between.
                                </p>

                                <!-- What to Expect Section -->
                                <div style="background: rgba(23, 147, 209, 0.1); border-left: 4px solid #1793D1; padding: 20px; margin: 24px 0; border-radius: 8px;">
                                    <h3 style="margin: 0 0 12px 0; color: #1793D1; font-size: 18px; font-weight: 600;">
                                        📬 What to Expect:
                                    </h3>
                                    <ul style="margin: 0; padding-left: 20px; color: #F6F9FC; opacity: 0.85; font-size: 15px; line-height: 1.8;">
                                        <li style="margin-bottom: 8px;">In-depth tutorials and coding guides</li>
                                        <li style="margin-bottom: 8px;">Tech reviews and hardware recommendations</li>
                                        <li style="margin-bottom: 8px;">Personal projects and development insights</li>
                                        <li style="margin-bottom: 8px;">Tips on system administration and DevOps</li>
                                    </ul>
                                </div>

                                <p style="margin: 0 0 32px 0; color: #F6F9FC; opacity: 0.9; font-size: 16px; line-height: 1.6;">
                                    I promise to only send you valuable content - no spam, ever! You'll get notified whenever I publish something new.
                                </p>

                                <!-- CTA Button -->
                                <table cellpadding="0" cellspacing="0" style="width: 100%;">
                                    <tr>
                                        <td align="center">
                                            <a href="https://bigbeastishank.com/blogs" style="display: inline-block; background: linear-gradient(135deg, #1793D1 0%, #0e6a9d 100%); color: white; text-decoration: none; padding: 16px 40px; border-radius: 12px; font-size: 16px; font-weight: 600; box-shadow: 0 4px 15px rgba(23, 147, 209, 0.4);">
                                                Explore Latest Posts →
                                            </a>
                                        </td>
                                    </tr>
                                </table>

                                <!-- Closing Message -->
                                <p style="margin: 32px 0 0 0; color: #F6F9FC; opacity: 0.9; font-size: 16px; line-height: 1.6;">
                                    Thanks again for joining! If you have any questions or just want to say hi, feel free to reach out.
                                </p>

                                <p style="margin: 16px 0 0 0; color: #1793D1; font-size: 16px; font-weight: 600;">
                                    Happy reading! 📚<br/>
                                    BIGBEASTISHANK
                                </p>

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

  await client.send({
    from: sender,
    to: [{ email: subscriberEmail }],
    subject: "🎉 Welcome to BIGBEASTISHANK's Blog!",
    html: welcomeEmailHtml,
    category: "Welcome Email",
  });
}
