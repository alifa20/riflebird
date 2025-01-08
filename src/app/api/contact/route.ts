import { Resend } from "resend";
import { NextResponse } from "next/server";
import { error } from "console";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: email,
      to: ["ali@riflebirdagency.com.au"],
      subject: `New Website Enquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message: ${message}

This message was sent from the Riflebird Agency website contact form.
      `,
      html: `
        <h2>New Website Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <br/>
        <p><em>This message was sent from the Riflebird Agency website contact form.</em></p>
      `,
    });

    console.log("This is the result", JSON.stringify(data));
    if (data.error?.message) {
      throw error;
    }
    
    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
