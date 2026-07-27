import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, company, email, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",

      
      to: ["nusratisherebd@gmail.com"],

     
      replyTo: email,

      subject: `New Portfolio Inquiry - ${service || "General"}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.7;">
          <h2 style="color: #C85C8E;">
            New Portfolio Inquiry
          </h2>

          <p>
            Someone has contacted you through your portfolio website.
          </p>

          <hr />

          <p>
            <strong>Name:</strong><br />
            ${name}
          </p>

          <p>
            <strong>Company:</strong><br />
            ${company || "Not provided"}
          </p>

          <p>
            <strong>Email:</strong><br />
            ${email}
          </p>

          <p>
            <strong>Interested In:</strong><br />
            ${service || "Not specified"}
          </p>

          <p>
            <strong>Message:</strong><br />
            ${message}
          </p>

          <hr />

          <p style="color: #777;">
            Sent from your portfolio contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);

      return NextResponse.json(
        { error: "Email could not be sent." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        id: data?.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("CONTACT ERROR:", error);

    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}