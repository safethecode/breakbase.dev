import { CountDown } from '..';
import * as style from './Card.css';

interface CardProps {
  onClick?: () => void;
}

export const Card = ({ onClick }: CardProps) => {
  return (
    <article className={style.wrap} onClick={onClick}>
      <span className={style.cardLabel}>첫번째 뉴스레터</span>
      <CountDown />
    </article>
  );
};
