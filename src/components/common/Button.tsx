import React, { DetailedHTMLProps, ReactNode } from 'react';

import '../../styles/Button.style.scss';

type TOwnProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?: "primary" | "secondary";
  children: ReactNode;
};

const Button = (props: TOwnProps) => {
  const { variant = "primary", children, ...otherProps } = props;

  const buttonVariantClass =
    variant === "primary" ? "button--primary" : "button--secondary";

  return (
    <button className={"button " + buttonVariantClass} {...otherProps}>
      {children}
    </button>
  );
};
export default Button;
