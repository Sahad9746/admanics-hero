"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  countryCode: z.string().optional(),
  phone: z.string().optional(), // Phone is now optional
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function sendContactEmail(formData: FormData) {
  const rawData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    countryCode: formData.get("countryCode") as string,
    phone: formData.get("phone") as string,
    message: formData.get("message") as string,
  };

  // Validate Input
  const result = ContactSchema.safeParse(rawData);

  if (!result.success) {
    // Return field-specific errors
    const fieldErrors: Record<string, string> = {};
    result.error.issues.forEach((issue) => {
      // Map error message to the specific path (field name)
      if (issue.path[0]) {
        fieldErrors[issue.path[0].toString()] = issue.message;
      }
    });
    return { success: false, errors: fieldErrors };
  }

  const { name, email, countryCode, phone, message } = result.data;

  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS
  ) {
    return {
      success: false,
      error: "Server Configuration Error: Email variables are missing.",
    };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `New Lead: ${name} via Admanics`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 8px; padding: 20px;">
            <h2 style="color: #2563EB; margin-bottom: 20px;">New Inquiry Received</h2>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px;">
                <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p style="margin: 5px 0;"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
            </div>
            <p style="margin-top: 20px;"><strong>Requirements:</strong></p>
            <div style="background: #fff; padding: 15px; border-radius: 5px; border-left: 4px solid #2563EB; border: 1px solid #eee;">
                ${message}
            </div>
            <hr style="margin: 30px 0 10px; border: 0; border-top: 1px solid #eee;" />
            <p style="font-size: 12px; color: #888; text-align: center;">Secure message via Admanics Website</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "Failed to send email. Please check server logs.",
    };
  }
}
