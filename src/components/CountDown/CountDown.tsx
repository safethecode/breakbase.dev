import * as style from './CountDown.css';
import { useState, useEffect } from 'react';

export const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getNextMonday = () => {
    const now = new Date();
    let daysUntilMonday = 1 - now.getDay();

    const hoursUntilMonday = 10 - now.getHours();

    if (
      daysUntilMonday < 0 ||
      (daysUntilMonday === 0 && hoursUntilMonday <= 0)
    ) {
      daysUntilMonday += 7;
    }

    now.setDate(now.getDate() + daysUntilMonday);
    now.setHours(10, 0, 0, 0);

    return now;
  };

  useEffect(() => {
    const updateCount = () => {
      const now = new Date();
      const nextMonday = getNextMonday();

      if (now > nextMonday) {
        nextMonday.setDate(nextMonday.getDate() + 7);
      }

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
  }, []);

  return (
    <span className={style.count}>
      {timeLeft.hours}시 {timeLeft.minutes}분 {timeLeft.seconds}초
    </span>
  );
};
