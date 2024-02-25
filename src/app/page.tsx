'use client';

import ky from 'ky';
import Balancer from 'react-wrap-balancer';
import JSConfetti from 'js-confetti';

import * as style from './page.css';

import { useState, useEffect, useRef } from 'react';
import { Toaster, toast } from 'sonner';
import { newSubscribeSlackMessage } from '@/contents';
import { Button, Card } from '@/components';
import { JalnanFontStyle } from '@/styles';

export default function Examples() {
  const confettiRef = useRef<JSConfetti>(null);

  const [subscribe, setSubscribe] = useState({
    name: '',
    email: '',
  });

  const [count, setCount] = useState(0);

  const [loading, setLoading] = useState(false);

  const newSubscriber = async () => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const { name, email } = subscribe;

    if (!name || !email) {
      toast.error('이름과 이메일 주소를 입력해주세요!');
      return;
    }

    if (!emailRegex.test(email)) {
      toast.error('올바른 이메일 주소를 입력해주세요!');
      return;
    }

    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const response = await ky.post('/api/subscribe/', {
        json: {
          message: newSubscribeSlackMessage({
            authorName: name,
            authorEmail: email,
          }),
          userInfo: {
            name,
            email,
          },
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });

      await response.text();

      setTimeout(() => {
        confettiRef.current?.addConfetti({
          emojis: ['😘', '🥰', '❤️', '✅', '🎉'],
          emojiSize: 150,
          confettiNumber: 30,
        });

        toast.success('구독해주셔서 감사해요 🙈 매주 월요일에 뵐게요 +_+');
        setLoading(false);
      }, 1000);
    } catch (error: any) {
      if (error.response && error.response.status === 409) {
        toast.error('이미 구독하셨어요! 🙈');
      } else {
        console.error('구독 중에 오류 발생:', error);
        toast.error('구독 과정에서 문제가 발생했어요. 다시 시도해주세요.');
      }
      setLoading(false);
    }
  };

  const handleSubscribe = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSubscribe({
      ...subscribe,
      [name]: value,
    });
  };

  const handleComingSoon = () => {
    toast.loading('이전 뉴스레터들을 보면서 조금만 기다려주세요 🙈');
  };

  useEffect(() => {
    (confettiRef.current as JSConfetti) = new JSConfetti();
  }, []);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await ky.get('/api/count/');
        const data: {
          count: number;
        } = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCount();
  }, []);

  return (
    <main className={style.wrap}>
      <div className={style.inner}>
        <h1 className={style.heroHeader}>
          <span
            className={`
              ${style.heroHeaderLabel}
              ${JalnanFontStyle.className}
            `}
          >
            <img
              src="/_static/icon-pizza.png"
              width={24}
              height={24}
              alt="pizza"
            />
            핏짜
          </span>
          <Balancer as="span">
            업무에 집중해야 하는
            <br />
            개발자를 위한 뉴스레터
          </Balancer>
        </h1>
        <Card onClick={handleComingSoon} />
        <h1 className={style.pageSection}>
          <span className={style.heroHeaderTitle}>
            뉴스레터는 열려있어요
            <img
              src="/_static/icon-waving-hand.png"
              width={20}
              height={20}
              alt="icon-waving-hand"
              style={{ marginBottom: 4 }}
            />
          </span>
          <span className={style.heroHeaderDescription}>
            지금 구독해서 새로운 소식을 받아보세요
          </span>
        </h1>
        <p className={style.list}>현재 {count}명 개발자와 함께하고 있어요 🚀</p>
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
        <Button variant="primary" onClick={newSubscriber} disabled={loading}>
          {loading ? '구독 중...' : '구독하기'}
        </Button>
        <footer className={style.footer}>
          <p>
            본 뉴스레터는 2023년 10월 02일부터 오전 10시를 기준으로 월요일마다
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
