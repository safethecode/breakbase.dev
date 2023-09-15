import { style } from '@vanilla-extract/css';

export const wrap = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  padding: '16px 24px',
});

export const heroHeader = style({
  display: 'flex',
  flexDirection: 'column',
  fontSize: '36px',
  fontWeight: 800,
  textAlign: 'center',
  lineHeight: '56px',
  maxWidth: '370px',
  gap: '8px',
  color: '#fff',
});

export const heroHeaderLabel = style({
  fontSize: '24px',
  textAlign: 'center',
  fontWeight: 700,
  color: 'hsl(128, 66%, 80%)',
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
  boxShadow: 'inset 0 0 0 1px #222',
  padding: '16px',
  fontSize: '16px',
  color: '#ffffff90',
  outline: 'none',
  border: 'none',
  transition: 'box-shadow 0.2s',
  fontWeight: 600,

  '::placeholder': {
    fontWeight: 500,
  },

  ':hover': {
    boxShadow: 'inset 0 0 0 1px #333',
  },
});

export const footer = style({
  width: '100%',
  fontSize: '12px',
  lineHeight: '24px',
  color: 'rgba(255, 255, 255, 0.3)',
});

export const anchor = style({
  marginLeft: '4px',
  color: '#fff',
});
