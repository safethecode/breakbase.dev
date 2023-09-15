'use client';

import ky from 'ky';

import { useEffect } from 'react';
import { newSubscribeSlackMessage } from '@/contents';

export default function Examples() {
  const SLACK_WEBHOOK_URL =
    'https://hooks.slack.com/services/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';

  const newSubscriber = async () => {
    await ky.post(SLACK_WEBHOOK_URL, {
      json: newSubscribeSlackMessage({
        authorName: 'Aaron Son',
        authorEmail: 'aaron.son@aybridge.co',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  return (
    <main>
      <code>
        This page is an example page. Please delete the page and happy hacking!
        🎉
      </code>
    </main>
  );
}
