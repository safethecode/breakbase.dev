import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/utils/supabase';

export async function POST(request: NextRequest) {
  const SLACK_WEBHOOK_URL =
    'https://hooks.slack.com/services/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';

  const requestBody = await request.json();

  const content = await fetch(SLACK_WEBHOOK_URL, {
    method: 'POST',
    body: JSON.stringify(requestBody.message),
  });

  const { data, error } = await supabase
    .from('subscribe_users')
    .insert([
      {
        email: requestBody.userInfo.email,
        name: requestBody.userInfo.name,
        privacy_policy_agreed: true,
        terms_of_service_agreed: true,
      },
    ])
    .select();

  console.log(data, error);

  return NextResponse.json(content.json());
}
