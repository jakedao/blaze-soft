import React, { DetailedHTMLProps, ReactNode } from 'react';

import '../../styles/Button.style.scss';

type TOwnProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "primary" | "secondary" | "error";
  children: ReactNode;
};

const Button = (props: TOwnProps) => {
  const { variant = "primary", children, ...otherProps } = props;

  const buttonVariantClass = {
    primary: "button--primary",
    secondary: "button--secondary",
    error: "button--error",
  };

  return (
    <button className={"button " + buttonVariantClass[variant]} {...otherProps}>
      {children}
    </button>
  );
};
export default Button;
