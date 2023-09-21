'use client';

import ky from 'ky';
import Balancer from 'react-wrap-balancer';
import JSConfetti from 'js-confetti';

import * as style from './page.css';

import { useState, useEffect, useRef } from 'react';
import { Toaster, toast } from 'sonner';
import { newSubscribeSlackMessage } from '@/contents';
import { Button, Card, MondayCount } from '@/components';
import useDebounce from '@/hooks/useDebounce';

export default function Examples() {
  const confettiRef = useRef<JSConfetti>(null);

  const [subscribe, setSubscribe] = useState({
    name: '',
    email: '',
  });

  const [loading, setLoading] = useState(false);

  const newSubscriber = async () => {
    setLoading(true);

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (subscribe.email && !emailRegex.test(subscribe.email)) {
      toast.error('올바른 이메일 주소를 입력해주세요!');
    } else {
      if (subscribe.name && subscribe.email) {
        confettiRef.current?.addConfetti({
          emojis: ['😘', '🥰', '❤️', '✅', '🎉'],
          emojiSize: 150,
          confettiNumber: 30,
        });

        toast.success('구독해주셔서 감사해요 🙈 매주 월요일에 뵐게요 +_+');

        await ky.post('/api/subscribe/', {
          json: {
            message: newSubscribeSlackMessage({
              authorName: subscribe.name,
              authorEmail: subscribe.email,
            }),
            userInfo: {
              name: subscribe.name,
              email: subscribe.email,
            },
          },
          headers: {
            'Content-Type': 'application/json',
          },
        });
        localStorage.setItem('subscribed', 'true');
        setLoading(false);
      } else {
        toast.error('이름과 이메일 주소를 입력해주세요!');
      }
    }
  };

  const debouncedNewSubscriber = useDebounce(newSubscriber, 1000);

  const handleSubscribe = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSubscribe({
      ...subscribe,
      [name]: value,
    });
  };

  const handleComingSoon = () => {
    toast.loading('아직 준비 중이에요! 조금만 기다려주세요 🙈');
  };

  useEffect(() => {
    (confettiRef.current as JSConfetti) = new JSConfetti();
  }, []);
  return (
    <main className={style.wrap}>
      <div className={style.inner}>
        <h1 className={style.heroHeader}>
          <span className={style.heroHeaderLabel}>
            <img
              src="/_static/icon-pizza.png"
              width={24}
              height={24}
              alt="pizza"
            />
            핏짜
          </span>
          <Balancer as="span">
            업무에 집중해야 하는 개발자를 위한 뉴스레터
          </Balancer>
        </h1>
        <MondayCount />
        <Card onClick={handleComingSoon} />
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
        <Button
          variant="primary"
          onClick={debouncedNewSubscriber}
          disabled={loading}
        >
          {loading ? '이미 구독하셨어요!' : '구독하기'}
        </Button>
        <footer className={style.footer}>
          <p>
            본 뉴스레터는 2023년 09월 25일부터 오전 10시를 기준으로 월요일마다
            발송되는 뉴스레터입니다. 기술적인 부분과 기획, 디자인, 스타트업 등
            다양한 주제로 뉴스레터는 발송됩니다. 뉴스레터 관련 문의는
            <a className={style.anchor} href="mailto:support@aybridge.co">
              이메일
            </a>
            로 문의해주세요. 본 뉴스레터를 구독하는 것은 개인정보 수집과 서비스
            이용 약관에 동의하는 것을 의미합니다. 다만, 마케팅 목적으로 사용되는
            것은 아닙니다. 해당 부분은 추후 동의를 받도록 할 것입니다.
          </p>
        </footer>
      </div>
      <Toaster />
    </main>
  );
}
