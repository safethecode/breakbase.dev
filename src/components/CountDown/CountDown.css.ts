import { style } from '@vanilla-extract/css';

export const count = style({
  fontSize: '32px',
  fontWeight: 700,
  WebkitTextFillColor: 'transparent',
  textAlign: 'center',
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0) 10%, rgb(255, 146, 67) 50%, rgba(255, 255, 255, 0) 90%)',
  WebkitBackgroundClip: 'text',
  color: 'transparent',
});
