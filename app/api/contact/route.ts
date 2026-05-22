import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      projectType,
      message,
    } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "Missing required fields",
        },
        {
          status: 400,
        }
      );
    }

    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",

      to: "kaveenhansithx@gmail.com",

      subject: `New Contact Form Submission from ${name}`,

      html: `
        <div style="font-family:sans-serif;padding:24px;">
          
          <h1>📩 New Contact Form Message</h1>

          <hr style="margin:20px 0;" />

          <p>
            <strong>Name:</strong><br />
            ${name}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${email}
          </p>

          <p>
            <strong>Project Type:</strong><br />
            ${projectType || "Not specified"}
          </p>

          <p>
            <strong>Message:</strong><br />
            ${message}
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