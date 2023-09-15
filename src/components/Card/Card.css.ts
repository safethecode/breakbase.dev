import { style } from '@vanilla-extract/css';

export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  borderRadius: '16px',
  backgroundColor: '#11111190',
  boxShadow: 'inset 0 0 0 1px #222',
  padding: '24px',
  color: '#fff',
  gap: '16px',
  transition: 'background-color 0.2s',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: '#111',
  },
});

export const cardLabel = style({
  fontWeight: 600,
  textAlign: 'center',
  color: 'rgba(255, 255, 255, 0.2)',
});

export const comingSoon = style({
  fontSize: '32px',
  fontWeight: 700,
  WebkitTextFillColor: 'transparent',
  textAlign: 'center',
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, rgba(151, 71, 255, 0.8) 50%, rgba(255, 255, 255, 0) 90%)',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
});
