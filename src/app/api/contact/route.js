
import nodemailer from 'nodemailer';

export async function POST(request) {
  const { username, useremail, usermessage } = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: useremail,
      to: process.env.EMAIL_USER,
      subject: `Portfolio Message from ${username}`,
      text: usermessage,
    };

    await transporter.sendMail(mailOptions);

    return Response.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json({ success: false, message: 'Failed to send email.' }, { status: 500 });
  }
}
