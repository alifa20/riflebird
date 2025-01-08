import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_AUDIENCE_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Add subscriber to your list
    const data = await resend.contacts.create({
      email,
      firstName: "",
      lastName: "",
      unsubscribed: false,
      audienceId: process.env.RESEND_AUDIENCE_ID as string,
    });

    if(data.error) {
      throw data.error;
    }

    // Send welcome email
    await resend.emails.send({
      from: "admin@riflebirdagency.com.au",
      to: email,
      subject: "Welcome to Riflebird Agency Newsletter!",
      html: `
        <h2>Welcome to Riflebird Agency Newsletter!</h2>
        <p>Thank you for subscribing to our newsletter. We'll keep you updated with the latest digital marketing insights and tips.</p>
        <p>Best regards,<br/>Riflebird Agency Team</p>
      `,
    });

    return NextResponse.json(
      { message: "Successfully subscribed to newsletter" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe to newsletter" },
      { status: 500 }
    );
  }
} 