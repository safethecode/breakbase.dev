interface SlackMessageAuthor {
  authorName: string;
  authorEmail: string;
}

const newSubscribeSlackMessage = ({
  authorName,
  authorEmail,
}: SlackMessageAuthor) => ({
  attachments: [
    {
      fallback: '[구독자 알림] 새로운 구독자가 들어왔어요 👋',
      color: '#2eb886',
      title: `${authorName}님이 새롭게 뉴스레터를 구독했어요 🙇`,
      title_link: `https://news.aybridge.co/info/${authorEmail}`,
      fields: [
        {
          title: '',
        },
        {
          title: '이메일',
          value: `${authorEmail}`,
          short: false,
        },
        {
          title: '구독 시각',
          value: `${new Date()}`,
          short: false,
        },
      ],
      footer: '핏짜 뉴스레터',
      footer_icon: 'https://fitzza.xyz/_static/icon-pizza.png',
    },
  ],
});

export { newSubscribeSlackMessage };
