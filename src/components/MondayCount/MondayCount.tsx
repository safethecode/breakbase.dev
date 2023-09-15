import * as style from './MondayCount.css';
import { useState, useEffect, useMemo } from 'react';

export const MondayCount = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const nextMonday = useMemo(() => {
    const now = new Date();
    const daysUntilMonday = 1 - now.getDay();
    if (daysUntilMonday <= 0) {
      now.setDate(now.getDate() + 7);
    }
    now.setDate(now.getDate() + daysUntilMonday);
    return new Date(now.getFullYear(), now.getMonth(), now.getDate());
  }, []);

  useEffect(() => {
    const updateCount = () => {
      const now = new Date();

      const timeUntilNextMonday = nextMonday.getTime() - now.getTime();
      const secondsUntilNextMonday = Math.floor(timeUntilNextMonday / 1000);

      const hours = Math.floor(secondsUntilNextMonday / 3600);
      const minutes = Math.floor((secondsUntilNextMonday % 3600) / 60);
      const seconds = secondsUntilNextMonday % 60;

      setTimeLeft({ hours, minutes, seconds });
    };

    const timer = setInterval(updateCount, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [nextMonday]);

  return (
    <span className={style.count}>
      {timeLeft.hours}시 {timeLeft.minutes}분 {timeLeft.seconds}초
    </span>
  );
};
