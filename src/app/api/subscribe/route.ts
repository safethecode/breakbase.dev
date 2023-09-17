import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const SLACK_WEBHOOK_URL =
    'https://hooks.slack.com/services/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';

  const requestBody = await request.json();

  const content = await fetch(SLACK_WEBHOOK_URL, {
    method: 'POST',
    body: JSON.stringify(requestBody),
  });

  return NextResponse.json(content.json());
}
