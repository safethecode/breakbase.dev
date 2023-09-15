import { ButtonHTMLAttributes, ReactNode } from 'react';
import { buttonVariant } from './Button.css';

interface ButtonContent {
  children: ReactNode;
  variant: keyof typeof buttonVariant;
  rightIcon?: ReactNode;
}

type ButtonProps = ButtonContent & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  children,
  variant,
  rightIcon,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button className={buttonVariant[variant]} onClick={onClick} {...props}>
      {children}
      {rightIcon}
    </button>
  );
};
