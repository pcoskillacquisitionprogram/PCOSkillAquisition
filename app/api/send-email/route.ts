import { NextResponse } from "next/server";
import { Resend } from "resend";
import connectDB from "@/lib/mongodb";
import Application from "@/models/Application";
import Contact from "@/models/Contact";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface ApplicationFormData {
  fullName: string;
  email: string;
  phone: string;
  skill: string;
  address: string;
  message?: string;
}

type FormData = ContactFormData | ApplicationFormData;

function isApplicationForm(data: FormData): data is ApplicationFormData {
  return 'fullName' in data;
}

export async function POST(request: Request) {
  try {
    const data = await request.json() as FormData;

    if (!process.env.RESEND_API_KEY || !process.env.EMAIL_TO || !process.env.EMAIL_FROM) {
      console.error("Email configuration missing");
      return NextResponse.json(
        { success: false, error: "Email service not configured" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await connectDB();

    let subject: string;
    let html: string;

    if (isApplicationForm(data)) {
      await Application.create({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        skill: data.skill,
        address: data.address,
        message: data.message,
      });

      // Application form email
      subject = `New Skill Application: ${data.skill}`;
      html = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #2563eb; padding: 30px 20px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Skill Training Application</h1>
                    </td>
                  </tr>
                  <!-- Content -->
                  <tr>
                    <td style="padding: 30px 20px;">
                      <table width="100%" cellpadding="8" cellspacing="0">
                        <tr>
                          <td style="padding: 8px; border-bottom: 1px solid #e5e5e5;">
                            <strong style="color: #333;">Full Name:</strong>
                            <span style="color: #666; margin-left: 10px;">${data.fullName}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border-bottom: 1px solid #e5e5e5;">
                            <strong style="color: #333;">Email:</strong>
                            <span style="color: #666; margin-left: 10px;">${data.email}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border-bottom: 1px solid #e5e5e5;">
                            <strong style="color: #333;">Phone:</strong>
                            <span style="color: #666; margin-left: 10px;">${data.phone}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border-bottom: 1px solid #e5e5e5;">
                            <strong style="color: #333;">Skill:</strong>
                            <span style="color: #2563eb; margin-left: 10px; font-weight: 600;">${data.skill}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border-bottom: 1px solid #e5e5e5;">
                            <strong style="color: #333;">Address:</strong>
                            <span style="color: #666; margin-left: 10px;">${data.address}</span>
                          </td>
                        </tr>
                        ${data.message ? `
                        <tr>
                          <td style="padding: 8px;">
                            <strong style="color: #333;">Additional Information:</strong>
                            <p style="color: #666; margin: 10px 0 0 0; white-space: pre-wrap;">${data.message}</p>
                          </td>
                        </tr>
                        ` : ''}
                      </table>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 20px; text-align: center; color: #666; font-size: 12px;">
                      <p style="margin: 0;">This application was submitted via PCO Skill Acquisition website</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `;
    } else {
      await Contact.create({
        name: data.name,
        email: data.email,
        message: data.message,
      });

      // Contact form email
      subject = `New Contact Message from ${data.name}`;
      html = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                  <!-- Header -->
                  <tr>
                    <td style="background-color: #2563eb; padding: 30px 20px; text-align: center;">
                      <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Message</h1>
                    </td>
                  </tr>
                  <!-- Content -->
                  <tr>
                    <td style="padding: 30px 20px;">
                      <table width="100%" cellpadding="8" cellspacing="0">
                        <tr>
                          <td style="padding: 8px; border-bottom: 1px solid #e5e5e5;">
                            <strong style="color: #333;">Name:</strong>
                            <span style="color: #666; margin-left: 10px;">${data.name}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px; border-bottom: 1px solid #e5e5e5;">
                            <strong style="color: #333;">Email:</strong>
                            <span style="color: #666; margin-left: 10px;">${data.email}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 8px;">
                            <strong style="color: #333;">Message:</strong>
                            <p style="color: #666; margin: 10px 0 0 0; white-space: pre-wrap; line-height: 1.6;">${data.message}</p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 20px; text-align: center; color: #666; font-size: 12px;">
                      <p style="margin: 0;">This message was submitted via PCO Skill Acquisition contact form</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `;
    }

    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: data.email,
      subject,
      html,
    });

    console.log("Email sent and data saved successfully");
    return NextResponse.json({ success: true });
  } catch (error) {
    const err = error as Error;
    console.error("Detailed error:", {
      message: err.message,
      stack: err.stack,
      name: err.name
    });
    return NextResponse.json(
      { success: false, error: err.message || "Failed to process request" },
      { status: 500 }
    );
  }
}