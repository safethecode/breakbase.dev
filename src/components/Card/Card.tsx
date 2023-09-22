import { MondayCount } from '..';
import * as style from './Card.css';

export const Card = ({ onClick }: { onClick?: () => void }) => {
  return (
    <article className={style.wrap} onClick={onClick}>
      <span className={style.cardLabel}>첫번째 뉴스레터</span>
      <MondayCount />
    </article>
  );
};
