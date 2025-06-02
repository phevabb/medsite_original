// app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactFormSchema, ApiResponse } from '@/schemas/contactSchema'; // Adjust path as needed

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Validate incoming data with Zod
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      // If validation fails, return specific error messages
      const errors = validationResult.error.flatten().fieldErrors;
      const response: ApiResponse = {
        success: false,
        message: 'Validation failed.',
        errors: Object.keys(errors).reduce((acc, key) => {
          // Type assertion for key to access 'errors' correctly
          // We know 'key' will be one of the expected field names from our Zod schema
          acc[key as keyof typeof errors] = errors[key as keyof typeof errors]?.[0] || '';
          return acc;
        }, {} as Record<string, string>),
      };
      return NextResponse.json(response, { status: 400 });
    }

    const { name, email, subject, message } = validationResult.data;

    // 2. Send email using Resend
    const { data, error } = await resend.emails.send({
      // IMPORTANT: Use a verified sender email for 'from'.
      // You cannot send 'from' an arbitrary email (like the user's input email)
      // unless that email address/domain is verified in your Resend account.
      // A common pattern is to use a "no-reply" or "contact" email from your domain.
      from: `${email}`, // Replace with your actual, verified sender email
      to: 'info@medirevs.com', // Recipient email (Medirevs' contact email)
      subject: `New Contact Message from ${name}: ${subject}`, // More informative subject
      html: `
        <p>${message}</p>
      `,
      replyTo: email, // Set the reply-to header to the sender's email for easy replies
    });

    if (error) {
      console.error('Resend error:', error);
      const response: ApiResponse = { success: false, message: 'Failed to send message via email service. Please check server logs.' };
      return NextResponse.json(response, { status: 500 });
    }

    console.log('Email sent successfully:', data);
    const response: ApiResponse = { success: true, message: 'Your message has been sent successfully!' };
    return NextResponse.json(response, { status: 200 });

  } catch (error) {
    console.error('Internal server error:', error);
    const response: ApiResponse = { success: false, message: 'An unexpected error occurred on the server.' };
    return NextResponse.json(response, { status: 500 });
  }
}