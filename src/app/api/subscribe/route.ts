import { Resend } from 'resend';
import { NextRequest } from 'next/server';
import { supabase } from '@/utils/supabase';
import KoalaWelcomeEmail from '@/contents/welcome';
import { FitzzaNews } from '@/contents/news';

export async function POST(request: NextRequest) {
  const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_KEY as string;

  const resend = new Resend(process.env.RESEND_API_KEY as string);

  const requestBody = await request.json();

  const duplicateEmail: any = await supabase
    .from('202309_fitzza_users')
    .select('email')
    .eq('email', requestBody.userInfo.email);

  if (duplicateEmail.data.length === 0) {
    await fetch(SLACK_WEBHOOK_URL, {
      method: 'POST',
      body: JSON.stringify(requestBody.message),
    });
    await supabase
      .from('202309_fitzza_users')
      .insert([
        {
          email: requestBody.userInfo.email,
          name: requestBody.userInfo.name,
          privacy_policy_agreed: true,
          terms_of_service_agreed: true,
        },
      ])
      .select();
    await resend.emails.send({
      from: '핏짜 <no-reply@fitzza.xyz>',
      to: requestBody.userInfo.email,
      subject: `${requestBody.userInfo.name}님! 핏짜에 오신 것을 환영합니다 🍕`,
      react: KoalaWelcomeEmail({ userFirstname: requestBody.userInfo.name }),
    });
    await resend.emails.send({
      from: '핏짜 <no-reply@fitzza.xyz>',
      to: requestBody.userInfo.email,
      subject: `똑똑똑.. ${requestBody.userInfo.name}님! 첫번째 뉴스레터가 배달되었어요! 📦`,
      react: FitzzaNews({ userFirstname: requestBody.userInfo.name }),
    });
    return new Response('Email sent', {
      status: 200,
    });
  } else {
    return new Response('Email already exists', {
      status: 409,
    });
  }
}
