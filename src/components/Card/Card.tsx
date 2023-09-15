import * as style from './Card.css';

export const Card = () => {
  return (
    <article className={style.wrap}>
      <span className={style.cardLabel}>첫번째 뉴스레터</span>
      <h3 className={style.comingSoon}>Coming Soon</h3>
    </article>
  );
};
