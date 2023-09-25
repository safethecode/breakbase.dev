import { Resend } from 'resend';
import { NextRequest } from 'next/server';
import { supabase } from '@/utils/supabase';
import { FitzzaOnboarding } from '@/contents/onboarding';

export async function POST(request: NextRequest) {
  // const SLACK_WEBHOOK_URL = process.env.SLACK_RESEND_WORKSPACE_KEY as string;
  // const resend = new Resend(process.env.RESEND_API_KEY as string);
  // const { data: supabaseGetAllUser }: any = await supabase
  //   .from('subscribe_users')
  //   .select('*');
  // for (const user of supabaseGetAllUser) {
  //   await resend.emails.send({
  //     from: '핏짜 <no-reply@fitzza.xyz>',
  //     to: user.email,
  //     subject: `${user.name}님! 핏짜에서 감사 인사 드려요 🙈`,
  //     react: FitzzaOnboarding({
  //       userFirstname: user.name,
  //     }),
  //   });
  // }
  // return new Response('Email sent', {
  //   status: 200,
  // });
  // if (duplicateEmail.data.length === 0) {
  //   await fetch(SLACK_WEBHOOK_URL, {
  //     method: 'POST',
  //     body: JSON.stringify(requestBody.message),
  //   });
  //   await supabase
  //     .from('subscribe_users')
  //     .insert([
  //       {
  //         email: requestBody.userInfo.email,
  //         name: requestBody.userInfo.name,
  //         privacy_policy_agreed: true,
  //         terms_of_service_agreed: true,
  //       },
  //     ])
  //     .select();
  //   await resend.emails.send({
  //     from: '핏짜 <no-reply@fitzza.xyz>',
  //     to: requestBody.userInfo.email,
  //     subject: `${requestBody.userInfo.name}님! 핏짜에 오신 것을 환영합니다 🍕`,
  //     react: KoalaWelcomeEmail({ userFirstname: requestBody.userInfo.name }),
  //   });
  //   return new Response('Email sent', {
  //     status: 200,
  //   });
  // } else {
  //   return new Response('Email already exists', {
  //     status: 409,
  //   });
  // }
}
