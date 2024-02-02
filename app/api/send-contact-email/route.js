import ContactEmail from '@/app/Components/Emails/ContactEmail';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const data = await req.json();

    if (parseInt(data.capcha) !== 123456) {
      return Response.json(
        {
          succsess: false,
          message: 'Wrong capcha!',
        },
        { status: 400 }
      );
    } else {
      const { fullName, phone, message, email } = data;

      const emailRes = await resend.emails.send({
        from: 'Healthcare <onboarding@resend.dev>',
        to: ['dmitry.shama@faceit.com.ua'],
        subject: 'healthcare contact',
        react: ContactEmail({
          fullName,
          phone,
          email,
          message,
        }),
      });

      return Response.json({
        succsess: true,
        message: 'Email is sent!',
        emailData: emailRes,
      });
    }
  } catch (error) {
    return Response.json({ error });
  }
}
