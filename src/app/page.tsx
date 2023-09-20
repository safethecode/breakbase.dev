'use client';

import ky from 'ky';
import Balancer from 'react-wrap-balancer';
import * as style from './page.css';

import { useState } from 'react';
import { newSubscribeSlackMessage } from '@/contents';
import { Button, Card, MondayCount } from '@/components';

export default function Examples() {
  const [subscribe, setSubscribe] = useState({
    name: '',
    email: '',
  });

  const newSubscriber = async () => {
    if (subscribe.name && subscribe.email) {
      await ky.post('/api/subscribe/', {
        json: newSubscribeSlackMessage({
          authorName: subscribe.name,
          authorEmail: subscribe.email,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } else {
      alert('이름과 이메일을 입력해주세요.');
    }
  };

  const handleSubscribe = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSubscribe({
      ...subscribe,
      [name]: value,
    });
  };
  return (
    <main className={style.wrap}>
      <div className={style.inner}>
        <h1 className={style.heroHeader}>
          <span className={style.heroHeaderLabel}>뉴스레터</span>
          <Balancer as="span">
            업무에 집중해야 하는 개발자를 위한 뉴스레터
          </Balancer>
        </h1>
        <MondayCount />
        <Card />
        <h1 className={style.heroHeader}>
          <span className={style.heroHeaderLabel}>상시 모집 중</span>
        </h1>
        <input
          name="name"
          className={style.input}
          type="text"
          placeholder="구독자님 이름을 입력해주세요."
          aria-label="이름 입력 필드"
          title="이름 입력 필드"
          required
          onChange={handleSubscribe}
        />
        <input
          name="email"
          className={style.input}
          type="email"
          placeholder="이메일 주소를 입력해주세요."
          aria-label="이메일 입력 필드"
          title="이메일 입력 필드"
          required
          onChange={handleSubscribe}
        />
        <Button variant="primary" onClick={newSubscriber}>
          구독하기
        </Button>
        <footer className={style.footer}>
          <p>
            본 뉴스레터는 2023년 09월 18일부터 오전 9시를 기준으로 월요일마다
            발송되는 뉴스레터입니다. 기술적인 부분과 기획, 디자인, 스타트업 등
            다양한 주제로 뉴스레터는 발송됩니다. 뉴스레터 관련 문의는
            <a className={style.anchor} href="mailto:support@aybridge.co">
              이메일
            </a>
            로 문의해주세요.
          </p>
        </footer>
      </div>
    </main>
  );
}
