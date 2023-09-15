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
  ...props
}: ButtonProps) => {
  return (
    <button className={buttonVariant[variant]} {...props}>
      {children}
      {rightIcon}
    </button>
  );
};
