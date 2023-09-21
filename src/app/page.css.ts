import { style } from '@vanilla-extract/css';

export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: '16px 24px',
  WebkitFontSmoothing: 'antialiased',
});

export const heroHeader = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '36px',
  fontWeight: 800,
  textAlign: 'center',
  lineHeight: '56px',
  maxWidth: '370px',
  gap: '8px',
  color: '#fff',
});

export const heroHeaderLabel = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: '24px',
  textAlign: 'center',
  fontWeight: 700,
  color: 'rgb(255, 146, 67)',
  gap: '8px',
});

export const inner = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '370px',
  height: '100%',
  gap: '16px',
});

export const input = style({
  width: '100%',
  borderRadius: '8px',
  backgroundColor: '#11111190',
  border: '1px solid #222',
  padding: '16px',
  fontSize: '16px',
  color: '#ffffff90',
  outline: 'none',
  transition: 'box-shadow 0.2s',
  fontWeight: 600,

  '::placeholder': {
    fontWeight: 500,
  },

  ':hover': {
    border: '1px solid #222',
  },
});

export const footer = style({
  width: '100%',
  fontSize: '12px',
  lineHeight: '24px',
  color: 'rgba(255, 255, 255, 0.3)',
  paddingBottom: '24px',
});

export const anchor = style({
  marginLeft: '4px',
  color: '#fff',
});
