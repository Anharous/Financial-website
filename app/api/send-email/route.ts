import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import 'dotenv/config';

interface FormData {
  name: string;
  subject: string;
  email: string;
  phone: string;
  message: string;
}

export async function POST(request: Request) {
  const formData: FormData = await request.json();

  const { name, subject, email, phone, message } = formData;

  // Logging to ensure environment variables are loaded
  console.log('EMAIL:', process.env.EMAIL);
  console.log('PASSWORD:', process.env.PASSWORD);
  console.log('RECEIVER_EMAIL:', process.env.RECEIVER_EMAIL);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.RECEIVER_EMAIL,
    subject: `Contact form submission: ${subject}`,
    text: `You have a new contact form submission:\n
           Name: ${name}\n
           Email: ${email}\n
           Phone: ${phone}\n
           Message: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    if (error instanceof Error) {
      return NextResponse.json({ message: 'Failed to send email', error: error.message, stack: error.stack }, { status: 500 });
    } else {
      return NextResponse.json({ message: 'Failed to send email due to an unknown error' }, { status: 500 });
    }
  }
}
