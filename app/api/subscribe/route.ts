import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const AUDIENCE_ID =
  process.env.RESEND_AUDIENCE_ID!;

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        {
          error: "Email required",
        },
        {
          status: 400,
        }
      );
    }

    /* =====================================
       SAVE SUBSCRIBER TO RESEND AUDIENCE
    ===================================== */

    try {
      await resend.contacts.create({
        email,
        audienceId: AUDIENCE_ID,
      });
    } catch (contactError: any) {
      /*
        Ignore duplicate contact errors
        so same email doesn't crash API
      */

      const message =
        contactError?.message || "";

      if (
        !message.toLowerCase().includes("already exists")
      ) {
        throw contactError;
      }
    }

    /* =====================================
       SEND YOU EMAIL NOTIFICATION
    ===================================== */

    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: "kaveenhansithx@gmail.com",
      subject: "New Subscriber",
      html: `
        <div style="font-family:sans-serif;padding:24px;">
          <h1>🚀 New Subscriber</h1>

          <p>
            <strong>Email:</strong>
            ${email}
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error: any) {
    console.error(error);

    return NextResponse.json(
      {
        error:
          error?.message ||
          "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}