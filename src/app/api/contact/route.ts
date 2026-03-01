import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, message, projectType, budget } = body;

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: 'OSSS Contact Form <onboarding@resend.dev>', // Resend default test email
      to: ['soumabrataghosh57@gmail.com'], // Where you want to receive the emails
      replyTo: email,
      subject: `New Project Inquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Project Inquiry — Assessment Summary</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>

        <h3>Project Assessment Answers</h3>
        <table style="border-collapse:collapse;width:100%;max-width:500px;font-family:sans-serif;">
          <tr>
            <td style="padding:10px 14px;background:#f5f5f5;border:1px solid #e0e0e0;font-weight:600;width:40%;">Project Type</td>
            <td style="padding:10px 14px;border:1px solid #e0e0e0;">${projectType || 'Not specified'}</td>
          </tr>
          <tr>
            <td style="padding:10px 14px;background:#f5f5f5;border:1px solid #e0e0e0;font-weight:600;">Estimated Budget</td>
            <td style="padding:10px 14px;border:1px solid #e0e0e0;">${budget || 'Not specified'}</td>
          </tr>
        </table>

        <h3>Project Details</h3>
        <p style="white-space:pre-wrap;">${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
