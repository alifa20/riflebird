import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_AUDIENCE_API_KEY);

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: "Contact ID is required" },
        { status: 400 }
      );
    }

    // Update contact to unsubscribed status
    const data = await resend.contacts.update({
      id,
      unsubscribed: true,
      audienceId: process.env.RESEND_AUDIENCE_ID as string,
    });

    if (data.error) {
      throw data.error;
    }

    // Redirect to a confirmation page
    return new Response(null, {
      status: 302,
      headers: {
        Location: `${process.env.NEXT_PUBLIC_BASE_URL}/newsletter/unsubscribed`,
      },
    });
  } catch (error) {
    console.error("Newsletter unsubscribe error:", error);
    return NextResponse.json(
      { error: "Failed to unsubscribe from newsletter" },
      { status: 500 }
    );
  }
}