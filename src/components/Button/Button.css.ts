import { style, styleVariants } from '@vanilla-extract/css';

const button = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 800,
  fontSize: '16px',
  border: 'none',
  borderRadius: '8px',
  padding: '16px 14px',
  gap: '4px',
  appearance: 'button',
  cursor: 'pointer',
  color: '#000',

  transition: 'background-color 0.15s',

  ':hover': {
    backgroundColor: '#ccc',
  },
});

export const buttonVariant = styleVariants({
  primary: [
    button,
    {
      backgroundColor: 'white',
    },
  ],
  outline: [
    button,
    {
      color: 'white',
      backgroundColor: '#11111190',
      boxShadow: 'inset 0 0 0 1px #222',
      borderRadius: '8px',

      ':hover': {
        backgroundColor: '#111',
      },
    },
  ],
  ghost: [
    button,
    {
      color: 'white',
      backgroundColor: 'transparent',

      ':hover': {
        backgroundColor: 'hsla(0, 0%, 12%, 1)',
      },
    },
  ],
});
